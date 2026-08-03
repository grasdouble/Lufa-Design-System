import assert from 'node:assert/strict';
import test from 'node:test';

import { shadowCssShorthandCustom } from './shadow-css-shorthand-custom.js';

test('preserves numeric zero values in a shadow shorthand', () => {
  const result = shadowCssShorthandCustom.transform({
    $type: 'shadow',
    $value: {
      offsetX: 0,
      offsetY: 0,
      blur: 0,
      spread: 0,
      color: 'rgb(0 0 0 / 20%)',
    },
  });

  assert.equal(result, '0 0 0 0 rgb(0 0 0 / 20%)');
});

test('formats inset and multiple shadows', () => {
  const result = shadowCssShorthandCustom.transform({
    $type: 'shadow',
    $value: [
      {
        inset: true,
        offsetX: '0',
        offsetY: '1px',
        blur: '2px',
        spread: 0,
        color: '#000000',
      },
      {
        offsetX: 0,
        offsetY: '2px',
        blur: '4px',
        spread: '0',
        color: '#000000',
      },
    ],
  });

  assert.equal(result, 'inset 0 1px 2px 0 #000000, 0 2px 4px 0 #000000');
});
