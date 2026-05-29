import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n,w as r}from"./iframe-Bm_r3Ygs.js";import{S as i,x as a}from"./lufa-ui-B9ODeQns.js";import{b as o,g as s,t as c,v as l}from"./helpers-D9bnZ3qZ.js";import{r as u,t as d}from"./storyColors-RAOlxH1p.js";var f,p,m,h,g,_;e((()=>{f=t(r(),1),i(),c(),u(),p=n(),m={title:`8. Utility/VisuallyHidden`,component:a,parameters:{layout:`padded`},argTypes:{as:{control:`text`,description:`The HTML element to render`,table:{defaultValue:{summary:`span`}}}}},h=e=>e===`heading`?`<h2>
  Visible Title
  <VisuallyHidden>(Screen reader only)</VisuallyHidden>
</h2>`:`<button>
  <Icon name="notification" />
  <VisuallyHidden>View notifications</VisuallyHidden>
</button>`,g={name:`Prop: accessibility`,render:()=>{let[e,t]=f.useState(`button`);return(0,p.jsx)(o,{children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:`24px`},children:[(0,p.jsx)(`div`,{onMouseEnter:()=>t(`button`),children:(0,p.jsx)(l,{label:`Icon-only button`,highlight:e===`button`,children:(0,p.jsxs)(`button`,{"aria-label":`Notifications`,style:{display:`inline-flex`,alignItems:`center`,gap:`8px`,padding:`8px 12px`,borderRadius:`6px`,border:`1px solid ${d.neutral.borderMedium}`,backgroundColor:d.neutral.backgroundLight,cursor:`pointer`},children:[(0,p.jsx)(`span`,{"aria-hidden":`true`,style:{fontSize:`20px`},children:`🔔`}),(0,p.jsx)(a,{children:`View notifications`})]})})}),(0,p.jsx)(`div`,{onMouseEnter:()=>t(`heading`),children:(0,p.jsx)(l,{label:`Supplemental text`,highlight:e===`heading`,children:(0,p.jsxs)(`h2`,{style:{margin:0,color:d.neutral.textDark},children:[`Visible Title`,(0,p.jsx)(a,{children:` (Screen reader only)`})]})})})]}),(0,p.jsx)(s,{code:h(e),language:`jsx`,title:`JSX`,subtitle:e})]})})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Prop: accessibility',
  render: () => {
    const [hoveredVariant, setHoveredVariant] = React.useState<'button' | 'heading'>('button');
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
            <div onMouseEnter={() => setHoveredVariant('button')}>
              <PropCard label="Icon-only button" highlight={hoveredVariant === 'button'}>
                <button aria-label="Notifications" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                borderRadius: '6px',
                border: \`1px solid \${STORY_COLORS.neutral.borderMedium}\`,
                backgroundColor: STORY_COLORS.neutral.backgroundLight,
                cursor: 'pointer'
              }}>
                  <span aria-hidden="true" style={{
                  fontSize: '20px'
                }}>
                    🔔
                  </span>
                  <VisuallyHidden>View notifications</VisuallyHidden>
                </button>
              </PropCard>
            </div>

            <div onMouseEnter={() => setHoveredVariant('heading')}>
              <PropCard label="Supplemental text" highlight={hoveredVariant === 'heading'}>
                <h2 style={{
                margin: 0,
                color: STORY_COLORS.neutral.textDark
              }}>
                  Visible Title
                  <VisuallyHidden> (Screen reader only)</VisuallyHidden>
                </h2>
              </PropCard>
            </div>
          </div>

          <CodeBlock code={generateCode(hoveredVariant)} language="jsx" title="JSX" subtitle={hoveredVariant} />
        </div>
      </StoryContainer>;
  }
}`,...g.parameters?.docs?.source}}},_=[`PropAccessibility`]}))();export{g as PropAccessibility,_ as __namedExportsOrder,m as default};