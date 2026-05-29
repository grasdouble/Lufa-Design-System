import{i as e}from"./preload-helper-xPQekRTU.js";import{t,w as n}from"./iframe-Bm_r3Ygs.js";import{S as r,a as i,b as a,o}from"./lufa-ui-B9ODeQns.js";import{b as s,g as c,t as l,v as u}from"./helpers-D9bnZ3qZ.js";var d,f,p,m;e((()=>{n(),r(),l(),d=t(),f={title:`7. Composition/Card`,component:o,parameters:{layout:`fullscreen`,docs:{description:{component:`Card Component - Surface Container

A versatile container component that groups related content.
Provides a consistent background, border, and shadow to create distinct UI islands.

## Features
- ✅ Surface tokens for background
- ✅ Shadow tokens for elevation
- ✅ Border tokens for definition
- ✅ Built-in padding`}}},argTypes:{children:{control:`text`,description:`Card content`}}},p={render:()=>(0,d.jsx)(s,{children:(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,d.jsx)(u,{label:`Default Card`,children:(0,d.jsxs)(o,{style:{maxWidth:`400px`},children:[(0,d.jsx)(a,{as:`h3`,style:{fontWeight:`bold`,marginBottom:`8px`},children:`Card Title`}),(0,d.jsx)(a,{style:{marginBottom:`16px`,color:`var(--lufa-semantic-ui-text-secondary)`},children:`This is a simple card component used to group related content together.`}),(0,d.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`},children:(0,d.jsx)(i,{size:`sm`,variant:`primary`,children:`Action`})})]})}),(0,d.jsx)(c,{code:`<Card>
  <Text as="h3">Card Title</Text>
  <Text>Content goes here...</Text>
  <Button>Action</Button>
</Card>`,language:`jsx`,title:`JSX`})]})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <PropCard label="Default Card">
            {/*
              💡 TOKEN EDUCATION:
              Background: var(--lufa-component-card-background)
              Border: var(--lufa-component-card-border)
              Shadow: var(--lufa-component-card-shadow-sm)
              Padding: var(--lufa-component-card-padding-md)
              Border Radius: var(--lufa-component-card-border-radius-sm)
             */}
            <Card style={{
            maxWidth: '400px'
          }}>
              <Text as="h3" style={{
              fontWeight: 'bold',
              marginBottom: '8px'
            }}>
                Card Title
              </Text>
              <Text style={{
              marginBottom: '16px',
              color: 'var(--lufa-semantic-ui-text-secondary)'
            }}>
                This is a simple card component used to group related content together.
              </Text>
              <div style={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
                <Button size="sm" variant="primary">
                  Action
                </Button>
              </div>
            </Card>
          </PropCard>

          <CodeBlock code={\`<Card>
  <Text as="h3">Card Title</Text>
  <Text>Content goes here...</Text>
  <Button>Action</Button>
</Card>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,f as default};