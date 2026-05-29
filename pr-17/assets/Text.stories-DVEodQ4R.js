import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n,w as r}from"./iframe-Bm_r3Ygs.js";import{S as i,b as a}from"./lufa-ui-B9ODeQns.js";import{b as o,g as s,t as c,v as l}from"./helpers-D9bnZ3qZ.js";import{r as u,t as d}from"./storyColors-RAOlxH1p.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{f=t(r(),1),i(),c(),u(),p=n(),m=d.neutral,h=d.primary,g={title:`5. Content/Text`,component:a,parameters:{layout:`fullscreen`,docs:{description:{component:`Text - Typography Primitive Component

A flexible, polymorphic typography component that provides consistent text styling
across the Lufa Design System.

## Features
- ✅ Typography scale (h1-h6, body variants, caption, label)
- ✅ Semantic color values (8 colors)
- ✅ Font weight control (4 weights)
- ✅ Text alignment (4 alignments)
- ✅ Text transformation (4 transforms)
- ✅ Polymorphic \`as\` prop for semantic HTML
- ✅ Performance-optimized (CSS classes, not inline styles)`}}},argTypes:{as:{control:`select`,options:[`p`,`span`,`div`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`label`,`legend`,`figcaption`],description:`HTML element to render`,table:{category:`Polymorphic`,type:{summary:`ElementType`},defaultValue:{summary:`p`}}},variant:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`body-large`,`body`,`body-small`,`caption`,`label`],description:`Typography variant (semantic scale)`,table:{category:`Typography`,type:{summary:`VariantValue`},defaultValue:{summary:`body`}}},color:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`success`,`error`,`warning`,`info`,`inverse`],description:`Text color (semantic tokens)`,table:{category:`Typography`,type:{summary:`ColorValue`},defaultValue:{summary:`primary`}}},weight:{control:`select`,options:[`normal`,`medium`,`semibold`,`bold`],description:`Font weight`,table:{category:`Typography`,type:{summary:`WeightValue`},defaultValue:{summary:`normal`}}},align:{control:`select`,options:[`left`,`center`,`right`,`justify`],description:`Text alignment`,table:{category:`Typography`,type:{summary:`AlignValue`},defaultValue:{summary:`left`}}},transform:{control:`select`,options:[`none`,`uppercase`,`lowercase`,`capitalize`],description:`Text transformation`,table:{category:`Typography`,type:{summary:`TransformValue`},defaultValue:{summary:`none`}}},children:{control:`text`,table:{category:`Content`,type:{summary:`ReactNode`}}},className:{control:`text`,table:{category:`Advanced`,type:{summary:`string`}}}}},_={args:{variant:`body`,color:`primary`,weight:`normal`,align:`left`,transform:`none`,children:`The quick brown fox jumps over the lazy dog.`},render:e=>(0,p.jsx)(o,{children:(0,p.jsx)(`div`,{style:{padding:`32px`,background:d.neutral.backgroundLight,borderRadius:`8px`},children:(0,p.jsx)(a,{...e})})})},v={render:()=>{let[e,t]=f.useState(`body`),n=[{value:`h1`,label:`Heading 1`,example:`Extra Large Heading`},{value:`h2`,label:`Heading 2`,example:`Large Heading`},{value:`h3`,label:`Heading 3`,example:`Medium Heading`},{value:`h4`,label:`Heading 4`,example:`Small Heading`},{value:`h5`,label:`Heading 5`,example:`Extra Small Heading`},{value:`h6`,label:`Heading 6`,example:`Smallest Heading`},{value:`body-large`,label:`Body Large`,example:`Large body text for emphasis`},{value:`body`,label:`Body`,example:`Standard body text for paragraphs`},{value:`body-small`,label:`Body Small`,example:`Small body text for secondary content`},{value:`caption`,label:`Caption`,example:`Caption text for images and figures`},{value:`label`,label:`Label`,example:`Label text for form fields`}];return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:n.map(({value:n,label:r,example:i})=>(0,p.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,p.jsx)(l,{label:`variant="${n}"`,highlight:e===n,children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,p.jsx)(`div`,{style:{fontSize:`12px`,fontWeight:600,color:m.textSlate},children:r}),(0,p.jsx)(a,{variant:n,children:i})]})})},n))}),(0,p.jsx)(s,{code:(e=>`<Text variant="${e}">
  ${n.find(t=>t.value===e)?.example??`Text content`}
</Text>`)(e),language:`jsx`,title:`JSX`,subtitle:`variant="${e}"`})]})})}},y={render:()=>{let[e,t]=f.useState(`primary`),n=[{value:`primary`,label:`Primary`,description:`Default text color`},{value:`secondary`,label:`Secondary`,description:`Secondary text (less emphasis)`},{value:`tertiary`,label:`Tertiary`,description:`Tertiary text (least emphasis)`},{value:`success`,label:`Success`,description:`Success state (green)`},{value:`error`,label:`Error`,description:`Error state (red)`},{value:`warning`,label:`Warning`,description:`Warning state (amber)`},{value:`info`,label:`Info`,description:`Info state (blue)`},{value:`inverse`,label:`Inverse`,description:`Inverse text (for dark backgrounds)`}];return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(250px, 1fr))`,gap:`20px`},children:n.map(({value:n,label:r,description:i})=>(0,p.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,p.jsx)(l,{label:`color="${n}"`,highlight:e===n,children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,p.jsx)(a,{variant:`body`,weight:`semibold`,color:n,children:r}),(0,p.jsx)(a,{variant:`body-small`,color:n,children:i})]})})},n))}),(0,p.jsx)(s,{code:(e=>`<Text color="${e}">
  ${n.find(t=>t.value===e)?.description??`Text content`}
</Text>`)(e),language:`jsx`,title:`JSX`,subtitle:`color="${e}"`})]})})}},b={render:()=>{let[e,t]=f.useState(`normal`),n=[{value:`normal`,label:`Normal (400)`,example:`Regular weight text`},{value:`medium`,label:`Medium (500)`,example:`Medium weight text`},{value:`semibold`,label:`Semibold (600)`,example:`Semibold weight text`},{value:`bold`,label:`Bold (700)`,example:`Bold weight text`}];return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(250px, 1fr))`,gap:`20px`},children:n.map(({value:n,label:r,example:i})=>(0,p.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,p.jsx)(l,{label:`weight="${n}"`,highlight:e===n,children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,p.jsx)(`div`,{style:{fontSize:`12px`,fontWeight:600,color:m.textSlate},children:r}),(0,p.jsx)(a,{variant:`body`,weight:n,children:i})]})})},n))}),(0,p.jsx)(s,{code:(e=>`<Text weight="${e}">
  ${n.find(t=>t.value===e)?.example??`Text content`}
</Text>`)(e),language:`jsx`,title:`JSX`,subtitle:`weight="${e}"`})]})})}},x={render:()=>{let[e,t]=f.useState(`left`);return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[`left`,`center`,`right`,`justify`].map(n=>(0,p.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,p.jsx)(l,{label:`align="${n}"`,highlight:e===n,children:(0,p.jsx)(`div`,{style:{border:`2px dashed ${d.neutral.borderMedium}`,padding:`16px`,borderRadius:`8px`},children:(0,p.jsx)(a,{variant:`body`,align:n,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})})})},n))}),(0,p.jsx)(s,{code:(e=>`<Text align="${e}">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Text>`)(e),language:`jsx`,title:`JSX`,subtitle:`align="${e}"`})]})})}},S={render:()=>{let[e,t]=f.useState(`none`),n=[{value:`none`,label:`None`,example:`The Quick Brown Fox`},{value:`uppercase`,label:`Uppercase`,example:`The Quick Brown Fox`},{value:`lowercase`,label:`Lowercase`,example:`The Quick Brown Fox`},{value:`capitalize`,label:`Capitalize`,example:`the quick brown fox`}];return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(250px, 1fr))`,gap:`20px`},children:n.map(({value:n,label:r,example:i})=>(0,p.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,p.jsx)(l,{label:`transform="${n}"`,highlight:e===n,children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,p.jsx)(`div`,{style:{fontSize:`12px`,fontWeight:600,color:m.textSlate},children:r}),(0,p.jsx)(a,{variant:`body`,transform:n,children:i})]})})},n))}),(0,p.jsx)(s,{code:(e=>`<Text transform="${e}">
  ${n.find(t=>t.value===e)?.example??`Text content`}
</Text>`)(e),language:`jsx`,title:`JSX`,subtitle:`transform="${e}"`})]})})}},C={render:()=>{let[e,t]=f.useState(`p`);return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(200px, 1fr))`,gap:`16px`},children:[`p`,`span`,`div`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`label`].map(n=>(0,p.jsx)(l,{label:`<${n}>`,highlight:e===n,onInteraction:()=>t(n),interactionType:`click`,children:(0,p.jsx)(a,{as:n,variant:`body`,style:{padding:`16px`,background:d.neutral.backgroundLight,borderRadius:`8px`,border:`2px solid ${d.neutral.borderMedium}`,display:`block`,textAlign:`center`},children:n})},n))}),(0,p.jsx)(s,{code:(e=>`<Text as="${e}" variant="body">
  Text content
</Text>`)(e),language:`jsx`,title:`JSX`,subtitle:`as="${e}"`})]})})}},w={render:()=>(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`},children:[(0,p.jsxs)(`section`,{children:[(0,p.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600},children:`Article Header`}),(0,p.jsxs)(`div`,{style:{padding:`24px`,background:d.neutral.backgroundLight,borderRadius:`8px`},children:[(0,p.jsx)(a,{variant:`h1`,weight:`bold`,align:`left`,children:`The Future of Design Systems`}),(0,p.jsx)(a,{variant:`body`,color:`secondary`,style:{marginTop:`8px`},children:`Published on January 24, 2026`})]})]}),(0,p.jsxs)(`section`,{children:[(0,p.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600},children:`Product Card`}),(0,p.jsxs)(`div`,{style:{padding:`24px`,background:d.neutral.backgroundLight,borderRadius:`12px`,border:`1px solid ${d.neutral.borderMedium}`},children:[(0,p.jsx)(a,{variant:`label`,transform:`uppercase`,weight:`semibold`,color:`secondary`,children:`Featured Product`}),(0,p.jsx)(a,{variant:`h3`,weight:`bold`,style:{marginTop:`8px`},children:`Premium Membership`}),(0,p.jsx)(a,{variant:`body`,color:`secondary`,style:{marginTop:`12px`},children:`Get access to exclusive features, priority support, and advanced analytics.`}),(0,p.jsxs)(a,{variant:`h4`,weight:`bold`,color:`success`,style:{marginTop:`16px`,display:`flex`,alignItems:`baseline`,gap:`8px`},children:[`$29.99`,(0,p.jsx)(a,{as:`span`,variant:`body-small`,color:`tertiary`,weight:`normal`,children:`/month`})]})]})]}),(0,p.jsxs)(`section`,{children:[(0,p.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600},children:`Status Messages`}),(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,p.jsx)(`div`,{style:{padding:`16px`,background:h.green.light,borderRadius:`8px`,border:`1px solid ${h.green.main}`},children:(0,p.jsx)(a,{variant:`body`,color:`success`,weight:`semibold`,children:`✓ Operation completed successfully!`})}),(0,p.jsx)(`div`,{style:{padding:`16px`,background:h.pink.light,borderRadius:`8px`,border:`1px solid ${h.pink.main}`},children:(0,p.jsx)(a,{variant:`body`,color:`error`,weight:`semibold`,children:`✗ An error occurred. Please try again.`})}),(0,p.jsx)(`div`,{style:{padding:`16px`,background:h.orange.light,borderRadius:`8px`,border:`1px solid ${h.orange.main}`},children:(0,p.jsx)(a,{variant:`body`,color:`warning`,weight:`semibold`,children:`⚠ This action cannot be undone.`})}),(0,p.jsx)(`div`,{style:{padding:`16px`,background:h.blue.light,borderRadius:`8px`,border:`1px solid ${h.blue.main}`},children:(0,p.jsx)(a,{variant:`body`,color:`info`,weight:`semibold`,children:`ℹ New updates are available.`})})]})]}),(0,p.jsxs)(`section`,{children:[(0,p.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600},children:`Form Layout`}),(0,p.jsxs)(`div`,{style:{padding:`24px`,background:d.neutral.backgroundLight,borderRadius:`8px`},children:[(0,p.jsxs)(`div`,{style:{marginBottom:`20px`},children:[(0,p.jsx)(a,{as:`label`,variant:`label`,weight:`semibold`,style:{display:`block`,marginBottom:`4px`},children:`Email Address`}),(0,p.jsx)(a,{variant:`caption`,color:`tertiary`,style:{display:`block`,marginBottom:`8px`},children:`We'll never share your email with anyone else.`}),(0,p.jsx)(`input`,{type:`email`,placeholder:`Enter your email`,style:{width:`100%`,padding:`8px 12px`,borderRadius:`6px`,border:`1px solid ${m.borderMedium}`,fontSize:`14px`}})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(a,{as:`label`,variant:`label`,weight:`semibold`,style:{display:`block`,marginBottom:`4px`},children:`Password`}),(0,p.jsx)(a,{variant:`caption`,color:`tertiary`,style:{display:`block`,marginBottom:`8px`},children:`Must be at least 8 characters long.`}),(0,p.jsx)(`input`,{type:`password`,placeholder:`Enter your password`,style:{width:`100%`,padding:`8px 12px`,borderRadius:`6px`,border:`1px solid ${m.borderMedium}`,fontSize:`14px`}})]})]})]}),(0,p.jsxs)(`section`,{children:[(0,p.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600},children:`Typography Hierarchy`}),(0,p.jsxs)(`div`,{style:{padding:`24px`,background:d.neutral.backgroundLight,borderRadius:`8px`},children:[(0,p.jsx)(a,{variant:`h2`,weight:`bold`,children:`Main Title`}),(0,p.jsx)(a,{variant:`h4`,weight:`semibold`,color:`secondary`,style:{marginTop:`8px`},children:`Subtitle or Section Header`}),(0,p.jsx)(a,{variant:`body-large`,style:{marginTop:`16px`},children:`This is a large body text paragraph that provides emphasis or introduction to the content below.`}),(0,p.jsx)(a,{variant:`body`,color:`secondary`,style:{marginTop:`12px`},children:`This is standard body text used for paragraphs and main content. It should be comfortable to read for extended periods.`}),(0,p.jsx)(a,{variant:`body-small`,color:`tertiary`,style:{marginTop:`8px`},children:`This is small body text used for secondary information or less important details.`}),(0,p.jsx)(a,{variant:`caption`,color:`tertiary`,align:`center`,style:{marginTop:`16px`},children:`Caption text centered at the bottom`})]})]})]})})},T={render:()=>(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`40px`},children:[(0,p.jsxs)(`section`,{children:[(0,p.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600},children:`Blog Post Layout`}),(0,p.jsxs)(`article`,{style:{maxWidth:`700px`,padding:`32px`,background:d.themed.background.surface,borderRadius:`12px`,boxShadow:d.themed.shadow.md},children:[(0,p.jsx)(a,{variant:`label`,transform:`uppercase`,color:`secondary`,weight:`semibold`,children:`Technology`}),(0,p.jsx)(a,{variant:`h1`,weight:`bold`,style:{marginTop:`12px`},children:`Building Scalable Design Systems`}),(0,p.jsx)(a,{variant:`body`,color:`secondary`,style:{marginTop:`8px`},children:`By Jane Doe • 5 min read • Jan 24, 2026`}),(0,p.jsx)(a,{variant:`body-large`,style:{marginTop:`24px`},children:`Design systems have become essential for maintaining consistency across large-scale applications. In this article, we'll explore best practices for building and maintaining a scalable design system.`}),(0,p.jsx)(a,{variant:`body`,color:`secondary`,style:{marginTop:`16px`},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`})]})]}),(0,p.jsxs)(`section`,{children:[(0,p.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600},children:`Pricing Cards`}),(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(250px, 1fr))`,gap:`24px`},children:[{name:`Starter`,price:`$9`,features:[`5 Projects`,`10 GB Storage`,`Basic Support`]},{name:`Pro`,price:`$29`,features:[`Unlimited Projects`,`100 GB Storage`,`Priority Support`]},{name:`Enterprise`,price:`$99`,features:[`Everything in Pro`,`Dedicated Support`,`SLA`]}].map((e,t)=>(0,p.jsxs)(`div`,{style:{padding:`24px`,background:d.themed.background.surface,borderRadius:`12px`,border:`2px solid`,borderColor:t===1?d.primary.blue.main:m.borderMedium},children:[(0,p.jsx)(a,{variant:`label`,transform:`uppercase`,weight:`semibold`,color:`secondary`,children:e.name}),(0,p.jsxs)(a,{variant:`h2`,weight:`bold`,style:{marginTop:`8px`,display:`flex`,alignItems:`baseline`},children:[e.price,(0,p.jsx)(a,{as:`span`,variant:`body`,color:`secondary`,weight:`normal`,children:`/month`})]}),(0,p.jsx)(`div`,{style:{marginTop:`20px`,display:`flex`,flexDirection:`column`,gap:`8px`},children:e.features.map(e=>(0,p.jsxs)(a,{variant:`body-small`,children:[`✓ `,e]},e))})]},e.name))})]}),(0,p.jsxs)(`section`,{children:[(0,p.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600},children:`Dashboard Metrics`}),(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:`16px`},children:[{label:`Total Users`,value:`12,345`,change:`+12.5%`,positive:!0},{label:`Revenue`,value:`$98.2K`,change:`+8.3%`,positive:!0},{label:`Bounce Rate`,value:`34.2%`,change:`-2.1%`,positive:!0},{label:`Avg. Session`,value:`4m 32s`,change:`-0.5%`,positive:!1}].map(e=>(0,p.jsxs)(`div`,{style:{padding:`20px`,background:d.themed.background.surface,borderRadius:`8px`,border:`1px solid ${m.borderMedium}`},children:[(0,p.jsx)(a,{variant:`label`,color:`secondary`,children:e.label}),(0,p.jsx)(a,{variant:`h3`,weight:`bold`,style:{marginTop:`4px`},children:e.value}),(0,p.jsxs)(a,{variant:`body-small`,color:e.positive?`success`:`error`,weight:`semibold`,style:{marginTop:`4px`},children:[e.change,` vs last month`]})]},e.label))})]})]})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'body',
    color: 'primary',
    weight: 'normal',
    align: 'left',
    transform: 'none',
    children: 'The quick brown fox jumps over the lazy dog.'
  },
  render: (args: any) => {
    return <StoryContainer>
        <div style={{
        padding: '32px',
        background: STORY_COLORS.neutral.backgroundLight,
        borderRadius: '8px'
      }}>
          <Text {...args} />
        </div>
      </StoryContainer>;
  }
}`,..._.parameters?.docs?.source},description:{story:`## Playground

Interactive playground to experiment with all Text props.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredVariant, setHoveredVariant] = React.useState<string>('body');
    const variantValues = [{
      value: 'h1' as const,
      label: 'Heading 1',
      example: 'Extra Large Heading'
    }, {
      value: 'h2' as const,
      label: 'Heading 2',
      example: 'Large Heading'
    }, {
      value: 'h3' as const,
      label: 'Heading 3',
      example: 'Medium Heading'
    }, {
      value: 'h4' as const,
      label: 'Heading 4',
      example: 'Small Heading'
    }, {
      value: 'h5' as const,
      label: 'Heading 5',
      example: 'Extra Small Heading'
    }, {
      value: 'h6' as const,
      label: 'Heading 6',
      example: 'Smallest Heading'
    }, {
      value: 'body-large' as const,
      label: 'Body Large',
      example: 'Large body text for emphasis'
    }, {
      value: 'body' as const,
      label: 'Body',
      example: 'Standard body text for paragraphs'
    }, {
      value: 'body-small' as const,
      label: 'Body Small',
      example: 'Small body text for secondary content'
    }, {
      value: 'caption' as const,
      label: 'Caption',
      example: 'Caption text for images and figures'
    }, {
      value: 'label' as const,
      label: 'Label',
      example: 'Label text for form fields'
    }];
    const generateCode = (variant: string): string => {
      return \`<Text variant="\${variant}">
  \${variantValues.find(v => v.value === variant)?.example ?? 'Text content'}
</Text>\`;
    };
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          {/* Examples */}
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            {variantValues.map(({
            value,
            label,
            example
          }) => <div key={value} onMouseEnter={() => setHoveredVariant(value)}>
                <PropCard label={\`variant="\${value}"\`} highlight={hoveredVariant === value}>
                  <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                    <div style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: NEUTRAL.textSlate
                }}>{label}</div>
                    <Text variant={value}>{example}</Text>
                  </div>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredVariant)} language="jsx" title="JSX" subtitle={\`variant="\${hoveredVariant}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...v.parameters?.docs?.source},description:{story:`## Prop: \`variant\`

Controls the typography scale (font size and line height).`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredColor, setHoveredColor] = React.useState<string>('primary');
    {
      /* 
      💡 TOKEN EDUCATION: Semantic Text Colors
      
      Text color uses semantic UI text tokens:
      
      - color="primary" → STORY_COLORS.themed.text.primary
        Default text color for headings and body text
        
      - color="secondary" → STORY_COLORS.themed.text.secondary
        Supporting text with less emphasis
        
      - color="tertiary" → STORY_COLORS.themed.text.tertiary
        Subtle text with least emphasis (captions, metadata)
        
      - color="success/error/warning/info" → Semantic state colors
        Used for status messages and feedback
        
      - color="inverse" → var(--lufa-semantic-ui-text-inverse)
        Text on dark backgrounds (automatically switches in dark mode)
      
      ✅ Accessibility:
      - All color combinations meet WCAG AA contrast ratios
      - Automatically adjusts in light/dark/high-contrast modes
      - Never use hard-coded text colors in production!
      
      Try switching themes to see automatic contrast adjustments!
      */
    }
    const colorValues = [{
      value: 'primary' as const,
      label: 'Primary',
      description: 'Default text color'
    }, {
      value: 'secondary' as const,
      label: 'Secondary',
      description: 'Secondary text (less emphasis)'
    }, {
      value: 'tertiary' as const,
      label: 'Tertiary',
      description: 'Tertiary text (least emphasis)'
    }, {
      value: 'success' as const,
      label: 'Success',
      description: 'Success state (green)'
    }, {
      value: 'error' as const,
      label: 'Error',
      description: 'Error state (red)'
    }, {
      value: 'warning' as const,
      label: 'Warning',
      description: 'Warning state (amber)'
    }, {
      value: 'info' as const,
      label: 'Info',
      description: 'Info state (blue)'
    }, {
      value: 'inverse' as const,
      label: 'Inverse',
      description: 'Inverse text (for dark backgrounds)'
    }];
    const generateCode = (color: string): string => {
      return \`<Text color="\${color}">
  \${colorValues.find(c => c.value === color)?.description ?? 'Text content'}
</Text>\`;
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
            {colorValues.map(({
            value,
            label,
            description
          }) => <div key={value} onMouseEnter={() => setHoveredColor(value)}>
                <PropCard label={\`color="\${value}"\`} highlight={hoveredColor === value}>
                  <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                    <Text variant="body" weight="semibold" color={value}>
                      {label}
                    </Text>
                    <Text variant="body-small" color={value}>
                      {description}
                    </Text>
                  </div>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredColor)} language="jsx" title="JSX" subtitle={\`color="\${hoveredColor}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...y.parameters?.docs?.source},description:{story:`## Prop: \`color\`

Controls the text color using semantic tokens.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredWeight, setHoveredWeight] = React.useState<string>('normal');
    const weightValues = [{
      value: 'normal' as const,
      label: 'Normal (400)',
      example: 'Regular weight text'
    }, {
      value: 'medium' as const,
      label: 'Medium (500)',
      example: 'Medium weight text'
    }, {
      value: 'semibold' as const,
      label: 'Semibold (600)',
      example: 'Semibold weight text'
    }, {
      value: 'bold' as const,
      label: 'Bold (700)',
      example: 'Bold weight text'
    }];
    const generateCode = (weight: string): string => {
      return \`<Text weight="\${weight}">
  \${weightValues.find(w => w.value === weight)?.example ?? 'Text content'}
</Text>\`;
    };
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          {/* Examples */}
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
            {weightValues.map(({
            value,
            label,
            example
          }) => <div key={value} onMouseEnter={() => setHoveredWeight(value)}>
                <PropCard label={\`weight="\${value}"\`} highlight={hoveredWeight === value}>
                  <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                    <div style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: NEUTRAL.textSlate
                }}>{label}</div>
                    <Text variant="body" weight={value}>
                      {example}
                    </Text>
                  </div>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredWeight)} language="jsx" title="JSX" subtitle={\`weight="\${hoveredWeight}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...b.parameters?.docs?.source},description:{story:`## Prop: \`weight\`

Controls the font weight.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredAlign, setHoveredAlign] = React.useState<string>('left');
    const alignValues = ['left', 'center', 'right', 'justify'] as const;
    const generateCode = (align: string): string => {
      return \`<Text align="\${align}">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Text>\`;
    };
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          {/* Examples */}
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
            {alignValues.map(value => <div key={value} onMouseEnter={() => setHoveredAlign(value)}>
                <PropCard label={\`align="\${value}"\`} highlight={hoveredAlign === value}>
                  <div style={{
                border: \`2px dashed \${STORY_COLORS.neutral.borderMedium}\`,
                padding: '16px',
                borderRadius: '8px'
              }}>
                    <Text variant="body" align={value}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </Text>
                  </div>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredAlign)} language="jsx" title="JSX" subtitle={\`align="\${hoveredAlign}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...x.parameters?.docs?.source},description:{story:`## Prop: \`align\`

Controls text alignment.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredTransform, setHoveredTransform] = React.useState<string>('none');
    const transformValues = [{
      value: 'none' as const,
      label: 'None',
      example: 'The Quick Brown Fox'
    }, {
      value: 'uppercase' as const,
      label: 'Uppercase',
      example: 'The Quick Brown Fox'
    }, {
      value: 'lowercase' as const,
      label: 'Lowercase',
      example: 'The Quick Brown Fox'
    }, {
      value: 'capitalize' as const,
      label: 'Capitalize',
      example: 'the quick brown fox'
    }];
    const generateCode = (transform: string): string => {
      return \`<Text transform="\${transform}">
  \${transformValues.find(t => t.value === transform)?.example ?? 'Text content'}
</Text>\`;
    };
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          {/* Examples */}
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
            {transformValues.map(({
            value,
            label,
            example
          }) => <div key={value} onMouseEnter={() => setHoveredTransform(value)}>
                <PropCard label={\`transform="\${value}"\`} highlight={hoveredTransform === value}>
                  <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                    <div style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: NEUTRAL.textSlate
                }}>{label}</div>
                    <Text variant="body" transform={value}>
                      {example}
                    </Text>
                  </div>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredTransform)} language="jsx" title="JSX" subtitle={\`transform="\${hoveredTransform}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...S.parameters?.docs?.source},description:{story:`## Prop: \`transform\`

Controls text transformation.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedElement, setSelectedElement] = React.useState<string>('p');
    const generateCode = (element: string): string => {
      return \`<Text as="\${element}" variant="body">
  Text content
</Text>\`;
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '16px'
        }}>
            {(['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label'] as const).map(element => <PropCard key={element} label={\`<\${element}>\`} highlight={selectedElement === element} onInteraction={() => setSelectedElement(element)} interactionType="click">
                <Text as={element} variant="body" style={{
              padding: '16px',
              background: STORY_COLORS.neutral.backgroundLight,
              borderRadius: '8px',
              border: \`2px solid \${STORY_COLORS.neutral.borderMedium}\`,
              display: 'block',
              textAlign: 'center'
            }}>
                  {element}
                </Text>
              </PropCard>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(selectedElement)} language="jsx" title="JSX" subtitle={\`as="\${selectedElement}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...C.parameters?.docs?.source},description:{story:`## Prop: \`as\`

Renders Text as different HTML elements for semantic markup.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
          {/* Example 1: Article Header */}
          <section>
            <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Article Header</h3>
            <div style={{
            padding: '24px',
            background: STORY_COLORS.neutral.backgroundLight,
            borderRadius: '8px'
          }}>
              <Text variant="h1" weight="bold" align="left">
                The Future of Design Systems
              </Text>
              <Text variant="body" color="secondary" style={{
              marginTop: '8px'
            }}>
                Published on January 24, 2026
              </Text>
            </div>
          </section>

          {/* Example 2: Card with Multiple Text Styles */}
          <section>
            <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Product Card</h3>
            <div style={{
            padding: '24px',
            background: STORY_COLORS.neutral.backgroundLight,
            borderRadius: '12px',
            border: \`1px solid \${STORY_COLORS.neutral.borderMedium}\`
          }}>
              <Text variant="label" transform="uppercase" weight="semibold" color="secondary">
                Featured Product
              </Text>
              <Text variant="h3" weight="bold" style={{
              marginTop: '8px'
            }}>
                Premium Membership
              </Text>
              <Text variant="body" color="secondary" style={{
              marginTop: '12px'
            }}>
                Get access to exclusive features, priority support, and advanced analytics.
              </Text>
              <Text variant="h4" weight="bold" color="success" style={{
              marginTop: '16px',
              display: 'flex',
              alignItems: 'baseline',
              gap: '8px'
            }}>
                $29.99
                <Text as="span" variant="body-small" color="tertiary" weight="normal">
                  /month
                </Text>
              </Text>
            </div>
          </section>

          {/* Example 3: Status Messages */}
          <section>
            <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Status Messages</h3>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
              <div style={{
              padding: '16px',
              background: PRIMARY.green.light,
              borderRadius: '8px',
              border: \`1px solid \${PRIMARY.green.main}\`
            }}>
                <Text variant="body" color="success" weight="semibold">
                  ✓ Operation completed successfully!
                </Text>
              </div>
              <div style={{
              padding: '16px',
              background: PRIMARY.pink.light,
              borderRadius: '8px',
              border: \`1px solid \${PRIMARY.pink.main}\`
            }}>
                <Text variant="body" color="error" weight="semibold">
                  ✗ An error occurred. Please try again.
                </Text>
              </div>
              <div style={{
              padding: '16px',
              background: PRIMARY.orange.light,
              borderRadius: '8px',
              border: \`1px solid \${PRIMARY.orange.main}\`
            }}>
                <Text variant="body" color="warning" weight="semibold">
                  ⚠ This action cannot be undone.
                </Text>
              </div>
              <div style={{
              padding: '16px',
              background: PRIMARY.blue.light,
              borderRadius: '8px',
              border: \`1px solid \${PRIMARY.blue.main}\`
            }}>
                <Text variant="body" color="info" weight="semibold">
                  ℹ New updates are available.
                </Text>
              </div>
            </div>
          </section>

          {/* Example 4: Form Labels and Descriptions */}
          <section>
            <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Form Layout</h3>
            <div style={{
            padding: '24px',
            background: STORY_COLORS.neutral.backgroundLight,
            borderRadius: '8px'
          }}>
              <div style={{
              marginBottom: '20px'
            }}>
                <Text as="label" variant="label" weight="semibold" style={{
                display: 'block',
                marginBottom: '4px'
              }}>
                  Email Address
                </Text>
                <Text variant="caption" color="tertiary" style={{
                display: 'block',
                marginBottom: '8px'
              }}>
                  We'll never share your email with anyone else.
                </Text>
                <input type="email" placeholder="Enter your email" style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '6px',
                border: \`1px solid \${NEUTRAL.borderMedium}\`,
                fontSize: '14px'
              }} />
              </div>
              <div>
                <Text as="label" variant="label" weight="semibold" style={{
                display: 'block',
                marginBottom: '4px'
              }}>
                  Password
                </Text>
                <Text variant="caption" color="tertiary" style={{
                display: 'block',
                marginBottom: '8px'
              }}>
                  Must be at least 8 characters long.
                </Text>
                <input type="password" placeholder="Enter your password" style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '6px',
                border: \`1px solid \${NEUTRAL.borderMedium}\`,
                fontSize: '14px'
              }} />
              </div>
            </div>
          </section>

          {/* Example 5: Typography Hierarchy */}
          <section>
            <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Typography Hierarchy</h3>
            <div style={{
            padding: '24px',
            background: STORY_COLORS.neutral.backgroundLight,
            borderRadius: '8px'
          }}>
              <Text variant="h2" weight="bold">
                Main Title
              </Text>
              <Text variant="h4" weight="semibold" color="secondary" style={{
              marginTop: '8px'
            }}>
                Subtitle or Section Header
              </Text>
              <Text variant="body-large" style={{
              marginTop: '16px'
            }}>
                This is a large body text paragraph that provides emphasis or introduction to the content below.
              </Text>
              <Text variant="body" color="secondary" style={{
              marginTop: '12px'
            }}>
                This is standard body text used for paragraphs and main content. It should be comfortable to read for
                extended periods.
              </Text>
              <Text variant="body-small" color="tertiary" style={{
              marginTop: '8px'
            }}>
                This is small body text used for secondary information or less important details.
              </Text>
              <Text variant="caption" color="tertiary" align="center" style={{
              marginTop: '16px'
            }}>
                Caption text centered at the bottom
              </Text>
            </div>
          </section>
        </div>
      </StoryContainer>;
  }
}`,...w.parameters?.docs?.source},description:{story:`## Combined Variants

Real-world examples combining multiple props.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>
          {/* Pattern 1: Blog Post */}
          <section>
            <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Blog Post Layout</h3>
            <article style={{
            maxWidth: '700px',
            padding: '32px',
            background: STORY_COLORS.themed.background.surface,
            borderRadius: '12px',
            boxShadow: STORY_COLORS.themed.shadow.md
          }}>
              <Text variant="label" transform="uppercase" color="secondary" weight="semibold">
                Technology
              </Text>
              <Text variant="h1" weight="bold" style={{
              marginTop: '12px'
            }}>
                Building Scalable Design Systems
              </Text>
              <Text variant="body" color="secondary" style={{
              marginTop: '8px'
            }}>
                By Jane Doe • 5 min read • Jan 24, 2026
              </Text>
              <Text variant="body-large" style={{
              marginTop: '24px'
            }}>
                Design systems have become essential for maintaining consistency across large-scale applications. In
                this article, we'll explore best practices for building and maintaining a scalable design system.
              </Text>
              <Text variant="body" color="secondary" style={{
              marginTop: '16px'
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </Text>
            </article>
          </section>

          {/* Pattern 2: Pricing Card */}
          <section>
            <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Pricing Cards</h3>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
              {[{
              name: 'Starter',
              price: '$9',
              features: ['5 Projects', '10 GB Storage', 'Basic Support']
            }, {
              name: 'Pro',
              price: '$29',
              features: ['Unlimited Projects', '100 GB Storage', 'Priority Support']
            }, {
              name: 'Enterprise',
              price: '$99',
              features: ['Everything in Pro', 'Dedicated Support', 'SLA']
            }].map((plan, idx) => <div key={plan.name} style={{
              padding: '24px',
              background: STORY_COLORS.themed.background.surface,
              borderRadius: '12px',
              border: '2px solid',
              borderColor: idx === 1 ? STORY_COLORS.primary.blue.main : NEUTRAL.borderMedium
            }}>
                  <Text variant="label" transform="uppercase" weight="semibold" color="secondary">
                    {plan.name}
                  </Text>
                  <Text variant="h2" weight="bold" style={{
                marginTop: '8px',
                display: 'flex',
                alignItems: 'baseline'
              }}>
                    {plan.price}
                    <Text as="span" variant="body" color="secondary" weight="normal">
                      /month
                    </Text>
                  </Text>
                  <div style={{
                marginTop: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                    {plan.features.map(feature => <Text key={feature} variant="body-small">
                        ✓ {feature}
                      </Text>)}
                  </div>
                </div>)}
            </div>
          </section>

          {/* Pattern 3: Dashboard Metrics */}
          <section>
            <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Dashboard Metrics</h3>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
              {[{
              label: 'Total Users',
              value: '12,345',
              change: '+12.5%',
              positive: true
            }, {
              label: 'Revenue',
              value: '$98.2K',
              change: '+8.3%',
              positive: true
            }, {
              label: 'Bounce Rate',
              value: '34.2%',
              change: '-2.1%',
              positive: true
            }, {
              label: 'Avg. Session',
              value: '4m 32s',
              change: '-0.5%',
              positive: false
            }].map(metric => <div key={metric.label} style={{
              padding: '20px',
              background: STORY_COLORS.themed.background.surface,
              borderRadius: '8px',
              border: \`1px solid \${NEUTRAL.borderMedium}\`
            }}>
                  <Text variant="label" color="secondary">
                    {metric.label}
                  </Text>
                  <Text variant="h3" weight="bold" style={{
                marginTop: '4px'
              }}>
                    {metric.value}
                  </Text>
                  <Text variant="body-small" color={metric.positive ? 'success' : 'error'} weight="semibold" style={{
                marginTop: '4px'
              }}>
                    {metric.change} vs last month
                  </Text>
                </div>)}
            </div>
          </section>
        </div>
      </StoryContainer>;
  }
}`,...T.parameters?.docs?.source},description:{story:`## Real-World Patterns

Common usage patterns in production applications.`,...T.parameters?.docs?.description}}},E=[`Playground`,`PropVariant`,`PropColor`,`PropWeight`,`PropAlign`,`PropTransform`,`PropAs`,`CombinedVariants`,`RealWorldPatterns`]}))();export{w as CombinedVariants,_ as Playground,x as PropAlign,C as PropAs,y as PropColor,S as PropTransform,v as PropVariant,b as PropWeight,T as RealWorldPatterns,E as __namedExportsOrder,g as default};