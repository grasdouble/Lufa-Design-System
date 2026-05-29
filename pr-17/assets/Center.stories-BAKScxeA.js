import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n,w as r}from"./iframe-Bm_r3Ygs.js";import{S as i,s as a}from"./lufa-ui-B9ODeQns.js";import{b as o,g as s,t as c,v as l}from"./helpers-D9bnZ3qZ.js";import{r as u,t as d}from"./storyColors-RAOlxH1p.js";var f,p,m,h,g,_;e((()=>{f=t(r(),1),i(),c(),u(),p=n(),m={title:`4. Foundation/Center`,component:a,parameters:{layout:`padded`},argTypes:{inline:{control:`boolean`,description:`If true, sets display to inline-flex`},children:{control:`text`,description:`Content to center`}}},h=e=>e===`inline`?`<Center inline>
  ?
</Center>`:`<Center>
  <Icon />
</Center>`,g={name:`Prop: centering`,render:()=>{let[e,t]=f.useState(`block`);return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:`24px`},children:[(0,p.jsx)(`div`,{onMouseEnter:()=>t(`block`),children:(0,p.jsx)(l,{label:`Block Center`,highlight:e===`block`,children:(0,p.jsx)(`div`,{style:{height:`200px`,backgroundColor:d.neutral.backgroundLight,border:`2px dashed ${d.primary.blue.main}`},children:(0,p.jsx)(a,{style:{height:`100%`,width:`100%`},children:(0,p.jsx)(`div`,{style:{backgroundColor:d.primary.blue.main,color:d.neutral.white,padding:`1rem`,borderRadius:`50%`,width:`4rem`,height:`4rem`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:600},children:`X`})})})})}),(0,p.jsx)(`div`,{onMouseEnter:()=>t(`inline`),children:(0,p.jsx)(l,{label:`Inline Center`,highlight:e===`inline`,children:(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,alignItems:`center`},children:[(0,p.jsx)(`span`,{children:`Text`}),(0,p.jsx)(a,{inline:!0,style:{width:`32px`,height:`32px`,backgroundColor:d.primary.violet.main,borderRadius:`50%`,color:d.neutral.white},children:`?`}),(0,p.jsx)(`span`,{children:`Text`})]})})})]}),(0,p.jsx)(s,{code:h(e),language:`jsx`,title:`JSX`,subtitle:e===`inline`?`inline`:`default`})]})})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Prop: centering',
  render: () => {
    const [hoveredVariant, setHoveredVariant] = React.useState<'block' | 'inline'>('block');
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
            <div onMouseEnter={() => setHoveredVariant('block')}>
              <PropCard label="Block Center" highlight={hoveredVariant === 'block'}>
                <div style={{
                height: '200px',
                backgroundColor: STORY_COLORS.neutral.backgroundLight,
                border: \`2px dashed \${STORY_COLORS.primary.blue.main}\`
              }}>
                  <Center style={{
                  height: '100%',
                  width: '100%'
                }}>
                    <div style={{
                    backgroundColor: STORY_COLORS.primary.blue.main,
                    color: STORY_COLORS.neutral.white,
                    padding: '1rem',
                    borderRadius: '50%',
                    width: '4rem',
                    height: '4rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600
                  }}>
                      X
                    </div>
                  </Center>
                </div>
              </PropCard>
            </div>

            <div onMouseEnter={() => setHoveredVariant('inline')}>
              <PropCard label="Inline Center" highlight={hoveredVariant === 'inline'}>
                <div style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center'
              }}>
                  <span>Text</span>
                  <Center inline style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: STORY_COLORS.primary.violet.main,
                  borderRadius: '50%',
                  color: STORY_COLORS.neutral.white
                }}>
                    ?
                  </Center>
                  <span>Text</span>
                </div>
              </PropCard>
            </div>
          </div>

          <CodeBlock code={generateCode(hoveredVariant)} language="jsx" title="JSX" subtitle={hoveredVariant === 'inline' ? 'inline' : 'default'} />
        </div>
      </StoryContainer>;
  }
}`,...g.parameters?.docs?.source}}},_=[`PropCentering`]}))();export{g as PropCentering,_ as __namedExportsOrder,m as default};