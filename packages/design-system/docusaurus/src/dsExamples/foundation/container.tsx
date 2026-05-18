/**
 * Live examples for Container component documentation
 */

import React from 'react';

import { Box, Container } from '@grasdouble/lufa_design-system';

export function LiveDemo() {
  return (
    <Container>
      <div>Constrained content</div>
    </Container>
  );
}

export function FluidDemo() {
  return (
    <Container fluid>
      <Box padding="default" background="surface" borderWidth="thin" borderColor="default">
        Fluid container (full width)
      </Box>
    </Container>
  );
}

export function SizeDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Container size="sm">
        <Box padding="default" background="surface" borderWidth="thin" borderColor="default">
          size="sm"
        </Box>
      </Container>
      <Container size="lg">
        <Box padding="default" background="surface" borderWidth="thin" borderColor="default">
          size="lg"
        </Box>
      </Container>
    </div>
  );
}

export function PaddingBlockDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Container as="section" size="lg" paddingBlock="comfortable">
        <Box background="surface" borderWidth="thin" borderColor="default" padding="compact">
          paddingBlock="comfortable" — section with comfortable vertical padding
        </Box>
      </Container>
      <Container as="section" size="lg" paddingBlock="spacious">
        <Box background="surface" borderWidth="thin" borderColor="default" padding="compact">
          paddingBlock="spacious" — section with spacious vertical padding
        </Box>
      </Container>
    </div>
  );
}

export function PaddingInlineDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Container paddingInline="compact">
        <Box background="surface" borderWidth="thin" borderColor="default" padding="compact">
          paddingInline="compact" — narrower horizontal gutter
        </Box>
      </Container>
      <Container paddingInline="spacious">
        <Box background="surface" borderWidth="thin" borderColor="default" padding="compact">
          paddingInline="spacious" — wider horizontal gutter
        </Box>
      </Container>
    </div>
  );
}
