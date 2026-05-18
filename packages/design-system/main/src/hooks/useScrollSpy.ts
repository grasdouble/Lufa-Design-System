import { useEffect, useRef, useState } from 'react';

/**
 * Options for the useScrollSpy hook.
 */
export interface UseScrollSpyOptions {
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
}

/**
 * Return value of the useScrollSpy hook.
 */
export interface UseScrollSpyReturn {
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
}

/**
 * useScrollSpy - Tracks which page section is currently visible
 *
 * Uses the Intersection Observer API to watch a list of section elements
 * and expose the `id` of the one currently within the "active zone" of
 * the viewport.
 *
 * Designed to pair with `DotNav`:
 * ```tsx
 * const { activeId, setActiveId, lockFor } = useScrollSpy({ ids: SECTION_IDS });
 *
 * const scrollTo = (id: string) => {
 *   setActiveId(id);
 *   lockFor(700);
 *   document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
 * };
 *
 * <DotNav sections={sections} activeId={activeId} onSelect={scrollTo} />
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
}: UseScrollSpyOptions): UseScrollSpyReturn {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '');
  const isLockedRef = useRef(false);
  const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        { rootMargin, threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [ids, rootMargin]);

  // Clean up any pending lock timer on unmount
  useEffect(() => {
    return () => {
      if (lockTimerRef.current) {
        clearTimeout(lockTimerRef.current);
      }
    };
  }, []);

  const lockFor = (ms = 700) => {
    isLockedRef.current = true;
    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      isLockedRef.current = false;
    }, ms);
  };

  return { activeId, setActiveId, lockFor };
}
