import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n,w as r}from"./iframe-Bm_r3Ygs.js";import{S as i,l as a}from"./lufa-ui-B9ODeQns.js";import{b as o,g as s,t as c,v as l}from"./helpers-D9bnZ3qZ.js";import{n as u,r as d,t as f}from"./storyColors-RAOlxH1p.js";var p,m,h,g,_,v,y;e((()=>{p=t(r(),1),i(),c(),d(),m=n(),h={title:`4. Foundation/Container`,component:a,parameters:{layout:`padded`},argTypes:{as:{description:`The HTML element to render`,control:`text`,table:{defaultValue:{summary:`div`}}},fluid:{description:`If true, the container will take 100% width (no max-width)`,control:`boolean`,table:{defaultValue:{summary:`false`}}},size:{description:`The maximum size of the container, matching a breakpoint`,control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`]},paddingBlock:{description:`Vertical padding (top + bottom) using spacing tokens`,control:`select`,options:[`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`]},paddingInline:{description:`Horizontal padding (left + right) using spacing tokens — overrides the default gutter`,control:`select`,options:[`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`]},children:{description:`Content`,control:`text`}}},g=e=>e===`fluid`?`<Container fluid>
  Full width content
</Container>`:e===`size`?`<Container size="md">
  Constrained content
</Container>`:`<Container>
  Content
</Container>`,_={name:`Prop: width`,render:()=>{let[e,t]=p.useState(`default`);return(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,m.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr`,gap:`24px`},children:[(0,m.jsx)(`div`,{onMouseEnter:()=>t(`default`),children:(0,m.jsx)(l,{label:`Default (Responsive)`,highlight:e===`default`,children:(0,m.jsx)(a,{style:{backgroundColor:f.neutral.backgroundLight,padding:`1rem`,border:`2px dashed ${f.primary.blue.main}`},children:(0,m.jsx)(`div`,{style:{backgroundColor:f.primary.blue.main,padding:`1rem`,color:f.neutral.white},children:`Default container adapts to breakpoints.`})})})}),(0,m.jsx)(`div`,{onMouseEnter:()=>t(`fluid`),children:(0,m.jsx)(l,{label:`Fluid (Full Width)`,highlight:e===`fluid`,children:(0,m.jsx)(a,{fluid:!0,style:{backgroundColor:f.neutral.backgroundLight,padding:`1rem`,border:`2px dashed ${f.primary.green.main}`},children:(0,m.jsx)(`div`,{style:{backgroundColor:f.primary.green.main,padding:`1rem`,color:f.neutral.white},children:`Fluid container always takes 100% width.`})})})}),(0,m.jsx)(`div`,{onMouseEnter:()=>t(`size`),children:(0,m.jsx)(l,{label:`Size Variants`,highlight:e===`size`,children:(0,m.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[`sm`,`md`,`lg`].map((e,t)=>{let n=u(t);return(0,m.jsx)(a,{size:e,style:{backgroundColor:n.light,padding:`1rem`,border:`2px dashed ${n.main}`},children:(0,m.jsxs)(`div`,{style:{backgroundColor:n.main,color:f.neutral.white,padding:`1rem`},children:[`size="`,e,`"`]})},e)})})})})]}),(0,m.jsx)(s,{code:g(e),language:`jsx`,title:`JSX`})]})})}},v={name:`Prop: padding`,render:()=>{let e=[`tight`,`compact`,`default`,`comfortable`,`spacious`];return(0,m.jsx)(o,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,m.jsx)(l,{label:`paddingBlock — Vertical Padding`,children:(0,m.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:e.map((e,t)=>{let n=u(t);return(0,m.jsx)(a,{paddingBlock:e,style:{backgroundColor:n.light,border:`2px dashed ${n.main}`},children:(0,m.jsxs)(`div`,{style:{backgroundColor:n.main,color:f.neutral.white,padding:`0 1rem`,fontWeight:600},children:[`paddingBlock="`,e,`"`]})},e)})})}),(0,m.jsx)(l,{label:`paddingInline — Horizontal Padding`,children:(0,m.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:e.map((e,t)=>{let n=u(t);return(0,m.jsx)(a,{paddingInline:e,style:{backgroundColor:n.light,border:`2px dashed ${n.main}`},children:(0,m.jsxs)(`div`,{style:{backgroundColor:n.main,color:f.neutral.white,padding:`0.5rem 0`,fontWeight:600},children:[`paddingInline="`,e,`"`]})},e)})})}),(0,m.jsx)(s,{code:`// Vertical padding for page sections
<Container as="section" size="lg" paddingBlock="spacious">
  Hero content
</Container>

// Full padding control
<Container paddingBlock="comfortable" paddingInline="spacious">
  Custom padded content
</Container>`,language:`jsx`,title:`JSX`})]})})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Prop: width',
  render: () => {
    const [hoveredVariant, setHoveredVariant] = React.useState<'default' | 'fluid' | 'size'>('default');
    const sizes = ['sm', 'md', 'lg'] as const;
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px'
        }}>
            <div onMouseEnter={() => setHoveredVariant('default')}>
              <PropCard label="Default (Responsive)" highlight={hoveredVariant === 'default'}>
                <Container style={{
                backgroundColor: STORY_COLORS.neutral.backgroundLight,
                padding: '1rem',
                border: \`2px dashed \${STORY_COLORS.primary.blue.main}\`
              }}>
                  <div style={{
                  backgroundColor: STORY_COLORS.primary.blue.main,
                  padding: '1rem',
                  color: STORY_COLORS.neutral.white
                }}>
                    Default container adapts to breakpoints.
                  </div>
                </Container>
              </PropCard>
            </div>

            <div onMouseEnter={() => setHoveredVariant('fluid')}>
              <PropCard label="Fluid (Full Width)" highlight={hoveredVariant === 'fluid'}>
                <Container fluid style={{
                backgroundColor: STORY_COLORS.neutral.backgroundLight,
                padding: '1rem',
                border: \`2px dashed \${STORY_COLORS.primary.green.main}\`
              }}>
                  <div style={{
                  backgroundColor: STORY_COLORS.primary.green.main,
                  padding: '1rem',
                  color: STORY_COLORS.neutral.white
                }}>
                    Fluid container always takes 100% width.
                  </div>
                </Container>
              </PropCard>
            </div>

            <div onMouseEnter={() => setHoveredVariant('size')}>
              <PropCard label="Size Variants" highlight={hoveredVariant === 'size'}>
                <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                  {sizes.map((size, index) => {
                  const colors = getColorByIndex(index);
                  return <Container key={size} size={size} style={{
                    backgroundColor: colors.light,
                    padding: '1rem',
                    border: \`2px dashed \${colors.main}\`
                  }}>
                        <div style={{
                      backgroundColor: colors.main,
                      color: STORY_COLORS.neutral.white,
                      padding: '1rem'
                    }}>
                          size="{size}"
                        </div>
                      </Container>;
                })}
                </div>
              </PropCard>
            </div>
          </div>

          <CodeBlock code={generateCode(hoveredVariant)} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Prop: padding',
  render: () => {
    const spacings = ['tight', 'compact', 'default', 'comfortable', 'spacious'] as const;
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <PropCard label="paddingBlock — Vertical Padding">
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
              {spacings.map((spacing, index) => {
              const colors = getColorByIndex(index);
              return <Container key={spacing} paddingBlock={spacing} style={{
                backgroundColor: colors.light,
                border: \`2px dashed \${colors.main}\`
              }}>
                    <div style={{
                  backgroundColor: colors.main,
                  color: STORY_COLORS.neutral.white,
                  padding: '0 1rem',
                  fontWeight: 600
                }}>
                      paddingBlock=&quot;{spacing}&quot;
                    </div>
                  </Container>;
            })}
            </div>
          </PropCard>

          <PropCard label="paddingInline — Horizontal Padding">
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
              {spacings.map((spacing, index) => {
              const colors = getColorByIndex(index);
              return <Container key={spacing} paddingInline={spacing} style={{
                backgroundColor: colors.light,
                border: \`2px dashed \${colors.main}\`
              }}>
                    <div style={{
                  backgroundColor: colors.main,
                  color: STORY_COLORS.neutral.white,
                  padding: '0.5rem 0',
                  fontWeight: 600
                }}>
                      paddingInline=&quot;{spacing}&quot;
                    </div>
                  </Container>;
            })}
            </div>
          </PropCard>

          <CodeBlock code={\`// Vertical padding for page sections\\n<Container as="section" size="lg" paddingBlock="spacious">\\n  Hero content\\n</Container>\\n\\n// Full padding control\\n<Container paddingBlock="comfortable" paddingInline="spacious">\\n  Custom padded content\\n</Container>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...v.parameters?.docs?.source},description:{story:"## Prop: `paddingBlock` & `paddingInline`\n\nControls vertical and horizontal padding using semantic spacing tokens.\n`paddingBlock` adds vertical padding (top + bottom).\n`paddingInline` overrides the default horizontal gutter padding (left + right).",...v.parameters?.docs?.description}}},y=[`PropWidth`,`PropPadding`]}))();export{v as PropPadding,_ as PropWidth,y as __namedExportsOrder,h as default};