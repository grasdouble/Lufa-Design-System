import { useRef } from 'react';

import PlaygroundThemeSwitcher from '../../../docusaurus/src/pages/playground/_PlaygroundThemeSwitcher';

export function PlaygroundThemeSwitcherHarness() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <PlaygroundThemeSwitcher containerRef={containerRef} />
      <div ref={containerRef} data-testid="playground">
        Playground
      </div>
    </div>
  );
}
