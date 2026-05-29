import{i as e}from"./preload-helper-xPQekRTU.js";import{t,w as n}from"./iframe-Bm_r3Ygs.js";import{S as r,h as i}from"./lufa-ui-B9ODeQns.js";import{b as a,g as o,t as s,v as c}from"./helpers-D9bnZ3qZ.js";import{r as l,t as u}from"./storyColors-RAOlxH1p.js";var d,f,p,m,h,g;e((()=>{n(),r(),s(),l(),d=t(),f={title:`6. Interaction/Input`,component:i,parameters:{layout:`fullscreen`,docs:{description:{component:`Input Component - Text Input Field

A versatile text input component for capturing user data.
Supports various states including error, disabled, and full width layouts.

## Features
- ✅ States: Default, Focus, Error, Disabled
- ✅ Semantic token usage for borders and backgrounds
- ✅ Layout options: Full width or default
- ✅ Accessible focus rings`}}},argTypes:{placeholder:{control:`text`,description:`Placeholder text`},error:{control:`boolean`,description:`Error state styling`},disabled:{control:`boolean`,description:`Disabled state`},fullWidth:{control:`boolean`,description:`Stretch to container width`}}},p={render:()=>(0,d.jsx)(a,{children:(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,d.jsx)(c,{label:`Default Input`,children:(0,d.jsx)(i,{placeholder:`Type something...`})}),(0,d.jsx)(o,{code:`<Input placeholder="Type something..." />`,language:`jsx`,title:`JSX`})]})})},m={name:`States (Error / Disabled)`,render:()=>(0,d.jsx)(a,{children:(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:u.neutral.text,textTransform:`uppercase`,marginBottom:`16px`},children:`Error State`}),(0,d.jsx)(c,{label:`error={true}`,children:(0,d.jsx)(i,{error:!0,placeholder:`Invalid input...`,defaultValue:`Invalid value`})})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:u.neutral.text,textTransform:`uppercase`,marginBottom:`16px`},children:`Disabled State`}),(0,d.jsx)(c,{label:`disabled={true}`,children:(0,d.jsx)(i,{disabled:!0,placeholder:`Cannot type here...`})})]}),(0,d.jsx)(o,{code:`{/* Error state */}
<Input error placeholder="Invalid input..." />

{/* Disabled state */}
<Input disabled placeholder="Cannot type here..." />`,language:`jsx`,title:`JSX`})]})})},h={name:`Prop: fullWidth`,render:()=>(0,d.jsx)(a,{children:(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,d.jsx)(c,{label:`fullWidth={true}`,children:(0,d.jsx)(`div`,{style:{width:`100%`,maxWidth:`500px`,border:`1px dashed ${u.neutral.borderMedium}`,padding:`10px`},children:(0,d.jsx)(i,{fullWidth:!0,placeholder:`I fill the container`})})}),(0,d.jsx)(o,{code:`<div style={{ width: '500px' }}>
  <Input fullWidth placeholder="I fill the container" />
</div>`,language:`jsx`,title:`JSX`})]})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <PropCard label="Default Input">
            {/*
              💡 TOKEN EDUCATION:
              Background: var(--lufa-component-input-background-default)
              Text: var(--lufa-component-input-text-default)
              Border: var(--lufa-component-input-border-default)
              Focus Border: var(--lufa-component-input-border-focus)
              Border Radius: var(--lufa-component-input-border-radius)
             */}
            <Input placeholder="Type something..." />
          </PropCard>

          <CodeBlock code='<Input placeholder="Type something..." />' language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'States (Error / Disabled)',
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
          {/* Error State */}
          <div>
            <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: STORY_COLORS.neutral.text,
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
              Error State
            </h3>
            <PropCard label="error={true}">
              <Input error placeholder="Invalid input..." defaultValue="Invalid value" />
            </PropCard>
          </div>

          {/* Disabled State */}
          <div>
            <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: STORY_COLORS.neutral.text,
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
              Disabled State
            </h3>
            <PropCard label="disabled={true}">
              <Input disabled placeholder="Cannot type here..." />
            </PropCard>
          </div>

          <CodeBlock code={\`{/* Error state */}
<Input error placeholder="Invalid input..." />

{/* Disabled state */}
<Input disabled placeholder="Cannot type here..." />\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Prop: fullWidth',
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <PropCard label="fullWidth={true}">
            <div style={{
            width: '100%',
            maxWidth: '500px',
            border: \`1px dashed \${STORY_COLORS.neutral.borderMedium}\`,
            padding: '10px'
          }}>
              <Input fullWidth placeholder="I fill the container" />
            </div>
          </PropCard>

          <CodeBlock code={\`<div style={{ width: '500px' }}>
  <Input fullWidth placeholder="I fill the container" />
</div>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`States`,`FullWidth`]}))();export{p as Default,h as FullWidth,m as States,g as __namedExportsOrder,f as default};