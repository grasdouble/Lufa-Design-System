/**
 * Live examples for Select component documentation
 */

import React, { useState } from 'react';

import { Label, Select } from '@grasdouble/lufa_design-system';

export function LiveDemo() {
  const [value, setValue] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Label htmlFor="demo-model">AI Model</Label>
      <Select id="demo-model" value={value} onChange={setValue} placeholder="Select a model">
        <Select.Option value="gpt-4">GPT-4</Select.Option>
        <Select.Option value="gpt-3.5">GPT-3.5 Turbo</Select.Option>
        <Select.Option value="claude-3">Claude 3</Select.Option>
        <Select.Option value="mistral">Mistral</Select.Option>
      </Select>
      {value && <span style={{ fontSize: '14px' }}>Selected: {value}</span>}
    </div>
  );
}

export function DisabledDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div>
        <Label htmlFor="demo-disabled">Disabled</Label>
        <Select id="demo-disabled" disabled>
          <Select.Option value="option1">Option 1</Select.Option>
        </Select>
      </div>
    </div>
  );
}

export function FullWidthDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Label htmlFor="demo-full">Full width</Label>
      <Select id="demo-full" fullWidth>
        <Select.Option value="option1">Option 1</Select.Option>
        <Select.Option value="option2">Option 2</Select.Option>
      </Select>
    </div>
  );
}

export function ErrorDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Label htmlFor="demo-error">Category</Label>
      <Select id="demo-error" error="Please select a category">
        <Select.Option value="a">Category A</Select.Option>
        <Select.Option value="b">Category B</Select.Option>
      </Select>
    </div>
  );
}

export function SizesDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <Label htmlFor="demo-sm">Small (sm)</Label>
        <Select id="demo-sm" size="sm">
          <Select.Option value="a">Option A</Select.Option>
          <Select.Option value="b">Option B</Select.Option>
        </Select>
      </div>
      <div>
        <Label htmlFor="demo-md">Medium (md)</Label>
        <Select id="demo-md" size="md">
          <Select.Option value="a">Option A</Select.Option>
          <Select.Option value="b">Option B</Select.Option>
        </Select>
      </div>
      <div>
        <Label htmlFor="demo-lg">Large (lg)</Label>
        <Select id="demo-lg" size="lg">
          <Select.Option value="a">Option A</Select.Option>
          <Select.Option value="b">Option B</Select.Option>
        </Select>
      </div>
    </div>
  );
}
