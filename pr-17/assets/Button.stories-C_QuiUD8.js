import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n,w as r}from"./iframe-Bm_r3Ygs.js";import{S as i,a}from"./lufa-ui-B9ODeQns.js";import{b as o,g as s,t as c,v as l}from"./helpers-D9bnZ3qZ.js";import{r as u,t as d}from"./storyColors-RAOlxH1p.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{f=t(r(),1),i(),c(),u(),p=n(),m={title:`6. Interaction/Button`,component:a,parameters:{layout:`fullscreen`,docs:{description:{component:`Button - Interactive Action Element

A versatile button component with two-dimensional variant system for flexible
visual styling and semantic meaning.

## Features
- ✅ Two-dimensional variants: \`type\` (visual style) + \`variant\` (semantic color)
- ✅ Three types: solid, outline, ghost
- ✅ Seven semantic variants: primary, secondary, success, danger, warning, info, neutral
- ✅ Icon support (left, right, or icon-only)
- ✅ Loading state with spinner animation
- ✅ Polymorphic rendering (button or anchor element)
- ✅ WCAG 2.1 AA compliant
- ✅ Token-based design (component layer tokens)`}}},argTypes:{type:{control:`select`,options:[`solid`,`outline`,`ghost`],description:`Visual style type`,table:{category:`Variants`,type:{summary:`TypeValue`},defaultValue:{summary:`solid`}}},variant:{control:`select`,options:[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`neutral`],description:`Semantic color variant`,table:{category:`Variants`,type:{summary:`VariantValue`},defaultValue:{summary:`primary`}}},size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Button size`,table:{category:`Size`,type:{summary:`SizeValue`},defaultValue:{summary:`md`}}},radius:{control:`select`,options:[`none`,`sm`,`base`,`md`,`full`],description:`Border radius`,table:{category:`Style`,type:{summary:`RadiusValue`},defaultValue:{summary:`base`}}},iconLeft:{control:`text`,description:`Icon name for left position`,table:{category:`Icons`,type:{summary:`IconName`}}},iconRight:{control:`text`,description:`Icon name for right position`,table:{category:`Icons`,type:{summary:`IconName`}}},disabled:{control:`boolean`,description:`Disabled state`,table:{category:`State`,type:{summary:`boolean`},defaultValue:{summary:`false`}}},loading:{control:`boolean`,description:`Loading state with spinner`,table:{category:`State`,type:{summary:`boolean`},defaultValue:{summary:`false`}}},fullWidth:{control:`boolean`,description:`Full width button`,table:{category:`Layout`,type:{summary:`boolean`},defaultValue:{summary:`false`}}},as:{control:`select`,options:[`button`,`a`],description:`HTML element to render (polymorphic)`,table:{category:`Polymorphic`,type:{summary:`ElementType`},defaultValue:{summary:`button`}}}}},h={render:()=>(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(l,{label:`Default Button`,children:(0,p.jsx)(a,{children:`Click me`})}),(0,p.jsx)(s,{code:`<Button>Click me</Button>`,language:`jsx`,title:`JSX`})]})})},g={name:`Prop: type`,render:()=>{let[e,t]=f.useState(`solid`);return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:`24px`},children:[{value:`solid`,label:`solid`,description:`Filled background (default)`},{value:`outline`,label:`outline`,description:`Border only, transparent background`},{value:`ghost`,label:`ghost`,description:`No border, transparent background`}].map(n=>(0,p.jsx)(l,{label:`type="${n.label}"`,highlight:e===n.value,onInteraction:()=>t(n.value),interactionType:`click`,children:(0,p.jsxs)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,flexDirection:`column`,gap:`16px`,alignItems:`center`},children:[(0,p.jsx)(a,{type:n.value,variant:`primary`,children:n.label}),(0,p.jsx)(`div`,{style:{fontSize:`12px`,color:d.neutral.textSlate,textAlign:`center`},children:n.description})]})},n.value))}),(0,p.jsx)(s,{code:(e=>`<Button type="${e}" variant="primary">
  ${e.charAt(0).toUpperCase()+e.slice(1)} Button
</Button>`)(e),language:`jsx`,title:`JSX`})]})})}},_={name:`Prop: variant`,render:()=>{let[e,t]=f.useState(`primary`);return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:`16px`},children:[{value:`primary`,label:`primary`,description:`Primary action`},{value:`secondary`,label:`secondary`,description:`Secondary action`},{value:`success`,label:`success`,description:`Success / Positive action`},{value:`danger`,label:`danger`,description:`Destructive / Negative action`},{value:`warning`,label:`warning`,description:`Warning / Caution`},{value:`info`,label:`info`,description:`Informational`},{value:`neutral`,label:`neutral`,description:`Neutral / Low-emphasis`}].map(n=>(0,p.jsx)(l,{label:`variant="${n.label}"`,highlight:e===n.value,onInteraction:()=>t(n.value),interactionType:`click`,children:(0,p.jsxs)(`div`,{style:{padding:`20px`,borderRadius:`8px`,display:`flex`,flexDirection:`column`,gap:`12px`,alignItems:`center`},children:[(0,p.jsx)(a,{type:`solid`,variant:n.value,children:n.label}),(0,p.jsx)(`div`,{style:{fontSize:`11px`,color:d.neutral.textSlate,textAlign:`center`},children:n.description})]})},n.value))}),(0,p.jsx)(s,{code:(e=>`<Button type="solid" variant="${e}">
  ${e.charAt(0).toUpperCase()+e.slice(1)}
</Button>`)(e),language:`jsx`,title:`JSX`})]})})}},v={name:`Type + Variant Matrix`,render:()=>{let e=[`solid`,`outline`,`ghost`],t=[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`neutral`];return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`},children:[e.map(e=>(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:d.neutral.text,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`16px`},children:[`Type: `,e]}),(0,p.jsx)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`},children:t.map(t=>(0,p.jsx)(a,{type:e,variant:t,children:t},t))})]},e)),(0,p.jsx)(s,{code:`{/* 21 combinations: 3 types × 7 variants */}
<Button type="solid" variant="primary">Primary</Button>
<Button type="outline" variant="danger">Delete</Button>
<Button type="ghost" variant="neutral">Cancel</Button>`,language:`jsx`,title:`JSX`})]})})}},y={name:`Prop: size`,render:()=>{let[e,t]=f.useState(`md`),n=[{value:`sm`,label:`sm`,height:`32px`,description:`Small`},{value:`md`,label:`md`,height:`40px`,description:`Medium (default)`},{value:`lg`,label:`lg`,height:`48px`,description:`Large`}];return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(250px, 1fr))`,gap:`24px`},children:n.map(n=>(0,p.jsx)(l,{label:`size="${n.label}"`,highlight:e===n.value,onInteraction:()=>t(n.value),interactionType:`click`,children:(0,p.jsxs)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,flexDirection:`column`,gap:`12px`,alignItems:`center`},children:[(0,p.jsxs)(a,{size:n.value,children:[`Button `,n.label]}),(0,p.jsxs)(`div`,{style:{fontSize:`11px`,color:d.neutral.textSlate},children:[`Height: `,n.height,` • `,n.description]})]})},n.value))}),(0,p.jsx)(s,{code:(e=>`<Button size="${e}">${n.find(t=>t.value===e)?.description??e} Button</Button>`)(e),language:`jsx`,title:`JSX`})]})})}},b={name:`Prop: radius`,render:()=>{let[e,t]=f.useState(`base`);return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:`16px`},children:[{value:`none`,label:`none`,px:`0px`,description:`Sharp corners`},{value:`sm`,label:`sm`,px:`2px`,description:`Subtle rounding`},{value:`base`,label:`base`,px:`8px`,description:`Default rounding`},{value:`md`,label:`md`,px:`12px`,description:`Emphasized rounding`},{value:`full`,label:`full`,px:`9999px`,description:`Pill shape`}].map(n=>(0,p.jsx)(l,{label:`radius="${n.label}"`,highlight:e===n.value,onInteraction:()=>t(n.value),interactionType:`click`,children:(0,p.jsxs)(`div`,{style:{padding:`20px`,borderRadius:`8px`,display:`flex`,flexDirection:`column`,gap:`12px`,alignItems:`center`},children:[(0,p.jsx)(a,{radius:n.value,children:n.label}),(0,p.jsxs)(`div`,{style:{fontSize:`11px`,color:d.neutral.textSlate,textAlign:`center`},children:[n.px,` • `,n.description]})]})},n.value))}),(0,p.jsx)(s,{code:(e=>`<Button radius="${e}">${e.charAt(0).toUpperCase()+e.slice(1)}</Button>`)(e),language:`jsx`,title:`JSX`})]})})}},x={name:`Prop: iconLeft / iconRight`,render:()=>{let[e,t]=f.useState(0),n=[{config:{iconLeft:`check`},label:`iconLeft="check"`,children:`Save`},{config:{iconRight:`arrow-right`},label:`iconRight="arrow-right"`,children:`Next`},{config:{iconLeft:`check`,iconRight:`arrow-right`},label:`Both icons`,children:`Confirm`},{config:{iconLeft:`search`},label:`Icon-only`,children:void 0,ariaLabel:`Search`}];return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(250px, 1fr))`,gap:`20px`},children:n.map((n,r)=>(0,p.jsx)(l,{label:n.label,highlight:e===r,onInteraction:()=>t(r),interactionType:`click`,children:(0,p.jsx)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,justifyContent:`center`,alignItems:`center`},children:(0,p.jsx)(a,{...n.config,"aria-label":n.ariaLabel,children:n.children})})},r))}),(0,p.jsx)(s,{code:(e=>{let{config:t,children:r,ariaLabel:i}=n[e];return t.iconLeft&&t.iconRight?`<Button iconLeft="${t.iconLeft}" iconRight="${t.iconRight}">
  ${r}
</Button>`:t.iconLeft&&!r?`<Button iconLeft="${t.iconLeft}" aria-label="${i}" />`:t.iconLeft?`<Button iconLeft="${t.iconLeft}">${r}</Button>`:t.iconRight?`<Button iconRight="${t.iconRight}">${r}</Button>`:`<Button>Default</Button>`})(e),language:`jsx`,title:`JSX`})]})})}},S={name:`Prop: disabled / loading`,render:()=>{let e=[`solid`,`outline`,`ghost`];return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:d.neutral.text,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`16px`},children:`Disabled State`}),(0,p.jsx)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`},children:e.map(e=>(0,p.jsxs)(a,{type:e,disabled:!0,children:[`Disabled `,e]},e))})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:d.neutral.text,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`16px`},children:`Loading State`}),(0,p.jsx)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`},children:e.map(e=>(0,p.jsxs)(a,{type:e,loading:!0,children:[`Loading `,e]},e))})]}),(0,p.jsx)(s,{code:`{/* Disabled */}
<Button disabled>Disabled</Button>

{/* Loading (with spinner) */}
<Button loading>Saving...</Button>`,language:`jsx`,title:`JSX`})]})})}},C={name:`Prop: fullWidth`,render:()=>(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(l,{label:`fullWidth={true}`,children:(0,p.jsx)(`div`,{style:{width:`100%`,maxWidth:`500px`},children:(0,p.jsx)(`div`,{style:{padding:`16px`,borderRadius:`8px`},children:(0,p.jsx)(a,{fullWidth:!0,children:`Full Width Button`})})})}),(0,p.jsx)(l,{label:`fullWidth={false} (default)`,children:(0,p.jsx)(`div`,{style:{width:`100%`,maxWidth:`500px`},children:(0,p.jsx)(`div`,{style:{padding:`16px`,borderRadius:`8px`},children:(0,p.jsx)(a,{children:`Normal Width Button`})})})}),(0,p.jsx)(s,{code:`<Button fullWidth>
  Full Width Button
</Button>`,language:`jsx`,title:`JSX`})]})})},w={name:`Prop: as (Polymorphic)`,render:()=>{let[e,t]=f.useState(`button`);return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:`20px`},children:[(0,p.jsx)(l,{label:`as="button" (default)`,highlight:e===`button`,onInteraction:()=>t(`button`),interactionType:`click`,children:(0,p.jsx)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,justifyContent:`center`},children:(0,p.jsx)(a,{as:`button`,onClick:()=>alert(`Button clicked!`),children:`Button Element`})})}),(0,p.jsx)(l,{label:`as="a" (anchor)`,highlight:e===`a`,onInteraction:()=>t(`a`),interactionType:`click`,children:(0,p.jsx)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,justifyContent:`center`},children:(0,p.jsx)(a,{as:`a`,href:`#link`,type:`ghost`,variant:`primary`,children:`Anchor Element`})})})]}),(0,p.jsx)(s,{code:(e=>e===`button`?`<Button as="button" onClick={handleClick}>
  Button Element
</Button>`:`<Button as="a" href="/home">
  Link Button
</Button>`)(e),language:`jsx`,title:`JSX`})]})})}},T={render:()=>(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:d.neutral.text,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`16px`},children:`Call-to-Action (CTA)`}),(0,p.jsxs)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,gap:`12px`,justifyContent:`center`},children:[(0,p.jsx)(a,{type:`solid`,variant:`primary`,size:`lg`,iconRight:`arrow-right`,children:`Get Started`}),(0,p.jsx)(a,{type:`outline`,variant:`primary`,size:`lg`,children:`Learn More`})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:d.neutral.text,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`16px`},children:`Form Actions`}),(0,p.jsxs)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,gap:`12px`,justifyContent:`flex-end`},children:[(0,p.jsx)(a,{type:`ghost`,variant:`neutral`,children:`Cancel`}),(0,p.jsx)(a,{type:`solid`,variant:`primary`,iconLeft:`check`,children:`Save Changes`})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:d.neutral.text,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`16px`},children:`Destructive Actions`}),(0,p.jsxs)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,gap:`12px`,justifyContent:`center`},children:[(0,p.jsx)(a,{type:`outline`,variant:`neutral`,children:`Keep`}),(0,p.jsx)(a,{type:`solid`,variant:`danger`,iconLeft:`trash`,children:`Delete`})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:d.neutral.text,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`16px`},children:`Icon Toolbar`}),(0,p.jsxs)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,gap:`8px`,justifyContent:`center`},children:[(0,p.jsx)(a,{type:`ghost`,variant:`neutral`,iconLeft:`search`,"aria-label":`Search`}),(0,p.jsx)(a,{type:`ghost`,variant:`neutral`,iconLeft:`settings`,"aria-label":`Settings`}),(0,p.jsx)(a,{type:`ghost`,variant:`neutral`,iconLeft:`heart`,"aria-label":`Favorite`}),(0,p.jsx)(a,{type:`ghost`,variant:`neutral`,iconLeft:`save`,"aria-label":`Save`})]})]}),(0,p.jsx)(s,{code:`{/* CTA */}
<Button 
  type="solid" 
  variant="primary" 
  size="lg"
  iconRight="arrow-right"
>
  Get Started
</Button>

{/* Form actions */}
<Button type="ghost" variant="neutral">Cancel</Button>
<Button type="solid" variant="primary">Save</Button>

{/* Destructive */}
<Button type="solid" variant="danger" iconLeft="trash">
  Delete
</Button>

{/* Icon toolbar */}
<Button 
  type="ghost" 
  variant="neutral" 
  iconLeft="search" 
  aria-label="Search" 
/>`,language:`jsx`,title:`JSX`})]})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <PropCard label="Default Button">
            {/* 
              💡 TOKEN EDUCATION: This button automatically uses semantic design tokens
              
              Background: var(--lufa-component-button-primary-background)
              Text: var(--lufa-component-button-primary-text)
              Hover: var(--lufa-component-button-primary-background-hover)
              Border: var(--lufa-component-button-primary-border)
              
              ✅ Benefits:
              - Automatically adapts to light/dark/high-contrast modes
              - Maintains WCAG AA accessibility standards
              - Consistent with design system
              - Easy to theme and customize
              
              Try switching theme modes in the toolbar to see automatic adaptation!
             */}
            <Button>Click me</Button>
          </PropCard>

          <CodeBlock code="<Button>Click me</Button>" language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Prop: type',
  render: () => {
    const [selectedType, setSelectedType] = React.useState<string>('solid');
    const types = [{
      value: 'solid',
      label: 'solid',
      description: 'Filled background (default)'
    }, {
      value: 'outline',
      label: 'outline',
      description: 'Border only, transparent background'
    }, {
      value: 'ghost',
      label: 'ghost',
      description: 'No border, transparent background'
    }] as const;
    const generateCode = (type: string): string => {
      return \`<Button type="\${type}" variant="primary">
  \${type.charAt(0).toUpperCase() + type.slice(1)} Button
</Button>\`;
    };
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          {/* Grid of type examples */}
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
            {types.map(typeItem => {
            return <PropCard key={typeItem.value} label={\`type="\${typeItem.label}"\`} highlight={selectedType === typeItem.value} onInteraction={() => setSelectedType(typeItem.value)} interactionType="click">
                  <div style={{
                padding: '24px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                alignItems: 'center'
              }}>
                    <Button type={typeItem.value} variant="primary">
                      {typeItem.label}
                    </Button>
                    <div style={{
                  fontSize: '12px',
                  color: STORY_COLORS.neutral.textSlate,
                  textAlign: 'center'
                }}>
                      {typeItem.description}
                    </div>
                  </div>
                </PropCard>;
          })}
          </div>

          <CodeBlock code={generateCode(selectedType)} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Prop: variant',
  render: () => {
    const [selectedVariant, setSelectedVariant] = React.useState<string>('primary');
    const variants = [{
      value: 'primary',
      label: 'primary',
      description: 'Primary action'
    }, {
      value: 'secondary',
      label: 'secondary',
      description: 'Secondary action'
    }, {
      value: 'success',
      label: 'success',
      description: 'Success / Positive action'
    }, {
      value: 'danger',
      label: 'danger',
      description: 'Destructive / Negative action'
    }, {
      value: 'warning',
      label: 'warning',
      description: 'Warning / Caution'
    }, {
      value: 'info',
      label: 'info',
      description: 'Informational'
    }, {
      value: 'neutral',
      label: 'neutral',
      description: 'Neutral / Low-emphasis'
    }] as const;
    const generateCode = (variant: string): string => {
      const label = variant.charAt(0).toUpperCase() + variant.slice(1);
      return \`<Button type="solid" variant="\${variant}">
  \${label}
</Button>\`;
    };
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          {/* Grid of variant examples */}
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px'
        }}>
            {variants.map(variantItem => {
            return <PropCard key={variantItem.value} label={\`variant="\${variantItem.label}"\`} highlight={selectedVariant === variantItem.value} onInteraction={() => setSelectedVariant(variantItem.value)} interactionType="click">
                  <div style={{
                padding: '20px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}>
                    <Button type="solid" variant={variantItem.value}>
                      {variantItem.label}
                    </Button>
                    <div style={{
                  fontSize: '11px',
                  color: STORY_COLORS.neutral.textSlate,
                  textAlign: 'center'
                }}>
                      {variantItem.description}
                    </div>
                  </div>
                </PropCard>;
          })}
          </div>

          <CodeBlock code={generateCode(selectedVariant)} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Type + Variant Matrix',
  render: () => {
    const types = ['solid', 'outline', 'ghost'] as const;
    const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'neutral'] as const;
    {
      /* 
      💡 TOKEN EDUCATION: 21 Button Combinations (3 types × 7 variants)
      
      Each combination uses component-specific tokens:
      
      Solid buttons:
      - background: var(--lufa-component-button-{variant}-background)
      - text: var(--lufa-component-button-{variant}-text)
      - hover: var(--lufa-component-button-{variant}-background-hover)
      
      Outline buttons:
      - border: var(--lufa-component-button-outline-border)
      - text: var(--lufa-component-button-outline-text)
      - hover-bg: var(--lufa-component-button-outline-background-hover)
      
      Ghost buttons:
      - text: var(--lufa-component-button-ghost-text)
      - hover-bg: var(--lufa-component-button-ghost-background-hover)
      
      ✅ All 21 combinations automatically adapt to light/dark/high-contrast themes!
      ✅ No manual theme handling required
      ✅ Accessible color contrast in all modes
      
      Try switching themes to see the magic! ✨
      */
    }
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
          {types.map(type => <div key={type}>
              <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: STORY_COLORS.neutral.text,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
                Type: {type}
              </h3>
              <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
                {variants.map(variant => <Button key={variant} type={type} variant={variant}>
                    {variant}
                  </Button>)}
              </div>
            </div>)}

          <CodeBlock code={\`{/* 21 combinations: 3 types × 7 variants */}
<Button type="solid" variant="primary">Primary</Button>
<Button type="outline" variant="danger">Delete</Button>
<Button type="ghost" variant="neutral">Cancel</Button>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Prop: size',
  render: () => {
    const [selectedSize, setSelectedSize] = React.useState<string>('md');
    const sizes = [{
      value: 'sm',
      label: 'sm',
      height: '32px',
      description: 'Small'
    }, {
      value: 'md',
      label: 'md',
      height: '40px',
      description: 'Medium (default)'
    }, {
      value: 'lg',
      label: 'lg',
      height: '48px',
      description: 'Large'
    }] as const;
    const generateCode = (size: string): string => {
      const description = sizes.find(s => s.value === size)?.description ?? size;
      return \`<Button size="\${size}">\${description} Button</Button>\`;
    };
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>
            {sizes.map(sizeItem => {
            return <PropCard key={sizeItem.value} label={\`size="\${sizeItem.label}"\`} highlight={selectedSize === sizeItem.value} onInteraction={() => setSelectedSize(sizeItem.value)} interactionType="click">
                  <div style={{
                padding: '24px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}>
                    <Button size={sizeItem.value}>Button {sizeItem.label}</Button>
                    <div style={{
                  fontSize: '11px',
                  color: STORY_COLORS.neutral.textSlate
                }}>
                      Height: {sizeItem.height} • {sizeItem.description}
                    </div>
                  </div>
                </PropCard>;
          })}
          </div>

          <CodeBlock code={generateCode(selectedSize)} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Prop: radius',
  render: () => {
    const [selectedRadius, setSelectedRadius] = React.useState<string>('base');
    const radiusOptions = [{
      value: 'none',
      label: 'none',
      px: '0px',
      description: 'Sharp corners'
    }, {
      value: 'sm',
      label: 'sm',
      px: '2px',
      description: 'Subtle rounding'
    }, {
      value: 'base',
      label: 'base',
      px: '8px',
      description: 'Default rounding'
    }, {
      value: 'md',
      label: 'md',
      px: '12px',
      description: 'Emphasized rounding'
    }, {
      value: 'full',
      label: 'full',
      px: '9999px',
      description: 'Pill shape'
    }] as const;
    const generateCode = (radius: string): string => {
      const radiusLabel = radius.charAt(0).toUpperCase() + radius.slice(1);
      return \`<Button radius="\${radius}">\${radiusLabel}</Button>\`;
    };
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px'
        }}>
            {radiusOptions.map(radiusItem => {
            return <PropCard key={radiusItem.value} label={\`radius="\${radiusItem.label}"\`} highlight={selectedRadius === radiusItem.value} onInteraction={() => setSelectedRadius(radiusItem.value)} interactionType="click">
                  <div style={{
                padding: '20px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}>
                    <Button radius={radiusItem.value}>{radiusItem.label}</Button>
                    <div style={{
                  fontSize: '11px',
                  color: STORY_COLORS.neutral.textSlate,
                  textAlign: 'center'
                }}>
                      {radiusItem.px} • {radiusItem.description}
                    </div>
                  </div>
                </PropCard>;
          })}
          </div>

          <CodeBlock code={generateCode(selectedRadius)} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Prop: iconLeft / iconRight',
  render: () => {
    const [selectedIconIndex, setSelectedIconIndex] = React.useState<number>(0);
    const iconExamples = [{
      config: {
        iconLeft: 'check'
      },
      label: 'iconLeft="check"',
      children: 'Save'
    }, {
      config: {
        iconRight: 'arrow-right'
      },
      label: 'iconRight="arrow-right"',
      children: 'Next'
    }, {
      config: {
        iconLeft: 'check',
        iconRight: 'arrow-right'
      },
      label: 'Both icons',
      children: 'Confirm'
    }, {
      config: {
        iconLeft: 'search'
      },
      label: 'Icon-only',
      children: undefined,
      ariaLabel: 'Search'
    }];
    const generateCode = (index: number): string => {
      const example = iconExamples[index];
      const {
        config,
        children,
        ariaLabel
      } = example;
      if (config.iconLeft && config.iconRight) {
        return \`<Button iconLeft="\${config.iconLeft}" iconRight="\${config.iconRight}">
  \${children}
</Button>\`;
      } else if (config.iconLeft && !children) {
        return \`<Button iconLeft="\${config.iconLeft}" aria-label="\${ariaLabel}" />\`;
      } else if (config.iconLeft) {
        return \`<Button iconLeft="\${config.iconLeft}">\${children}</Button>\`;
      } else if (config.iconRight) {
        return \`<Button iconRight="\${config.iconRight}">\${children}</Button>\`;
      }
      return '<Button>Default</Button>';
    };
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
            {iconExamples.map((example, index) => {
            return <PropCard key={index} label={example.label} highlight={selectedIconIndex === index} onInteraction={() => setSelectedIconIndex(index)} interactionType="click">
                  <div style={{
                padding: '24px',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                    <Button {...example.config} aria-label={example.ariaLabel}>
                      {example.children}
                    </Button>
                  </div>
                </PropCard>;
          })}
          </div>

          <CodeBlock code={generateCode(selectedIconIndex)} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Prop: disabled / loading',
  render: () => {
    const types = ['solid', 'outline', 'ghost'] as const;
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
          {/* Disabled state */}
          <div>
            <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: STORY_COLORS.neutral.text,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
              Disabled State
            </h3>
            <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
              {types.map(type => <Button key={type} type={type} disabled>
                  Disabled {type}
                </Button>)}
            </div>
          </div>

          {/* Loading state */}
          <div>
            <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: STORY_COLORS.neutral.text,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
              Loading State
            </h3>
            <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
              {types.map(type => <Button key={type} type={type} loading>
                  Loading {type}
                </Button>)}
            </div>
          </div>

          <CodeBlock code={\`{/* Disabled */}
<Button disabled>Disabled</Button>

{/* Loading (with spinner) */}
<Button loading>Saving...</Button>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
            maxWidth: '500px'
          }}>
              <div style={{
              padding: '16px',
              borderRadius: '8px'
            }}>
                <Button fullWidth>Full Width Button</Button>
              </div>
            </div>
          </PropCard>

          <PropCard label="fullWidth={false} (default)">
            <div style={{
            width: '100%',
            maxWidth: '500px'
          }}>
              <div style={{
              padding: '16px',
              borderRadius: '8px'
            }}>
                <Button>Normal Width Button</Button>
              </div>
            </div>
          </PropCard>

          <CodeBlock code={\`<Button fullWidth>
  Full Width Button
</Button>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Prop: as (Polymorphic)',
  render: () => {
    const [selectedAs, setSelectedAs] = React.useState<'button' | 'a'>('button');
    const generateCode = (asValue: 'button' | 'a'): string => {
      if (asValue === 'button') {
        return \`<Button as="button" onClick={handleClick}>
  Button Element
</Button>\`;
      } else {
        return \`<Button as="a" href="/home">
  Link Button
</Button>\`;
      }
    };
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
            <PropCard label='as="button" (default)' highlight={selectedAs === 'button'} onInteraction={() => setSelectedAs('button')} interactionType="click">
              <div style={{
              padding: '24px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center'
            }}>
                <Button as="button" onClick={() => alert('Button clicked!')}>
                  Button Element
                </Button>
              </div>
            </PropCard>

            <PropCard label='as="a" (anchor)' highlight={selectedAs === 'a'} onInteraction={() => setSelectedAs('a')} interactionType="click">
              <div style={{
              padding: '24px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center'
            }}>
                <Button as="a" href="#link" type="ghost" variant="primary">
                  Anchor Element
                </Button>
              </div>
            </PropCard>
          </div>

          <CodeBlock code={generateCode(selectedAs)} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
          {/* CTA Section */}
          <div>
            <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: STORY_COLORS.neutral.text,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
              Call-to-Action (CTA)
            </h3>
            <div style={{
            padding: '24px',
            borderRadius: '8px',
            display: 'flex',
            gap: '12px',
            justifyContent: 'center'
          }}>
              <Button type="solid" variant="primary" size="lg" iconRight="arrow-right">
                Get Started
              </Button>
              <Button type="outline" variant="primary" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Form Actions */}
          <div>
            <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: STORY_COLORS.neutral.text,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
              Form Actions
            </h3>
            <div style={{
            padding: '24px',
            borderRadius: '8px',
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end'
          }}>
              <Button type="ghost" variant="neutral">
                Cancel
              </Button>
              <Button type="solid" variant="primary" iconLeft="check">
                Save Changes
              </Button>
            </div>
          </div>

          {/* Destructive Actions */}
          <div>
            <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: STORY_COLORS.neutral.text,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
              Destructive Actions
            </h3>
            <div style={{
            padding: '24px',
            borderRadius: '8px',
            display: 'flex',
            gap: '12px',
            justifyContent: 'center'
          }}>
              <Button type="outline" variant="neutral">
                Keep
              </Button>
              <Button type="solid" variant="danger" iconLeft="trash">
                Delete
              </Button>
            </div>
          </div>

          {/* Icon Toolbar */}
          <div>
            <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: STORY_COLORS.neutral.text,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
              Icon Toolbar
            </h3>
            <div style={{
            padding: '24px',
            borderRadius: '8px',
            display: 'flex',
            gap: '8px',
            justifyContent: 'center'
          }}>
              <Button type="ghost" variant="neutral" iconLeft="search" aria-label="Search" />
              <Button type="ghost" variant="neutral" iconLeft="settings" aria-label="Settings" />
              <Button type="ghost" variant="neutral" iconLeft="heart" aria-label="Favorite" />
              <Button type="ghost" variant="neutral" iconLeft="save" aria-label="Save" />
            </div>
          </div>

          <CodeBlock code={\`{/* CTA */}
<Button 
  type="solid" 
  variant="primary" 
  size="lg"
  iconRight="arrow-right"
>
  Get Started
</Button>

{/* Form actions */}
<Button type="ghost" variant="neutral">Cancel</Button>
<Button type="solid" variant="primary">Save</Button>

{/* Destructive */}
<Button type="solid" variant="danger" iconLeft="trash">
  Delete
</Button>

{/* Icon toolbar */}
<Button 
  type="ghost" 
  variant="neutral" 
  iconLeft="search" 
  aria-label="Search" 
/>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`PropType`,`PropVariant`,`TypeVariantMatrix`,`PropSize`,`PropRadius`,`PropIcons`,`PropStates`,`PropFullWidth`,`PropAs`,`UseCases`]}))();export{h as Default,w as PropAs,C as PropFullWidth,x as PropIcons,b as PropRadius,y as PropSize,S as PropStates,g as PropType,_ as PropVariant,v as TypeVariantMatrix,T as UseCases,E as __namedExportsOrder,m as default};