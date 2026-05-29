import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n,w as r}from"./iframe-Bm_r3Ygs.js";import{S as i,f as a}from"./lufa-ui-B9ODeQns.js";import{b as o,g as s,t as c,v as l}from"./helpers-D9bnZ3qZ.js";import{n as u,r as d,t as f}from"./storyColors-RAOlxH1p.js";var p,m,h,g,_,v,y;e((()=>{p=t(r(),1),i(),c(),d(),m=n(),h={title:`4. Foundation/Flex`,component:a,parameters:{layout:`padded`},argTypes:{direction:{control:`select`,options:[`row`,`column`,`row-reverse`,`column-reverse`],description:`The flex direction`},align:{control:`select`,options:[`start`,`end`,`center`,`baseline`,`stretch`],description:`The align-items property`},justify:{control:`select`,options:[`start`,`end`,`center`,`between`,`around`,`evenly`],description:`The justify-content property`},wrap:{control:`select`,options:[`nowrap`,`wrap`,`wrap-reverse`],description:`The flex-wrap property`},gap:{control:`select`,options:[`tight`,`compact`,`default`,`comfortable`,`spacious`],description:`The gap property (using semantic tokens)`},inline:{control:`boolean`,description:`If true, sets display to inline-flex`}}},g=e=>e===`column`?`<Flex direction="column" gap="compact">
  <div>Item</div>
  <div>Item</div>
</Flex>`:e===`center`?`<Flex justify="center" align="center" gap="default">
  <div>Item</div>
  <div>Item</div>
</Flex>`:`<Flex gap="default">
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
</Flex>`,_=({children:e,color:t})=>(0,m.jsx)(`div`,{style:{backgroundColor:t,color:f.neutral.white,padding:`1rem`,borderRadius:`4px`,textAlign:`center`,border:`1px solid ${f.neutral.borderMedium}`},children:e}),v={name:`Prop: layout`,render:()=>{let[e,t]=p.useState(`row`),n=[u(0),u(1),u(2)];return(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,m.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:`24px`},children:[(0,m.jsx)(`div`,{onMouseEnter:()=>t(`row`),children:(0,m.jsx)(l,{label:`Row (default)`,highlight:e===`row`,children:(0,m.jsxs)(a,{gap:`default`,style:{border:`2px dashed ${n[0].main}`,padding:`1rem`},children:[(0,m.jsx)(_,{color:n[0].main,children:`Item 1`}),(0,m.jsx)(_,{color:n[0].main,children:`Item 2`}),(0,m.jsx)(_,{color:n[0].main,children:`Item 3`})]})})}),(0,m.jsx)(`div`,{onMouseEnter:()=>t(`column`),children:(0,m.jsx)(l,{label:`Column`,highlight:e===`column`,children:(0,m.jsxs)(a,{direction:`column`,gap:`compact`,style:{border:`2px dashed ${n[1].main}`,padding:`1rem`},children:[(0,m.jsx)(_,{color:n[1].main,children:`Item 1`}),(0,m.jsx)(_,{color:n[1].main,children:`Item 2`}),(0,m.jsx)(_,{color:n[1].main,children:`Item 3`})]})})}),(0,m.jsx)(`div`,{onMouseEnter:()=>t(`center`),children:(0,m.jsx)(l,{label:`Center Align`,highlight:e===`center`,children:(0,m.jsxs)(a,{justify:`center`,align:`center`,gap:`default`,style:{border:`2px dashed ${n[2].main}`,padding:`1rem`},children:[(0,m.jsx)(_,{color:n[2].main,children:`1`}),(0,m.jsx)(_,{color:n[2].main,children:`2`})]})})})]}),(0,m.jsx)(s,{code:g(e),language:`jsx`,title:`JSX`,subtitle:e})]})})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Prop: layout',
  render: () => {
    const [hoveredVariant, setHoveredVariant] = React.useState<'row' | 'column' | 'center'>('row');
    const colors = [getColorByIndex(0), getColorByIndex(1), getColorByIndex(2)];
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
            <div onMouseEnter={() => setHoveredVariant('row')}>
              <PropCard label="Row (default)" highlight={hoveredVariant === 'row'}>
                <Flex gap="default" style={{
                border: \`2px dashed \${colors[0].main}\`,
                padding: '1rem'
              }}>
                  <Item color={colors[0].main}>Item 1</Item>
                  <Item color={colors[0].main}>Item 2</Item>
                  <Item color={colors[0].main}>Item 3</Item>
                </Flex>
              </PropCard>
            </div>

            <div onMouseEnter={() => setHoveredVariant('column')}>
              <PropCard label="Column" highlight={hoveredVariant === 'column'}>
                <Flex direction="column" gap="compact" style={{
                border: \`2px dashed \${colors[1].main}\`,
                padding: '1rem'
              }}>
                  <Item color={colors[1].main}>Item 1</Item>
                  <Item color={colors[1].main}>Item 2</Item>
                  <Item color={colors[1].main}>Item 3</Item>
                </Flex>
              </PropCard>
            </div>

            <div onMouseEnter={() => setHoveredVariant('center')}>
              <PropCard label="Center Align" highlight={hoveredVariant === 'center'}>
                <Flex justify="center" align="center" gap="default" style={{
                border: \`2px dashed \${colors[2].main}\`,
                padding: '1rem'
              }}>
                  <Item color={colors[2].main}>1</Item>
                  <Item color={colors[2].main}>2</Item>
                </Flex>
              </PropCard>
            </div>
          </div>

          <CodeBlock code={generateCode(hoveredVariant)} language="jsx" title="JSX" subtitle={hoveredVariant} />
        </div>
      </StoryContainer>;
  }
}`,...v.parameters?.docs?.source}}},y=[`PropLayout`]}))();export{v as PropLayout,y as __namedExportsOrder,h as default};