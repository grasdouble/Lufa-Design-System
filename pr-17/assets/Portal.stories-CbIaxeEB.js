import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n,w as r}from"./iframe-Bm_r3Ygs.js";import{S as i,v as a}from"./lufa-ui-B9ODeQns.js";import{b as o,g as s,t as c,v as l}from"./helpers-D9bnZ3qZ.js";import{r as u,t as d}from"./storyColors-RAOlxH1p.js";var f,p,m,h,g,_;e((()=>{f=t(r(),1),i(),c(),u(),p=n(),m={title:`8. Utility/Portal`,component:a,parameters:{layout:`padded`},argTypes:{container:{control:`object`,description:`Optional container element to render into (defaults to document.body)`}}},h=e=>e===`custom`?`<Portal container={customElement}>
  <div>Custom container</div>
</Portal>`:`<Portal>
  <div>Floating content</div>
</Portal>`,g={name:`Prop: container`,render:()=>{let[e,t]=f.useState(`default`),n=f.useRef(null),[r,i]=f.useState(null);return f.useEffect(()=>{i(n.current)},[]),(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:`24px`},children:[(0,p.jsx)(`div`,{onMouseEnter:()=>t(`default`),children:(0,p.jsx)(l,{label:`Default (document.body)`,highlight:e===`default`,children:(0,p.jsxs)(`div`,{style:{padding:`12px`,border:`2px dashed ${d.primary.green.main}`,backgroundColor:d.neutral.backgroundLight},children:[`This content is inside the normal flow.`,(0,p.jsx)(a,{children:(0,p.jsx)(`div`,{style:{position:`fixed`,bottom:`20px`,right:`20px`,padding:`1rem`,backgroundColor:d.primary.green.main,color:d.neutral.white,borderRadius:`8px`,boxShadow:d.themed.shadow.md,zIndex:9999,border:`1px solid ${d.neutral.borderMedium}`},children:`✨ I am rendered in a Portal`})})]})})}),(0,p.jsx)(`div`,{onMouseEnter:()=>t(`custom`),children:(0,p.jsx)(l,{label:`Custom Container`,highlight:e===`custom`,children:(0,p.jsxs)(`div`,{style:{position:`relative`,padding:`12px`,border:`2px dashed ${d.primary.violet.main}`,backgroundColor:d.neutral.backgroundLight,minHeight:`120px`},children:[`This box acts as a custom portal container.`,(0,p.jsx)(`div`,{ref:n,style:{position:`absolute`,bottom:`12px`,right:`12px`,minHeight:`36px`,minWidth:`140px`,border:`1px dashed ${d.primary.violet.main}`,borderRadius:`6px`}}),(0,p.jsx)(a,{container:r??void 0,children:(0,p.jsx)(`div`,{style:{padding:`8px 12px`,backgroundColor:d.primary.violet.main,color:d.neutral.white,borderRadius:`6px`,border:`1px solid ${d.neutral.borderMedium}`},children:`Custom container`})})]})})})]}),(0,p.jsx)(s,{code:h(e),language:`jsx`,title:`JSX`,subtitle:e})]})})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Prop: container',
  render: () => {
    const [hoveredVariant, setHoveredVariant] = React.useState<'default' | 'custom'>('default');
    const customContainerRef = React.useRef<HTMLDivElement | null>(null);
    const [customContainer, setCustomContainer] = React.useState<HTMLDivElement | null>(null);
    React.useEffect(() => {
      setCustomContainer(customContainerRef.current);
    }, []);
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
            <div onMouseEnter={() => setHoveredVariant('default')}>
              <PropCard label="Default (document.body)" highlight={hoveredVariant === 'default'}>
                <div style={{
                padding: '12px',
                border: \`2px dashed \${STORY_COLORS.primary.green.main}\`,
                backgroundColor: STORY_COLORS.neutral.backgroundLight
              }}>
                  This content is inside the normal flow.
                  <Portal>
                    <div style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    padding: '1rem',
                    backgroundColor: STORY_COLORS.primary.green.main,
                    color: STORY_COLORS.neutral.white,
                    borderRadius: '8px',
                    boxShadow: STORY_COLORS.themed.shadow.md,
                    zIndex: 9999,
                    border: \`1px solid \${STORY_COLORS.neutral.borderMedium}\`
                  }}>
                      ✨ I am rendered in a Portal
                    </div>
                  </Portal>
                </div>
              </PropCard>
            </div>

            <div onMouseEnter={() => setHoveredVariant('custom')}>
              <PropCard label="Custom Container" highlight={hoveredVariant === 'custom'}>
                <div style={{
                position: 'relative',
                padding: '12px',
                border: \`2px dashed \${STORY_COLORS.primary.violet.main}\`,
                backgroundColor: STORY_COLORS.neutral.backgroundLight,
                minHeight: '120px'
              }}>
                  This box acts as a custom portal container.
                  <div ref={customContainerRef} style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  minHeight: '36px',
                  minWidth: '140px',
                  border: \`1px dashed \${STORY_COLORS.primary.violet.main}\`,
                  borderRadius: '6px'
                }} />
                  <Portal container={customContainer ?? undefined}>
                    <div style={{
                    padding: '8px 12px',
                    backgroundColor: STORY_COLORS.primary.violet.main,
                    color: STORY_COLORS.neutral.white,
                    borderRadius: '6px',
                    border: \`1px solid \${STORY_COLORS.neutral.borderMedium}\`
                  }}>
                      Custom container
                    </div>
                  </Portal>
                </div>
              </PropCard>
            </div>
          </div>

          <CodeBlock code={generateCode(hoveredVariant)} language="jsx" title="JSX" subtitle={hoveredVariant} />
        </div>
      </StoryContainer>;
  }
}`,...g.parameters?.docs?.source}}},_=[`PropContainer`]}))();export{g as PropContainer,_ as __namedExportsOrder,m as default};