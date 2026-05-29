import{i as e}from"./preload-helper-xPQekRTU.js";import{t,w as n}from"./iframe-Bm_r3Ygs.js";import{S as r,g as i,h as a}from"./lufa-ui-B9ODeQns.js";import{b as o,g as s,t as c,v as l}from"./helpers-D9bnZ3qZ.js";var u,d,f,p;e((()=>{n(),r(),c(),u=t(),d={title:`6. Interaction/Label`,component:i,parameters:{layout:`fullscreen`,docs:{description:{component:`Label Component - Text Wrapper for Form Inputs

Provides a semantic and accessible label for form controls.
Ensures consistent typography and spacing for form layouts.

## Features
- ✅ Standardized typography tokens
- ✅ Consistent bottom margin for spacing
- ✅ Accessibility best practices (associates with input via htmlFor)`}}},argTypes:{children:{control:`text`,description:`Label text content`},htmlFor:{control:`text`,description:`ID of the associated form element`}}},f={render:()=>(0,u.jsx)(o,{children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,u.jsx)(l,{label:`Default Label`,children:(0,u.jsxs)(`div`,{style:{width:`300px`},children:[(0,u.jsx)(i,{htmlFor:`demo-input`,children:`Email Address`}),(0,u.jsx)(a,{id:`demo-input`,placeholder:`name@example.com`,fullWidth:!0})]})}),(0,u.jsx)(s,{code:`<Label htmlFor="email">Email Address</Label>
<Input id="email" placeholder="name@example.com" />`,language:`jsx`,title:`JSX`})]})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <PropCard label="Default Label">
            {/*
              💡 TOKEN EDUCATION:
              Text Color: var(--lufa-component-input-label-color)
              Font Size: var(--lufa-component-input-label-font-size)
              Font Weight: var(--lufa-primitive-typography-font-weight-medium)
              Spacing: var(--lufa-component-input-label-spacing)
             */}
            <div style={{
            width: '300px'
          }}>
              <Label htmlFor="demo-input">Email Address</Label>
              <Input id="demo-input" placeholder="name@example.com" fullWidth />
            </div>
          </PropCard>

          <CodeBlock code={\`<Label htmlFor="email">Email Address</Label>
<Input id="email" placeholder="name@example.com" />\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`]}))();export{f as Default,p as __namedExportsOrder,d as default};