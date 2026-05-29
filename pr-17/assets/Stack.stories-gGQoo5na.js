import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n,w as r}from"./iframe-Bm_r3Ygs.js";import{S as i,y as a}from"./lufa-ui-B9ODeQns.js";import{b as o,g as s,t as c,v as l}from"./helpers-D9bnZ3qZ.js";import{n as u,r as d,t as f}from"./storyColors-RAOlxH1p.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{p=t(r(),1),i(),c(),d(),m=n(),h=f.neutral,g={title:`4. Foundation/Stack`,component:a,parameters:{layout:`fullscreen`,docs:{description:{component:`Stack - Flexible Layout Primitive for Spacing

A specialized layout component that automatically manages spacing between
child elements using Flexbox gap property.

## Features
- ✅ Direction control (vertical/horizontal)
- ✅ Gap-based spacing (semantic tokens)
- ✅ Flexbox alignment (align-items and justify-content)
- ✅ Flex wrap support for responsive layouts
- ✅ Polymorphic \`as\` prop for semantic HTML
- ✅ Performance-optimized (CSS classes, not inline styles)`}}},argTypes:{as:{control:`select`,options:[`div`,`section`,`article`,`header`,`footer`,`main`,`nav`,`aside`,`ul`,`ol`],description:`HTML element to render`,table:{category:`Polymorphic`,type:{summary:`ElementType`},defaultValue:{summary:`div`}}},direction:{control:`select`,options:[`vertical`,`horizontal`],description:`Layout direction (flex-direction)`,table:{category:`Layout`,type:{summary:`DirectionValue`},defaultValue:{summary:`vertical`}}},spacing:{control:`select`,options:[`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`],description:`Spacing between children (gap)`,table:{category:`Layout`,type:{summary:`SpacingValue`},defaultValue:{summary:`default`}}},align:{control:`select`,options:[`start`,`center`,`end`,`stretch`,`baseline`],description:`Cross-axis alignment (align-items)`,table:{category:`Layout`,type:{summary:`AlignValue`},defaultValue:{summary:`stretch`}}},justify:{control:`select`,options:[`start`,`center`,`end`,`space-between`,`space-around`,`space-evenly`],description:`Main-axis justification (justify-content)`,table:{category:`Layout`,type:{summary:`JustifyValue`},defaultValue:{summary:`start`}}},wrap:{control:`boolean`,description:`Whether to wrap children (flex-wrap)`,table:{category:`Layout`,type:{summary:`boolean`},defaultValue:{summary:!1}}},grow:{control:`boolean`,description:`Makes the Stack fill all available space in its parent (flex: 1 1 auto + height: 100%)`,table:{category:`Layout`,type:{summary:`boolean`},defaultValue:{summary:!1}}},children:{control:`text`,table:{category:`Content`,type:{summary:`ReactNode`}}},className:{control:`text`,table:{category:`Advanced`,type:{summary:`string`}}}}},_={args:{direction:`vertical`,spacing:`default`,align:`stretch`,justify:`start`,wrap:!1},render:e=>(0,m.jsx)(o,{children:(0,m.jsxs)(a,{...e,children:[(0,m.jsx)(`div`,{style:{padding:`16px`,background:f.primary.blue.main,color:`white`,borderRadius:`8px`,fontWeight:600,textAlign:`center`},children:`Item 1`}),(0,m.jsx)(`div`,{style:{padding:`16px`,background:f.primary.violet.main,color:`white`,borderRadius:`8px`,fontWeight:600,textAlign:`center`},children:`Item 2`}),(0,m.jsx)(`div`,{style:{padding:`16px`,background:f.primary.pink.main,color:`white`,borderRadius:`8px`,fontWeight:600,textAlign:`center`},children:`Item 3`})]})})},v={render:()=>{let[e,t]=p.useState(`vertical`);return(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,m.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(400px, 1fr))`,gap:`24px`},children:[(0,m.jsx)(`div`,{onMouseEnter:()=>t(`vertical`),children:(0,m.jsx)(l,{label:`direction="vertical"`,highlight:e===`vertical`,children:(0,m.jsx)(a,{direction:`vertical`,spacing:`default`,children:[1,2,3].map(e=>(0,m.jsxs)(`div`,{style:{padding:`16px`,background:u(e-1).main,color:`white`,borderRadius:`8px`,fontWeight:600,textAlign:`center`},children:[`Item `,e]},e))})})}),(0,m.jsx)(`div`,{onMouseEnter:()=>t(`horizontal`),children:(0,m.jsx)(l,{label:`direction="horizontal"`,highlight:e===`horizontal`,children:(0,m.jsx)(a,{direction:`horizontal`,spacing:`default`,children:[1,2,3].map(e=>(0,m.jsxs)(`div`,{style:{padding:`16px`,background:u(e-1).main,color:`white`,borderRadius:`8px`,fontWeight:600,textAlign:`center`,minWidth:`80px`},children:[`Item `,e]},e))})})})]}),(0,m.jsx)(s,{code:(e=>`<Stack direction="${e}" spacing="default">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>`)(e),language:`jsx`,title:`JSX`,subtitle:`direction="${e}"`})]})})}},y={render:()=>{let[e,t]=p.useState(`default`),n=[{value:`none`,size:`4px`,color:f.neutral.borderMedium},{value:`tight`,size:`4px`,color:f.primary.cyan.main},{value:`compact`,size:`8px`,color:f.primary.green.main},{value:`default`,size:`16px`,color:f.primary.blue.main},{value:`comfortable`,size:`24px`,color:f.primary.violet.main},{value:`spacious`,size:`32px`,color:f.primary.pink.main}];return(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(220px, 1fr))`,gap:`20px`},children:n.map(({value:n,size:r,color:i})=>(0,m.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,m.jsx)(l,{label:`spacing="${n}" (${r})`,highlight:e===n,children:(0,m.jsx)(a,{spacing:n,children:[1,2,3].map(e=>(0,m.jsxs)(`div`,{style:{padding:`12px`,background:i,color:`white`,borderRadius:`6px`,fontSize:`13px`,fontWeight:600,textAlign:`center`},children:[`Item `,e]},e))})})},n))}),(0,m.jsx)(s,{code:(e=>`<Stack spacing="${e}">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>`)(e),language:`jsx`,title:`JSX`,subtitle:`spacing="${e}"`})]})})}},b={render:()=>{let[e,t]=p.useState(`stretch`);return(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:`24px`},children:[`start`,`center`,`end`,`stretch`,`baseline`].map(n=>(0,m.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,m.jsx)(l,{label:`align="${n}"`,highlight:e===n,children:(0,m.jsx)(`div`,{style:{border:`2px dashed ${f.neutral.borderMedium}`,padding:`8px`},children:(0,m.jsxs)(a,{direction:`horizontal`,align:n,spacing:`default`,children:[(0,m.jsx)(`div`,{style:{padding:`12px`,background:f.primary.blue.main,color:`white`,borderRadius:`6px`,fontWeight:600,height:`40px`,display:`flex`,alignItems:`center`},children:`40px`}),(0,m.jsx)(`div`,{style:{padding:`12px`,background:f.primary.violet.main,color:`white`,borderRadius:`6px`,fontWeight:600,height:`60px`,display:`flex`,alignItems:`center`},children:`60px`}),(0,m.jsx)(`div`,{style:{padding:`12px`,background:f.primary.pink.main,color:`white`,borderRadius:`6px`,fontWeight:600,height:`50px`,display:`flex`,alignItems:`center`},children:`50px`})]})})})},n))}),(0,m.jsx)(s,{code:(e=>`<Stack direction="horizontal" align="${e}" spacing="default">
  <div style={{ height: '40px' }}>Item 1</div>
  <div style={{ height: '60px' }}>Item 2</div>
  <div style={{ height: '50px' }}>Item 3</div>
</Stack>`)(e),language:`jsx`,title:`JSX`,subtitle:`align="${e}"`})]})})}},x={render:()=>{let[e,t]=p.useState(`start`);return(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(350px, 1fr))`,gap:`24px`},children:[`start`,`center`,`end`,`space-between`,`space-around`,`space-evenly`].map((n,r)=>(0,m.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,m.jsx)(l,{label:`justify="${n}"`,highlight:e===n,children:(0,m.jsx)(`div`,{style:{border:`2px dashed ${f.neutral.borderMedium}`,padding:`8px`},children:(0,m.jsx)(a,{direction:`horizontal`,justify:n,spacing:n.startsWith(`space`)?`none`:`default`,children:[1,2,3].map(e=>(0,m.jsx)(`div`,{style:{padding:`12px 16px`,background:u(r).main,color:`white`,borderRadius:`6px`,fontWeight:600,fontSize:`13px`},children:e},e))})})})},n))}),(0,m.jsx)(s,{code:(e=>`<Stack direction="horizontal" justify="${e}" spacing="default">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>`)(e),language:`jsx`,title:`JSX`,subtitle:`justify="${e}"`})]})})}},S={render:()=>{let[e,t]=p.useState(`nowrap`);return(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,m.jsx)(`div`,{onMouseEnter:()=>t(`nowrap`),children:(0,m.jsx)(l,{label:`wrap={false} (default)`,highlight:e===`nowrap`,children:(0,m.jsx)(`div`,{style:{border:`2px dashed ${f.neutral.borderMedium}`,padding:`8px`,width:`100%`},children:(0,m.jsx)(a,{direction:`horizontal`,wrap:!1,spacing:`default`,children:[1,2,3,4,5,6,7,8].map(e=>(0,m.jsxs)(`div`,{style:{padding:`12px 16px`,background:u(e-1).main,color:`white`,borderRadius:`6px`,fontWeight:600,whiteSpace:`nowrap`},children:[`Item `,e]},e))})})})}),(0,m.jsx)(`div`,{onMouseEnter:()=>t(`wrap`),children:(0,m.jsx)(l,{label:`wrap={true}`,highlight:e===`wrap`,children:(0,m.jsx)(`div`,{style:{border:`2px dashed ${f.neutral.borderMedium}`,padding:`8px`,width:`100%`},children:(0,m.jsx)(a,{direction:`horizontal`,wrap:!0,spacing:`default`,children:[1,2,3,4,5,6,7,8].map(e=>(0,m.jsxs)(`div`,{style:{padding:`12px 16px`,background:u(e-1).main,color:`white`,borderRadius:`6px`,fontWeight:600,whiteSpace:`nowrap`},children:[`Item `,e]},e))})})})})]}),(0,m.jsx)(s,{code:(e=>`<Stack direction="horizontal" wrap={${e}} spacing="default">
  {items.map(item => <Card key={item.id} />)}
</Stack>`)(e===`wrap`),language:`jsx`,title:`JSX`,subtitle:e})]})})}},C={render:()=>(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`flex-start`},children:[(0,m.jsx)(l,{label:`grow={false} (default)`,children:(0,m.jsx)(`div`,{style:{height:`200px`,border:`2px dashed ${f.neutral.borderMedium}`,padding:`8px`,display:`flex`},children:(0,m.jsxs)(a,{direction:`vertical`,spacing:`compact`,children:[(0,m.jsx)(`div`,{style:{padding:`8px 12px`,background:f.primary.blue.main,color:`white`,borderRadius:`6px`,fontWeight:600},children:`Header`}),(0,m.jsx)(`div`,{style:{padding:`8px 12px`,background:f.neutral.backgroundMedium,borderRadius:`6px`},children:`Content (doesn't fill)`})]})})}),(0,m.jsx)(l,{label:`grow={true}`,children:(0,m.jsx)(`div`,{style:{height:`200px`,border:`2px dashed ${f.neutral.borderMedium}`,padding:`8px`,display:`flex`},children:(0,m.jsxs)(a,{direction:`vertical`,spacing:`compact`,grow:!0,children:[(0,m.jsx)(`div`,{style:{padding:`8px 12px`,background:f.primary.violet.main,color:`white`,borderRadius:`6px`,fontWeight:600},children:`Header`}),(0,m.jsx)(`div`,{style:{padding:`8px 12px`,background:f.neutral.backgroundMedium,borderRadius:`6px`,flex:1},children:`Content fills height ✓`}),(0,m.jsx)(`div`,{style:{padding:`8px 12px`,background:f.primary.pink.main,color:`white`,borderRadius:`6px`,fontWeight:600},children:`Footer pinned ✓`})]})})})]}),(0,m.jsx)(s,{code:`// ✅ With grow prop — no className workaround needed
<Stack direction="vertical" spacing="default" grow>
  <div>Header</div>
  <div style={{ flex: 1 }}>Content</div>
  <div>Footer pinned to bottom</div>
</Stack>

// ❌ Workaround needed today
<Stack direction="vertical" spacing="default" className={styles['my-stack']}>
  ...
</Stack>
// .my-stack { height: 100%; }`,language:`jsx`,title:`JSX`,subtitle:`grow`})]})})},w={render:()=>{let[e,t]=p.useState(`div`);return(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(200px, 1fr))`,gap:`16px`},children:[`div`,`section`,`article`,`header`,`footer`,`main`,`nav`,`aside`].map(n=>(0,m.jsx)(l,{label:`<${n}>`,highlight:e===n,onInteraction:()=>t(n),interactionType:`click`,children:(0,m.jsx)(a,{as:n,spacing:`compact`,style:{padding:`16px`,background:f.neutral.backgroundLight,borderRadius:`8px`,border:`2px solid ${f.neutral.borderMedium}`},children:(0,m.jsx)(`div`,{style:{padding:`8px`,background:f.themed.background.surface,borderRadius:`4px`,fontSize:`13px`,fontWeight:600,textAlign:`center`},children:n})})},n))}),(0,m.jsx)(s,{code:(e=>`<Stack as="${e}" spacing="default">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>`)(e),language:`jsx`,title:`JSX`,subtitle:`as="${e}"`})]})})}},T={render:()=>(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`},children:[(0,m.jsxs)(`section`,{children:[(0,m.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600},children:`Vertical Form Layout`}),(0,m.jsxs)(a,{spacing:`comfortable`,children:[(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,m.jsx)(`label`,{style:{fontSize:`14px`,fontWeight:600},children:`Name`}),(0,m.jsx)(`input`,{type:`text`,placeholder:`Enter your name`,style:{padding:`8px`,borderRadius:`6px`,border:`1px solid ${h.borderMedium}`}})]}),(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,m.jsx)(`label`,{style:{fontSize:`14px`,fontWeight:600},children:`Email`}),(0,m.jsx)(`input`,{type:`email`,placeholder:`Enter your email`,style:{padding:`8px`,borderRadius:`6px`,border:`1px solid ${h.borderMedium}`}})]}),(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,m.jsx)(`label`,{style:{fontSize:`14px`,fontWeight:600},children:`Message`}),(0,m.jsx)(`textarea`,{placeholder:`Your message`,style:{padding:`8px`,borderRadius:`6px`,border:`1px solid ${h.borderMedium}`,minHeight:`80px`}})]})]})]}),(0,m.jsxs)(`section`,{children:[(0,m.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600},children:`Horizontal Navigation`}),(0,m.jsxs)(a,{direction:`horizontal`,spacing:`comfortable`,align:`center`,justify:`space-between`,style:{padding:`16px`,background:f.neutral.backgroundLight,borderRadius:`8px`},children:[(0,m.jsx)(`div`,{style:{fontSize:`18px`,fontWeight:700},children:`Logo`}),(0,m.jsxs)(a,{direction:`horizontal`,spacing:`default`,align:`center`,children:[(0,m.jsx)(`a`,{href:`#`,style:{textDecoration:`none`,color:`inherit`,fontWeight:600},children:`Home`}),(0,m.jsx)(`a`,{href:`#`,style:{textDecoration:`none`,color:`inherit`,fontWeight:600},children:`About`}),(0,m.jsx)(`a`,{href:`#`,style:{textDecoration:`none`,color:`inherit`,fontWeight:600},children:`Services`}),(0,m.jsx)(`a`,{href:`#`,style:{textDecoration:`none`,color:`inherit`,fontWeight:600},children:`Contact`})]})]})]}),(0,m.jsxs)(`section`,{children:[(0,m.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600},children:`Responsive Card Grid`}),(0,m.jsx)(a,{direction:`horizontal`,spacing:`default`,wrap:!0,justify:`start`,children:[1,2,3,4,5,6].map(e=>(0,m.jsxs)(`div`,{style:{padding:`24px`,background:u(e-1).main,color:`white`,borderRadius:`12px`,fontWeight:600,minWidth:`150px`,textAlign:`center`},children:[`Card `,e]},e))})]}),(0,m.jsxs)(`section`,{children:[(0,m.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600},children:`Button Group`}),(0,m.jsxs)(a,{direction:`horizontal`,spacing:`compact`,align:`center`,children:[(0,m.jsx)(`button`,{style:{padding:`10px 20px`,borderRadius:`6px`,border:`none`,background:f.primary.blue.main,color:`white`,fontWeight:600,cursor:`pointer`},children:`Primary`}),(0,m.jsx)(`button`,{style:{padding:`10px 20px`,borderRadius:`6px`,border:`1px solid ${f.primary.blue.main}`,background:f.themed.background.surface,color:f.primary.blue.main,fontWeight:600,cursor:`pointer`},children:`Secondary`}),(0,m.jsx)(`button`,{style:{padding:`10px 20px`,borderRadius:`6px`,border:`1px solid ${h.borderMedium}`,background:f.themed.background.surface,color:h.textSlate,fontWeight:600,cursor:`pointer`},children:`Cancel`})]})]})]})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    spacing: 'default',
    align: 'stretch',
    justify: 'start',
    wrap: false
  },
  render: args => {
    return <StoryContainer>
        <Stack {...args}>
          <div style={{
          padding: '16px',
          background: STORY_COLORS.primary.blue.main,
          color: 'white',
          borderRadius: '8px',
          fontWeight: 600,
          textAlign: 'center'
        }}>
            Item 1
          </div>
          <div style={{
          padding: '16px',
          background: STORY_COLORS.primary.violet.main,
          color: 'white',
          borderRadius: '8px',
          fontWeight: 600,
          textAlign: 'center'
        }}>
            Item 2
          </div>
          <div style={{
          padding: '16px',
          background: STORY_COLORS.primary.pink.main,
          color: 'white',
          borderRadius: '8px',
          fontWeight: 600,
          textAlign: 'center'
        }}>
            Item 3
          </div>
        </Stack>
      </StoryContainer>;
  }
}`,..._.parameters?.docs?.source},description:{story:`## Playground

Interactive playground to experiment with all Stack props.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedDirection, setSelectedDirection] = React.useState<string>('vertical');
    const generateCode = (direction: string): string => {
      return \`<Stack direction="\${direction}" spacing="default">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>\`;
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px'
        }}>
            <div onMouseEnter={() => setSelectedDirection('vertical')}>
              <PropCard label='direction="vertical"' highlight={selectedDirection === 'vertical'}>
                <Stack direction="vertical" spacing="default">
                  {[1, 2, 3].map(i => <div key={i} style={{
                  padding: '16px',
                  background: getColorByIndex(i - 1).main,
                  color: 'white',
                  borderRadius: '8px',
                  fontWeight: 600,
                  textAlign: 'center'
                }}>
                      Item {i}
                    </div>)}
                </Stack>
              </PropCard>
            </div>

            <div onMouseEnter={() => setSelectedDirection('horizontal')}>
              <PropCard label='direction="horizontal"' highlight={selectedDirection === 'horizontal'}>
                <Stack direction="horizontal" spacing="default">
                  {[1, 2, 3].map(i => <div key={i} style={{
                  padding: '16px',
                  background: getColorByIndex(i - 1).main,
                  color: 'white',
                  borderRadius: '8px',
                  fontWeight: 600,
                  textAlign: 'center',
                  minWidth: '80px'
                }}>
                      Item {i}
                    </div>)}
                </Stack>
              </PropCard>
            </div>
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(selectedDirection)} language="jsx" title="JSX" subtitle={\`direction="\${selectedDirection}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...v.parameters?.docs?.source},description:{story:`## Prop: \`direction\`

Controls the layout direction (vertical or horizontal).`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredSpacing, setHoveredSpacing] = React.useState<string>('default');
    const spacingValues = [{
      value: 'none' as const,
      size: '4px',
      color: STORY_COLORS.neutral.borderMedium
    }, {
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
      return \`<Stack spacing="\${spacing}">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>\`;
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '20px'
        }}>
            {spacingValues.map(({
            value,
            size,
            color
          }) => <div key={value} onMouseEnter={() => setHoveredSpacing(value)}>
                <PropCard label={\`spacing="\${value}" (\${size})\`} highlight={hoveredSpacing === value}>
                  <Stack spacing={value}>
                    {[1, 2, 3].map(i => <div key={i} style={{
                  padding: '12px',
                  background: color,
                  color: 'white',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 600,
                  textAlign: 'center'
                }}>
                        Item {i}
                      </div>)}
                  </Stack>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredSpacing)} language="jsx" title="JSX" subtitle={\`spacing="\${hoveredSpacing}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...y.parameters?.docs?.source},description:{story:`## Prop: \`spacing\`

Controls the gap between child elements.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredAlign, setHoveredAlign] = React.useState<string>('stretch');
    const alignValues = ['start', 'center', 'end', 'stretch', 'baseline'] as const;
    const generateCode = (align: string): string => {
      return \`<Stack direction="horizontal" align="\${align}" spacing="default">
  <div style={{ height: '40px' }}>Item 1</div>
  <div style={{ height: '60px' }}>Item 2</div>
  <div style={{ height: '50px' }}>Item 3</div>
</Stack>\`;
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
                    <Stack direction="horizontal" align={value} spacing="default">
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
                    </Stack>
                  </div>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredAlign)} language="jsx" title="JSX" subtitle={\`align="\${hoveredAlign}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...b.parameters?.docs?.source},description:{story:`## Prop: \`align\`

Controls cross-axis alignment of children.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredJustify, setHoveredJustify] = React.useState<string>('start');
    const justifyValues = ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'] as const;
    const generateCode = (justify: string): string => {
      return \`<Stack direction="horizontal" justify="\${justify}" spacing="default">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>\`;
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
                    <Stack direction="horizontal" justify={value} spacing={value.startsWith('space') ? 'none' : 'default'}>
                      {[1, 2, 3].map(i => {
                    const color = getColorByIndex(idx);
                    return <div key={i} style={{
                      padding: '12px 16px',
                      background: color.main,
                      color: 'white',
                      borderRadius: '6px',
                      fontWeight: 600,
                      fontSize: '13px'
                    }}>
                            {i}
                          </div>;
                  })}
                    </Stack>
                  </div>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredJustify)} language="jsx" title="JSX" subtitle={\`justify="\${hoveredJustify}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...x.parameters?.docs?.source},description:{story:`## Prop: \`justify\`

Controls main-axis justification of children.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredWrap, setHoveredWrap] = React.useState<string>('nowrap');
    const generateCode = (wrap: boolean): string => {
      return \`<Stack direction="horizontal" wrap={\${wrap}} spacing="default">
  {items.map(item => <Card key={item.id} />)}
</Stack>\`;
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
          gap: '24px'
        }}>
            <div onMouseEnter={() => setHoveredWrap('nowrap')}>
              <PropCard label="wrap={false} (default)" highlight={hoveredWrap === 'nowrap'}>
                <div style={{
                border: \`2px dashed \${STORY_COLORS.neutral.borderMedium}\`,
                padding: '8px',
                width: '100%'
              }}>
                  <Stack direction="horizontal" wrap={false} spacing="default">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} style={{
                    padding: '12px 16px',
                    background: getColorByIndex(i - 1).main,
                    color: 'white',
                    borderRadius: '6px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap'
                  }}>
                        Item {i}
                      </div>)}
                  </Stack>
                </div>
              </PropCard>
            </div>

            <div onMouseEnter={() => setHoveredWrap('wrap')}>
              <PropCard label="wrap={true}" highlight={hoveredWrap === 'wrap'}>
                <div style={{
                border: \`2px dashed \${STORY_COLORS.neutral.borderMedium}\`,
                padding: '8px',
                width: '100%'
              }}>
                  <Stack direction="horizontal" wrap spacing="default">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} style={{
                    padding: '12px 16px',
                    background: getColorByIndex(i - 1).main,
                    color: 'white',
                    borderRadius: '6px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap'
                  }}>
                        Item {i}
                      </div>)}
                  </Stack>
                </div>
              </PropCard>
            </div>
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredWrap === 'wrap')} language="jsx" title="JSX" subtitle={hoveredWrap} />
        </div>
      </StoryContainer>;
  }
}`,...S.parameters?.docs?.source},description:{story:`## Prop: \`wrap\`

Controls whether children wrap to new lines when overflowing.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const growCode = \`// ✅ With grow prop — no className workaround needed
<Stack direction="vertical" spacing="default" grow>
  <div>Header</div>
  <div style={{ flex: 1 }}>Content</div>
  <div>Footer pinned to bottom</div>
</Stack>

// ❌ Workaround needed today
<Stack direction="vertical" spacing="default" className={styles['my-stack']}>
  ...
</Stack>
// .my-stack { height: 100%; }\`;
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
          <div style={{
          display: 'flex',
          gap: '24px',
          alignItems: 'flex-start'
        }}>
            {/* Without grow */}
            <PropCard label="grow={false} (default)">
              <div style={{
              height: '200px',
              border: \`2px dashed \${STORY_COLORS.neutral.borderMedium}\`,
              padding: '8px',
              display: 'flex'
            }}>
                <Stack direction="vertical" spacing="compact">
                  <div style={{
                  padding: '8px 12px',
                  background: STORY_COLORS.primary.blue.main,
                  color: 'white',
                  borderRadius: '6px',
                  fontWeight: 600
                }}>
                    Header
                  </div>
                  <div style={{
                  padding: '8px 12px',
                  background: STORY_COLORS.neutral.backgroundMedium,
                  borderRadius: '6px'
                }}>
                    Content (doesn't fill)
                  </div>
                </Stack>
              </div>
            </PropCard>

            {/* With grow */}
            <PropCard label="grow={true}">
              <div style={{
              height: '200px',
              border: \`2px dashed \${STORY_COLORS.neutral.borderMedium}\`,
              padding: '8px',
              display: 'flex'
            }}>
                <Stack direction="vertical" spacing="compact" grow>
                  <div style={{
                  padding: '8px 12px',
                  background: STORY_COLORS.primary.violet.main,
                  color: 'white',
                  borderRadius: '6px',
                  fontWeight: 600
                }}>
                    Header
                  </div>
                  <div style={{
                  padding: '8px 12px',
                  background: STORY_COLORS.neutral.backgroundMedium,
                  borderRadius: '6px',
                  flex: 1
                }}>
                    Content fills height ✓
                  </div>
                  <div style={{
                  padding: '8px 12px',
                  background: STORY_COLORS.primary.pink.main,
                  color: 'white',
                  borderRadius: '6px',
                  fontWeight: 600
                }}>
                    Footer pinned ✓
                  </div>
                </Stack>
              </div>
            </PropCard>
          </div>

          <CodeBlock code={growCode} language="jsx" title="JSX" subtitle="grow" />
        </div>
      </StoryContainer>;
  }
}`,...C.parameters?.docs?.source},description:{story:"## Prop: `grow`\n\nWhen `true`, the Stack fills all available space in its parent container.\nApplies `flex: 1 1 auto`, `height: 100%`, and `min-height: 0`.\n\nUseful when Stack is placed inside a height-constrained container such as\na CSS grid cell, a Card, or a modal with `max-height`.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedElement, setSelectedElement] = React.useState<string>('div');
    const generateCode = (element: string): string => {
      return \`<Stack as="\${element}" spacing="default">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>\`;
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
            {(['div', 'section', 'article', 'header', 'footer', 'main', 'nav', 'aside'] as const).map(element => <PropCard key={element} label={\`<\${element}>\`} highlight={selectedElement === element} onInteraction={() => setSelectedElement(element)} interactionType="click">
                <Stack as={element} spacing="compact" style={{
              padding: '16px',
              background: STORY_COLORS.neutral.backgroundLight,
              borderRadius: '8px',
              border: \`2px solid \${STORY_COLORS.neutral.borderMedium}\`
            }}>
                  <div style={{
                padding: '8px',
                background: STORY_COLORS.themed.background.surface,
                borderRadius: '4px',
                fontSize: '13px',
                fontWeight: 600,
                textAlign: 'center'
              }}>
                    {element}
                  </div>
                </Stack>
              </PropCard>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(selectedElement)} language="jsx" title="JSX" subtitle={\`as="\${selectedElement}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...w.parameters?.docs?.source},description:{story:`## Prop: \`as\`

Renders Stack as different HTML elements for semantic markup.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
          {/* Example 1: Vertical Form Layout */}
          <section>
            <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Vertical Form Layout</h3>
            <Stack spacing="comfortable">
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
                <label style={{
                fontSize: '14px',
                fontWeight: 600
              }}>Name</label>
                <input type="text" placeholder="Enter your name" style={{
                padding: '8px',
                borderRadius: '6px',
                border: \`1px solid \${NEUTRAL.borderMedium}\`
              }} />
              </div>
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
                <label style={{
                fontSize: '14px',
                fontWeight: 600
              }}>Email</label>
                <input type="email" placeholder="Enter your email" style={{
                padding: '8px',
                borderRadius: '6px',
                border: \`1px solid \${NEUTRAL.borderMedium}\`
              }} />
              </div>
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
                <label style={{
                fontSize: '14px',
                fontWeight: 600
              }}>Message</label>
                <textarea placeholder="Your message" style={{
                padding: '8px',
                borderRadius: '6px',
                border: \`1px solid \${NEUTRAL.borderMedium}\`,
                minHeight: '80px'
              }} />
              </div>
            </Stack>
          </section>

          {/* Example 2: Horizontal Navigation */}
          <section>
            <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Horizontal Navigation</h3>
            <Stack direction="horizontal" spacing="comfortable" align="center" justify="space-between" style={{
            padding: '16px',
            background: STORY_COLORS.neutral.backgroundLight,
            borderRadius: '8px'
          }}>
              <div style={{
              fontSize: '18px',
              fontWeight: 700
            }}>Logo</div>
              <Stack direction="horizontal" spacing="default" align="center">
                <a href="#" style={{
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 600
              }}>
                  Home
                </a>
                <a href="#" style={{
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 600
              }}>
                  About
                </a>
                <a href="#" style={{
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 600
              }}>
                  Services
                </a>
                <a href="#" style={{
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 600
              }}>
                  Contact
                </a>
              </Stack>
            </Stack>
          </section>

          {/* Example 3: Card Grid */}
          <section>
            <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Responsive Card Grid</h3>
            <Stack direction="horizontal" spacing="default" wrap justify="start">
              {[1, 2, 3, 4, 5, 6].map(i => <div key={i} style={{
              padding: '24px',
              background: getColorByIndex(i - 1).main,
              color: 'white',
              borderRadius: '12px',
              fontWeight: 600,
              minWidth: '150px',
              textAlign: 'center'
            }}>
                  Card {i}
                </div>)}
            </Stack>
          </section>

          {/* Example 4: Button Group */}
          <section>
            <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600
          }}>Button Group</h3>
            <Stack direction="horizontal" spacing="compact" align="center">
              <button style={{
              padding: '10px 20px',
              borderRadius: '6px',
              border: 'none',
              background: STORY_COLORS.primary.blue.main,
              color: 'white',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
                Primary
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
                Secondary
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
            </Stack>
          </section>
        </div>
      </StoryContainer>;
  }
}`,...T.parameters?.docs?.source},description:{story:`## Combined Variants

Real-world examples combining multiple props.`,...T.parameters?.docs?.description}}},E=[`Playground`,`PropDirection`,`PropSpacing`,`PropAlign`,`PropJustify`,`PropWrap`,`PropGrow`,`PropAs`,`CombinedVariants`]}))();export{T as CombinedVariants,_ as Playground,b as PropAlign,w as PropAs,v as PropDirection,C as PropGrow,x as PropJustify,y as PropSpacing,S as PropWrap,E as __namedExportsOrder,g as default};