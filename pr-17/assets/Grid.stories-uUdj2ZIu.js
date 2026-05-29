import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n,w as r}from"./iframe-Bm_r3Ygs.js";import{S as i,p as a}from"./lufa-ui-B9ODeQns.js";import{b as o,g as s,t as c,v as l}from"./helpers-D9bnZ3qZ.js";import{n as u,r as d,t as f}from"./storyColors-RAOlxH1p.js";var p,m,h,g,_,v,y;e((()=>{p=t(r(),1),i(),c(),d(),m=n(),h={title:`4. Foundation/Grid`,component:a,parameters:{layout:`padded`},argTypes:{columns:{control:`select`,options:[1,2,3,4,5,6,12],description:`Number of columns`},gap:{control:`select`,options:[`tight`,`compact`,`default`,`comfortable`,`spacious`],description:`Gap between items`},align:{control:`select`,options:[`start`,`end`,`center`,`stretch`,`baseline`],description:`Align items (align-items)`},justify:{control:`select`,options:[`start`,`end`,`center`,`stretch`],description:`Justify items (justify-items)`}}},g=e=>e===`two`?`<Grid columns={2} gap="default">
  <div>Item</div>
  <div>Item</div>
</Grid>`:e===`four`?`<Grid columns={4} gap="tight">
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
</Grid>`:`<Grid columns={3} gap="default">
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
</Grid>`,_=({children:e,color:t})=>(0,m.jsx)(`div`,{style:{backgroundColor:t,color:f.neutral.white,padding:`1rem`,borderRadius:`4px`,textAlign:`center`,fontWeight:600,border:`1px solid ${f.neutral.borderMedium}`},children:e}),v={name:`Prop: columns`,render:()=>{let[e,t]=p.useState(`three`),n=[u(0),u(1),u(2)];return(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,m.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:`24px`},children:[(0,m.jsx)(`div`,{onMouseEnter:()=>t(`two`),children:(0,m.jsx)(l,{label:`2 Columns`,highlight:e===`two`,children:(0,m.jsx)(a,{columns:2,gap:`default`,style:{border:`2px dashed ${n[0].main}`,padding:`1rem`},children:[1,2,3,4].map(e=>(0,m.jsx)(_,{color:n[0].main,children:e},e))})})}),(0,m.jsx)(`div`,{onMouseEnter:()=>t(`three`),children:(0,m.jsx)(l,{label:`3 Columns`,highlight:e===`three`,children:(0,m.jsx)(a,{columns:3,gap:`default`,style:{border:`2px dashed ${n[1].main}`,padding:`1rem`},children:[1,2,3,4,5,6].map(e=>(0,m.jsx)(_,{color:n[1].main,children:e},e))})})}),(0,m.jsx)(`div`,{onMouseEnter:()=>t(`four`),children:(0,m.jsx)(l,{label:`4 Columns`,highlight:e===`four`,children:(0,m.jsx)(a,{columns:4,gap:`tight`,style:{border:`2px dashed ${n[2].main}`,padding:`1rem`},children:[1,2,3,4,5,6,7,8].map(e=>(0,m.jsx)(_,{color:n[2].main,children:e},e))})})})]}),(0,m.jsx)(s,{code:g(e),language:`jsx`,title:`JSX`,subtitle:e})]})})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Prop: columns',
  render: () => {
    const [hoveredVariant, setHoveredVariant] = React.useState<'two' | 'three' | 'four'>('three');
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
            <div onMouseEnter={() => setHoveredVariant('two')}>
              <PropCard label="2 Columns" highlight={hoveredVariant === 'two'}>
                <Grid columns={2} gap="default" style={{
                border: \`2px dashed \${colors[0].main}\`,
                padding: '1rem'
              }}>
                  {[1, 2, 3, 4].map(i => <Item key={i} color={colors[0].main}>
                      {i}
                    </Item>)}
                </Grid>
              </PropCard>
            </div>

            <div onMouseEnter={() => setHoveredVariant('three')}>
              <PropCard label="3 Columns" highlight={hoveredVariant === 'three'}>
                <Grid columns={3} gap="default" style={{
                border: \`2px dashed \${colors[1].main}\`,
                padding: '1rem'
              }}>
                  {[1, 2, 3, 4, 5, 6].map(i => <Item key={i} color={colors[1].main}>
                      {i}
                    </Item>)}
                </Grid>
              </PropCard>
            </div>

            <div onMouseEnter={() => setHoveredVariant('four')}>
              <PropCard label="4 Columns" highlight={hoveredVariant === 'four'}>
                <Grid columns={4} gap="tight" style={{
                border: \`2px dashed \${colors[2].main}\`,
                padding: '1rem'
              }}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <Item key={i} color={colors[2].main}>
                      {i}
                    </Item>)}
                </Grid>
              </PropCard>
            </div>
          </div>

          <CodeBlock code={generateCode(hoveredVariant)} language="jsx" title="JSX" subtitle={hoveredVariant} />
        </div>
      </StoryContainer>;
  }
}`,...v.parameters?.docs?.source}}},y=[`PropColumns`]}))();export{v as PropColumns,y as __namedExportsOrder,h as default};