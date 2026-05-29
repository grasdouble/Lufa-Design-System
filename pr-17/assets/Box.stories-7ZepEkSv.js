import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n,w as r}from"./iframe-Bm_r3Ygs.js";import{S as i,i as a}from"./lufa-ui-B9ODeQns.js";import{b as o,f as s,g as c,m as l,t as u,u as d,v as f}from"./helpers-D9bnZ3qZ.js";import{n as p,r as m,t as h}from"./storyColors-RAOlxH1p.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{g=t(r(),1),i(),u(),m(),_=n(),v={title:`4. Foundation/Box`,component:a,parameters:{layout:`fullscreen`,docs:{description:{component:`Box - Universal Layout Primitive

A flexible, polymorphic container component that serves as the foundation
for all layout compositions in the Lufa Design System v2.

## Features
- ✅ Utility-based props (spacing, backgrounds, borders, display)
- ✅ Polymorphic \`as\` prop for semantic HTML elements
- ✅ Performance-optimized (CSS classes, not inline styles)
- ✅ Token-based design (semantic layer tokens)`}}},argTypes:{as:{control:`select`,options:[`div`,`section`,`article`,`header`,`footer`,`main`,`nav`,`aside`],description:`HTML element to render`,table:{category:`Polymorphic`,type:{summary:`ElementType`},defaultValue:{summary:`div`}}},padding:{control:`select`,options:[void 0,`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`],description:`Padding on all sides`,table:{category:`Spacing - Padding`,type:{summary:`SpacingValue`}}},paddingX:{control:`select`,options:[void 0,`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`],description:`Horizontal padding`,table:{category:`Spacing - Padding`,type:{summary:`SpacingValue`}}},paddingY:{control:`select`,options:[void 0,`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`],description:`Vertical padding`,table:{category:`Spacing - Padding`,type:{summary:`SpacingValue`}}},paddingTop:{control:`select`,options:[void 0,`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`],table:{category:`Spacing - Padding`,type:{summary:`SpacingValue`}}},paddingRight:{control:`select`,options:[void 0,`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`],table:{category:`Spacing - Padding`,type:{summary:`SpacingValue`}}},paddingBottom:{control:`select`,options:[void 0,`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`],table:{category:`Spacing - Padding`,type:{summary:`SpacingValue`}}},paddingLeft:{control:`select`,options:[void 0,`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`],table:{category:`Spacing - Padding`,type:{summary:`SpacingValue`}}},margin:{control:`select`,options:[void 0,`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`],description:`Margin on all sides`,table:{category:`Spacing - Margin`,type:{summary:`SpacingValue`}}},marginX:{control:`select`,options:[void 0,`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`],description:`Horizontal margin`,table:{category:`Spacing - Margin`,type:{summary:`SpacingValue`}}},marginY:{control:`select`,options:[void 0,`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`],description:`Vertical margin`,table:{category:`Spacing - Margin`,type:{summary:`SpacingValue`}}},marginTop:{control:`select`,options:[void 0,`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`],table:{category:`Spacing - Margin`,type:{summary:`SpacingValue`}}},marginRight:{control:`select`,options:[void 0,`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`],table:{category:`Spacing - Margin`,type:{summary:`SpacingValue`}}},marginBottom:{control:`select`,options:[void 0,`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`],table:{category:`Spacing - Margin`,type:{summary:`SpacingValue`}}},marginLeft:{control:`select`,options:[void 0,`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`],table:{category:`Spacing - Margin`,type:{summary:`SpacingValue`}}},background:{control:`select`,options:[void 0,`page`,`surface`,`success`,`error`,`warning`,`info`,`overlay`,`on-primary`,`on-secondary`,`on-success`,`on-error`,`on-warning`,`on-info`],description:`Background color`,table:{category:`Background`,type:{summary:`BackgroundValue`}}},borderRadius:{control:`select`,options:[void 0,`none`,`small`,`default`,`medium`,`large`,`full`],table:{category:`Border`,type:{summary:`BorderRadiusValue`}}},borderWidth:{control:`select`,options:[void 0,`none`,`thin`,`medium`,`thick`],table:{category:`Border`,type:{summary:`BorderWidthValue`}}},borderColor:{control:`select`,options:[void 0,`default`,`strong`,`success`,`error`,`warning`,`info`],table:{category:`Border`,type:{summary:`BorderColorValue`}}},display:{control:`select`,options:[void 0,`block`,`inline-block`,`flex`,`inline-flex`,`grid`,`none`],table:{category:`Display`,type:{summary:`DisplayValue`}}},children:{control:`text`,table:{category:`Content`,type:{summary:`ReactNode`}}},className:{control:`text`,table:{category:`Advanced`,type:{summary:`string`}}}}},y={argTypes:{contentType:{control:`select`,options:[`text`,`multipleItems`],description:`Type of content inside the Box (use "Multiple Items" to test flex/grid)`,table:{category:`Playground`}}},args:{padding:`comfortable`,background:`info`,borderRadius:`medium`,borderWidth:`thin`,borderColor:`default`,children:`🎨 Edit the controls to see changes in real-time!`,contentType:`text`},render:e=>{let t=e.contentType,n=e.children,r={padding:`8px`,background:`var(--lufa-semantic-interactive-background-hover)`,borderRadius:`4px`},i=t===`multipleItems`?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`div`,{style:r,children:`Item 1`}),(0,_.jsx)(`div`,{style:r,children:`Item 2`}),(0,_.jsx)(`div`,{style:r,children:`Item 3`}),(0,_.jsx)(`div`,{style:r,children:`Item 4`})]}):n;return(0,_.jsx)(l,{defaultShowGrid:!0,defaultShowAdjacentElements:!1,children:(0,_.jsx)(a,{...e,children:i})})}},b={render:()=>{let[e,t]=g.useState(`div`);return(0,_.jsx)(o,{children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,_.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(200px, 1fr))`,gap:`16px`},children:[`div`,`section`,`article`,`header`,`footer`,`main`,`nav`,`aside`].map(n=>(0,_.jsx)(f,{label:`<${n}>`,highlight:e===n,onInteraction:()=>t(n),interactionType:`click`,children:(0,_.jsx)(a,{as:n,padding:`comfortable`,background:`surface`,borderWidth:`thin`,borderRadius:`default`,children:(0,_.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,minHeight:`80px`,fontSize:`14px`,fontWeight:500},children:n})})},n))}),(0,_.jsx)(c,{tabs:[{label:`HTML`,content:(e=>`<${e}
  class="Box_box__... Box_padding-comfortable__... Box_background-surface__... ... +7 more"
  data-background="surface"
  data-padding="comfortable"
  data-border-width="thin"
  data-border-radius="default"
>
  ${e}
</${e}>`)(e)},{label:`JSX`,content:(e=>`<Box
  as="${e}"
  padding="comfortable"
  background="surface"
  borderWidth="thin"
  borderRadius="default"
>
  Content
</Box>`)(e)}],title:`Code`,subtitle:`<Box as="${e}">`})]})})}},x={render:()=>{let[e,t]=g.useState(`default`),n=[{value:`none`,size:`4px`,color:h.neutral.borderMedium},{value:`tight`,size:`4px`,color:h.primary.cyan.main},{value:`compact`,size:`8px`,color:h.primary.green.main},{value:`default`,size:`16px`,color:h.primary.blue.main},{value:`comfortable`,size:`24px`,color:h.primary.violet.main},{value:`spacious`,size:`32px`,color:h.primary.pink.main}];return(0,_.jsx)(o,{children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,_.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(220px, 1fr))`,gap:`20px`},children:n.map(({value:n,size:r,color:i})=>(0,_.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,_.jsx)(f,{label:`padding="${n}"`,highlight:e===n,children:(0,_.jsx)(d,{color:i,showLabel:n!==`none`,label:r,children:(0,_.jsx)(a,{padding:n,borderRadius:`default`,children:(0,_.jsx)(`span`,{style:{display:`block`,backgroundColor:h.neutral.white,border:`2px solid ${h.neutral.borderSlate}`,borderRadius:`4px`,padding:`12px`,fontSize:`13px`,fontWeight:600,color:h.neutral.textSlate,textAlign:`center`},children:`Content`})})})})},n))}),(0,_.jsx)(c,{code:(e=>`<Box padding="${e}" borderRadius="default">
  Content
</Box>`)(e),language:`jsx`,title:`JSX`,subtitle:`padding="${e}"`})]})})}},S={render:()=>{let[e,t]=g.useState(`paddingX`);return(0,_.jsx)(o,{children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,_.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:`24px`},children:[(0,_.jsx)(`div`,{onMouseEnter:()=>t(`paddingX`),children:(0,_.jsx)(f,{label:`paddingX="spacious" (← →)`,highlight:e===`paddingX`,children:(0,_.jsx)(d,{color:h.axis.x.main,showLabel:!0,label:`32px`,children:(0,_.jsx)(a,{paddingX:`spacious`,borderRadius:`default`,children:(0,_.jsx)(`div`,{style:{backgroundColor:h.axis.x.main,color:`white`,fontSize:`14px`,fontWeight:600,textAlign:`center`,padding:`16px`,borderRadius:`4px`},children:`← Horizontal padding →`})})})})}),(0,_.jsx)(`div`,{onMouseEnter:()=>t(`paddingY`),children:(0,_.jsx)(f,{label:`paddingY="spacious" (↑ ↓)`,highlight:e===`paddingY`,children:(0,_.jsx)(d,{color:h.axis.y.main,showLabel:!0,label:`32px`,children:(0,_.jsx)(a,{paddingY:`spacious`,borderRadius:`default`,children:(0,_.jsxs)(`div`,{style:{backgroundColor:h.axis.y.main,color:`white`,fontSize:`14px`,fontWeight:600,textAlign:`center`,padding:`16px`,borderRadius:`4px`},children:[`↑`,(0,_.jsx)(`br`,{}),`Vertical padding`,(0,_.jsx)(`br`,{}),`↓`]})})})})}),(0,_.jsx)(`div`,{onMouseEnter:()=>t(`combined`),children:(0,_.jsx)(f,{label:`paddingX + paddingY`,highlight:e===`combined`,children:(0,_.jsx)(d,{color:h.axis.combined.main,showLabel:!0,label:`X:32px Y:8px`,children:(0,_.jsx)(a,{paddingX:`spacious`,paddingY:`compact`,borderRadius:`default`,children:(0,_.jsx)(`div`,{style:{backgroundColor:h.axis.combined.main,color:`white`,fontSize:`14px`,fontWeight:600,textAlign:`center`,padding:`16px`,borderRadius:`4px`},children:`Different X/Y spacing`})})})})})]}),(0,_.jsx)(c,{code:(e=>e===`paddingX`?`<Box paddingX="spacious" borderRadius="default">
  Horizontal padding
</Box>`:e===`paddingY`?`<Box paddingY="spacious" borderRadius="default">
  Vertical padding
</Box>`:`<Box paddingX="spacious" paddingY="compact" borderRadius="default">
  Different X/Y spacing
</Box>`)(e),language:`jsx`,title:`JSX`,subtitle:e===`combined`?`Combined`:e})]})})}},C={render:()=>{let[e,t]=g.useState(`paddingTop`),n=e=>`<Box ${e}="spacious" borderRadius="default">
  Content
</Box>`;return(0,_.jsx)(o,{children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,_.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(240px, 1fr))`,gap:`24px`},children:[{prop:`paddingTop`,label:`Top ↓`,...h.directional.top},{prop:`paddingRight`,label:`Right ←`,...h.directional.right},{prop:`paddingBottom`,label:`Bottom ↑`,...h.directional.bottom},{prop:`paddingLeft`,label:`Left →`,...h.directional.left}].map(({prop:n,label:r,main:i})=>(0,_.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,_.jsx)(f,{label:`${n}="spacious"`,highlight:e===n,children:(0,_.jsx)(d,{color:i,showLabel:!0,label:`32px`,children:(0,_.jsx)(a,{[n]:`spacious`,borderRadius:`default`,children:(0,_.jsx)(`div`,{style:{backgroundColor:i,color:`white`,fontSize:`13px`,fontWeight:600,textAlign:`center`,padding:`20px`,borderRadius:`4px`},children:r})})})})},n))}),(0,_.jsx)(c,{code:n(e),language:`jsx`,title:`JSX`,subtitle:`${e}="spacious"`})]})})}},w={render:()=>{let[e,t]=g.useState(`default`);return(0,_.jsx)(o,{children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,_.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(220px, 1fr))`,gap:`20px`},children:[`none`,`tight`,`compact`,`default`,`comfortable`,`spacious`].map((n,r)=>{let i=p(r),o={none:`0px`,tight:`4px`,compact:`8px`,default:`16px`,comfortable:`24px`,spacious:`32px`}[n];return(0,_.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,_.jsx)(f,{label:`margin="${n}"`,highlight:e===n,children:(0,_.jsx)(`div`,{style:{backgroundColor:h.neutral.backgroundLight,borderRadius:`8px`,padding:`4px`,minHeight:`140px`,position:`relative`,border:`2px dashed ${h.neutral.borderMedium}`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,_.jsx)(s,{color:i.main,showLabel:n!==`none`,label:o,children:(0,_.jsx)(a,{margin:n,padding:`default`,style:{backgroundColor:i.main,color:`white`,fontSize:`13px`,fontWeight:600,textAlign:`center`,minWidth:`60px`,borderRadius:`6px`},children:`Box`})})})})},n)})}),(0,_.jsx)(c,{code:(e=>`<Box margin="${e}" padding="default">
  Box
</Box>`)(e),language:`jsx`,title:`JSX`,subtitle:`margin="${e}"`})]})})}},T={render:()=>{let[e,t]=g.useState(`marginX`);return(0,_.jsx)(o,{children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,_.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:`24px`},children:[(0,_.jsx)(`div`,{onMouseEnter:()=>t(`marginX`),children:(0,_.jsx)(f,{label:`marginX="spacious" (← →)`,highlight:e===`marginX`,children:(0,_.jsx)(`div`,{style:{backgroundColor:h.axis.x.light,padding:`16px`,borderRadius:`8px`,border:`2px dashed ${h.axis.x.main}`,position:`relative`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,_.jsx)(s,{color:h.axis.x.main,showLabel:!0,label:`32px`,children:(0,_.jsx)(a,{marginX:`spacious`,padding:`comfortable`,background:`info`,borderRadius:`default`,style:{backgroundColor:h.axis.x.main,color:`white`,fontWeight:600,textAlign:`center`,fontSize:`14px`},children:`← Horizontal margin →`})})})})}),(0,_.jsx)(`div`,{onMouseEnter:()=>t(`marginY`),children:(0,_.jsx)(f,{label:`marginY="spacious" (↑ ↓)`,highlight:e===`marginY`,children:(0,_.jsx)(`div`,{style:{backgroundColor:h.axis.y.light,padding:`16px`,borderRadius:`8px`,border:`2px dashed ${h.axis.y.main}`,minHeight:`160px`,position:`relative`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,_.jsx)(s,{color:h.axis.y.main,showLabel:!0,label:`32px`,children:(0,_.jsx)(a,{marginY:`spacious`,padding:`comfortable`,background:`warning`,borderRadius:`default`,style:{backgroundColor:h.axis.y.main,color:`white`,fontWeight:600,textAlign:`center`,fontSize:`14px`},children:`↑ Vertical margin ↓`})})})})}),(0,_.jsx)(`div`,{onMouseEnter:()=>t(`combined`),children:(0,_.jsx)(f,{label:`marginX + marginY`,highlight:e===`combined`,children:(0,_.jsx)(`div`,{style:{backgroundColor:h.axis.combined.light,padding:`16px`,borderRadius:`8px`,border:`2px dashed ${h.axis.combined.main}`,minHeight:`160px`,position:`relative`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,_.jsx)(s,{color:h.axis.combined.main,showLabel:!0,label:`X:32px Y:24px`,children:(0,_.jsx)(a,{marginX:`spacious`,marginY:`comfortable`,padding:`comfortable`,background:`success`,borderRadius:`default`,style:{backgroundColor:h.axis.combined.main,color:`white`,fontWeight:600,textAlign:`center`,fontSize:`14px`},children:`Combined margins`})})})})})]}),(0,_.jsx)(c,{code:(e=>e===`marginX`?`<Box marginX="spacious" padding="comfortable" background="info">
  Horizontal margin
</Box>`:e===`marginY`?`<Box marginY="spacious" padding="comfortable" background="warning">
  Vertical margin
</Box>`:`<Box marginX="spacious" marginY="comfortable" padding="comfortable" background="success">
  Combined margins
</Box>`)(e),language:`jsx`,title:`JSX`,subtitle:e===`combined`?`Combined`:e})]})})}},E={render:()=>{let[e,t]=g.useState(`marginTop`),n=e=>`<Box ${e}="spacious" padding="comfortable" background="surface">
  Content
</Box>`;return(0,_.jsx)(o,{children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,_.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(240px, 1fr))`,gap:`24px`},children:[{prop:`marginTop`,label:`Top ↓`,...h.directional.top},{prop:`marginRight`,label:`Right ←`,...h.directional.right},{prop:`marginBottom`,label:`Bottom ↑`,...h.directional.bottom},{prop:`marginLeft`,label:`Left →`,...h.directional.left}].map(({prop:n,label:r,main:i,light:o})=>(0,_.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,_.jsx)(f,{label:`${n}="spacious"`,highlight:e===n,children:(0,_.jsx)(`div`,{style:{backgroundColor:o,borderRadius:`8px`,padding:`4px`,border:`2px dashed ${i}`,minHeight:`140px`,position:`relative`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,_.jsx)(s,{color:i,showLabel:!0,label:`32px`,children:(0,_.jsx)(a,{[n]:`spacious`,padding:`comfortable`,background:`surface`,borderRadius:`default`,style:{backgroundColor:i,color:`white`,fontSize:`13px`,fontWeight:600,textAlign:`center`,minWidth:`80px`},children:r})})})})},n))}),(0,_.jsx)(c,{code:n(e),language:`jsx`,title:`JSX`,subtitle:`${e}="spacious"`})]})})}},D={render:()=>{let[e,t]=g.useState(`surface`);return(0,_.jsx)(o,{children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,_.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:`16px`},children:[`page`,`surface`,`success`,`error`,`warning`,`info`,`overlay`,`on-primary`,`on-secondary`,`on-success`,`on-error`,`on-warning`,`on-info`].map(n=>(0,_.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,_.jsx)(f,{label:`background="${n}"`,highlight:e===n,children:(0,_.jsx)(a,{padding:`comfortable`,background:n,borderRadius:`default`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,minHeight:`80px`,fontSize:`13px`,fontWeight:600},children:n})})},n))}),(0,_.jsx)(c,{code:(e=>`<Box padding="comfortable" background="${e}" borderRadius="default">
  ${e}
</Box>`)(e),language:`jsx`,title:`JSX`,subtitle:`background="${e}"`})]})})}},O={render:()=>{let[e,t]=g.useState(`default`);return(0,_.jsx)(o,{children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,_.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:`24px`},children:[`none`,`small`,`default`,`medium`,`large`,`full`].map(n=>(0,_.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,_.jsx)(f,{label:`borderRadius="${n}"`,highlight:e===n,children:(0,_.jsx)(a,{padding:`comfortable`,background:`surface`,borderWidth:`medium`,borderColor:`default`,borderRadius:n,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,minHeight:`100px`,fontSize:`32px`,...n===`full`?{width:`100px`,height:`100px`,margin:`0 auto`}:{}},children:`◻️`})})},n))}),(0,_.jsx)(c,{code:(e=>`<Box 
  padding="comfortable" 
  background="surface" 
  borderWidth="medium" 
  borderRadius="${e}"
>
  Content
</Box>`)(e),language:`jsx`,title:`JSX`,subtitle:`borderRadius="${e}"`})]})})}},k={render:()=>{let[e,t]=g.useState(`medium`);return(0,_.jsx)(o,{children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,_.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:`20px`},children:[`none`,`thin`,`medium`,`thick`].map(n=>(0,_.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,_.jsx)(f,{label:`borderWidth="${n}"`,highlight:e===n,children:(0,_.jsx)(a,{padding:`comfortable`,background:`surface`,borderWidth:n,borderColor:`default`,borderRadius:`default`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,minHeight:`80px`,fontSize:`14px`,fontWeight:600},children:n})})},n))}),(0,_.jsx)(c,{code:(e=>`<Box 
  padding="comfortable" 
  background="surface" 
  borderWidth="${e}" 
  borderColor="default"
>
  ${e}
</Box>`)(e),language:`jsx`,title:`JSX`,subtitle:`borderWidth="${e}"`})]})})}},A={render:()=>{let[e,t]=g.useState(`default`);return(0,_.jsx)(o,{children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,_.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:`20px`},children:[`default`,`strong`,`success`,`error`,`warning`,`info`].map(n=>(0,_.jsx)(`div`,{onMouseEnter:()=>t(n),children:(0,_.jsx)(f,{label:`borderColor="${n}"`,highlight:e===n,children:(0,_.jsx)(a,{padding:`comfortable`,background:`surface`,borderWidth:`thick`,borderColor:n,borderRadius:`default`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,minHeight:`90px`,fontSize:`28px`},children:n===`success`?`✓`:n===`error`?`✕`:n===`warning`?`⚠`:n===`info`?`ℹ`:`▪`})})},n))}),(0,_.jsx)(c,{code:(e=>`<Box 
  padding="comfortable" 
  background="surface" 
  borderWidth="thick" 
  borderColor="${e}"
>
  ${e}
</Box>`)(e),language:`jsx`,title:`JSX`,subtitle:`borderColor="${e}"`})]})})}},j={render:()=>{let[e,t]=g.useState(`block`);return(0,_.jsx)(o,{children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`},children:[(0,_.jsx)(`div`,{onMouseEnter:()=>t(`block`),children:(0,_.jsx)(f,{label:`display="block"`,highlight:e===`block`,children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,_.jsx)(a,{display:`block`,padding:`default`,borderRadius:`default`,style:{backgroundColor:h.primary.blue.main,textAlign:`center`,color:`white`,fontWeight:600},children:`Block 1 (takes full width)`}),(0,_.jsx)(a,{display:`block`,padding:`default`,borderRadius:`default`,style:{backgroundColor:h.primary.violet.main,textAlign:`center`,color:`white`,fontWeight:600},children:`Block 2 (takes full width)`})]})})}),(0,_.jsx)(`div`,{onMouseEnter:()=>t(`inline-block`),children:(0,_.jsx)(f,{label:`display="inline-block"`,highlight:e===`inline-block`,children:(0,_.jsxs)(`div`,{style:{fontSize:`14px`},children:[`Text before`,` `,(0,_.jsx)(a,{display:`inline-block`,padding:`compact`,borderRadius:`default`,style:{backgroundColor:h.primary.green.main,verticalAlign:`middle`,fontWeight:600,color:`white`},children:`inline-block`}),` `,`text after`]})})}),(0,_.jsx)(`div`,{onMouseEnter:()=>t(`flex`),children:(0,_.jsx)(f,{label:`display="flex"`,highlight:e===`flex`,children:(0,_.jsx)(a,{display:`flex`,padding:`default`,background:`surface`,borderWidth:`thin`,borderRadius:`default`,style:{gap:`12px`},children:[1,2,3].map(e=>(0,_.jsxs)(`div`,{style:{padding:`20px`,backgroundColor:h.primary.pink.main,borderRadius:`6px`,flex:1,color:`white`,fontWeight:600,textAlign:`center`},children:[`Item `,e]},e))})})}),(0,_.jsx)(`div`,{onMouseEnter:()=>t(`grid`),children:(0,_.jsx)(f,{label:`display="grid"`,highlight:e===`grid`,children:(0,_.jsx)(a,{display:`grid`,padding:`default`,background:`surface`,borderWidth:`thin`,borderRadius:`default`,style:{gridTemplateColumns:`repeat(3, 1fr)`,gap:`12px`},children:[1,2,3,4,5,6].map(e=>(0,_.jsx)(`div`,{style:{padding:`20px`,backgroundColor:h.primary.orange.main,borderRadius:`6px`,color:`white`,fontWeight:600,textAlign:`center`},children:e},e))})})}),(0,_.jsx)(c,{code:(e=>e===`block`?`<Box display="block" padding="default" background="info">
  Block content (takes full width)
</Box>`:e===`inline-block`?`Text before <Box display="inline-block" padding="compact" background="success">
  inline-block
</Box> text after`:e===`flex`?`<Box display="flex" padding="default" background="surface" style={{ gap: '12px' }}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Box>`:`<Box display="grid" padding="default" background="surface" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</Box>`)(e),language:`jsx`,title:`JSX`,subtitle:`display="${e}"`})]})})}},M={render:()=>(0,_.jsx)(o,{children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`48px`},children:[(0,_.jsxs)(a,{padding:`comfortable`,background:`info`,borderRadius:`default`,style:{textAlign:`center`,fontSize:`14px`,fontWeight:500},children:[`📐 `,(0,_.jsx)(`strong`,{children:`Resize your browser window`}),` or use DevTools responsive mode to see boxes appear/disappear`]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h3`,{style:{marginTop:0,marginBottom:`16px`,fontSize:`18px`,fontWeight:600},children:`1. hideFrom prop - Hide from breakpoint and up`}),(0,_.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(250px, 1fr))`,gap:`16px`},children:[(0,_.jsx)(f,{label:`hideFrom="md" - Hidden from tablet+`,children:(0,_.jsxs)(a,{hideFrom:`md`,padding:`comfortable`,borderRadius:`default`,style:{backgroundColor:h.primary.green.main,color:`white`,textAlign:`center`,fontWeight:600,fontSize:`14px`},children:[`📱 Mobile/Small only`,(0,_.jsx)(`div`,{style:{fontSize:`12px`,marginTop:`8px`,opacity:.9},children:`Visible: < 768px`})]})}),(0,_.jsx)(f,{label:`hideFrom="lg" - Hidden from desktop+`,children:(0,_.jsxs)(a,{hideFrom:`lg`,padding:`comfortable`,borderRadius:`default`,style:{backgroundColor:h.primary.blue.main,color:`white`,textAlign:`center`,fontWeight:600,fontSize:`14px`},children:[`📱📟 Mobile/Tablet only`,(0,_.jsx)(`div`,{style:{fontSize:`12px`,marginTop:`8px`,opacity:.9},children:`Visible: < 1024px`})]})}),(0,_.jsx)(f,{label:`hideFrom="sm" - Hidden from mobile landscape+`,children:(0,_.jsxs)(a,{hideFrom:`sm`,padding:`comfortable`,borderRadius:`default`,style:{backgroundColor:h.primary.orange.main,color:`white`,textAlign:`center`,fontWeight:600,fontSize:`14px`},children:[`📱 Tiny screens only`,(0,_.jsx)(`div`,{style:{fontSize:`12px`,marginTop:`8px`,opacity:.9},children:`Visible: < 640px`})]})})]}),(0,_.jsx)(`div`,{style:{marginTop:`16px`},children:(0,_.jsx)(c,{code:`// Hidden from md (768px) and up
<Box hideFrom="md">Mobile/Small only</Box>

// Hidden from lg (1024px) and up
<Box hideFrom="lg">Mobile/Tablet only</Box>

// Hidden from sm (640px) and up
<Box hideFrom="sm">Tiny screens only</Box>`,language:`tsx`,title:`hideFrom examples`})})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h3`,{style:{marginTop:0,marginBottom:`16px`,fontSize:`18px`,fontWeight:600},children:`2. showFrom prop - Show from breakpoint and up`}),(0,_.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(250px, 1fr))`,gap:`16px`},children:[(0,_.jsx)(f,{label:`showFrom="md" - Visible from tablet+`,children:(0,_.jsxs)(a,{showFrom:`md`,padding:`comfortable`,borderRadius:`default`,style:{backgroundColor:h.primary.violet.main,color:`white`,textAlign:`center`,fontWeight:600,fontSize:`14px`},children:[`💻 Tablet+ only`,(0,_.jsx)(`div`,{style:{fontSize:`12px`,marginTop:`8px`,opacity:.9},children:`Visible: ≥ 768px`})]})}),(0,_.jsx)(f,{label:`showFrom="lg" - Visible from desktop+`,children:(0,_.jsxs)(a,{showFrom:`lg`,padding:`comfortable`,borderRadius:`default`,style:{backgroundColor:h.primary.pink.main,color:`white`,textAlign:`center`,fontWeight:600,fontSize:`14px`},children:[`💻 Desktop+ only`,(0,_.jsx)(`div`,{style:{fontSize:`12px`,marginTop:`8px`,opacity:.9},children:`Visible: ≥ 1024px`})]})}),(0,_.jsx)(f,{label:`showFrom="xl" - Visible from large desktop+`,children:(0,_.jsxs)(a,{showFrom:`xl`,padding:`comfortable`,borderRadius:`default`,style:{backgroundColor:h.primary.cyan.main,color:`white`,textAlign:`center`,fontWeight:600,fontSize:`14px`},children:[`🖥️ Large desktop+ only`,(0,_.jsx)(`div`,{style:{fontSize:`12px`,marginTop:`8px`,opacity:.9},children:`Visible: ≥ 1280px`})]})})]}),(0,_.jsx)(`div`,{style:{marginTop:`16px`},children:(0,_.jsx)(c,{code:`// Visible from md (768px) and up
<Box showFrom="md">Tablet+ only</Box>

// Visible from lg (1024px) and up
<Box showFrom="lg">Desktop+ only</Box>

// Visible from xl (1280px) and up
<Box showFrom="xl">Large desktop+ only</Box>`,language:`tsx`,title:`showFrom examples`})})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h3`,{style:{marginTop:0,marginBottom:`16px`,fontSize:`18px`,fontWeight:600},children:`3. Real-world: Responsive Navigation`}),(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,_.jsx)(f,{label:`Mobile menu button (hidden on desktop)`,children:(0,_.jsx)(a,{hideFrom:`md`,padding:`comfortable`,borderRadius:`default`,style:{backgroundColor:h.neutral.backgroundDark,color:`white`,textAlign:`center`,fontWeight:600,fontSize:`16px`,cursor:`pointer`},children:`☰ Mobile Menu`})}),(0,_.jsx)(f,{label:`Desktop navigation (hidden on mobile)`,children:(0,_.jsxs)(a,{showFrom:`md`,padding:`comfortable`,borderRadius:`default`,style:{backgroundColor:h.neutral.backgroundDark,color:`white`,display:`flex`,gap:`24px`,justifyContent:`center`,fontWeight:600},children:[(0,_.jsx)(`span`,{children:`Home`}),(0,_.jsx)(`span`,{children:`About`}),(0,_.jsx)(`span`,{children:`Products`}),(0,_.jsx)(`span`,{children:`Contact`})]})})]}),(0,_.jsx)(`div`,{style:{marginTop:`16px`},children:(0,_.jsx)(c,{code:`// Mobile menu button (hidden on desktop)
<Box hideFrom="md">
  <Button>☰ Menu</Button>
</Box>

// Desktop navigation (hidden on mobile)
<Box showFrom="md">
  <nav>
    <Link>Home</Link>
    <Link>About</Link>
    <Link>Products</Link>
    <Link>Contact</Link>
  </nav>
</Box>`,language:`tsx`,title:`Responsive navigation pattern`})})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h3`,{style:{marginTop:0,marginBottom:`16px`,fontSize:`18px`,fontWeight:600},children:`4. Advanced: Responsive Object Syntax`}),(0,_.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(250px, 1fr))`,gap:`16px`},children:[(0,_.jsx)(f,{label:`show={{ base: true, md: false }}`,children:(0,_.jsxs)(a,{show:{base:!0,md:!1},padding:`comfortable`,borderRadius:`default`,style:{backgroundColor:h.primary.green.main,color:`white`,textAlign:`center`,fontWeight:600,fontSize:`14px`},children:[`📱 Show on mobile`,(0,_.jsx)(`div`,{style:{fontSize:`12px`,marginTop:`8px`,opacity:.9},children:`(hide on tablet+)`})]})}),(0,_.jsx)(f,{label:`show={{ base: false, md: true }}`,children:(0,_.jsxs)(a,{show:{base:!1,md:!0},padding:`comfortable`,borderRadius:`default`,style:{backgroundColor:h.primary.violet.main,color:`white`,textAlign:`center`,fontWeight:600,fontSize:`14px`},children:[`💻 Show on tablet+`,(0,_.jsx)(`div`,{style:{fontSize:`12px`,marginTop:`8px`,opacity:.9},children:`(hide on mobile)`})]})}),(0,_.jsx)(f,{label:`show={{ base: true, md: false, lg: true }}`,children:(0,_.jsxs)(a,{show:{base:!0,md:!1,lg:!0},padding:`comfortable`,borderRadius:`default`,style:{backgroundColor:h.primary.pink.main,color:`white`,textAlign:`center`,fontWeight:600,fontSize:`14px`},children:[`📱💻 Mobile + Desktop`,(0,_.jsx)(`div`,{style:{fontSize:`12px`,marginTop:`8px`,opacity:.9},children:`(hide on tablet)`})]})})]}),(0,_.jsx)(`div`,{style:{marginTop:`16px`},children:(0,_.jsx)(c,{code:`// Visible on mobile, hidden on tablet+
<Box show={{ base: true, md: false }}>
  Mobile only
</Box>

// Hidden on mobile, visible on tablet+
<Box show={{ base: false, md: true }}>
  Tablet+ only
</Box>

// Visible on mobile and desktop, hidden on tablet
<Box show={{ base: true, md: false, lg: true }}>
  Mobile + Desktop (skip tablet)
</Box>`,language:`tsx`,title:`Responsive object syntax`})})]}),(0,_.jsxs)(a,{padding:`comfortable`,background:`surface`,borderWidth:`thin`,borderRadius:`default`,children:[(0,_.jsx)(`h4`,{style:{marginTop:0,marginBottom:`12px`,fontSize:`16px`,fontWeight:600},children:`📐 Breakpoint Reference`}),(0,_.jsxs)(`div`,{style:{fontSize:`14px`,lineHeight:`1.8`},children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`strong`,{children:`xs`}),`: 320px (mobile portrait)`]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`strong`,{children:`sm`}),`: 640px (mobile landscape)`]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`strong`,{children:`md`}),`: 768px (tablet portrait)`]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`strong`,{children:`lg`}),`: 1024px (tablet landscape / desktop)`]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`strong`,{children:`xl`}),`: 1280px (desktop)`]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`strong`,{children:`2xl`}),`: 1536px (large desktop)`]})]})]})]})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  argTypes: {
    contentType: {
      control: 'select',
      options: ['text', 'multipleItems'],
      description: 'Type of content inside the Box (use "Multiple Items" to test flex/grid)',
      table: {
        category: 'Playground'
      }
    }
  },
  args: {
    padding: 'comfortable',
    background: 'info',
    borderRadius: 'medium',
    borderWidth: 'thin',
    borderColor: 'default',
    children: '🎨 Edit the controls to see changes in real-time!',
    contentType: 'text'
  },
  render: (args: any) => {
    // Type-safe access to args properties
    const contentType = (args as {
      contentType?: 'text' | 'multipleItems';
    }).contentType;
    const children = (args as {
      children?: React.ReactNode;
    }).children;

    // Determine content based on contentType control
    const itemStyle = {
      padding: '8px',
      background: 'var(--lufa-semantic-interactive-background-hover)',
      borderRadius: '4px'
    };
    const content = contentType === 'multipleItems' ? <>
          <div style={itemStyle}>Item 1</div>
          <div style={itemStyle}>Item 2</div>
          <div style={itemStyle}>Item 3</div>
          <div style={itemStyle}>Item 4</div>
        </> : children;
    return <PlaygroundContainer defaultShowGrid defaultShowAdjacentElements={false}>
        <Box {...args}>{content}</Box>
      </PlaygroundContainer>;
  }
}`,...y.parameters?.docs?.source},description:{story:`## Playground

Interactive playground to experiment with all Box props.

**Features:**
- Visual container with dashed border to see margins
- Grid overlay with toggle button (top of the container)
- Adjacent elements in 4 directions (Above, Before, After, Below) to test display modes
- Content Type control to test \`display: flex\` and \`display: grid\`

**Usage:**
- Use the checkboxes above the container to toggle grid/adjacent elements
- Edit the controls below to see real-time changes
- **To test \`display: flex/grid\`:** Change "Content Type" control to "Multiple Items"
- Test margin props - they're now visible thanks to the dashed border
- Test display props - adjacent elements show how \`display\` affects layout:
  - \`block\`: Box takes full width, elements stack vertically
  - \`inline-block\`: Box inline with Before/After on same line
  - \`inline\`: Box inline with text-like behavior
  - \`flex\`: Box as flex container (use "Multiple Items" content)
  - \`grid\`: Box as grid container (use "Multiple Items" content)`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedElement, setSelectedElement] = React.useState<string>('div');

    // Generate JSX code for the selected element
    const generateJsxCode = (element: string): string => {
      return \`<Box
  as="\${element}"
  padding="comfortable"
  background="surface"
  borderWidth="thin"
  borderRadius="default"
>
  Content
</Box>\`;
    };

    // Generate expected HTML output for the selected element
    const generateHtmlOutput = (element: string): string => {
      return \`<\${element}
  class="Box_box__... Box_padding-comfortable__... Box_background-surface__... ... +7 more"
  data-background="surface"
  data-padding="comfortable"
  data-border-width="thin"
  data-border-radius="default"
>
  \${element}
</\${element}>\`;
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
                <Box as={element} padding="comfortable" background="surface" borderWidth="thin" borderRadius="default">
                  <span style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80px',
                fontSize: '14px',
                fontWeight: 500
              }}>
                    {element}
                  </span>
                </Box>
              </PropCard>)}
          </div>

          {/* Code block with tabs (HTML + JSX) */}
          <CodeBlock tabs={[{
          label: 'HTML',
          content: generateHtmlOutput(selectedElement)
        }, {
          label: 'JSX',
          content: generateJsxCode(selectedElement)
        }]} title="Code" subtitle={\`<Box as="\${selectedElement}">\`} />
        </div>
      </StoryContainer>;
  }
}`,...b.parameters?.docs?.source},description:{story:`## Prop: \`as\`

Renders Box as different HTML elements for semantic markup.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredPadding, setHoveredPadding] = React.useState<string>('default');
    {
      /* 
      💡 TOKEN EDUCATION: Spacing System
      
      Box padding uses semantic spacing tokens:
      - padding="none" → var(--lufa-semantic-spacing-none) = 0px
      - padding="tight" → var(--lufa-semantic-spacing-tight) = 4px
      - padding="compact" → var(--lufa-semantic-spacing-compact) = 8px
      - padding="default" → var(--lufa-semantic-spacing-default) = 16px
      - padding="comfortable" → var(--lufa-semantic-spacing-comfortable) = 24px
      - padding="spacious" → var(--lufa-semantic-spacing-spacious) = 32px
      
      ✅ Benefits:
      - Consistent spacing across entire application
      - Easy to adjust globally (change token value once)
      - Semantic naming makes intent clear
      - Prevents arbitrary spacing values
      
      The blue visualization shows the padding area around content.
      */
    }

    // Mapping of padding values to pixel sizes and colors
    // Note: 'none' and 'tight' both map to 4px (tight spacing)
    const paddingValues = [{
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
    const generateCode = (padding: string): string => {
      return \`<Box padding="\${padding}" borderRadius="default">
  Content
</Box>\`;
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
            {paddingValues.map(({
            value,
            size,
            color
          }) => <div key={value} onMouseEnter={() => setHoveredPadding(value)}>
                <PropCard label={\`padding="\${value}"\`} highlight={hoveredPadding === value}>
                  <PaddingVisualizer color={color} showLabel={value !== 'none'} label={size}>
                    <Box padding={value} borderRadius="default">
                      <span style={{
                    display: 'block',
                    backgroundColor: STORY_COLORS.neutral.white,
                    border: \`2px solid \${STORY_COLORS.neutral.borderSlate}\`,
                    borderRadius: '4px',
                    padding: '12px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: STORY_COLORS.neutral.textSlate,
                    textAlign: 'center'
                  }}>
                        Content
                      </span>
                    </Box>
                  </PaddingVisualizer>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredPadding)} language="jsx" title="JSX" subtitle={\`padding="\${hoveredPadding}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...x.parameters?.docs?.source},description:{story:`## Prop: \`padding\`

Apply uniform padding on all sides.
Blue background visualizes the padding area, white border shows content.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredVariant, setHoveredVariant] = React.useState<string>('paddingX');
    const generateCode = (variant: string): string => {
      if (variant === 'paddingX') {
        return \`<Box paddingX="spacious" borderRadius="default">
  Horizontal padding
</Box>\`;
      } else if (variant === 'paddingY') {
        return \`<Box paddingY="spacious" borderRadius="default">
  Vertical padding
</Box>\`;
      } else {
        return \`<Box paddingX="spacious" paddingY="compact" borderRadius="default">
  Different X/Y spacing
</Box>\`;
      }
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
            <div onMouseEnter={() => setHoveredVariant('paddingX')}>
              <PropCard label='paddingX="spacious" (← →)' highlight={hoveredVariant === 'paddingX'}>
                <PaddingVisualizer color={STORY_COLORS.axis.x.main} showLabel label="32px">
                  <Box paddingX="spacious" borderRadius="default">
                    <div style={{
                    backgroundColor: STORY_COLORS.axis.x.main,
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 600,
                    textAlign: 'center',
                    padding: '16px',
                    borderRadius: '4px'
                  }}>
                      ← Horizontal padding →
                    </div>
                  </Box>
                </PaddingVisualizer>
              </PropCard>
            </div>

            <div onMouseEnter={() => setHoveredVariant('paddingY')}>
              <PropCard label='paddingY="spacious" (↑ ↓)' highlight={hoveredVariant === 'paddingY'}>
                <PaddingVisualizer color={STORY_COLORS.axis.y.main} showLabel label="32px">
                  <Box paddingY="spacious" borderRadius="default">
                    <div style={{
                    backgroundColor: STORY_COLORS.axis.y.main,
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 600,
                    textAlign: 'center',
                    padding: '16px',
                    borderRadius: '4px'
                  }}>
                      ↑<br />
                      Vertical padding
                      <br />↓
                    </div>
                  </Box>
                </PaddingVisualizer>
              </PropCard>
            </div>

            <div onMouseEnter={() => setHoveredVariant('combined')}>
              <PropCard label="paddingX + paddingY" highlight={hoveredVariant === 'combined'}>
                <PaddingVisualizer color={STORY_COLORS.axis.combined.main} showLabel label="X:32px Y:8px">
                  <Box paddingX="spacious" paddingY="compact" borderRadius="default">
                    <div style={{
                    backgroundColor: STORY_COLORS.axis.combined.main,
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 600,
                    textAlign: 'center',
                    padding: '16px',
                    borderRadius: '4px'
                  }}>
                      Different X/Y spacing
                    </div>
                  </Box>
                </PaddingVisualizer>
              </PropCard>
            </div>
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredVariant)} language="jsx" title="JSX" subtitle={hoveredVariant === 'combined' ? 'Combined' : hoveredVariant} />
        </div>
      </StoryContainer>;
  }
}`,...S.parameters?.docs?.source},description:{story:"## Props: `paddingX` & `paddingY`\n\nDirectional padding shortcuts.\nDifferent colors for visual distinction.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredProp, setHoveredProp] = React.useState<string>('paddingTop');
    const generateCode = (prop: string): string => {
      return \`<Box \${prop}="spacious" borderRadius="default">
  Content
</Box>\`;
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
            {[{
            prop: 'paddingTop',
            label: 'Top ↓',
            ...STORY_COLORS.directional.top
          }, {
            prop: 'paddingRight',
            label: 'Right ←',
            ...STORY_COLORS.directional.right
          }, {
            prop: 'paddingBottom',
            label: 'Bottom ↑',
            ...STORY_COLORS.directional.bottom
          }, {
            prop: 'paddingLeft',
            label: 'Left →',
            ...STORY_COLORS.directional.left
          }].map(({
            prop,
            label,
            main
          }) => <div key={prop} onMouseEnter={() => setHoveredProp(prop)}>
                <PropCard label={\`\${prop}="spacious"\`} highlight={hoveredProp === prop}>
                  <PaddingVisualizer color={main} showLabel label="32px">
                    <Box {...{
                  [prop]: 'spacious'
                }} borderRadius="default">
                      <div style={{
                    backgroundColor: main,
                    color: 'white',
                    fontSize: '13px',
                    fontWeight: 600,
                    textAlign: 'center',
                    padding: '20px',
                    borderRadius: '4px'
                  }}>
                        {label}
                      </div>
                    </Box>
                  </PaddingVisualizer>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredProp)} language="jsx" title="JSX" subtitle={\`\${hoveredProp}="spacious"\`} />
        </div>
      </StoryContainer>;
  }
}`,...C.parameters?.docs?.source},description:{story:`## Props: Individual Padding Sides

Precise control over each side's padding.
Different border colors show which side has padding.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredMargin, setHoveredMargin] = React.useState<string>('default');
    const generateCode = (margin: string): string => {
      return \`<Box margin="\${margin}" padding="default">
  Box
</Box>\`;
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
            {(['none', 'tight', 'compact', 'default', 'comfortable', 'spacious'] as const).map((value, idx) => {
            const storyColor = getColorByIndex(idx);
            const marginValues = {
              none: '0px',
              tight: '4px',
              compact: '8px',
              default: '16px',
              comfortable: '24px',
              spacious: '32px'
            };
            const marginSize = marginValues[value];
            return <div key={value} onMouseEnter={() => setHoveredMargin(value)}>
                  <PropCard label={\`margin="\${value}"\`} highlight={hoveredMargin === value}>
                    <div style={{
                  backgroundColor: STORY_COLORS.neutral.backgroundLight,
                  borderRadius: '8px',
                  padding: '4px',
                  minHeight: '140px',
                  position: 'relative',
                  border: \`2px dashed \${STORY_COLORS.neutral.borderMedium}\`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                      <MarginVisualizer color={storyColor.main} showLabel={value !== 'none'} label={marginSize}>
                        <Box margin={value} padding="default" style={{
                      backgroundColor: storyColor.main,
                      color: 'white',
                      fontSize: '13px',
                      fontWeight: 600,
                      textAlign: 'center',
                      minWidth: '60px',
                      borderRadius: '6px'
                    }}>
                          Box
                        </Box>
                      </MarginVisualizer>
                    </div>
                  </PropCard>
                </div>;
          })}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredMargin)} language="jsx" title="JSX" subtitle={\`margin="\${hoveredMargin}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...w.parameters?.docs?.source},description:{story:`## Prop: \`margin\`

Applies margin to all sides of the Box.
Gray background container shows the margin spacing.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredVariant, setHoveredVariant] = React.useState<string>('marginX');
    const generateCode = (variant: string): string => {
      if (variant === 'marginX') {
        return \`<Box marginX="spacious" padding="comfortable" background="info">
  Horizontal margin
</Box>\`;
      } else if (variant === 'marginY') {
        return \`<Box marginY="spacious" padding="comfortable" background="warning">
  Vertical margin
</Box>\`;
      } else {
        return \`<Box marginX="spacious" marginY="comfortable" padding="comfortable" background="success">
  Combined margins
</Box>\`;
      }
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
            <div onMouseEnter={() => setHoveredVariant('marginX')}>
              <PropCard label='marginX="spacious" (← →)' highlight={hoveredVariant === 'marginX'}>
                <div style={{
                backgroundColor: STORY_COLORS.axis.x.light,
                padding: '16px',
                borderRadius: '8px',
                border: \`2px dashed \${STORY_COLORS.axis.x.main}\`,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                  <MarginVisualizer color={STORY_COLORS.axis.x.main} showLabel label="32px">
                    <Box marginX="spacious" padding="comfortable" background="info" borderRadius="default" style={{
                    backgroundColor: STORY_COLORS.axis.x.main,
                    color: 'white',
                    fontWeight: 600,
                    textAlign: 'center',
                    fontSize: '14px'
                  }}>
                      ← Horizontal margin →
                    </Box>
                  </MarginVisualizer>
                </div>
              </PropCard>
            </div>

            <div onMouseEnter={() => setHoveredVariant('marginY')}>
              <PropCard label='marginY="spacious" (↑ ↓)' highlight={hoveredVariant === 'marginY'}>
                <div style={{
                backgroundColor: STORY_COLORS.axis.y.light,
                padding: '16px',
                borderRadius: '8px',
                border: \`2px dashed \${STORY_COLORS.axis.y.main}\`,
                minHeight: '160px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                  <MarginVisualizer color={STORY_COLORS.axis.y.main} showLabel label="32px">
                    <Box marginY="spacious" padding="comfortable" background="warning" borderRadius="default" style={{
                    backgroundColor: STORY_COLORS.axis.y.main,
                    color: 'white',
                    fontWeight: 600,
                    textAlign: 'center',
                    fontSize: '14px'
                  }}>
                      ↑ Vertical margin ↓
                    </Box>
                  </MarginVisualizer>
                </div>
              </PropCard>
            </div>

            <div onMouseEnter={() => setHoveredVariant('combined')}>
              <PropCard label="marginX + marginY" highlight={hoveredVariant === 'combined'}>
                <div style={{
                backgroundColor: STORY_COLORS.axis.combined.light,
                padding: '16px',
                borderRadius: '8px',
                border: \`2px dashed \${STORY_COLORS.axis.combined.main}\`,
                minHeight: '160px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                  <MarginVisualizer color={STORY_COLORS.axis.combined.main} showLabel label="X:32px Y:24px">
                    <Box marginX="spacious" marginY="comfortable" padding="comfortable" background="success" borderRadius="default" style={{
                    backgroundColor: STORY_COLORS.axis.combined.main,
                    color: 'white',
                    fontWeight: 600,
                    textAlign: 'center',
                    fontSize: '14px'
                  }}>
                      Combined margins
                    </Box>
                  </MarginVisualizer>
                </div>
              </PropCard>
            </div>
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredVariant)} language="jsx" title="JSX" subtitle={hoveredVariant === 'combined' ? 'Combined' : hoveredVariant} />
        </div>
      </StoryContainer>;
  }
}`,...T.parameters?.docs?.source},description:{story:"## Props: `marginX` & `marginY`\n\nDirectional margin shortcuts.\nColored containers show the spacing area.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredProp, setHoveredProp] = React.useState<string>('marginTop');
    const generateCode = (prop: string): string => {
      return \`<Box \${prop}="spacious" padding="comfortable" background="surface">
  Content
</Box>\`;
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
            {[{
            prop: 'marginTop',
            label: 'Top ↓',
            ...STORY_COLORS.directional.top
          }, {
            prop: 'marginRight',
            label: 'Right ←',
            ...STORY_COLORS.directional.right
          }, {
            prop: 'marginBottom',
            label: 'Bottom ↑',
            ...STORY_COLORS.directional.bottom
          }, {
            prop: 'marginLeft',
            label: 'Left →',
            ...STORY_COLORS.directional.left
          }].map(({
            prop,
            label,
            main,
            light
          }) => <div key={prop} onMouseEnter={() => setHoveredProp(prop)}>
                <PropCard label={\`\${prop}="spacious"\`} highlight={hoveredProp === prop}>
                  <div style={{
                backgroundColor: light,
                borderRadius: '8px',
                padding: '4px',
                border: \`2px dashed \${main}\`,
                minHeight: '140px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                    <MarginVisualizer color={main} showLabel label="32px">
                      <Box {...{
                    [prop]: 'spacious'
                  }} padding="comfortable" background="surface" borderRadius="default" style={{
                    backgroundColor: main,
                    color: 'white',
                    fontSize: '13px',
                    fontWeight: 600,
                    textAlign: 'center',
                    minWidth: '80px'
                  }}>
                        {label}
                      </Box>
                    </MarginVisualizer>
                  </div>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredProp)} language="jsx" title="JSX" subtitle={\`\${hoveredProp}="spacious"\`} />
        </div>
      </StoryContainer>;
  }
}`,...E.parameters?.docs?.source},description:{story:`## Props: Individual Margin Sides

Precise control over each side's margin.
Colored containers show the spacing area.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredBg, setHoveredBg] = React.useState<string>('surface');
    {
      /* 
      💡 TOKEN EDUCATION: Semantic Background Colors
      
      Box background uses semantic UI tokens that adapt to themes:
      
      - background="page" → STORY_COLORS.themed.background.page
        Main page background color
        
      - background="surface" → STORY_COLORS.themed.background.surface
        Elevated surfaces like cards and panels
        
      - background="success/error/warning/info" → Semantic state backgrounds
        Used for alerts, notifications, and status indicators
        
      - background="overlay" → var(--lufa-semantic-ui-overlay-backdrop)
        Semi-transparent modal/dialog backdrops
      
      ✅ Theme Adaptation:
      - Light mode: Light backgrounds, dark text
      - Dark mode: Dark backgrounds, light text  
      - High-contrast: Maximum contrast for accessibility
      
      Try switching themes to see automatic color adaptation!
      */
    }
    const generateCode = (bg: string): string => {
      return \`<Box padding="comfortable" background="\${bg}" borderRadius="default">
  \${bg}
</Box>\`;
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '16px'
        }}>
            {(['page', 'surface', 'success', 'error', 'warning', 'info', 'overlay', 'on-primary', 'on-secondary', 'on-success', 'on-error', 'on-warning', 'on-info'] as const).map(value => <div key={value} onMouseEnter={() => setHoveredBg(value)}>
                <PropCard label={\`background="\${value}"\`} highlight={hoveredBg === value}>
                  <Box padding="comfortable" background={value} borderRadius="default" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80px',
                fontSize: '13px',
                fontWeight: 600
              }}>
                    {value}
                  </Box>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredBg)} language="jsx" title="JSX" subtitle={\`background="\${hoveredBg}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...D.parameters?.docs?.source},description:{story:`## Prop: \`background\`

Applies semantic background colors to the Box.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredRadius, setHoveredRadius] = React.useState<string>('default');
    const generateCode = (radius: string): string => {
      return \`<Box 
  padding="comfortable" 
  background="surface" 
  borderWidth="medium" 
  borderRadius="\${radius}"
>
  Content
</Box>\`;
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '24px'
        }}>
            {(['none', 'small', 'default', 'medium', 'large', 'full'] as const).map(value => <div key={value} onMouseEnter={() => setHoveredRadius(value)}>
                <PropCard label={\`borderRadius="\${value}"\`} highlight={hoveredRadius === value}>
                  <Box padding="comfortable" background="surface" borderWidth="medium" borderColor="default" borderRadius={value} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100px',
                fontSize: '32px',
                ...(value === 'full' ? {
                  width: '100px',
                  height: '100px',
                  margin: '0 auto'
                } : {})
              }}>
                    ◻️
                  </Box>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredRadius)} language="jsx" title="JSX" subtitle={\`borderRadius="\${hoveredRadius}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...O.parameters?.docs?.source},description:{story:`## Prop: \`borderRadius\`

Controls the roundness of the Box's corners.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredWidth, setHoveredWidth] = React.useState<string>('medium');
    const generateCode = (width: string): string => {
      return \`<Box 
  padding="comfortable" 
  background="surface" 
  borderWidth="\${width}" 
  borderColor="default"
>
  \${width}
</Box>\`;
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
            {(['none', 'thin', 'medium', 'thick'] as const).map(value => <div key={value} onMouseEnter={() => setHoveredWidth(value)}>
                <PropCard label={\`borderWidth="\${value}"\`} highlight={hoveredWidth === value}>
                  <Box padding="comfortable" background="surface" borderWidth={value} borderColor="default" borderRadius="default" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80px',
                fontSize: '14px',
                fontWeight: 600
              }}>
                    {value}
                  </Box>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredWidth)} language="jsx" title="JSX" subtitle={\`borderWidth="\${hoveredWidth}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...k.parameters?.docs?.source},description:{story:`## Prop: \`borderWidth\`

Controls the thickness of the Box's border.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredColor, setHoveredColor] = React.useState<string>('default');
    const generateCode = (color: string): string => {
      return \`<Box 
  padding="comfortable" 
  background="surface" 
  borderWidth="thick" 
  borderColor="\${color}"
>
  \${color}
</Box>\`;
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '20px'
        }}>
            {(['default', 'strong', 'success', 'error', 'warning', 'info'] as const).map(value => <div key={value} onMouseEnter={() => setHoveredColor(value)}>
                <PropCard label={\`borderColor="\${value}"\`} highlight={hoveredColor === value}>
                  <Box padding="comfortable" background="surface" borderWidth="thick" borderColor={value} borderRadius="default" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '90px',
                fontSize: '28px'
              }}>
                    {value === 'success' ? '✓' : value === 'error' ? '✕' : value === 'warning' ? '⚠' : value === 'info' ? 'ℹ' : '▪'}
                  </Box>
                </PropCard>
              </div>)}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredColor)} language="jsx" title="JSX" subtitle={\`borderColor="\${hoveredColor}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...A.parameters?.docs?.source},description:{story:`## Prop: \`borderColor\`

Controls the color of the Box's border.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hoveredDisplay, setHoveredDisplay] = React.useState<string>('block');
    const generateCode = (display: string): string => {
      if (display === 'block') {
        return \`<Box display="block" padding="default" background="info">
  Block content (takes full width)
</Box>\`;
      } else if (display === 'inline-block') {
        return \`Text before <Box display="inline-block" padding="compact" background="success">
  inline-block
</Box> text after\`;
      } else if (display === 'flex') {
        return \`<Box display="flex" padding="default" background="surface" style={{ gap: '12px' }}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Box>\`;
      } else {
        return \`<Box display="grid" padding="default" background="surface" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</Box>\`;
      }
    };
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
          {/* Examples */}
          <div onMouseEnter={() => setHoveredDisplay('block')}>
            <PropCard label='display="block"' highlight={hoveredDisplay === 'block'}>
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
                <Box display="block" padding="default" borderRadius="default" style={{
                backgroundColor: STORY_COLORS.primary.blue.main,
                textAlign: 'center',
                color: 'white',
                fontWeight: 600
              }}>
                  Block 1 (takes full width)
                </Box>
                <Box display="block" padding="default" borderRadius="default" style={{
                backgroundColor: STORY_COLORS.primary.violet.main,
                textAlign: 'center',
                color: 'white',
                fontWeight: 600
              }}>
                  Block 2 (takes full width)
                </Box>
              </div>
            </PropCard>
          </div>

          <div onMouseEnter={() => setHoveredDisplay('inline-block')}>
            <PropCard label='display="inline-block"' highlight={hoveredDisplay === 'inline-block'}>
              <div style={{
              fontSize: '14px'
            }}>
                Text before{' '}
                <Box display="inline-block" padding="compact" borderRadius="default" style={{
                backgroundColor: STORY_COLORS.primary.green.main,
                verticalAlign: 'middle',
                fontWeight: 600,
                color: 'white'
              }}>
                  inline-block
                </Box>{' '}
                text after
              </div>
            </PropCard>
          </div>

          <div onMouseEnter={() => setHoveredDisplay('flex')}>
            <PropCard label='display="flex"' highlight={hoveredDisplay === 'flex'}>
              <Box display="flex" padding="default" background="surface" borderWidth="thin" borderRadius="default" style={{
              gap: '12px'
            }}>
                {[1, 2, 3].map(i => <div key={i} style={{
                padding: '20px',
                backgroundColor: STORY_COLORS.primary.pink.main,
                borderRadius: '6px',
                flex: 1,
                color: 'white',
                fontWeight: 600,
                textAlign: 'center'
              }}>
                    Item {i}
                  </div>)}
              </Box>
            </PropCard>
          </div>

          <div onMouseEnter={() => setHoveredDisplay('grid')}>
            <PropCard label='display="grid"' highlight={hoveredDisplay === 'grid'}>
              <Box display="grid" padding="default" background="surface" borderWidth="thin" borderRadius="default" style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px'
            }}>
                {[1, 2, 3, 4, 5, 6].map(i => <div key={i} style={{
                padding: '20px',
                backgroundColor: STORY_COLORS.primary.orange.main,
                borderRadius: '6px',
                color: 'white',
                fontWeight: 600,
                textAlign: 'center'
              }}>
                    {i}
                  </div>)}
              </Box>
            </PropCard>
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(hoveredDisplay)} language="jsx" title="JSX" subtitle={\`display="\${hoveredDisplay}"\`} />
        </div>
      </StoryContainer>;
  }
}`,...j.parameters?.docs?.source},description:{story:`## Prop: \`display\`

Controls the CSS display property of the Box.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px'
      }}>
          {/* Instruction banner */}
          <Box padding="comfortable" background="info" borderRadius="default" style={{
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: 500
        }}>
            📐 <strong>Resize your browser window</strong> or use DevTools responsive mode to see boxes appear/disappear
          </Box>

          {/* Example 1: hideFrom prop */}
          <div>
            <h3 style={{
            marginTop: 0,
            marginBottom: '16px',
            fontSize: '18px',
            fontWeight: 600
          }}>
              1. hideFrom prop - Hide from breakpoint and up
            </h3>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px'
          }}>
              <PropCard label='hideFrom="md" - Hidden from tablet+'>
                <Box hideFrom="md" padding="comfortable" borderRadius="default" style={{
                backgroundColor: STORY_COLORS.primary.green.main,
                color: 'white',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '14px'
              }}>
                  📱 Mobile/Small only
                  <div style={{
                  fontSize: '12px',
                  marginTop: '8px',
                  opacity: 0.9
                }}>Visible: &lt; 768px</div>
                </Box>
              </PropCard>

              <PropCard label='hideFrom="lg" - Hidden from desktop+'>
                <Box hideFrom="lg" padding="comfortable" borderRadius="default" style={{
                backgroundColor: STORY_COLORS.primary.blue.main,
                color: 'white',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '14px'
              }}>
                  📱📟 Mobile/Tablet only
                  <div style={{
                  fontSize: '12px',
                  marginTop: '8px',
                  opacity: 0.9
                }}>Visible: &lt; 1024px</div>
                </Box>
              </PropCard>

              <PropCard label='hideFrom="sm" - Hidden from mobile landscape+'>
                <Box hideFrom="sm" padding="comfortable" borderRadius="default" style={{
                backgroundColor: STORY_COLORS.primary.orange.main,
                color: 'white',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '14px'
              }}>
                  📱 Tiny screens only
                  <div style={{
                  fontSize: '12px',
                  marginTop: '8px',
                  opacity: 0.9
                }}>Visible: &lt; 640px</div>
                </Box>
              </PropCard>
            </div>

            {/* Code example */}
            <div style={{
            marginTop: '16px'
          }}>
              <CodeBlock code={\`// Hidden from md (768px) and up
<Box hideFrom="md">Mobile/Small only</Box>

// Hidden from lg (1024px) and up
<Box hideFrom="lg">Mobile/Tablet only</Box>

// Hidden from sm (640px) and up
<Box hideFrom="sm">Tiny screens only</Box>\`} language="tsx" title="hideFrom examples" />
            </div>
          </div>

          {/* Example 2: showFrom prop */}
          <div>
            <h3 style={{
            marginTop: 0,
            marginBottom: '16px',
            fontSize: '18px',
            fontWeight: 600
          }}>
              2. showFrom prop - Show from breakpoint and up
            </h3>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px'
          }}>
              <PropCard label='showFrom="md" - Visible from tablet+'>
                <Box showFrom="md" padding="comfortable" borderRadius="default" style={{
                backgroundColor: STORY_COLORS.primary.violet.main,
                color: 'white',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '14px'
              }}>
                  💻 Tablet+ only
                  <div style={{
                  fontSize: '12px',
                  marginTop: '8px',
                  opacity: 0.9
                }}>Visible: ≥ 768px</div>
                </Box>
              </PropCard>

              <PropCard label='showFrom="lg" - Visible from desktop+'>
                <Box showFrom="lg" padding="comfortable" borderRadius="default" style={{
                backgroundColor: STORY_COLORS.primary.pink.main,
                color: 'white',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '14px'
              }}>
                  💻 Desktop+ only
                  <div style={{
                  fontSize: '12px',
                  marginTop: '8px',
                  opacity: 0.9
                }}>Visible: ≥ 1024px</div>
                </Box>
              </PropCard>

              <PropCard label='showFrom="xl" - Visible from large desktop+'>
                <Box showFrom="xl" padding="comfortable" borderRadius="default" style={{
                backgroundColor: STORY_COLORS.primary.cyan.main,
                color: 'white',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '14px'
              }}>
                  🖥️ Large desktop+ only
                  <div style={{
                  fontSize: '12px',
                  marginTop: '8px',
                  opacity: 0.9
                }}>Visible: ≥ 1280px</div>
                </Box>
              </PropCard>
            </div>

            {/* Code example */}
            <div style={{
            marginTop: '16px'
          }}>
              <CodeBlock code={\`// Visible from md (768px) and up
<Box showFrom="md">Tablet+ only</Box>

// Visible from lg (1024px) and up
<Box showFrom="lg">Desktop+ only</Box>

// Visible from xl (1280px) and up
<Box showFrom="xl">Large desktop+ only</Box>\`} language="tsx" title="showFrom examples" />
            </div>
          </div>

          {/* Example 3: Responsive navigation pattern */}
          <div>
            <h3 style={{
            marginTop: 0,
            marginBottom: '16px',
            fontSize: '18px',
            fontWeight: 600
          }}>
              3. Real-world: Responsive Navigation
            </h3>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
              <PropCard label="Mobile menu button (hidden on desktop)">
                <Box hideFrom="md" padding="comfortable" borderRadius="default" style={{
                backgroundColor: STORY_COLORS.neutral.backgroundDark as string,
                color: 'white',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '16px',
                cursor: 'pointer'
              }}>
                  ☰ Mobile Menu
                </Box>
              </PropCard>

              <PropCard label="Desktop navigation (hidden on mobile)">
                <Box showFrom="md" padding="comfortable" borderRadius="default" style={{
                backgroundColor: STORY_COLORS.neutral.backgroundDark as string,
                color: 'white',
                display: 'flex',
                gap: '24px',
                justifyContent: 'center',
                fontWeight: 600
              }}>
                  <span>Home</span>
                  <span>About</span>
                  <span>Products</span>
                  <span>Contact</span>
                </Box>
              </PropCard>
            </div>

            {/* Code example */}
            <div style={{
            marginTop: '16px'
          }}>
              <CodeBlock code={\`// Mobile menu button (hidden on desktop)
<Box hideFrom="md">
  <Button>☰ Menu</Button>
</Box>

// Desktop navigation (hidden on mobile)
<Box showFrom="md">
  <nav>
    <Link>Home</Link>
    <Link>About</Link>
    <Link>Products</Link>
    <Link>Contact</Link>
  </nav>
</Box>\`} language="tsx" title="Responsive navigation pattern" />
            </div>
          </div>

          {/* Example 4: Responsive object syntax */}
          <div>
            <h3 style={{
            marginTop: 0,
            marginBottom: '16px',
            fontSize: '18px',
            fontWeight: 600
          }}>
              4. Advanced: Responsive Object Syntax
            </h3>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px'
          }}>
              <PropCard label="show={{ base: true, md: false }}">
                <Box show={{
                base: true,
                md: false
              }} padding="comfortable" borderRadius="default" style={{
                backgroundColor: STORY_COLORS.primary.green.main,
                color: 'white',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '14px'
              }}>
                  📱 Show on mobile
                  <div style={{
                  fontSize: '12px',
                  marginTop: '8px',
                  opacity: 0.9
                }}>(hide on tablet+)</div>
                </Box>
              </PropCard>

              <PropCard label="show={{ base: false, md: true }}">
                <Box show={{
                base: false,
                md: true
              }} padding="comfortable" borderRadius="default" style={{
                backgroundColor: STORY_COLORS.primary.violet.main,
                color: 'white',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '14px'
              }}>
                  💻 Show on tablet+
                  <div style={{
                  fontSize: '12px',
                  marginTop: '8px',
                  opacity: 0.9
                }}>(hide on mobile)</div>
                </Box>
              </PropCard>

              <PropCard label="show={{ base: true, md: false, lg: true }}">
                <Box show={{
                base: true,
                md: false,
                lg: true
              }} padding="comfortable" borderRadius="default" style={{
                backgroundColor: STORY_COLORS.primary.pink.main,
                color: 'white',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '14px'
              }}>
                  📱💻 Mobile + Desktop
                  <div style={{
                  fontSize: '12px',
                  marginTop: '8px',
                  opacity: 0.9
                }}>(hide on tablet)</div>
                </Box>
              </PropCard>
            </div>

            {/* Code example */}
            <div style={{
            marginTop: '16px'
          }}>
              <CodeBlock code={\`// Visible on mobile, hidden on tablet+
<Box show={{ base: true, md: false }}>
  Mobile only
</Box>

// Hidden on mobile, visible on tablet+
<Box show={{ base: false, md: true }}>
  Tablet+ only
</Box>

// Visible on mobile and desktop, hidden on tablet
<Box show={{ base: true, md: false, lg: true }}>
  Mobile + Desktop (skip tablet)
</Box>\`} language="tsx" title="Responsive object syntax" />
            </div>
          </div>

          {/* Breakpoint reference */}
          <Box padding="comfortable" background="surface" borderWidth="thin" borderRadius="default">
            <h4 style={{
            marginTop: 0,
            marginBottom: '12px',
            fontSize: '16px',
            fontWeight: 600
          }}>
              📐 Breakpoint Reference
            </h4>
            <div style={{
            fontSize: '14px',
            lineHeight: '1.8'
          }}>
              <div>
                <strong>xs</strong>: 320px (mobile portrait)
              </div>
              <div>
                <strong>sm</strong>: 640px (mobile landscape)
              </div>
              <div>
                <strong>md</strong>: 768px (tablet portrait)
              </div>
              <div>
                <strong>lg</strong>: 1024px (tablet landscape / desktop)
              </div>
              <div>
                <strong>xl</strong>: 1280px (desktop)
              </div>
              <div>
                <strong>2xl</strong>: 1536px (large desktop)
              </div>
            </div>
          </Box>
        </div>
      </StoryContainer>;
  }
}`,...M.parameters?.docs?.source},description:{story:`## Responsive Visibility

Control element visibility at different viewport breakpoints using \`show\`, \`hide\`, \`hideFrom\`, and \`showFrom\` props.

**How to test:**
- Resize your browser window or use DevTools responsive mode
- Or use the viewport controls in Storybook toolbar
- Watch boxes appear/disappear at different breakpoints

**Breakpoints:**
- xs: 320px (mobile portrait)
- sm: 640px (mobile landscape)
- md: 768px (tablet portrait)
- lg: 1024px (tablet landscape / desktop)
- xl: 1280px (desktop)
- 2xl: 1536px (large desktop)`,...M.parameters?.docs?.description}}},N=[`Playground`,`PropAs`,`PropPadding`,`PropPaddingXY`,`PropPaddingIndividual`,`PropMargin`,`PropMarginXY`,`PropMarginIndividual`,`PropBackground`,`PropBorderRadius`,`PropBorderWidth`,`PropBorderColor`,`PropDisplay`,`ResponsiveVisibility`]}))();export{y as Playground,b as PropAs,D as PropBackground,A as PropBorderColor,O as PropBorderRadius,k as PropBorderWidth,j as PropDisplay,w as PropMargin,E as PropMarginIndividual,T as PropMarginXY,x as PropPadding,C as PropPaddingIndividual,S as PropPaddingXY,M as ResponsiveVisibility,N as __namedExportsOrder,v as default};