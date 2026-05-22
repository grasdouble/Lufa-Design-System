/**
 * Test harness components for useScrollSpy spec.
 * Defined here (not in the spec file) so Playwright CT can bundle them.
 */

import { useScrollSpy } from '@grasdouble/lufa_design-system';

export const SECTION_IDS = ['section-a', 'section-b', 'section-c'] as const;

const sectionStyle: React.CSSProperties = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

/**
 * Full harness with three tall sections and click-to-scrollTo buttons.
 * Uses `rootMargin` shrunk to 10% so IntersectionObserver fires reliably.
 */
export function ScrollSpyHarness({
  onScroll,
  scrollDuration,
}: {
  onScroll?: (el: HTMLElement) => void;
  scrollDuration?: number;
}) {
  const { activeId, scrollTo } = useScrollSpy({
    ids: SECTION_IDS,
    rootMargin: '-10% 0px -10% 0px',
    onScroll,
    scrollDuration,
  });

  return (
    <div>
      <div data-testid="active">{activeId}</div>
      <button data-testid="scroll-to-b" onClick={() => scrollTo('section-b')}>
        Go to B
      </button>
      <button data-testid="scroll-to-c" onClick={() => scrollTo('section-c')}>
        Go to C
      </button>
      {SECTION_IDS.map((id) => (
        <section key={id} id={id} data-testid={id} style={sectionStyle}>
          {id}
        </section>
      ))}
    </div>
  );
}

/**
 * Minimal harness with a button targeting a non-existent element id.
 */
export function MinimalHarness({ onScroll }: { onScroll?: (el: HTMLElement) => void }) {
  const { activeId, scrollTo } = useScrollSpy({ ids: SECTION_IDS, onScroll });

  return (
    <div>
      <div data-testid="active">{activeId}</div>
      <button data-testid="go-b" onClick={() => scrollTo('section-b')}>
        Go to B
      </button>
      <button data-testid="go-missing" onClick={() => scrollTo('does-not-exist')}>
        Go to missing
      </button>
      {SECTION_IDS.map((id) => (
        <section key={id} id={id} style={{ height: '100vh' }}>
          {id}
        </section>
      ))}
    </div>
  );
}

/**
 * Harness that exposes a `[data-testid="called-id"]` div which is
 * populated with the target element's id by the `onScroll` callback.
 * Used to verify that `onScroll` receives the correct HTMLElement.
 */
export function OnScrollTrackerHarness() {
  const { activeId, scrollTo } = useScrollSpy({
    ids: SECTION_IDS,
    onScroll: (el) => {
      const marker = document.querySelector<HTMLElement>('[data-testid="called-id"]');
      if (marker) marker.textContent = el.id;
    },
  });

  return (
    <div>
      <div data-testid="active">{activeId}</div>
      <div data-testid="called-id" />
      <button data-testid="go-b" onClick={() => scrollTo('section-b')}>
        Go to B
      </button>
      {SECTION_IDS.map((id) => (
        <section key={id} id={id} style={{ height: '100vh' }}>
          {id}
        </section>
      ))}
    </div>
  );
}

/**
 * Harness that provides an `onScroll` that intentionally does NOT
 * touch `window.scrollY`, used to assert the built-in RAF animation
 * is bypassed.
 */
export function NoOpScrollHarness() {
  const { activeId, scrollTo } = useScrollSpy({
    ids: SECTION_IDS,

    onScroll: (_el) => {
      // intentionally no-op — window.scrollY must not change
    },
  });

  return (
    <div>
      <div data-testid="active">{activeId}</div>
      <button data-testid="go-b" onClick={() => scrollTo('section-b')}>
        Go to B
      </button>
      {SECTION_IDS.map((id) => (
        <section key={id} id={id} style={{ height: '100vh' }}>
          {id}
        </section>
      ))}
    </div>
  );
}
