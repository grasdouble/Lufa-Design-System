import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n,w as r}from"./iframe-Bm_r3Ygs.js";import{S as i,n as a}from"./lufa-ui-B9ODeQns.js";import{b as o,g as s,t as c,v as l}from"./helpers-D9bnZ3qZ.js";import{r as u,t as d}from"./storyColors-RAOlxH1p.js";var f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{f=t(r(),1),i(),c(),u(),p=n(),m={title:`5. Content/Badge`,component:a,parameters:{layout:`fullscreen`,docs:{description:{component:`Badge - Status and Label Indicator

A compact component for displaying status labels, counts, or notifications.
Perfect for showing metadata, statuses, or highlighting information.

## Features
- ✅ Five semantic variants: default, success, danger, warning, info
- ✅ Three sizes: sm, md, lg
- ✅ Optional dot indicator for notifications
- ✅ Polymorphic rendering (span, div, label)
- ✅ WCAG 2.1 AA compliant contrast ratios
- ✅ Token-based design (component layer tokens)`}}},argTypes:{variant:{control:`select`,options:[`default`,`success`,`danger`,`warning`,`info`],description:`Semantic color variant`,table:{category:`Variants`,type:{summary:`VariantValue`},defaultValue:{summary:`default`}}},size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Badge size`,table:{category:`Size`,type:{summary:`SizeValue`},defaultValue:{summary:`md`}}},dot:{control:`boolean`,description:`Show dot indicator (for notifications)`,table:{category:`Features`,type:{summary:`boolean`},defaultValue:{summary:`false`}}},as:{control:`select`,options:[`span`,`div`,`label`],description:`HTML element to render (polymorphic)`,table:{category:`Polymorphic`,type:{summary:`ElementType`},defaultValue:{summary:`span`}}}}},h={render:()=>(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(l,{label:`Default Badge`,children:(0,p.jsx)(a,{children:`New`})}),(0,p.jsx)(s,{code:`<Badge>New</Badge>`,language:`jsx`,title:`JSX`})]})})},g={name:`Prop: variant`,render:()=>{let[e,t]=f.useState(`default`);return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:`16px`},children:[{value:`default`,label:`default`,description:`Neutral / General purpose`},{value:`success`,label:`success`,description:`Positive / Active status`},{value:`danger`,label:`danger`,description:`Error / Critical status`},{value:`warning`,label:`warning`,description:`Warning / Caution`},{value:`info`,label:`info`,description:`Informational / Notice`}].map(n=>(0,p.jsx)(l,{label:`variant="${n.label}"`,highlight:e===n.value,onInteraction:()=>t(n.value),interactionType:`click`,children:(0,p.jsxs)(`div`,{style:{padding:`20px`,borderRadius:`8px`,display:`flex`,flexDirection:`column`,gap:`12px`,alignItems:`center`},children:[(0,p.jsx)(a,{variant:n.value,children:n.label}),(0,p.jsx)(`div`,{style:{fontSize:`11px`,color:d.neutral.textSlate,textAlign:`center`},children:n.description})]})},n.value))}),(0,p.jsx)(s,{code:(e=>`<Badge variant="${e}">${e.charAt(0).toUpperCase()+e.slice(1)}</Badge>`)(e),language:`jsx`,title:`JSX`})]})})}},_={name:`Prop: size`,render:()=>{let[e,t]=f.useState(`md`),n=[{value:`sm`,label:`sm`,fontSize:`10px`,description:`Small (inline text)`},{value:`md`,label:`md`,fontSize:`12px`,description:`Medium (default)`},{value:`lg`,label:`lg`,fontSize:`14px`,description:`Large (emphasis)`}];return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(250px, 1fr))`,gap:`24px`},children:n.map(n=>(0,p.jsx)(l,{label:`size="${n.label}"`,highlight:e===n.value,onInteraction:()=>t(n.value),interactionType:`click`,children:(0,p.jsxs)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,flexDirection:`column`,gap:`12px`,alignItems:`center`},children:[(0,p.jsx)(a,{size:n.value,children:n.label}),(0,p.jsxs)(`div`,{style:{fontSize:`11px`,color:d.neutral.textSlate},children:[n.fontSize,` • `,n.description]})]})},n.value))}),(0,p.jsx)(s,{code:(e=>`<Badge size="${e}">${n.find(t=>t.value===e)?.description??e}</Badge>`)(e),language:`jsx`,title:`JSX`})]})})}},v={name:`Prop: dot`,render:()=>{let[e,t]=f.useState(!0);return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:`20px`},children:[{value:!1,label:`dot={false} (default)`,description:`No indicator`},{value:!0,label:`dot={true}`,description:`With dot indicator`}].map(n=>(0,p.jsx)(l,{label:n.label,highlight:e===n.value,onInteraction:()=>t(n.value),interactionType:`click`,children:(0,p.jsxs)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,flexDirection:`column`,gap:`12px`,alignItems:`center`},children:[(0,p.jsx)(a,{dot:n.value,variant:`danger`,children:n.value?`3 notifications`:`Status`}),(0,p.jsx)(`div`,{style:{fontSize:`11px`,color:d.neutral.textSlate,textAlign:`center`},children:n.description})]})},String(n.value)))}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:d.neutral.text,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`16px`},children:`Dot with all variants`}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`},children:[(0,p.jsx)(a,{dot:!0,variant:`default`,children:`default`}),(0,p.jsx)(a,{dot:!0,variant:`success`,children:`success`}),(0,p.jsx)(a,{dot:!0,variant:`danger`,children:`danger`}),(0,p.jsx)(a,{dot:!0,variant:`warning`,children:`warning`}),(0,p.jsx)(a,{dot:!0,variant:`info`,children:`info`})]})]}),(0,p.jsx)(s,{code:(e=>e?`<Badge dot>3 notifications</Badge>`:`<Badge>Status</Badge>`)(e),language:`jsx`,title:`JSX`})]})})}},y={name:`Prop: as (Polymorphic)`,render:()=>{let[e,t]=f.useState(`span`);return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(250px, 1fr))`,gap:`20px`},children:[{value:`span`,label:`as="span" (default)`,description:`Inline element`},{value:`div`,label:`as="div"`,description:`Block element`},{value:`label`,label:`as="label"`,description:`Form label`}].map(n=>(0,p.jsx)(l,{label:n.label,highlight:e===n.value,onInteraction:()=>t(n.value),interactionType:`click`,children:(0,p.jsxs)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,flexDirection:`column`,gap:`12px`,alignItems:`center`},children:[(0,p.jsx)(a,{as:n.value,children:n.value}),(0,p.jsx)(`div`,{style:{fontSize:`11px`,color:d.neutral.textSlate,textAlign:`center`},children:n.description})]})},n.value))}),(0,p.jsx)(s,{code:(e=>e===`span`?`<Badge as="span">Inline Badge</Badge>`:e===`div`?`<Badge as="div">Block Badge</Badge>`:`<Badge as="label" htmlFor="input-id">
  Label Badge
</Badge>`)(e),language:`jsx`,title:`JSX`})]})})}},b={name:`Size + Variant Matrix`,render:()=>{let e=[`sm`,`md`,`lg`],t=[`default`,`success`,`danger`,`warning`,`info`];return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`},children:[e.map(e=>(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:d.neutral.text,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`16px`},children:[`Size: `,e]}),(0,p.jsx)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`},children:t.map(t=>(0,p.jsx)(a,{size:e,variant:t,children:t},t))})]},e)),(0,p.jsx)(s,{code:`{/* 15 combinations: 3 sizes × 5 variants */}
<Badge size="sm" variant="default">Default</Badge>
<Badge size="md" variant="success">Success</Badge>
<Badge size="lg" variant="danger">Danger</Badge>`,language:`jsx`,title:`JSX`})]})})}},x={render:()=>(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:d.neutral.text,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`16px`},children:`Status Labels`}),(0,p.jsxs)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,gap:`12px`,flexWrap:`wrap`},children:[(0,p.jsx)(a,{variant:`success`,children:`Active`}),(0,p.jsx)(a,{variant:`warning`,children:`Pending`}),(0,p.jsx)(a,{variant:`danger`,children:`Inactive`}),(0,p.jsx)(a,{variant:`info`,children:`Draft`}),(0,p.jsx)(a,{variant:`default`,children:`Archived`})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:d.neutral.text,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`16px`},children:`Notification Counts`}),(0,p.jsxs)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,gap:`12px`,flexWrap:`wrap`,alignItems:`center`},children:[(0,p.jsx)(a,{dot:!0,variant:`danger`,children:`3 new messages`}),(0,p.jsx)(a,{dot:!0,variant:`warning`,children:`5 updates`}),(0,p.jsx)(a,{dot:!0,variant:`info`,children:`12 notifications`})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:d.neutral.text,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`16px`},children:`Category Tags`}),(0,p.jsxs)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,p.jsx)(a,{size:`sm`,variant:`default`,children:`React`}),(0,p.jsx)(a,{size:`sm`,variant:`default`,children:`TypeScript`}),(0,p.jsx)(a,{size:`sm`,variant:`default`,children:`Design Systems`}),(0,p.jsx)(a,{size:`sm`,variant:`info`,children:`New`})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:d.neutral.text,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`16px`},children:`Numeric Indicators`}),(0,p.jsxs)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,gap:`12px`,flexWrap:`wrap`,alignItems:`center`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,p.jsx)(`span`,{style:{fontSize:`14px`,color:d.neutral.text},children:`Inbox`}),(0,p.jsx)(a,{variant:`danger`,children:`99+`})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,p.jsx)(`span`,{style:{fontSize:`14px`,color:d.neutral.text},children:`Tasks`}),(0,p.jsx)(a,{variant:`warning`,children:`12`})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,p.jsx)(`span`,{style:{fontSize:`14px`,color:d.neutral.text},children:`Done`}),(0,p.jsx)(a,{variant:`success`,children:`45`})]})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:d.neutral.text,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`16px`},children:`Version / Beta Labels`}),(0,p.jsxs)(`div`,{style:{padding:`24px`,borderRadius:`8px`,display:`flex`,gap:`12px`,flexWrap:`wrap`},children:[(0,p.jsx)(a,{size:`sm`,variant:`info`,children:`v2.0`}),(0,p.jsx)(a,{size:`sm`,variant:`warning`,children:`Beta`}),(0,p.jsx)(a,{size:`sm`,variant:`success`,children:`Stable`}),(0,p.jsx)(a,{size:`sm`,variant:`danger`,children:`Deprecated`})]})]}),(0,p.jsx)(s,{code:`{/* Status labels */}
<Badge variant="success">Active</Badge>
<Badge variant="danger">Inactive</Badge>

{/* Notifications */}
<Badge dot variant="danger">3 new messages</Badge>

{/* Category tags */}
<Badge size="sm">React</Badge>
<Badge size="sm">TypeScript</Badge>

{/* Numeric indicators */}
<Badge variant="danger">99+</Badge>

{/* Version labels */}
<Badge size="sm" variant="info">v2.0</Badge>
<Badge size="sm" variant="warning">Beta</Badge>`,language:`jsx`,title:`JSX`})]})})},S={args:{children:`Badge`,variant:`default`,size:`md`,dot:!1,as:`span`},render:e=>(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(l,{label:`Interactive Badge (use controls below)`,children:(0,p.jsx)(`div`,{style:{padding:`32px`,borderRadius:`8px`,display:`flex`,justifyContent:`center`},children:(0,p.jsx)(a,{...e})})}),(0,p.jsxs)(`div`,{style:{padding:`16px`,borderRadius:`8px`,fontSize:`12px`,color:d.neutral.textSlate},children:[`💡 `,(0,p.jsx)(`strong`,{children:`Tip:`}),` Use the Controls panel below to experiment with different prop combinations interactively.`]})]})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <PropCard label="Default Badge">
            <Badge>New</Badge>
          </PropCard>

          <CodeBlock code="<Badge>New</Badge>" language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Prop: variant',
  render: () => {
    const [selectedVariant, setSelectedVariant] = React.useState<string>('default');
    const variants = [{
      value: 'default',
      label: 'default',
      description: 'Neutral / General purpose'
    }, {
      value: 'success',
      label: 'success',
      description: 'Positive / Active status'
    }, {
      value: 'danger',
      label: 'danger',
      description: 'Error / Critical status'
    }, {
      value: 'warning',
      label: 'warning',
      description: 'Warning / Caution'
    }, {
      value: 'info',
      label: 'info',
      description: 'Informational / Notice'
    }] as const;
    const generateCode = (variant: string): string => {
      const label = variant.charAt(0).toUpperCase() + variant.slice(1);
      return \`<Badge variant="\${variant}">\${label}</Badge>\`;
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
                    <Badge variant={variantItem.value}>{variantItem.label}</Badge>
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Prop: size',
  render: () => {
    const [selectedSize, setSelectedSize] = React.useState<string>('md');
    const sizes = [{
      value: 'sm',
      label: 'sm',
      fontSize: '10px',
      description: 'Small (inline text)'
    }, {
      value: 'md',
      label: 'md',
      fontSize: '12px',
      description: 'Medium (default)'
    }, {
      value: 'lg',
      label: 'lg',
      fontSize: '14px',
      description: 'Large (emphasis)'
    }] as const;
    const generateCode = (size: string): string => {
      const description = sizes.find(s => s.value === size)?.description ?? size;
      return \`<Badge size="\${size}">\${description}</Badge>\`;
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
                    <Badge size={sizeItem.value}>{sizeItem.label}</Badge>
                    <div style={{
                  fontSize: '11px',
                  color: STORY_COLORS.neutral.textSlate
                }}>
                      {sizeItem.fontSize} • {sizeItem.description}
                    </div>
                  </div>
                </PropCard>;
          })}
          </div>

          <CodeBlock code={generateCode(selectedSize)} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Prop: dot',
  render: () => {
    const [showDot, setShowDot] = React.useState<boolean>(true);
    const dotOptions = [{
      value: false,
      label: 'dot={false} (default)',
      description: 'No indicator'
    }, {
      value: true,
      label: 'dot={true}',
      description: 'With dot indicator'
    }];
    const generateCode = (dot: boolean): string => {
      if (dot) {
        return \`<Badge dot>3 notifications</Badge>\`;
      }
      return \`<Badge>Status</Badge>\`;
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
            {dotOptions.map(option => {
            return <PropCard key={String(option.value)} label={option.label} highlight={showDot === option.value} onInteraction={() => setShowDot(option.value)} interactionType="click">
                  <div style={{
                padding: '24px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}>
                    <Badge dot={option.value} variant="danger">
                      {option.value ? '3 notifications' : 'Status'}
                    </Badge>
                    <div style={{
                  fontSize: '11px',
                  color: STORY_COLORS.neutral.textSlate,
                  textAlign: 'center'
                }}>
                      {option.description}
                    </div>
                  </div>
                </PropCard>;
          })}
          </div>

          {/* Show dot with all variants */}
          <div>
            <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: STORY_COLORS.neutral.text,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
              Dot with all variants
            </h3>
            <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
              <Badge dot variant="default">
                default
              </Badge>
              <Badge dot variant="success">
                success
              </Badge>
              <Badge dot variant="danger">
                danger
              </Badge>
              <Badge dot variant="warning">
                warning
              </Badge>
              <Badge dot variant="info">
                info
              </Badge>
            </div>
          </div>

          <CodeBlock code={generateCode(showDot)} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Prop: as (Polymorphic)',
  render: () => {
    const [selectedAs, setSelectedAs] = React.useState<'span' | 'div' | 'label'>('span');
    const asOptions = [{
      value: 'span' as const,
      label: 'as="span" (default)',
      description: 'Inline element'
    }, {
      value: 'div' as const,
      label: 'as="div"',
      description: 'Block element'
    }, {
      value: 'label' as const,
      label: 'as="label"',
      description: 'Form label'
    }];
    const generateCode = (asValue: 'span' | 'div' | 'label'): string => {
      if (asValue === 'span') {
        return \`<Badge as="span">Inline Badge</Badge>\`;
      } else if (asValue === 'div') {
        return \`<Badge as="div">Block Badge</Badge>\`;
      } else {
        return \`<Badge as="label" htmlFor="input-id">
  Label Badge
</Badge>\`;
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
            {asOptions.map(option => {
            return <PropCard key={option.value} label={option.label} highlight={selectedAs === option.value} onInteraction={() => setSelectedAs(option.value)} interactionType="click">
                  <div style={{
                padding: '24px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}>
                    <Badge as={option.value}>{option.value}</Badge>
                    <div style={{
                  fontSize: '11px',
                  color: STORY_COLORS.neutral.textSlate,
                  textAlign: 'center'
                }}>
                      {option.description}
                    </div>
                  </div>
                </PropCard>;
          })}
          </div>

          <CodeBlock code={generateCode(selectedAs)} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Size + Variant Matrix',
  render: () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    const variants = ['default', 'success', 'danger', 'warning', 'info'] as const;
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
          {sizes.map(size => <div key={size}>
              <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: STORY_COLORS.neutral.text,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
                Size: {size}
              </h3>
              <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
                {variants.map(variant => <Badge key={variant} size={size} variant={variant}>
                    {variant}
                  </Badge>)}
              </div>
            </div>)}

          <CodeBlock code={\`{/* 15 combinations: 3 sizes × 5 variants */}
<Badge size="sm" variant="default">Default</Badge>
<Badge size="md" variant="success">Success</Badge>
<Badge size="lg" variant="danger">Danger</Badge>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
          {/* Status Labels */}
          <div>
            <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: STORY_COLORS.neutral.text,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
              Status Labels
            </h3>
            <div style={{
            padding: '24px',
            borderRadius: '8px',
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
              <Badge variant="success">Active</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="danger">Inactive</Badge>
              <Badge variant="info">Draft</Badge>
              <Badge variant="default">Archived</Badge>
            </div>
          </div>

          {/* Notification Counts */}
          <div>
            <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: STORY_COLORS.neutral.text,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
              Notification Counts
            </h3>
            <div style={{
            padding: '24px',
            borderRadius: '8px',
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
              <Badge dot variant="danger">
                3 new messages
              </Badge>
              <Badge dot variant="warning">
                5 updates
              </Badge>
              <Badge dot variant="info">
                12 notifications
              </Badge>
            </div>
          </div>

          {/* Category Tags */}
          <div>
            <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: STORY_COLORS.neutral.text,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
              Category Tags
            </h3>
            <div style={{
            padding: '24px',
            borderRadius: '8px',
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
              <Badge size="sm" variant="default">
                React
              </Badge>
              <Badge size="sm" variant="default">
                TypeScript
              </Badge>
              <Badge size="sm" variant="default">
                Design Systems
              </Badge>
              <Badge size="sm" variant="info">
                New
              </Badge>
            </div>
          </div>

          {/* Numeric Indicators */}
          <div>
            <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: STORY_COLORS.neutral.text,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
              Numeric Indicators
            </h3>
            <div style={{
            padding: '24px',
            borderRadius: '8px',
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
                <span style={{
                fontSize: '14px',
                color: STORY_COLORS.neutral.text
              }}>Inbox</span>
                <Badge variant="danger">99+</Badge>
              </div>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
                <span style={{
                fontSize: '14px',
                color: STORY_COLORS.neutral.text
              }}>Tasks</span>
                <Badge variant="warning">12</Badge>
              </div>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
                <span style={{
                fontSize: '14px',
                color: STORY_COLORS.neutral.text
              }}>Done</span>
                <Badge variant="success">45</Badge>
              </div>
            </div>
          </div>

          {/* Version / Beta Labels */}
          <div>
            <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: STORY_COLORS.neutral.text,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
              Version / Beta Labels
            </h3>
            <div style={{
            padding: '24px',
            borderRadius: '8px',
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
              <Badge size="sm" variant="info">
                v2.0
              </Badge>
              <Badge size="sm" variant="warning">
                Beta
              </Badge>
              <Badge size="sm" variant="success">
                Stable
              </Badge>
              <Badge size="sm" variant="danger">
                Deprecated
              </Badge>
            </div>
          </div>

          <CodeBlock code={\`{/* Status labels */}
<Badge variant="success">Active</Badge>
<Badge variant="danger">Inactive</Badge>

{/* Notifications */}
<Badge dot variant="danger">3 new messages</Badge>

{/* Category tags */}
<Badge size="sm">React</Badge>
<Badge size="sm">TypeScript</Badge>

{/* Numeric indicators */}
<Badge variant="danger">99+</Badge>

{/* Version labels */}
<Badge size="sm" variant="info">v2.0</Badge>
<Badge size="sm" variant="warning">Beta</Badge>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'default',
    size: 'md',
    dot: false,
    as: 'span'
  },
  render: args => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <PropCard label="Interactive Badge (use controls below)">
            <div style={{
            padding: '32px',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center'
          }}>
              <Badge {...args} />
            </div>
          </PropCard>

          <div style={{
          padding: '16px',
          borderRadius: '8px',
          fontSize: '12px',
          color: STORY_COLORS.neutral.textSlate
        }}>
            💡 <strong>Tip:</strong> Use the Controls panel below to experiment with different prop combinations
            interactively.
          </div>
        </div>
      </StoryContainer>;
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`PropVariant`,`PropSize`,`PropDot`,`PropAs`,`SizeVariantMatrix`,`UseCases`,`Playground`]}))();export{h as Default,S as Playground,y as PropAs,v as PropDot,_ as PropSize,g as PropVariant,b as SizeVariantMatrix,x as UseCases,C as __namedExportsOrder,m as default};