import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

import styles from './LiveDemoSection.module.css';

type LiveDemoTab = {
  id?: string;
  label: string;
  content: React.ReactNode;
};

type LiveDemoSectionProps = {
  title?: string;
  children?: React.ReactNode;
  tabs?: LiveDemoTab[];
  defaultTabId?: string;
};

/**
 * Displays live examples, optionally as an automatically activated tab set.
 *
 * Keyboard: Left/Right Arrow wraps through tabs, while Home/End move to the
 * first/last tab. The active tab and panel are linked with ARIA tab semantics.
 */
export function LiveDemoSection({ title = 'Live demo', children, tabs, defaultTabId }: LiveDemoSectionProps) {
  const sectionId = React.useId();
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const { colorMode } = useColorMode();
  const dataMode = colorMode === 'dark' ? 'dark' : 'light';
  const resolvedTabs = tabs?.filter((tab) => tab?.content != null) ?? [];
  const hasTabs = resolvedTabs.length > 0;
  const initialIndex = hasTabs
    ? Math.max(
        0,
        resolvedTabs.findIndex((tab) => tab.id === defaultTabId)
      )
    : 0;
  const [activeIndex, setActiveIndex] = React.useState(initialIndex);

  const activateTab = (index: number) => {
    setActiveIndex(index);
    tabRefs.current[index]?.focus();
  };

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | undefined;

    switch (event.key) {
      case 'ArrowLeft':
        nextIndex = (index - 1 + resolvedTabs.length) % resolvedTabs.length;
        break;
      case 'ArrowRight':
        nextIndex = (index + 1) % resolvedTabs.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = resolvedTabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    activateTab(nextIndex);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{title}</span>
        <span className={styles.badge}>Interactive</span>
      </div>
      {hasTabs ? (
        <div className={styles.tabs}>
          <div className={styles.tabList} role="tablist" aria-label={title}>
            {resolvedTabs.map((tab, index) => {
              const tabId = tab.id ?? `tab-${index}`;
              const buttonId = `${sectionId}-${tabId}`;
              const panelId = `${sectionId}-${tabId}-panel`;
              const isActive = index === activeIndex;

              return (
                <button
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  key={tabId}
                  id={buttonId}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  className={isActive ? styles.tabButtonActive : styles.tabButton}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div
            className={styles.body}
            role="tabpanel"
            id={`${sectionId}-${resolvedTabs[activeIndex]?.id ?? `tab-${activeIndex}`}-panel`}
            aria-labelledby={`${sectionId}-${resolvedTabs[activeIndex]?.id ?? `tab-${activeIndex}`}`}
            tabIndex={0}
            data-theme=""
            data-mode={dataMode}
          >
            {resolvedTabs[activeIndex]?.content}
          </div>
        </div>
      ) : (
        <div className={styles.body} data-theme="" data-mode={dataMode}>
          {children}
        </div>
      )}
    </section>
  );
}

export default LiveDemoSection;
