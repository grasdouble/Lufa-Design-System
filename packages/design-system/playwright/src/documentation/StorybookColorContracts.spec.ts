import { expect, test } from '@playwright/experimental-ct-react';

import { getContrastRatio } from '../../../cli/src/utils/wcag';
import { STORY_COLORS } from '../../../storybook/src/constants/storyColors';

test('fixed Storybook surfaces expose readable foreground colors', () => {
  expect('foreground' in STORY_COLORS.primary.blue).toBe(true);
  if (!('foreground' in STORY_COLORS.primary.blue)) return;

  expect(
    getContrastRatio(STORY_COLORS.primary.blue.foreground, STORY_COLORS.primary.blue.light)
  ).toBeGreaterThanOrEqual(4.5);
  expect(getContrastRatio(STORY_COLORS.neutral.textDark, STORY_COLORS.primary.orange.light)).toBeGreaterThanOrEqual(
    4.5
  );
  expect(getContrastRatio(STORY_COLORS.neutral.textDark, STORY_COLORS.primary.pink.light)).toBeGreaterThanOrEqual(4.5);
  expect(getContrastRatio(STORY_COLORS.neutral.textDark, STORY_COLORS.neutral.backgroundLight)).toBeGreaterThanOrEqual(
    4.5
  );
});
