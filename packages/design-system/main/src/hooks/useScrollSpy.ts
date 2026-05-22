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
   * Has no effect when `onScroll` is provided.
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
   * Uses a `requestAnimationFrame`-based easeInOutCubic animation by default,
   * which is cross-browser reliable and unaffected by OS/browser smooth-scroll
   * settings. Pass `onScroll` to `useScrollSpy` to use a custom scroll container.
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

      setActiveId(id);
      // Lock for scroll duration + a small buffer so the observer does not
      // re-fire before the animation fully settles.
      lockFor(scrollDuration + 50);

      if (onScroll) {
        onScroll(el);
        return;
      }

      // RAF-based easeInOutCubic animation — cross-browser reliable,
      // unaffected by OS "reduce motion" or browser smooth-scroll settings.
      const start = window.scrollY;
      const target = el.getBoundingClientRect().top + window.scrollY;
      const distance = target - start;
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / scrollDuration, 1);
        const eased = easeInOutCubic(progress);
        window.scrollTo(0, start + distance * eased);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          rafRef.current = null;
        }
      };

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(step);
    },
    [lockFor, onScroll, scrollDuration]
  );

  return { activeId, setActiveId, lockFor, scrollTo };
}
