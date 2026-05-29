import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n,w as r}from"./iframe-Bm_r3Ygs.js";import{S as i,c as a}from"./lufa-ui-B9ODeQns.js";import{b as o,g as s,t as c,v as l}from"./helpers-D9bnZ3qZ.js";import{n as u,r as d,t as f}from"./storyColors-RAOlxH1p.js";var p,m,h,g,_,v,y,b,x,S,C;e((()=>{p=t(r(),1),i(),c(),d(),m=n(),h=f.neutral,g={title:`4. Foundation/Cluster`,component:a,parameters:{layout:`fullscreen`,docs:{description:{component:`Cluster - Layout Primitive for Wrapping Collections

A specialized layout component for grouping collections of elements with
intelligent wrapping behavior. Perfect for tags, badges, buttons, and other
compact elements that need to flow naturally and wrap responsively.

**Pattern Origin**: Based on "The Cluster" pattern by Heydon Pickering
from Every Layout (https://every-layout.dev/layouts/cluster/)

## Features
- ✅ Automatic wrapping (flex-wrap: wrap by default)
- ✅ Gap-based spacing (semantic tokens)
- ✅ Flexbox alignment (align-items and justify-content)
- ✅ Polymorphic \`as\` prop for semantic HTML
- ✅ Performance-optimized (CSS classes, not inline styles)
- ✅ No wrapper components needed

## Migrating from Chakra UI

**Semantic equivalent of Chakra UI's \`Wrap\` component.**

\`\`\`tsx
// ❌ Chakra UI (old)
import { Wrap, WrapItem } from '@chakra-ui/react';

<Wrap spacing={4}>
  <WrapItem><Badge>React</Badge></WrapItem>
  <WrapItem><Badge>TypeScript</Badge></WrapItem>
  <WrapItem><Badge>Next.js</Badge></WrapItem>
</Wrap>

// ✅ Lufa Cluster (new)
import { Cluster } from '@lufa/design-system';

<Cluster spacing="default">
  <Badge>React</Badge>
  <Badge>TypeScript</Badge>
  <Badge>Next.js</Badge>
</Cluster>
\`\`\`

**Key Differences**:
- ✅ No need for \`WrapItem\` wrapper (children wrap automatically)
- ✅ Semantic naming (cluster = collection of items)
- ✅ Same props: \`spacing\`, \`align\`, \`justify\`
- ✅ Automatic wrapping behavior by default

**Spacing Mapping**:
| Chakra | Lufa |
|--------|------|
| \`spacing={2}\` | \`spacing="tight"\` (4px) |
| \`spacing={4}\` | \`spacing="compact"\` (8px) |
| \`spacing={6}\` | \`spacing="default"\` (16px) |
| \`spacing={8}\` | \`spacing="comfortable"\` (24px) |
| \`spacing={10}\` | \`spacing="spacious"\` (32px) |`}}},argTypes:{as:{control:`select`,options:[`div`,`section`,`article`,`header`,`footer`,`main`,`nav`,`aside`,`ul`],description:`HTML element to render`,table:{category:`Polymorphic`,type:{summary:`ElementType`},defaultValue:{summary:`div`}}},spacing:{control:`select`,options:[`tight`,`compact`,`default`,`comfortable`,`spacious`],description:`Spacing between children (gap)`,table:{category:`Layout`,type:{summary:`SpacingValue`},defaultValue:{summary:`default`}}},align:{control:`select`,options:[`flex-start`,`center`,`flex-end`,`baseline`,`stretch`],description:`Cross-axis alignment (align-items)`,table:{category:`Layout`,type:{summary:`AlignValue`},defaultValue:{summary:`center`}}},justify:{control:`select`,options:[`flex-start`,`center`,`flex-end`,`space-between`,`space-around`],description:`Main-axis justification (justify-content)`,table:{category:`Layout`,type:{summary:`JustifyValue`},defaultValue:{summary:`flex-start`}}},children:{control:`text`,table:{category:`Content`,type:{summary:`ReactNode`}}},className:{control:`text`,table:{category:`Advanced`,type:{summary:`string`}}}}},_={args:{spacing:`default`,align:`center`,justify:`flex-start`},render:e=>(0,m.jsx)(o,{children:(0,m.jsx)(a,{...e,children:[1,2,3,4,5,6,7,8].map(e=>(0,m.jsxs)(`div`,{style:{padding:`12px 16px`,background:u(e-1).main,color:`white`,borderRadius:`8px`,fontWeight:600,textAlign:`center`},children:[`Item `,e]},e))})})},v={render:()=>{let[e,t]=p.useState(`default`),n=[{value:`tight`,size:`4px`,color:f.primary.cyan.main},{value:`compact`,size:`8px`,color:f.primary.green.main},{value:`default`,size:`16px`,color:f.primary.blue.main},{value:`comfortable`,size:`24px`,color:f.primary.violet.main},{value:`spacious`,size:`32px`,color:f.primary.pink.main}];return(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(280px, 1fr))`,gap:`20px`},children:n.map(({value:n,size:r,color:i})=>(0,m.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,m.jsx)(l,{label:`spacing="${n}" (${r})`,highlight:e===n,children:(0,m.jsx)(a,{spacing:n,children:[`React`,`TS`,`Next`,`Tailwind`,`CSS`].map(e=>(0,m.jsx)(`div`,{style:{padding:`6px 12px`,background:i,color:`white`,borderRadius:`16px`,fontSize:`12px`,fontWeight:600},children:e},e))})})},n))}),(0,m.jsx)(s,{code:(e=>`<Cluster spacing="${e}">
  <Badge>React</Badge>
  <Badge>TypeScript</Badge>
  <Badge>Next.js</Badge>
</Cluster>`)(e),language:`jsx`,title:`JSX`,subtitle:`spacing="${e}"`})]})})}},y={render:()=>{let[e,t]=p.useState(`center`);return(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:`24px`},children:[`flex-start`,`center`,`flex-end`,`baseline`,`stretch`].map(n=>(0,m.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,m.jsx)(l,{label:`align="${n}"`,highlight:e===n,children:(0,m.jsx)(`div`,{style:{border:`2px dashed ${f.neutral.borderMedium}`,padding:`8px`},children:(0,m.jsxs)(a,{align:n,spacing:`default`,children:[(0,m.jsx)(`div`,{style:{padding:`12px`,background:f.primary.blue.main,color:`white`,borderRadius:`6px`,fontWeight:600,height:`40px`,display:`flex`,alignItems:`center`},children:`40px`}),(0,m.jsx)(`div`,{style:{padding:`12px`,background:f.primary.violet.main,color:`white`,borderRadius:`6px`,fontWeight:600,height:`60px`,display:`flex`,alignItems:`center`},children:`60px`}),(0,m.jsx)(`div`,{style:{padding:`12px`,background:f.primary.pink.main,color:`white`,borderRadius:`6px`,fontWeight:600,height:`50px`,display:`flex`,alignItems:`center`},children:`50px`})]})})})},n))}),(0,m.jsx)(s,{code:(e=>`<Cluster align="${e}" spacing="default">
  <div style={{ height: '40px' }}>Badge 1</div>
  <div style={{ height: '60px' }}>Badge 2</div>
  <div style={{ height: '50px' }}>Badge 3</div>
</Cluster>`)(e),language:`jsx`,title:`JSX`,subtitle:`align="${e}"`})]})})}},b={render:()=>{let[e,t]=p.useState(`flex-start`);return(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(350px, 1fr))`,gap:`24px`},children:[`flex-start`,`center`,`flex-end`,`space-between`,`space-around`].map((n,r)=>(0,m.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,m.jsx)(l,{label:`justify="${n}"`,highlight:e===n,children:(0,m.jsx)(`div`,{style:{border:`2px dashed ${f.neutral.borderMedium}`,padding:`8px`},children:(0,m.jsx)(a,{justify:n,spacing:n.startsWith(`space`)?`tight`:`default`,children:[1,2,3].map(e=>(0,m.jsxs)(`div`,{style:{padding:`10px 14px`,background:u(r).main,color:`white`,borderRadius:`6px`,fontWeight:600,fontSize:`13px`},children:[`Item `,e]},e))})})})},n))}),(0,m.jsx)(s,{code:(e=>`<Cluster justify="${e}" spacing="default">
  <Badge>Item 1</Badge>
  <Badge>Item 2</Badge>
  <Badge>Item 3</Badge>
</Cluster>`)(e),language:`jsx`,title:`JSX`,subtitle:`justify="${e}"`})]})})}},x={render:()=>(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`40px`},children:[(0,m.jsxs)(`section`,{children:[(0,m.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600},children:`Tags Collection`}),(0,m.jsx)(`p`,{style:{margin:`0 0 16px 0`,color:h.textSlate,fontSize:`14px`},children:`Perfect for displaying skill tags, categories, or filters.`}),(0,m.jsx)(a,{spacing:`compact`,children:[`React`,`TypeScript`,`Next.js`,`Tailwind`,`GraphQL`,`Node.js`,`PostgreSQL`,`Docker`].map((e,t)=>(0,m.jsx)(`div`,{style:{padding:`6px 14px`,background:u(t).main,color:`white`,borderRadius:`16px`,fontSize:`13px`,fontWeight:600},children:e},e))}),(0,m.jsx)(s,{code:`<Cluster spacing="compact">
  {tags.map(tag => (
    <Badge key={tag.id}>{tag.name}</Badge>
  ))}
</Cluster>`,language:`jsx`,title:`Code`})]}),(0,m.jsxs)(`section`,{children:[(0,m.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600},children:`Button Group`}),(0,m.jsx)(`p`,{style:{margin:`0 0 16px 0`,color:h.textSlate,fontSize:`14px`},children:`Group action buttons with proper spacing and alignment.`}),(0,m.jsxs)(a,{spacing:`default`,align:`center`,children:[(0,m.jsx)(`button`,{style:{padding:`10px 20px`,borderRadius:`6px`,border:`none`,background:f.primary.blue.main,color:`white`,fontWeight:600,cursor:`pointer`},children:`Save Changes`}),(0,m.jsx)(`button`,{style:{padding:`10px 20px`,borderRadius:`6px`,border:`1px solid ${f.primary.blue.main}`,background:f.themed.background.surface,color:f.primary.blue.main,fontWeight:600,cursor:`pointer`},children:`Preview`}),(0,m.jsx)(`button`,{style:{padding:`10px 20px`,borderRadius:`6px`,border:`1px solid ${h.borderMedium}`,background:f.themed.background.surface,color:h.textSlate,fontWeight:600,cursor:`pointer`},children:`Cancel`})]}),(0,m.jsx)(s,{code:`<Cluster spacing="default" align="center">
  <Button variant="primary">Save Changes</Button>
  <Button variant="secondary">Preview</Button>
  <Button variant="ghost">Cancel</Button>
</Cluster>`,language:`jsx`,title:`Code`})]}),(0,m.jsxs)(`section`,{children:[(0,m.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600},children:`Status Badges`}),(0,m.jsx)(`p`,{style:{margin:`0 0 16px 0`,color:h.textSlate,fontSize:`14px`},children:`Display status indicators or labels that wrap naturally.`}),(0,m.jsx)(a,{spacing:`compact`,align:`center`,children:[{label:`Active`,color:f.primary.green.main},{label:`In Review`,color:f.primary.cyan.main},{label:`Approved`,color:f.primary.blue.main},{label:`Completed`,color:f.primary.violet.main},{label:`Archived`,color:h.textSlate}].map(({label:e,color:t})=>(0,m.jsx)(`div`,{style:{padding:`4px 10px`,background:t,color:`white`,borderRadius:`4px`,fontSize:`12px`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.5px`},children:e},e))}),(0,m.jsx)(s,{code:`<Cluster spacing="compact" align="center">
  <Badge status="active">Active</Badge>
  <Badge status="review">In Review</Badge>
  <Badge status="approved">Approved</Badge>
</Cluster>`,language:`jsx`,title:`Code`})]}),(0,m.jsxs)(`section`,{children:[(0,m.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600},children:`Centered Navigation`}),(0,m.jsx)(`p`,{style:{margin:`0 0 16px 0`,color:h.textSlate,fontSize:`14px`},children:`Center-aligned navigation links that wrap on smaller screens.`}),(0,m.jsx)(a,{as:`nav`,spacing:`comfortable`,align:`center`,justify:`center`,children:[`Home`,`Features`,`Pricing`,`About`,`Blog`,`Contact`].map(e=>(0,m.jsx)(`a`,{href:`#`,style:{textDecoration:`none`,color:`inherit`,fontWeight:600,fontSize:`15px`},children:e},e))}),(0,m.jsx)(s,{code:`<Cluster as="nav" spacing="comfortable" align="center" justify="center">
  <Link href="/home">Home</Link>
  <Link href="/features">Features</Link>
  <Link href="/pricing">Pricing</Link>
  <Link href="/about">About</Link>
</Cluster>`,language:`jsx`,title:`Code`})]})]})})},S={render:()=>(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`,maxWidth:`800px`},children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h2`,{style:{margin:`0 0 16px 0`,fontSize:`24px`,fontWeight:700},children:`Migrating from Chakra UI's Wrap`}),(0,m.jsxs)(`p`,{style:{margin:`0 0 16px 0`,fontSize:`16px`,lineHeight:`1.6`},children:[`Cluster is the `,(0,m.jsx)(`strong`,{children:`semantic equivalent of Chakra UI's Wrap component`}),`. The migration is straightforward with minimal code changes required.`]})]}),(0,m.jsxs)(`section`,{children:[(0,m.jsx)(`h3`,{style:{margin:`0 0 12px 0`,fontSize:`18px`,fontWeight:600},children:`Before & After`}),(0,m.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`16px`},children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{style:{padding:`8px 12px`,background:`#fee2e2`,color:`#991b1b`,borderRadius:`6px 6px 0 0`,fontSize:`13px`,fontWeight:600},children:`❌ Chakra UI (Before)`}),(0,m.jsx)(s,{code:`import { Wrap, WrapItem } from '@chakra-ui/react';

<Wrap spacing={4}>
  <WrapItem>
    <Badge>React</Badge>
  </WrapItem>
  <WrapItem>
    <Badge>TypeScript</Badge>
  </WrapItem>
  <WrapItem>
    <Badge>Next.js</Badge>
  </WrapItem>
</Wrap>`,language:`tsx`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{style:{padding:`8px 12px`,background:`#d1fae5`,color:`#065f46`,borderRadius:`6px 6px 0 0`,fontSize:`13px`,fontWeight:600},children:`✅ Lufa Cluster (After)`}),(0,m.jsx)(s,{code:`import { Cluster } from '@lufa/design-system';

<Cluster spacing="default">
  <Badge>React</Badge>
  <Badge>TypeScript</Badge>
  <Badge>Next.js</Badge>
</Cluster>`,language:`tsx`})]})]})]}),(0,m.jsxs)(`section`,{children:[(0,m.jsx)(`h3`,{style:{margin:`0 0 12px 0`,fontSize:`18px`,fontWeight:600},children:`Key Differences`}),(0,m.jsx)(`div`,{style:{border:`1px solid ${h.borderMedium}`,borderRadius:`8px`,overflow:`hidden`},children:(0,m.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{style:{background:h.backgroundLight},children:[(0,m.jsx)(`th`,{style:{padding:`12px`,textAlign:`left`,fontWeight:600,fontSize:`14px`},children:`Feature`}),(0,m.jsx)(`th`,{style:{padding:`12px`,textAlign:`left`,fontWeight:600,fontSize:`14px`},children:`Chakra Wrap`}),(0,m.jsx)(`th`,{style:{padding:`12px`,textAlign:`left`,fontWeight:600,fontSize:`14px`},children:`Lufa Cluster`})]})}),(0,m.jsxs)(`tbody`,{children:[(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:`Wrapper`}),(0,m.jsxs)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:[`Requires `,(0,m.jsx)(`code`,{children:`WrapItem`})]}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:`✅ No wrapper needed`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:`Spacing`}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:`Numeric values (2, 4, 6)`}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:`✅ Semantic tokens`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:`Props`}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:`spacing, align, justify`}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:`✅ Same props`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:`Behavior`}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:`Automatic wrapping`}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:`✅ Automatic wrapping`})]})]})]})})]}),(0,m.jsxs)(`section`,{children:[(0,m.jsx)(`h3`,{style:{margin:`0 0 12px 0`,fontSize:`18px`,fontWeight:600},children:`Spacing Value Mapping`}),(0,m.jsx)(`div`,{style:{border:`1px solid ${h.borderMedium}`,borderRadius:`8px`,overflow:`hidden`},children:(0,m.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{style:{background:h.backgroundLight},children:[(0,m.jsx)(`th`,{style:{padding:`12px`,textAlign:`left`,fontWeight:600,fontSize:`14px`},children:`Chakra spacing`}),(0,m.jsx)(`th`,{style:{padding:`12px`,textAlign:`left`,fontWeight:600,fontSize:`14px`},children:`Lufa spacing`}),(0,m.jsx)(`th`,{style:{padding:`12px`,textAlign:`left`,fontWeight:600,fontSize:`14px`},children:`Pixel value`})]})}),(0,m.jsxs)(`tbody`,{children:[(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:(0,m.jsxs)(`code`,{children:[`spacing=`,`{2}`]})}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:(0,m.jsx)(`code`,{children:`spacing="tight"`})}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:`4px`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:(0,m.jsxs)(`code`,{children:[`spacing=`,`{4}`]})}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:(0,m.jsx)(`code`,{children:`spacing="compact"`})}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:`8px`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:(0,m.jsxs)(`code`,{children:[`spacing=`,`{6}`]})}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:(0,m.jsx)(`code`,{children:`spacing="default"`})}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:`16px`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:(0,m.jsxs)(`code`,{children:[`spacing=`,`{8}`]})}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:(0,m.jsx)(`code`,{children:`spacing="comfortable"`})}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:`24px`})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:(0,m.jsxs)(`code`,{children:[`spacing=`,`{10}`]})}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:(0,m.jsx)(`code`,{children:`spacing="spacious"`})}),(0,m.jsx)(`td`,{style:{padding:`12px`,borderTop:`1px solid ${h.borderLight}`},children:`32px`})]})]})]})})]}),(0,m.jsxs)(`section`,{children:[(0,m.jsx)(`h3`,{style:{margin:`0 0 12px 0`,fontSize:`18px`,fontWeight:600},children:`Live Example`}),(0,m.jsx)(`p`,{style:{margin:`0 0 12px 0`,fontSize:`14px`,color:h.textSlate},children:`This is how your Chakra Wrap translates to Lufa Cluster:`}),(0,m.jsx)(a,{spacing:`compact`,children:[`React`,`TypeScript`,`Next.js`,`Tailwind`,`GraphQL`,`Node.js`].map((e,t)=>(0,m.jsx)(`div`,{style:{padding:`6px 14px`,background:u(t).main,color:`white`,borderRadius:`16px`,fontSize:`13px`,fontWeight:600},children:e},e))})]})]})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 'default',
    align: 'center',
    justify: 'flex-start'
  },
  render: args => {
    return <StoryContainer>
        <Cluster {...args}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} style={{
          padding: '12px 16px',
          background: getColorByIndex(i - 1).main,
          color: 'white',
          borderRadius: '8px',
          fontWeight: 600,
          textAlign: 'center'
        }}>
              Item {i}
            </div>)}
        </Cluster>
      </StoryContainer>;
  }
}`,..._.parameters?.docs?.source},description:{story:`## Playground

Interactive playground to experiment with all Cluster props.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredSpacing, setHoveredSpacing] = React.useState<string>('default');
    const spacingValues = [{
      value: 'tight' as const,
      size: '4px',
      color: STORY_COLORS.primary.cyan.main
    }, {
      value: 'compact' as const,
      size: '8px',
      color: STORY_COLORS.primary.green.main
    }, {
      value: 'default' as const,
      size: '16px',
      color: STORY_COLORS.primary.blue.main
    }, {
      value: 'comfortable' as const,
      size: '24px',
      color: STORY_COLORS.primary.violet.main
    }, {
      value: 'spacious' as const,
      size: '32px',
      color: STORY_COLORS.primary.pink.main
    }];
    const generateCode = (spacing: string): string => {
      return \`<Cluster spacing="\${spacing}">
  <Badge>React</Badge>
  <Badge>TypeScript</Badge>
  <Badge>Next.js</Badge>
</Cluster>\`;
    };
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          {/* Grid of examples */}
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px'
        }}>
            {spacingValues.map(({
            value,
            size,
            color
          }) => <div key={value} onMouseEnter={() => setHoveredSpacing(value)}>
                <PropCard label={\`spacing="\${value}" (\${size})\`} highlight={hoveredSpacing === value}>
                  <Cluster spacing={value}>
                    {['React', 'TS', 'Next', 'Tailwind', 'CSS'].map(tag => <div key={tag} style={{
                  padding: '6px 12px',
                  background: color,
                  color: 'white',
                  borderRadius: '16px',
                  fontSize: '12px',
                  fontWeight: 600
                }}>
                        {tag}
                      </div>)}
                  </Cluster>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredSpacing)} language="jsx" title="JSX" subtitle={\`spacing="\${hoveredSpacing}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...v.parameters?.docs?.source},description:{story:`## Prop: \`spacing\`

Controls the gap between child elements using semantic spacing tokens.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredAlign, setHoveredAlign] = React.useState<string>('center');
    const alignValues = ['flex-start', 'center', 'flex-end', 'baseline', 'stretch'] as const;
    const generateCode = (align: string): string => {
      return \`<Cluster align="\${align}" spacing="default">
  <div style={{ height: '40px' }}>Badge 1</div>
  <div style={{ height: '60px' }}>Badge 2</div>
  <div style={{ height: '50px' }}>Badge 3</div>
</Cluster>\`;
    };
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          {/* Grid of examples */}
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
            {alignValues.map(value => <div key={value} onMouseEnter={() => setHoveredAlign(value)}>
                <PropCard label={\`align="\${value}"\`} highlight={hoveredAlign === value}>
                  <div style={{
                border: \`2px dashed \${STORY_COLORS.neutral.borderMedium}\`,
                padding: '8px'
              }}>
                    <Cluster align={value} spacing="default">
                      <div style={{
                    padding: '12px',
                    background: STORY_COLORS.primary.blue.main,
                    color: 'white',
                    borderRadius: '6px',
                    fontWeight: 600,
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                        40px
                      </div>
                      <div style={{
                    padding: '12px',
                    background: STORY_COLORS.primary.violet.main,
                    color: 'white',
                    borderRadius: '6px',
                    fontWeight: 600,
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                        60px
                      </div>
                      <div style={{
                    padding: '12px',
                    background: STORY_COLORS.primary.pink.main,
                    color: 'white',
                    borderRadius: '6px',
                    fontWeight: 600,
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                        50px
                      </div>
                    </Cluster>
                  </div>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredAlign)} language="jsx" title="JSX" subtitle={\`align="\${hoveredAlign}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...y.parameters?.docs?.source},description:{story:`## Prop: \`align\`

Controls cross-axis alignment of children (align-items).`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredJustify, setHoveredJustify] = React.useState<string>('flex-start');
    const justifyValues = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'] as const;
    const generateCode = (justify: string): string => {
      return \`<Cluster justify="\${justify}" spacing="default">
  <Badge>Item 1</Badge>
  <Badge>Item 2</Badge>
  <Badge>Item 3</Badge>
</Cluster>\`;
    };
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          {/* Grid of examples */}
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px'
        }}>
            {justifyValues.map((value, idx) => <div key={value} onMouseEnter={() => setHoveredJustify(value)}>
                <PropCard label={\`justify="\${value}"\`} highlight={hoveredJustify === value}>
                  <div style={{
                border: \`2px dashed \${STORY_COLORS.neutral.borderMedium}\`,
                padding: '8px'
              }}>
                    <Cluster justify={value} spacing={value.startsWith('space') ? 'tight' : 'default'}>
                      {[1, 2, 3].map(i => {
                    const color = getColorByIndex(idx);
                    return <div key={i} style={{
                      padding: '10px 14px',
                      background: color.main,
                      color: 'white',
                      borderRadius: '6px',
                      fontWeight: 600,
                      fontSize: '13px'
                    }}>
                            Item {i}
                          </div>;
                  })}
                    </Cluster>
                  </div>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredJustify)} language="jsx" title="JSX" subtitle={\`justify="\${hoveredJustify}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...b.parameters?.docs?.source},description:{story:`## Prop: \`justify\`

Controls main-axis justification of children (justify-content).`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>
          {/* Use Case 1: Tag Collection */}
          <section>
            <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Tags Collection</h3>
            <p style={{
            margin: '0 0 16px 0',
            color: NEUTRAL.textSlate,
            fontSize: '14px'
          }}>
              Perfect for displaying skill tags, categories, or filters.
            </p>
            <Cluster spacing="compact">
              {['React', 'TypeScript', 'Next.js', 'Tailwind', 'GraphQL', 'Node.js', 'PostgreSQL', 'Docker'].map((tag, idx) => <div key={tag} style={{
              padding: '6px 14px',
              background: getColorByIndex(idx).main,
              color: 'white',
              borderRadius: '16px',
              fontSize: '13px',
              fontWeight: 600
            }}>
                    {tag}
                  </div>)}
            </Cluster>
            <CodeBlock code={\`<Cluster spacing="compact">
  {tags.map(tag => (
    <Badge key={tag.id}>{tag.name}</Badge>
  ))}
</Cluster>\`} language="jsx" title="Code" />
          </section>

          {/* Use Case 2: Button Group */}
          <section>
            <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Button Group</h3>
            <p style={{
            margin: '0 0 16px 0',
            color: NEUTRAL.textSlate,
            fontSize: '14px'
          }}>
              Group action buttons with proper spacing and alignment.
            </p>
            <Cluster spacing="default" align="center">
              <button style={{
              padding: '10px 20px',
              borderRadius: '6px',
              border: 'none',
              background: STORY_COLORS.primary.blue.main,
              color: 'white',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
                Save Changes
              </button>
              <button style={{
              padding: '10px 20px',
              borderRadius: '6px',
              border: \`1px solid \${STORY_COLORS.primary.blue.main}\`,
              background: STORY_COLORS.themed.background.surface,
              color: STORY_COLORS.primary.blue.main,
              fontWeight: 600,
              cursor: 'pointer'
            }}>
                Preview
              </button>
              <button style={{
              padding: '10px 20px',
              borderRadius: '6px',
              border: \`1px solid \${NEUTRAL.borderMedium}\`,
              background: STORY_COLORS.themed.background.surface,
              color: NEUTRAL.textSlate,
              fontWeight: 600,
              cursor: 'pointer'
            }}>
                Cancel
              </button>
            </Cluster>
            <CodeBlock code={\`<Cluster spacing="default" align="center">
  <Button variant="primary">Save Changes</Button>
  <Button variant="secondary">Preview</Button>
  <Button variant="ghost">Cancel</Button>
</Cluster>\`} language="jsx" title="Code" />
          </section>

          {/* Use Case 3: Badges with Status */}
          <section>
            <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Status Badges</h3>
            <p style={{
            margin: '0 0 16px 0',
            color: NEUTRAL.textSlate,
            fontSize: '14px'
          }}>
              Display status indicators or labels that wrap naturally.
            </p>
            <Cluster spacing="compact" align="center">
              {[{
              label: 'Active',
              color: STORY_COLORS.primary.green.main
            }, {
              label: 'In Review',
              color: STORY_COLORS.primary.cyan.main
            }, {
              label: 'Approved',
              color: STORY_COLORS.primary.blue.main
            }, {
              label: 'Completed',
              color: STORY_COLORS.primary.violet.main
            }, {
              label: 'Archived',
              color: NEUTRAL.textSlate
            }].map(({
              label,
              color
            }) => <div key={label} style={{
              padding: '4px 10px',
              background: color,
              color: 'white',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
                  {label}
                </div>)}
            </Cluster>
            <CodeBlock code={\`<Cluster spacing="compact" align="center">
  <Badge status="active">Active</Badge>
  <Badge status="review">In Review</Badge>
  <Badge status="approved">Approved</Badge>
</Cluster>\`} language="jsx" title="Code" />
          </section>

          {/* Use Case 4: Centered Navigation Links */}
          <section>
            <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Centered Navigation</h3>
            <p style={{
            margin: '0 0 16px 0',
            color: NEUTRAL.textSlate,
            fontSize: '14px'
          }}>
              Center-aligned navigation links that wrap on smaller screens.
            </p>
            <Cluster as="nav" spacing="comfortable" align="center" justify="center">
              {['Home', 'Features', 'Pricing', 'About', 'Blog', 'Contact'].map(link => <a key={link} href="#" style={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 600,
              fontSize: '15px'
            }}>
                  {link}
                </a>)}
            </Cluster>
            <CodeBlock code={\`<Cluster as="nav" spacing="comfortable" align="center" justify="center">
  <Link href="/home">Home</Link>
  <Link href="/features">Features</Link>
  <Link href="/pricing">Pricing</Link>
  <Link href="/about">About</Link>
</Cluster>\`} language="jsx" title="Code" />
          </section>
        </div>
      </StoryContainer>;
  }
}`,...x.parameters?.docs?.source},description:{story:`## Use Cases

Real-world examples of Cluster in action.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        maxWidth: '800px'
      }}>
          <div>
            <h2 style={{
            margin: '0 0 16px 0',
            fontSize: '24px',
            fontWeight: 700
          }}>Migrating from Chakra UI's Wrap</h2>
            <p style={{
            margin: '0 0 16px 0',
            fontSize: '16px',
            lineHeight: '1.6'
          }}>
              Cluster is the <strong>semantic equivalent of Chakra UI's Wrap component</strong>. The migration is
              straightforward with minimal code changes required.
            </p>
          </div>

          {/* Before/After Comparison */}
          <section>
            <h3 style={{
            margin: '0 0 12px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Before & After</h3>
            <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px'
          }}>
              <div>
                <div style={{
                padding: '8px 12px',
                background: '#fee2e2',
                color: '#991b1b',
                borderRadius: '6px 6px 0 0',
                fontSize: '13px',
                fontWeight: 600
              }}>
                  ❌ Chakra UI (Before)
                </div>
                <CodeBlock code={\`import { Wrap, WrapItem } from '@chakra-ui/react';

<Wrap spacing={4}>
  <WrapItem>
    <Badge>React</Badge>
  </WrapItem>
  <WrapItem>
    <Badge>TypeScript</Badge>
  </WrapItem>
  <WrapItem>
    <Badge>Next.js</Badge>
  </WrapItem>
</Wrap>\`} language="tsx" />
              </div>
              <div>
                <div style={{
                padding: '8px 12px',
                background: '#d1fae5',
                color: '#065f46',
                borderRadius: '6px 6px 0 0',
                fontSize: '13px',
                fontWeight: 600
              }}>
                  ✅ Lufa Cluster (After)
                </div>
                <CodeBlock code={\`import { Cluster } from '@lufa/design-system';

<Cluster spacing="default">
  <Badge>React</Badge>
  <Badge>TypeScript</Badge>
  <Badge>Next.js</Badge>
</Cluster>\`} language="tsx" />
              </div>
            </div>
          </section>

          {/* Key Differences */}
          <section>
            <h3 style={{
            margin: '0 0 12px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Key Differences</h3>
            <div style={{
            border: \`1px solid \${NEUTRAL.borderMedium}\`,
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
              <table style={{
              width: '100%',
              borderCollapse: 'collapse'
            }}>
                <thead>
                  <tr style={{
                  background: NEUTRAL.backgroundLight
                }}>
                    <th style={{
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}>Feature</th>
                    <th style={{
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}>
                      Chakra Wrap
                    </th>
                    <th style={{
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}>
                      Lufa Cluster
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>Wrapper</td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      Requires <code>WrapItem</code>
                    </td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      ✅ No wrapper needed
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>Spacing</td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      Numeric values (2, 4, 6)
                    </td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      ✅ Semantic tokens
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>Props</td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      spacing, align, justify
                    </td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>✅ Same props</td>
                  </tr>
                  <tr>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>Behavior</td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      Automatic wrapping
                    </td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      ✅ Automatic wrapping
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Spacing Mapping */}
          <section>
            <h3 style={{
            margin: '0 0 12px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Spacing Value Mapping</h3>
            <div style={{
            border: \`1px solid \${NEUTRAL.borderMedium}\`,
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
              <table style={{
              width: '100%',
              borderCollapse: 'collapse'
            }}>
                <thead>
                  <tr style={{
                  background: NEUTRAL.backgroundLight
                }}>
                    <th style={{
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}>
                      Chakra spacing
                    </th>
                    <th style={{
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}>
                      Lufa spacing
                    </th>
                    <th style={{
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}>
                      Pixel value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      <code>spacing={'{2}'}</code>
                    </td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      <code>spacing="tight"</code>
                    </td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>4px</td>
                  </tr>
                  <tr>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      <code>spacing={'{4}'}</code>
                    </td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      <code>spacing="compact"</code>
                    </td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>8px</td>
                  </tr>
                  <tr>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      <code>spacing={'{6}'}</code>
                    </td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      <code>spacing="default"</code>
                    </td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>16px</td>
                  </tr>
                  <tr>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      <code>spacing={'{8}'}</code>
                    </td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      <code>spacing="comfortable"</code>
                    </td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>24px</td>
                  </tr>
                  <tr>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      <code>spacing={'{10}'}</code>
                    </td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>
                      <code>spacing="spacious"</code>
                    </td>
                    <td style={{
                    padding: '12px',
                    borderTop: \`1px solid \${NEUTRAL.borderLight}\`
                  }}>32px</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Live Example */}
          <section>
            <h3 style={{
            margin: '0 0 12px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Live Example</h3>
            <p style={{
            margin: '0 0 12px 0',
            fontSize: '14px',
            color: NEUTRAL.textSlate
          }}>
              This is how your Chakra Wrap translates to Lufa Cluster:
            </p>
            <Cluster spacing="compact">
              {['React', 'TypeScript', 'Next.js', 'Tailwind', 'GraphQL', 'Node.js'].map((tag, idx) => <div key={tag} style={{
              padding: '6px 14px',
              background: getColorByIndex(idx).main,
              color: 'white',
              borderRadius: '16px',
              fontSize: '13px',
              fontWeight: 600
            }}>
                  {tag}
                </div>)}
            </Cluster>
          </section>
        </div>
      </StoryContainer>;
  }
}`,...S.parameters?.docs?.source},description:{story:`## Migration from Chakra UI

Complete guide for migrating from Chakra UI's Wrap component.`,...S.parameters?.docs?.description}}},C=[`Playground`,`PropSpacing`,`PropAlign`,`PropJustify`,`UseCases`,`MigrationFromChakra`]}))();export{S as MigrationFromChakra,_ as Playground,y as PropAlign,b as PropJustify,v as PropSpacing,x as UseCases,C as __namedExportsOrder,g as default};