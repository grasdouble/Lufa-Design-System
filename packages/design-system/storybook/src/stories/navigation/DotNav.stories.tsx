import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { DotNav } from '@grasdouble/lufa_design-system';

import { CodeBlock, PropCard, StoryContainer } from '../../components/helpers';

/**
 * DotNav - Vertical Dot Navigation for Multi-Section SPAs
 *
 * A fixed, vertically-centered navigation made of small clickable dots.
 * Each dot represents a full-screen section. The active section's label is
 * always visible; inactive labels appear on hover.
 *
 * ## Features
 * - ✅ Fixed position, vertically centered in the viewport
 * - ✅ Active dot is larger and filled with the brand accent color
 * - ✅ Active section label always visible (persistent)
 * - ✅ Inactive section labels slide in on hover
 * - ✅ `position` prop: attach to left or right side
 * - ✅ Accessible: `<nav>` landmark, `aria-label` on buttons, `aria-current` on active
 * - ✅ Token-based design (semantic + component tokens)
 * - ✅ `prefers-reduced-motion` support
 *
 * ## Pairing with `useScrollSpy`
 *
 * ```tsx
 * const SECTIONS = ['hero', 'about', 'skills'] as const;
 * const sections = SECTIONS.map((id) => ({ id, label: id }));
 *
 * const { activeId, setActiveId, lockFor } = useScrollSpy({ ids: SECTIONS });
 *
 * const scrollTo = (id: string) => {
 *   setActiveId(id);
 *   lockFor(700);
 *   document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
 * };
 *
 * <DotNav sections={sections} activeId={activeId} onSelect={scrollTo} />
 * ```
 */
const meta = {
  title: '9. Navigation/DotNav',
  component: DotNav,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    sections: {
      description: 'List of navigable sections',
      table: {
        category: 'Data',
        type: { summary: '{ id: string; label: string }[]' },
      },
    },
    activeId: {
      control: 'text',
      description: 'ID of the currently active section',
      table: {
        category: 'State',
        type: { summary: 'string' },
      },
    },
    position: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Side of the viewport to attach the navigation to',
      table: {
        category: 'Layout',
        type: { summary: "'left' | 'right'" },
        defaultValue: { summary: 'right' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the nav landmark',
      table: {
        category: 'Accessibility',
        type: { summary: 'string' },
        defaultValue: { summary: 'Page sections' },
      },
    },
    onSelect: {
      description: 'Callback fired when a dot is clicked',
      table: {
        category: 'Events',
        type: { summary: '(id: string) => void' },
      },
    },
  },
} satisfies Meta<typeof DotNav>;

export default meta;
type Story = StoryObj<typeof meta>;

const DEMO_SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

// ============================================
// INTERACTIVE WRAPPER
// ============================================

function InteractiveDotNav({
  sections = DEMO_SECTIONS,
  position = 'right',
  ariaLabel,
}: {
  sections?: typeof DEMO_SECTIONS;
  position?: 'left' | 'right';
  ariaLabel?: string;
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '');

  return (
    <div style={{ position: 'relative', minHeight: '400px', background: 'var(--lufa-semantic-ui-background-page)' }}>
      <DotNav
        sections={sections}
        activeId={activeId}
        onSelect={setActiveId}
        position={position}
        ariaLabel={ariaLabel}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'var(--lufa-semantic-ui-text-secondary)',
          fontSize: '0.875rem',
        }}
      >
        Active: <strong style={{ color: 'var(--lufa-semantic-ui-text-primary)' }}>{activeId}</strong>
        <br />
        <span style={{ fontSize: '0.75rem' }}>Click a dot to change active section</span>
      </div>
    </div>
  );
}

// ============================================
// DEFAULT STORY
// ============================================

export const Default: Story = {
  render: () => (
    <StoryContainer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <PropCard label="Default — right side, 5 sections">
          {/*
            💡 TOKEN EDUCATION:
            Active/hover dot: var(--lufa-semantic-interactive-action-primary-default)
            Inactive dot: var(--lufa-semantic-ui-border-default)
            Label text: var(--lufa-semantic-ui-text-primary)
            Label bg: var(--lufa-semantic-ui-background-page)
            Label border: var(--lufa-semantic-ui-border-default)
          */}
          <div style={{ position: 'relative', height: '240px' }}>
            <InteractiveDotNav />
          </div>
        </PropCard>

        <CodeBlock
          language="tsx"
          title="JSX"
          code={`const { activeId, setActiveId, lockFor } = useScrollSpy({ ids: SECTION_IDS });

const scrollTo = (id) => {
  setActiveId(id);
  lockFor(700);
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

<DotNav
  sections={[
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]}
  activeId={activeId}
  onSelect={scrollTo}
/>`}
        />
      </div>
    </StoryContainer>
  ),
};

// ============================================
// LEFT POSITION
// ============================================

export const LeftPosition: Story = {
  render: () => (
    <StoryContainer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <PropCard label='position="left"'>
          <div style={{ position: 'relative', height: '240px' }}>
            <InteractiveDotNav position="left" />
          </div>
        </PropCard>

        <CodeBlock
          language="tsx"
          title="JSX"
          code={`<DotNav
  sections={sections}
  activeId={activeId}
  onSelect={scrollTo}
  position="left"
/>`}
        />
      </div>
    </StoryContainer>
  ),
};

// ============================================
// MANY SECTIONS (STRESS TEST)
// ============================================

const MANY_SECTIONS = Array.from({ length: 8 }, (_, i) => ({
  id: `section-${i + 1}`,
  label: `Section ${i + 1}`,
}));

export const ManySections: Story = {
  render: () => (
    <StoryContainer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <PropCard label="8 sections (stress test)">
          <div style={{ position: 'relative', height: '400px' }}>
            <InteractiveDotNav sections={MANY_SECTIONS} />
          </div>
        </PropCard>

        <CodeBlock
          language="tsx"
          title="JSX"
          code={`const sections = Array.from({ length: 8 }, (_, i) => ({
  id: \`section-\${i + 1}\`,
  label: \`Section \${i + 1}\`,
}));

<DotNav sections={sections} activeId={activeId} onSelect={scrollTo} />`}
        />
      </div>
    </StoryContainer>
  ),
};

// ============================================
// ACTIVE LABEL ALWAYS VISIBLE
// ============================================

export const ActiveLabelAlwaysVisible: Story = {
  name: 'Behavior: Active label always visible',
  render: () => (
    <StoryContainer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <PropCard label="Active section label is always visible (no hover required)">
          <div style={{ position: 'relative', height: '240px' }}>
            <InteractiveDotNav />
          </div>
        </PropCard>

        <PropCard label="Label visibility states">
          <ul
            style={{
              margin: 0,
              padding: '0 1rem',
              color: 'var(--lufa-semantic-ui-text-secondary)',
              fontSize: '0.875rem',
              lineHeight: '1.75',
            }}
          >
            <li>
              <strong style={{ color: 'var(--lufa-semantic-ui-text-primary)' }}>Active section</strong> → label always
              visible
            </li>
            <li>
              <strong style={{ color: 'var(--lufa-semantic-ui-text-primary)' }}>Inactive section (hovered)</strong> →
              label slides in
            </li>
            <li>
              <strong style={{ color: 'var(--lufa-semantic-ui-text-primary)' }}>Inactive section (idle)</strong> → label
              hidden
            </li>
          </ul>
        </PropCard>
      </div>
    </StoryContainer>
  ),
};
