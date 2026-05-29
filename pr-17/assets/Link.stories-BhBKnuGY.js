import{i as e}from"./preload-helper-xPQekRTU.js";import{t,w as n}from"./iframe-Bm_r3Ygs.js";import{S as r,_ as i,b as a}from"./lufa-ui-B9ODeQns.js";import{b as o,g as s,t as c,v as l}from"./helpers-D9bnZ3qZ.js";import{r as u,t as d}from"./storyColors-RAOlxH1p.js";var f,p,m,h,g,_,v,y,b;e((()=>{n(),r(),c(),u(),f=t(),p=d.neutral,m={title:`5. Content/Link`,component:i,parameters:{layout:`fullscreen`,docs:{description:{component:`Link - Inline Anchor Component

A flexible, polymorphic inline link component for embedding styled anchors
inside text content. Uses DS tokens exclusively and inherits font properties
from the surrounding context.

## Features
- ✅ Three visual variants: default, subtle, plain
- ✅ Semantic color values (8 colors, same as Text)
- ✅ Animated border-bottom on hover (default and subtle)
- ✅ Auto rel="noopener noreferrer" for target="_blank"
- ✅ Accessible: native \`<a>\` semantics with visible focus ring
- ✅ Polymorphic \`as\` prop for router link integration
- ✅ Inherits font-size and font-weight from parent context
- ✅ Token-based design (semantic layer tokens)`}}},argTypes:{as:{control:`select`,options:[`a`,`span`,`button`],description:`HTML element or component to render (polymorphic)`,table:{category:`Polymorphic`,type:{summary:`ElementType`},defaultValue:{summary:`a`}}},href:{control:`text`,description:`Destination URL`,table:{category:`Link`,type:{summary:`string`}}},target:{control:`select`,options:[`_self`,`_blank`],description:`Where to open the linked URL`,table:{category:`Link`,type:{summary:`'_self' | '_blank'`},defaultValue:{summary:`_self`}}},rel:{control:`text`,description:`Rel attribute (auto "noopener noreferrer" when target="_blank")`,table:{category:`Link`,type:{summary:`string`}}},variant:{control:`select`,options:[`default`,`subtle`,`plain`],description:`Visual style variant`,table:{category:`Variants`,type:{summary:`'default' | 'subtle' | 'plain'`},defaultValue:{summary:`default`}}},color:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`success`,`error`,`warning`,`info`,`inverse`],description:`Text color (semantic tokens, same as Text component)`,table:{category:`Variants`,type:{summary:`ColorValue`},defaultValue:{summary:`primary (secondary for subtle variant)`}}},children:{control:`text`,table:{category:`Content`,type:{summary:`ReactNode`}}},className:{control:`text`,table:{category:`Advanced`,type:{summary:`string`}}}}},h={args:{href:`https://github.com/grasdouble/Lufa-Design-System`,target:`_blank`,variant:`default`,children:`Lufa Design System`},render:e=>(0,f.jsx)(o,{children:(0,f.jsx)(`div`,{style:{padding:`32px`,background:p.backgroundLight,borderRadius:`8px`},children:(0,f.jsxs)(a,{as:`p`,variant:`body`,children:[`Visit the `,(0,f.jsx)(i,{...e}),` on GitHub.`]})})})},g={render:()=>(0,f.jsx)(o,{children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,padding:`32px`},children:[[{value:`default`,label:`Default`,description:`Colored text with animated border-bottom on hover`,color:`primary`},{value:`subtle`,label:`Subtle`,description:`Secondary text color, same hover border behavior`,color:`secondary`},{value:`plain`,label:`Plain`,description:`No underline, color only — for use inside buttons or badges`,color:`primary`}].map(({value:e,label:t,description:n,color:r})=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,f.jsx)(l,{children:(0,f.jsxs)(a,{as:`p`,variant:`body`,children:[`Example with`,` `,(0,f.jsxs)(i,{href:`https://example.com`,variant:e,color:r,children:[t,` link`]}),` `,`inside a paragraph.`]})}),(0,f.jsxs)(`div`,{style:{fontSize:`12px`,color:p.textSlate},children:[`variant="`,e,`" — `,n]})]},e)),(0,f.jsx)(s,{code:`// Default — animated border-bottom on hover
<Link href="https://example.com" variant="default">Default link</Link>

// Subtle — secondary color, same hover behavior
<Link href="https://example.com" variant="subtle">Subtle link</Link>

// Plain — no underline, color only
<Link href="https://example.com" variant="plain">Plain link</Link>`,language:`jsx`,title:`JSX`})]})})},_={render:()=>(0,f.jsx)(o,{children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,padding:`32px`},children:[[{value:`primary`,label:`Primary`},{value:`secondary`,label:`Secondary`},{value:`tertiary`,label:`Tertiary`},{value:`success`,label:`Success`},{value:`error`,label:`Error`},{value:`warning`,label:`Warning`},{value:`info`,label:`Info`},{value:`inverse`,label:`Inverse`}].map(({value:e,label:t})=>(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`16px`},children:[(0,f.jsxs)(`div`,{style:{width:`100px`,fontSize:`12px`,color:p.textSlate},children:[`color="`,e,`"`]}),(0,f.jsxs)(i,{href:`https://example.com`,color:e,children:[t,` link`]})]},e)),(0,f.jsx)(s,{code:`<Link href="https://example.com" color="primary">Primary</Link>
<Link href="https://example.com" color="secondary">Secondary</Link>
<Link href="https://example.com" color="success">Success</Link>
<Link href="https://example.com" color="error">Error</Link>`,language:`jsx`,title:`JSX`})]})})},v={render:()=>(0,f.jsx)(o,{children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,padding:`32px`},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,f.jsx)(l,{children:(0,f.jsxs)(a,{as:`p`,variant:`body`,children:[`Internal link:`,` `,(0,f.jsx)(i,{href:`https://example.com`,target:`_self`,children:`opens in same tab`})]})}),(0,f.jsx)(`div`,{style:{fontSize:`12px`,color:p.textSlate},children:`target="_self" — no rel attribute added`})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,f.jsx)(l,{children:(0,f.jsxs)(a,{as:`p`,variant:`body`,children:[`External link:`,` `,(0,f.jsx)(i,{href:`https://github.com`,target:`_blank`,children:`opens in new tab`})]})}),(0,f.jsx)(`div`,{style:{fontSize:`12px`,color:p.textSlate},children:`target="_blank" — auto adds rel="noopener noreferrer" for security`})]}),(0,f.jsx)(s,{code:`// Internal link — no rel added automatically
<Link href="/about" target="_self">About</Link>

// External link — rel="noopener noreferrer" added automatically
<Link href="https://github.com" target="_blank">GitHub</Link>

// Override rel manually
<Link href="https://example.com" target="_blank" rel="noopener">Custom rel</Link>`,language:`jsx`,title:`JSX`})]})})},y={render:()=>(0,f.jsx)(o,{children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,padding:`32px`},children:[(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:(0,f.jsxs)(a,{as:`p`,variant:`body-large`,children:[`My work is split between`,` `,(0,f.jsx)(i,{href:`https://github.com/noofreuuuh`,target:`_blank`,children:`noofreuuuh`}),` `,`and`,` `,(0,f.jsx)(i,{href:`https://github.com/smouillour`,target:`_blank`,children:`smouillour`}),`.`]})}),(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:(0,f.jsxs)(a,{as:`p`,variant:`body`,color:`secondary`,children:[`Built with`,` `,(0,f.jsx)(i,{href:`https://react.dev`,target:`_blank`,color:`secondary`,children:`React`}),` `,`and the`,` `,(0,f.jsx)(i,{href:`https://github.com/grasdouble/Lufa-Design-System`,target:`_blank`,color:`secondary`,children:`Lufa Design System`}),`.`]})}),(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:(0,f.jsxs)(a,{as:`p`,variant:`body-small`,children:[`Read the`,` `,(0,f.jsx)(i,{href:`/docs`,variant:`plain`,children:`documentation`}),` `,`or check the`,` `,(0,f.jsx)(i,{href:`/changelog`,variant:`plain`,children:`changelog`}),`.`]})}),(0,f.jsx)(s,{code:`import { Link, Text } from '@grasdouble/lufa_design-system';

<Text as="p" variant="body-large">
  My work is split between{' '}
  <Link href="https://github.com/noofreuuuh" target="_blank">
    noofreuuuh
  </Link>{' '}
  and{' '}
  <Link href="https://github.com/smouillour" target="_blank">
    smouillour
  </Link>.
</Text>`,language:`jsx`,title:`JSX`})]})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://github.com/grasdouble/Lufa-Design-System',
    target: '_blank',
    variant: 'default',
    children: 'Lufa Design System'
  },
  render: args => {
    return <StoryContainer>
        <div style={{
        padding: '32px',
        background: NEUTRAL.backgroundLight,
        borderRadius: '8px'
      }}>
          <Text as="p" variant="body">
            Visit the <Link {...args} /> on GitHub.
          </Text>
        </div>
      </StoryContainer>;
  }
}`,...h.parameters?.docs?.source},description:{story:`## Playground

Interactive playground to experiment with all Link props.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants = [{
      value: 'default' as const,
      label: 'Default',
      description: 'Colored text with animated border-bottom on hover',
      color: 'primary' as const
    }, {
      value: 'subtle' as const,
      label: 'Subtle',
      description: 'Secondary text color, same hover border behavior',
      color: 'secondary' as const
    }, {
      value: 'plain' as const,
      label: 'Plain',
      description: 'No underline, color only — for use inside buttons or badges',
      color: 'primary' as const
    }];
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '32px'
      }}>
          {variants.map(({
          value,
          label,
          description,
          color
        }) => <div key={value} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
              <PropCard>
                <Text as="p" variant="body">
                  Example with{' '}
                  <Link href="https://example.com" variant={value} color={color}>
                    {label} link
                  </Link>{' '}
                  inside a paragraph.
                </Text>
              </PropCard>
              <div style={{
            fontSize: '12px',
            color: NEUTRAL.textSlate
          }}>
                variant="{value}" — {description}
              </div>
            </div>)}

          <CodeBlock code={\`// Default — animated border-bottom on hover
<Link href="https://example.com" variant="default">Default link</Link>

// Subtle — secondary color, same hover behavior
<Link href="https://example.com" variant="subtle">Subtle link</Link>

// Plain — no underline, color only
<Link href="https://example.com" variant="plain">Plain link</Link>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...g.parameters?.docs?.source},description:{story:"## Prop: `variant`\n\nControls the visual style of the link.\n\n- **`default`**: colored text + animated border-bottom on hover\n- **`subtle`**: secondary text color, same animated border behavior\n- **`plain`**: no underline, color only — for use inside buttons or badges",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = [{
      value: 'primary' as const,
      label: 'Primary'
    }, {
      value: 'secondary' as const,
      label: 'Secondary'
    }, {
      value: 'tertiary' as const,
      label: 'Tertiary'
    }, {
      value: 'success' as const,
      label: 'Success'
    }, {
      value: 'error' as const,
      label: 'Error'
    }, {
      value: 'warning' as const,
      label: 'Warning'
    }, {
      value: 'info' as const,
      label: 'Info'
    }, {
      value: 'inverse' as const,
      label: 'Inverse'
    }];
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '32px'
      }}>
          {colors.map(({
          value,
          label
        }) => <div key={value} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
              <div style={{
            width: '100px',
            fontSize: '12px',
            color: NEUTRAL.textSlate
          }}>color="{value}"</div>
              <Link href="https://example.com" color={value}>
                {label} link
              </Link>
            </div>)}

          <CodeBlock code={\`<Link href="https://example.com" color="primary">Primary</Link>
<Link href="https://example.com" color="secondary">Secondary</Link>
<Link href="https://example.com" color="success">Success</Link>
<Link href="https://example.com" color="error">Error</Link>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,..._.parameters?.docs?.source},description:{story:"## Prop: `color`\n\nControls the text color using semantic tokens — same values as the Text component.\n\nWhen not specified, defaults to `'primary'` for `default`/`plain` variants\nand `'secondary'` for the `subtle` variant.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '32px'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
            <PropCard>
              <Text as="p" variant="body">
                Internal link:{' '}
                <Link href="https://example.com" target="_self">
                  opens in same tab
                </Link>
              </Text>
            </PropCard>
            <div style={{
            fontSize: '12px',
            color: NEUTRAL.textSlate
          }}>target="_self" — no rel attribute added</div>
          </div>

          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
            <PropCard>
              <Text as="p" variant="body">
                External link:{' '}
                <Link href="https://github.com" target="_blank">
                  opens in new tab
                </Link>
              </Text>
            </PropCard>
            <div style={{
            fontSize: '12px',
            color: NEUTRAL.textSlate
          }}>
              target="_blank" — auto adds rel="noopener noreferrer" for security
            </div>
          </div>

          <CodeBlock code={\`// Internal link — no rel added automatically
<Link href="/about" target="_self">About</Link>

// External link — rel="noopener noreferrer" added automatically
<Link href="https://github.com" target="_blank">GitHub</Link>

// Override rel manually
<Link href="https://example.com" target="_blank" rel="noopener">Custom rel</Link>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...v.parameters?.docs?.source},description:{story:'## Prop: `target`\n\nWhere to open the linked URL.\n\nWhen `target="_blank"`, `rel="noopener noreferrer"` is automatically applied\nfor security (prevents tab-nabbing). Override with an explicit `rel` prop.',...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '32px'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
            <Text as="p" variant="body-large">
              My work is split between{' '}
              <Link href="https://github.com/noofreuuuh" target="_blank">
                noofreuuuh
              </Link>{' '}
              and{' '}
              <Link href="https://github.com/smouillour" target="_blank">
                smouillour
              </Link>
              .
            </Text>
          </div>

          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
            <Text as="p" variant="body" color="secondary">
              Built with{' '}
              <Link href="https://react.dev" target="_blank" color="secondary">
                React
              </Link>{' '}
              and the{' '}
              <Link href="https://github.com/grasdouble/Lufa-Design-System" target="_blank" color="secondary">
                Lufa Design System
              </Link>
              .
            </Text>
          </div>

          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
            <Text as="p" variant="body-small">
              Read the{' '}
              <Link href="/docs" variant="plain">
                documentation
              </Link>{' '}
              or check the{' '}
              <Link href="/changelog" variant="plain">
                changelog
              </Link>
              .
            </Text>
          </div>

          <CodeBlock code={\`import { Link, Text } from '@grasdouble/lufa_design-system';

<Text as="p" variant="body-large">
  My work is split between{' '}
  <Link href="https://github.com/noofreuuuh" target="_blank">
    noofreuuuh
  </Link>{' '}
  and{' '}
  <Link href="https://github.com/smouillour" target="_blank">
    smouillour
  </Link>.
</Text>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...y.parameters?.docs?.source},description:{story:`## Inline Usage

The Link component is designed to be used inline inside \`<Text>\` components.
It inherits font-size and font-weight from the parent context.`,...y.parameters?.docs?.description}}},b=[`Playground`,`PropVariant`,`PropColor`,`PropTarget`,`InlineUsage`]}))();export{y as InlineUsage,h as Playground,_ as PropColor,v as PropTarget,g as PropVariant,b as __namedExportsOrder,m as default};