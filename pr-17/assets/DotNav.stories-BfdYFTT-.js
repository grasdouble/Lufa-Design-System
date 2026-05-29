import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n,w as r}from"./iframe-Bm_r3Ygs.js";import{S as i,d as a}from"./lufa-ui-B9ODeQns.js";import{b as o,g as s,t as c,v as l}from"./helpers-D9bnZ3qZ.js";function u({sections:e=m,position:t=`right`,ariaLabel:n}){let[r,i]=(0,d.useState)(e[0]?.id??``);return(0,f.jsxs)(`div`,{style:{position:`relative`,minHeight:`400px`,background:`var(--lufa-semantic-ui-background-page)`},children:[(0,f.jsx)(a,{sections:e,activeId:r,onSelect:i,position:t,ariaLabel:n}),(0,f.jsxs)(`div`,{style:{position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,textAlign:`center`,color:`var(--lufa-semantic-ui-text-secondary)`,fontSize:`0.875rem`},children:[`Active: `,(0,f.jsx)(`strong`,{style:{color:`var(--lufa-semantic-ui-text-primary)`},children:r}),(0,f.jsx)(`br`,{}),(0,f.jsx)(`span`,{style:{fontSize:`0.75rem`},children:`Click a dot to change active section`})]})]})}var d,f,p,m,h,g,_,v,y,b;e((()=>{d=t(r(),1),i(),c(),f=n(),p={title:`9. Navigation/DotNav`,component:a,parameters:{layout:`fullscreen`,docs:{description:{component:`DotNav - Vertical Dot Navigation for Multi-Section SPAs

A fixed, vertically-centered navigation made of small clickable dots.
Each dot represents a full-screen section. The active section's label is
always visible; inactive labels appear on hover.

## Features
- ✅ Fixed position, vertically centered in the viewport
- ✅ Active dot is larger and filled with the brand accent color
- ✅ Active section label always visible (persistent)
- ✅ Inactive section labels slide in on hover
- ✅ \`position\` prop: attach to left or right side
- ✅ Accessible: \`<nav>\` landmark, \`aria-label\` on buttons, \`aria-current\` on active
- ✅ Token-based design (semantic + component tokens)
- ✅ \`prefers-reduced-motion\` support

## Pairing with \`useScrollSpy\`

\`\`\`tsx
const SECTIONS = ['hero', 'about', 'skills'] as const;
const sections = SECTIONS.map((id) => ({ id, label: id }));

const { activeId, scrollTo } = useScrollSpy({ ids: SECTIONS });

<DotNav sections={sections} activeId={activeId} onSelect={scrollTo} />
\`\`\``}}},argTypes:{sections:{description:`List of navigable sections`,table:{category:`Data`,type:{summary:`{ id: string; label: string }[]`}}},activeId:{control:`text`,description:`ID of the currently active section`,table:{category:`State`,type:{summary:`string`}}},position:{control:`select`,options:[`left`,`right`],description:`Side of the viewport to attach the navigation to`,table:{category:`Layout`,type:{summary:`'left' | 'right'`},defaultValue:{summary:`right`}}},ariaLabel:{control:`text`,description:`Accessible label for the nav landmark`,table:{category:`Accessibility`,type:{summary:`string`},defaultValue:{summary:`Page sections`}}},onSelect:{description:`Callback fired when a dot is clicked`,table:{category:`Events`,type:{summary:`(id: string) => void`}}}}},m=[{id:`hero`,label:`Home`},{id:`about`,label:`About`},{id:`skills`,label:`Skills`},{id:`projects`,label:`Projects`},{id:`contact`,label:`Contact`}],h={render:()=>(0,f.jsx)(o,{children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,f.jsx)(l,{label:`Default — right side, 5 sections`,children:(0,f.jsx)(`div`,{style:{position:`relative`,height:`240px`},children:(0,f.jsx)(u,{})})}),(0,f.jsx)(s,{language:`tsx`,title:`JSX`,code:`const { activeId, scrollTo } = useScrollSpy({ ids: SECTION_IDS });

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
/>`})]})})},g={render:()=>(0,f.jsx)(o,{children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,f.jsx)(l,{label:`position="left"`,children:(0,f.jsx)(`div`,{style:{position:`relative`,height:`240px`},children:(0,f.jsx)(u,{position:`left`})})}),(0,f.jsx)(s,{language:`tsx`,title:`JSX`,code:`<DotNav
  sections={sections}
  activeId={activeId}
  onSelect={scrollTo}
  position="left"
/>`})]})})},_=Array.from({length:8},(e,t)=>({id:`section-${t+1}`,label:`Section ${t+1}`})),v={render:()=>(0,f.jsx)(o,{children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,f.jsx)(l,{label:`8 sections (stress test)`,children:(0,f.jsx)(`div`,{style:{position:`relative`,height:`400px`},children:(0,f.jsx)(u,{sections:_})})}),(0,f.jsx)(s,{language:`tsx`,title:`JSX`,code:"const sections = Array.from({ length: 8 }, (_, i) => ({\n  id: `section-${i + 1}`,\n  label: `Section ${i + 1}`,\n}));\n\n<DotNav sections={sections} activeId={activeId} onSelect={scrollTo} />"})]})})},y={name:`Behavior: Active label always visible`,render:()=>(0,f.jsx)(o,{children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,f.jsx)(l,{label:`Active section label is always visible (no hover required)`,children:(0,f.jsx)(`div`,{style:{position:`relative`,height:`240px`},children:(0,f.jsx)(u,{})})}),(0,f.jsx)(l,{label:`Label visibility states`,children:(0,f.jsxs)(`ul`,{style:{margin:0,padding:`0 1rem`,color:`var(--lufa-semantic-ui-text-secondary)`,fontSize:`0.875rem`,lineHeight:`1.75`},children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{style:{color:`var(--lufa-semantic-ui-text-primary)`},children:`Active section`}),` → label always visible`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{style:{color:`var(--lufa-semantic-ui-text-primary)`},children:`Inactive section (hovered)`}),` → label slides in`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{style:{color:`var(--lufa-semantic-ui-text-primary)`},children:`Inactive section (idle)`}),` → label hidden`]})]})})]})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <StoryContainer>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <PropCard label="Default — right side, 5 sections">
          {/*
            💡 TOKEN EDUCATION:
            Active/hover dot: var(--lufa-semantic-interactive-action-primary-default)
            Inactive dot: var(--lufa-semantic-ui-border-default)
            Label text: var(--lufa-semantic-ui-text-primary)
            Label bg: var(--lufa-semantic-ui-background-page)
            Label border: var(--lufa-semantic-ui-border-default)
           */}
          <div style={{
          position: 'relative',
          height: '240px'
        }}>
            <InteractiveDotNav />
          </div>
        </PropCard>

        <CodeBlock language="tsx" title="JSX" code={\`const { activeId, scrollTo } = useScrollSpy({ ids: SECTION_IDS });

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
/>\`} />
      </div>
    </StoryContainer>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <StoryContainer>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <PropCard label='position="left"'>
          <div style={{
          position: 'relative',
          height: '240px'
        }}>
            <InteractiveDotNav position="left" />
          </div>
        </PropCard>

        <CodeBlock language="tsx" title="JSX" code={\`<DotNav
  sections={sections}
  activeId={activeId}
  onSelect={scrollTo}
  position="left"
/>\`} />
      </div>
    </StoryContainer>
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <StoryContainer>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <PropCard label="8 sections (stress test)">
          <div style={{
          position: 'relative',
          height: '400px'
        }}>
            <InteractiveDotNav sections={MANY_SECTIONS} />
          </div>
        </PropCard>

        <CodeBlock language="tsx" title="JSX" code={\`const sections = Array.from({ length: 8 }, (_, i) => ({
  id: \\\`section-\\\${i + 1}\\\`,
  label: \\\`Section \\\${i + 1}\\\`,
}));

<DotNav sections={sections} activeId={activeId} onSelect={scrollTo} />\`} />
      </div>
    </StoryContainer>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Behavior: Active label always visible',
  render: () => <StoryContainer>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <PropCard label="Active section label is always visible (no hover required)">
          <div style={{
          position: 'relative',
          height: '240px'
        }}>
            <InteractiveDotNav />
          </div>
        </PropCard>

        <PropCard label="Label visibility states">
          <ul style={{
          margin: 0,
          padding: '0 1rem',
          color: 'var(--lufa-semantic-ui-text-secondary)',
          fontSize: '0.875rem',
          lineHeight: '1.75'
        }}>
            <li>
              <strong style={{
              color: 'var(--lufa-semantic-ui-text-primary)'
            }}>Active section</strong> → label always
              visible
            </li>
            <li>
              <strong style={{
              color: 'var(--lufa-semantic-ui-text-primary)'
            }}>Inactive section (hovered)</strong> →
              label slides in
            </li>
            <li>
              <strong style={{
              color: 'var(--lufa-semantic-ui-text-primary)'
            }}>Inactive section (idle)</strong> → label
              hidden
            </li>
          </ul>
        </PropCard>
      </div>
    </StoryContainer>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`LeftPosition`,`ManySections`,`ActiveLabelAlwaysVisible`]}))();export{y as ActiveLabelAlwaysVisible,h as Default,g as LeftPosition,v as ManySections,b as __namedExportsOrder,p as default};