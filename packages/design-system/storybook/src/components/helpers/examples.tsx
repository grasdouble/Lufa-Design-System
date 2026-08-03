/* eslint-disable react-refresh/only-export-components */
/**
 * 📖 EXEMPLE D'UTILISATION DES HELPERS
 *
 * Ce fichier montre comment utiliser StoryContainer, PropCard et CodeBlock
 * dans vos stories pour créer des layouts modernes et cohérents.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Box } from '@grasdouble/lufa_design-system';

import { CodeBlock, PropCard, StoryContainer } from '../../components/helpers';
import { STORY_COLORS } from '../../constants/storyColors';

// ============================================
// EXEMPLE 1: Story simple avec PropCard
// ============================================

export const ExampleBasicPropCard: StoryObj = {
  render: () => (
    <StoryContainer>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        <PropCard label='padding="default"'>
          <Box padding="default" background="surface" borderRadius="medium">
            Box with default padding
          </Box>
        </PropCard>

        <PropCard label='padding="comfortable"'>
          <Box padding="comfortable" background="info" borderRadius="medium">
            Box with comfortable padding
          </Box>
        </PropCard>
      </div>
    </StoryContainer>
  ),
};

// ============================================
// EXEMPLE 2: Grid de variantes
// ============================================

export const ExampleVariantGrid: StoryObj = {
  render: () => (
    <StoryContainer>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
        {(['none', 'small', 'default', 'medium', 'large'] as const).map((radius) => (
          <PropCard key={radius} label={`borderRadius="${radius}"`}>
            <Box
              padding="comfortable"
              background="surface"
              borderWidth="medium"
              borderRadius={radius}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100px',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              {radius}
            </Box>
          </PropCard>
        ))}
      </div>
    </StoryContainer>
  ),
};

// ============================================
// EXEMPLE 3: Comparaison côte à côte
// ============================================

export const ExampleSideBySide: StoryObj = {
  render: () => (
    <StoryContainer>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Small Padding</h3>
          <PropCard label='padding="tight"'>
            <Box padding="tight" background="info" borderRadius="medium">
              <div style={{ background: STORY_COLORS.themed.background.surface, padding: '12px', borderRadius: '6px' }}>
                Content with tight padding
              </div>
            </Box>
          </PropCard>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Large Padding</h3>
          <PropCard label='padding="spacious"'>
            <Box padding="spacious" background="success" borderRadius="medium">
              <div style={{ background: STORY_COLORS.themed.background.surface, padding: '12px', borderRadius: '6px' }}>
                Content with spacious padding
              </div>
            </Box>
          </PropCard>
        </div>
      </div>
    </StoryContainer>
  ),
};

// ============================================
// EXEMPLE 4: CodeBlock avec aperçu fixe
// ============================================

const ExampleCodeBlockWithHoverComponent = () => {
  const generateCode = (radius: string) => {
    return `<Box
  padding="comfortable"
  background="surface"
  borderRadius="${radius}"
>
  Content with ${radius} border radius
</Box>`;
  };

  return (
    <StoryContainer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Grid d'exemples */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
          {(['none', 'small', 'default', 'medium', 'large'] as const).map((radius) => (
            <PropCard key={radius} label={`borderRadius="${radius}"`}>
              <Box
                padding="comfortable"
                background="surface"
                borderWidth="medium"
                borderRadius={radius}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '100px',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                {radius}
              </Box>
            </PropCard>
          ))}
        </div>

        <CodeBlock code={generateCode('default')} language="jsx" title="JSX Code" subtitle='borderRadius="default"' />
      </div>
    </StoryContainer>
  );
};

export const ExampleCodeBlockWithHover: StoryObj = {
  render: () => <ExampleCodeBlockWithHoverComponent />,
};

// ============================================
// EXEMPLE 5: CodeBlock simple (sans hover)
// ============================================

export const ExampleSimpleCodeBlock: StoryObj = {
  render: () => (
    <StoryContainer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Box Example</h3>

        <Box padding="comfortable" background="info" borderRadius="medium">
          Example Box Component
        </Box>

        <CodeBlock
          code={`<Box
  padding="comfortable"
  background="info"
  borderRadius="medium"
>
  Example Box Component
</Box>`}
          language="jsx"
          title="Source Code"
        />
      </div>
    </StoryContainer>
  ),
};

// ============================================
// EXEMPLE 6: Sans StoryContainer (centered layout)
// ============================================

export const ExampleWithoutContainer: StoryObj = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <PropCard label="Simple card without StoryContainer">
        <Box padding="comfortable" background="warning" borderRadius="medium">
          This card uses PropCard but no StoryContainer
        </Box>
      </PropCard>
    </div>
  ),
};

// ============================================
// TIPS & BEST PRACTICES
// ============================================

/*
 * 💡 TIPS:
 *
 * 1. Utilisez StoryContainer pour les stories avec layout="fullscreen"
 * 2. PropCard est parfait pour montrer des variantes de props
 * 3. PropCard reste volontairement simple : label + contenu uniquement
 * 4. CodeBlock affiche du code formaté avec un header optionnel
 * 5. Combinez avec des grids CSS pour des layouts modernes
 *
 * 📐 GRID RECOMMENDATIONS:
 *
 * Petites cartes (4-6 par ligne):
 *   gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))'
 *
 * Cartes moyennes (3-4 par ligne):
 *   gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
 *
 * Grandes cartes (2-3 par ligne):
 *   gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
 *
 * 🎨 VOIR AUSSI:
 * - Box.stories.tsx - Utilisation complète et avancée (PropAs avec CodeBlock)
 * - helpers/README.md - Documentation détaillée
 */
