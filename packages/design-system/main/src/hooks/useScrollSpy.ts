import { useCallback, useEffect, useRef, useState } from 'react';

const DEFAULT_SCROLL_DURATION = 650;

/** easeInOutCubic — smooth acceleration and deceleration for scroll animations */
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Options for the useScrollSpy hook.
 */
export type UseScrollSpyOptions = {
  /** The element `id`s to observe, in document order */
  ids: readonly string[];
  /**
   * IntersectionObserver root margin used to define the "active zone".
   * Shrinking the top/bottom margins makes the active section change
   * closer to the center of the viewport.
   *
   * @default '-45% 0px -45% 0px'
   */
  rootMargin?: string;
  /**
   * Custom scroll handler. When provided, `scrollTo` delegates the actual
   * scrolling to this callback instead of running the built-in animation.
   * Useful when the scroll container is not `window` (e.g. an overflow div).
   *
   * @param element - The target section element to scroll to
   */
  onScroll?: (element: HTMLElement) => void;
  /**
   * Duration in milliseconds for the built-in RAF scroll animation.
   * Also controls the observer lock duration (via `lockFor`) even when
   * `onScroll` is provided. Must be a finite number ≥ 0; negative or
   * invalid values are treated as 0 (immediate jump, no animation).
   *
   * @default 650
   */
  scrollDuration?: number;
};

/**
 * Return value of the useScrollSpy hook.
 */
export type UseScrollSpyReturn = {
  /** The `id` of the section currently intersecting the active zone */
  activeId: string;
  /** Manually override the active section (e.g. immediately after clicking a dot) */
  setActiveId: (id: string) => void;
  /**
   * Temporarily prevents the observer from updating `activeId`.
   * Call this before a programmatic scroll so the dot does not flicker
   * back to whatever section enters the viewport during the animation.
   *
   * @param ms - Duration in milliseconds to hold the lock (default: 700)
   */
  lockFor: (ms?: number) => void;
  /**
   * Scrolls to the section with the given `id`, updates `activeId`
   * immediately, and locks the observer for the duration of the animation
   * to prevent flickering.
   *
   * Uses a `requestAnimationFrame`-based easeInOutCubic animation by default.
   * Jumps immediately when `prefers-reduced-motion: reduce` is set or when
   * `scrollDuration` is 0. Pass `onScroll` to `useScrollSpy` to use a custom
   * scroll container.
   *
   * @param id - The `id` of the target section element
   */
  scrollTo: (id: string) => void;
};

/**
 * useScrollSpy - Tracks which page section is currently visible
 *
 * Uses the Intersection Observer API to watch a list of section elements
 * and expose the `id` of the one currently within the "active zone" of
 * the viewport.
 *
 * Designed to pair with `DotNav`:
 * ```tsx
 * const { activeId, scrollTo } = useScrollSpy({ ids: SECTION_IDS });
 *
 * <DotNav sections={sections} activeId={activeId} onSelect={scrollTo} />
 * ```
 *
 * For a custom scroll container:
 * ```tsx
 * const { activeId, scrollTo } = useScrollSpy({
 *   ids: SECTION_IDS,
 *   onScroll: (el) => container.scrollTo({ top: el.offsetTop }),
 * });
 * ```
 *
 * @example
 * ```ts
 * const { activeId } = useScrollSpy({
 *   ids: ['hero', 'about', 'skills'],
 *   rootMargin: '-45% 0px -45% 0px',
 * });
 * ```
 */
export function useScrollSpy({
  ids,
  rootMargin = '-45% 0px -45% 0px',
  onScroll,
  scrollDuration = DEFAULT_SCROLL_DURATION,
}: UseScrollSpyOptions): UseScrollSpyReturn {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '');
  const isLockedRef = useRef(false);
  const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  // Serialize ids so callers don't need to memoize the array themselves
  const idsKey = ids.join(',');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isLockedRef.current) {
            setActiveId(id);
          }
        },
        { rootMargin, threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey, rootMargin]);

  // Clean up any pending lock timer and animation frame on unmount
  useEffect(() => {
    return () => {
      if (lockTimerRef.current) {
        clearTimeout(lockTimerRef.current);
      }
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const lockFor = useCallback((ms = 700) => {
    isLockedRef.current = true;
    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      isLockedRef.current = false;
    }, ms);
  }, []);

  const scrollTo = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;

      // Sanitize: negative / non-finite values are treated as 0 (immediate jump)
      const duration = Number.isFinite(scrollDuration) && scrollDuration > 0 ? scrollDuration : 0;

      setActiveId(id);
      // Lock for scroll duration + a small buffer so the observer does not
      // re-fire before the animation fully settles. Applies even when onScroll
      // is provided, since the lock prevents observer flicker during any scroll.
      lockFor(duration + 50);

      // Cancel any in-flight animation before branching, so superseded calls
      // are always cleaned up regardless of the scroll strategy.
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      if (onScroll) {
        onScroll(el);
        return;
      }

      const target = el.getBoundingClientRect().top + window.scrollY;

      // Respect the user's reduced-motion preference, or jump when duration is 0.
      if (duration === 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.scrollTo(window.scrollX, target);
        return;
      }

      // RAF-based easeInOutCubic animation — cross-browser reliable.
      const start = window.scrollY;
      const distance = target - start;
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);
        // Preserve horizontal scroll position while animating vertically.
        window.scrollTo(window.scrollX, start + distance * eased);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          rafRef.current = null;
        }
      };

      rafRef.current = requestAnimationFrame(step);
    },
    [lockFor, onScroll, scrollDuration]
  );

  return { activeId, setActiveId, lockFor, scrollTo };
}
