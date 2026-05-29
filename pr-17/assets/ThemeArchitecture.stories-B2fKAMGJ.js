import{i as e}from"./preload-helper-xPQekRTU.js";import{t,w as n}from"./iframe-Bm_r3Ygs.js";import{S as r,a as i}from"./lufa-ui-B9ODeQns.js";import{b as a,c as o,i as s,n as c,o as l,t as u}from"./helpers-D9bnZ3qZ.js";var d,f,p,m,h,g,_,v,y;e((()=>{n(),r(),u(),d=t(),f={title:`1. Architecture/Theme Architecture`,parameters:{layout:`fullscreen`,docs:{description:{component:`Interactive testing environment for the token architecture. Demonstrates themeable vs immutable tokens.`}}}},p={render:()=>(0,d.jsxs)(a,{title:`Theme Architecture Overview`,children:[(0,d.jsxs)(`div`,{style:{marginBottom:`48px`,padding:`32px`,borderRadius:`12px`,backgroundColor:`var(--lufa-semantic-ui-background-surface-default)`,border:`2px solid var(--lufa-semantic-ui-border-default)`},children:[(0,d.jsx)(`h2`,{style:{fontSize:`24px`,fontWeight:700,marginBottom:`24px`,color:`var(--lufa-semantic-ui-text-primary)`},children:`Token Architecture Hierarchy`}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`20px`,alignItems:`center`,padding:`20px`,borderRadius:`8px`,backgroundColor:`var(--lufa-primitive-color-green-100)`,border:`2px solid var(--lufa-primitive-color-green-600)`},children:[(0,d.jsxs)(`div`,{style:{flex:1},children:[(0,d.jsx)(`div`,{style:{fontSize:`16px`,fontWeight:700,color:`var(--lufa-primitive-color-green-600)`,marginBottom:`8px`},children:`3️⃣ Component Tokens`}),(0,d.jsxs)(`div`,{style:{fontSize:`13px`,color:`var(--lufa-primitive-color-green-600)`,lineHeight:`1.5`},children:[`Component-specific tokens. Example:`,` `,(0,d.jsx)(`code`,{children:`--lufa-component-button-type-solid-variant-primary-background-default`}),(0,d.jsx)(`br`,{}),(0,d.jsx)(`strong`,{children:`Themeable:`}),` ✅ Yes | `,(0,d.jsx)(`strong`,{children:`Mode-Aware:`}),` ✅ Yes`]})]}),(0,d.jsx)(`div`,{style:{fontSize:`24px`},children:`🎨`})]}),(0,d.jsx)(`div`,{style:{textAlign:`center`,fontSize:`24px`,color:`var(--lufa-semantic-ui-text-tertiary)`},children:`↓`}),(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`20px`,alignItems:`center`,padding:`20px`,borderRadius:`8px`,backgroundColor:`var(--lufa-primitive-color-blue-100)`,border:`2px solid var(--lufa-primitive-color-blue-500)`},children:[(0,d.jsxs)(`div`,{style:{flex:1},children:[(0,d.jsx)(`div`,{style:{fontSize:`16px`,fontWeight:700,color:`var(--lufa-primitive-color-blue-600)`,marginBottom:`8px`},children:`2️⃣ Semantic Tokens`}),(0,d.jsxs)(`div`,{style:{fontSize:`13px`,color:`var(--lufa-primitive-color-blue-600)`,lineHeight:`1.5`},children:[`Purpose-driven tokens. Example: `,(0,d.jsx)(`code`,{children:`--lufa-semantic-ui-background-page`}),(0,d.jsx)(`br`,{}),(0,d.jsx)(`strong`,{children:`Themeable:`}),` ✅ Yes | `,(0,d.jsx)(`strong`,{children:`Mode-Aware:`}),` ✅ Yes`]})]}),(0,d.jsx)(`div`,{style:{fontSize:`24px`},children:`💡`})]}),(0,d.jsx)(`div`,{style:{textAlign:`center`,fontSize:`24px`,color:`var(--lufa-semantic-ui-text-tertiary)`},children:`↓`}),(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`20px`,alignItems:`center`,padding:`20px`,borderRadius:`8px`,backgroundColor:`var(--lufa-primitive-color-purple-100)`,border:`2px solid var(--lufa-primitive-color-purple-500)`},children:[(0,d.jsxs)(`div`,{style:{flex:1},children:[(0,d.jsx)(`div`,{style:{fontSize:`16px`,fontWeight:700,color:`var(--lufa-primitive-color-purple-500)`,marginBottom:`8px`},children:`1️⃣ Primitive Tokens`}),(0,d.jsxs)(`div`,{style:{fontSize:`13px`,color:`var(--lufa-primitive-color-purple-500)`,lineHeight:`1.5`},children:[`Raw immutable values. Example: `,(0,d.jsx)(`code`,{children:`--lufa-primitive-color-blue-500`}),(0,d.jsx)(`br`,{}),(0,d.jsx)(`strong`,{children:`Themeable:`}),` ❌ No | `,(0,d.jsx)(`strong`,{children:`Mode-Aware:`}),` ❌ No | `,(0,d.jsx)(`strong`,{children:`Immutable:`}),` ✅ Always`]})]}),(0,d.jsx)(`div`,{style:{fontSize:`24px`},children:`🔒`})]})]})]}),(0,d.jsxs)(`div`,{style:{padding:`24px`,borderRadius:`8px`,backgroundColor:`var(--lufa-semantic-ui-background-info)`,border:`1px solid var(--lufa-semantic-ui-border-info)`,marginBottom:`32px`},children:[(0,d.jsx)(`h3`,{style:{fontSize:`18px`,fontWeight:700,color:`var(--lufa-semantic-ui-text-info)`,marginBottom:`16px`},children:`📋 How to Test Themability`}),(0,d.jsxs)(`ol`,{style:{fontSize:`13px`,color:`var(--lufa-semantic-ui-text-info)`,lineHeight:`1.6`,margin:0,paddingLeft:`20px`},children:[(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Switch Themes:`}),` Use the Theme toolbar (🎨 paintbrush icon) → Try Default, Ocean 🌊, Forest 🌲`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Switch Modes:`}),` Use the Mode toolbar (◐ contrast icon) → Try Light ☀️, Dark 🌙, High Contrast ◐`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Observe Changes:`}),(0,d.jsxs)(`ul`,{style:{marginTop:`8px`,paddingLeft:`20px`},children:[(0,d.jsx)(`li`,{children:`Semantic tokens (blue badges) should change values`}),(0,d.jsx)(`li`,{children:`Component tokens (green badges) should change values`}),(0,d.jsx)(`li`,{children:`Primitive tokens (purple badges) should NEVER change`})]})]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Navigate Stories:`}),` Explore each story below to see different aspects of themability`]})]})]}),(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:`20px`},children:[(0,d.jsxs)(`div`,{style:{padding:`20px`,borderRadius:`8px`,backgroundColor:`var(--lufa-semantic-ui-background-success)`,border:`1px solid var(--lufa-semantic-ui-border-success)`},children:[(0,d.jsx)(`div`,{style:{fontSize:`16px`,fontWeight:700,color:`var(--lufa-semantic-ui-text-success)`,marginBottom:`12px`},children:`✅ Themeable Tokens`}),(0,d.jsx)(`div`,{style:{fontSize:`12px`,color:`var(--lufa-semantic-ui-text-success)`,lineHeight:`1.5`},children:`Semantic and Component tokens that adapt to theme and mode changes. These provide flexibility and accessibility. Use these for most UI elements.`})]}),(0,d.jsxs)(`div`,{style:{padding:`20px`,borderRadius:`8px`,backgroundColor:`var(--lufa-primitive-color-gray-100)`,border:`1px solid var(--lufa-primitive-color-gray-300)`},children:[(0,d.jsx)(`div`,{style:{fontSize:`16px`,fontWeight:700,color:`var(--lufa-primitive-color-gray-700)`,marginBottom:`12px`},children:`🔒 Immutable Tokens`}),(0,d.jsx)(`div`,{style:{fontSize:`12px`,color:`var(--lufa-primitive-color-gray-700)`,lineHeight:`1.5`},children:`Primitive tokens that never change. These provide stability and consistency across all themes and modes. Use for fixed brand colors or special cases.`})]}),(0,d.jsxs)(`div`,{style:{padding:`20px`,borderRadius:`8px`,backgroundColor:`var(--lufa-semantic-ui-background-warning)`,border:`1px solid var(--lufa-semantic-ui-border-warning)`},children:[(0,d.jsx)(`div`,{style:{fontSize:`16px`,fontWeight:700,color:`var(--lufa-semantic-ui-text-warning)`,marginBottom:`12px`},children:`💡 Mode-Aware Tokens`}),(0,d.jsx)(`div`,{style:{fontSize:`12px`,color:`var(--lufa-semantic-ui-text-warning)`,lineHeight:`1.5`},children:`Tokens that adapt to accessibility modes (light/dark/high-contrast). These ensure your UI works in all visibility conditions.`})]})]})]})},m={render:()=>(0,d.jsxs)(a,{title:`Themeable vs Non-Themeable Tokens`,children:[(0,d.jsxs)(`div`,{style:{padding:`16px`,borderRadius:`8px`,backgroundColor:`var(--lufa-semantic-ui-background-warning)`,border:`1px solid var(--lufa-semantic-ui-border-warning)`,marginBottom:`32px`},children:[(0,d.jsx)(`div`,{style:{fontSize:`14px`,fontWeight:600,color:`var(--lufa-semantic-ui-text-warning)`,marginBottom:`8px`},children:`🧪 Interactive Test`}),(0,d.jsxs)(`div`,{style:{fontSize:`13px`,color:`var(--lufa-semantic-ui-text-warning)`,lineHeight:`1.5`},children:[`Switch themes and modes using the Storybook toolbar. Watch the `,(0,d.jsx)(`strong`,{children:`left column`}),` change while the`,` `,(0,d.jsx)(`strong`,{children:`right column`}),` remains constant.`]})]}),(0,d.jsx)(l,{title:`Primary Color Comparison`,description:`Brand primary color: themeable semantic vs immutable primitive`,themeableToken:{name:`Brand Primary`,cssVariable:`--lufa-core-color-brand-primary-default`,description:`Themeable brand color that changes with theme`},nonThemeableToken:{name:`Blue 500`,cssVariable:`--lufa-primitive-color-blue-500`,description:`Immutable primitive that never changes`}}),(0,d.jsx)(l,{title:`Background Comparison`,description:`Page background: mode-aware semantic vs fixed primitive`,themeableToken:{name:`Background Page`,cssVariable:`--lufa-semantic-ui-background-page`,description:`Adapts to light/dark/high-contrast modes`},nonThemeableToken:{name:`Gray 50`,cssVariable:`--lufa-primitive-color-gray-50`,description:`Always the same light gray value`}}),(0,d.jsx)(l,{title:`Success Color Comparison`,description:`Success semantic vs green primitive`,themeableToken:{name:`Success Color`,cssVariable:`--lufa-semantic-ui-text-success`,description:`Mode-aware success color for feedback`},nonThemeableToken:{name:`Green 600`,cssVariable:`--lufa-primitive-color-green-600`,description:`Fixed green shade`}})]})},h={render:()=>(0,d.jsxs)(a,{title:`Mode-Aware Tokens`,children:[(0,d.jsx)(s,{title:`Mode-Aware Semantic Tokens`,description:`These tokens automatically adapt to the selected mode (light/dark/high-contrast)`,showModeInfo:!0,tokens:[{name:`Page Background`,cssVariable:`--lufa-semantic-ui-background-page`,level:`semantic`,themeable:!0,modeAware:!0,description:`Main page background`},{name:`Surface Background`,cssVariable:`--lufa-semantic-ui-background-surface-default`,level:`semantic`,themeable:!0,modeAware:!0,description:`Cards and panels`},{name:`Primary Text`,cssVariable:`--lufa-semantic-ui-text-primary`,level:`semantic`,themeable:!0,modeAware:!0,description:`Main text color`},{name:`Secondary Text`,cssVariable:`--lufa-semantic-ui-text-secondary`,level:`semantic`,themeable:!0,modeAware:!0,description:`Supporting text`},{name:`Border Default`,cssVariable:`--lufa-semantic-ui-border-default`,level:`semantic`,themeable:!0,modeAware:!0,description:`Default borders`},{name:`Border Strong`,cssVariable:`--lufa-semantic-ui-border-strong`,level:`semantic`,themeable:!0,modeAware:!0,description:`Emphasized borders`}]}),(0,d.jsx)(`div`,{style:{height:`40px`}}),(0,d.jsx)(s,{title:`Static Primitive Tokens`,description:`These primitive tokens remain constant regardless of mode`,tokens:[{name:`Gray 50`,cssVariable:`--lufa-primitive-color-gray-50`,level:`primitive`,themeable:!1,modeAware:!1},{name:`Gray 100`,cssVariable:`--lufa-primitive-color-gray-100`,level:`primitive`,themeable:!1,modeAware:!1},{name:`Gray 900`,cssVariable:`--lufa-primitive-color-gray-900`,level:`primitive`,themeable:!1,modeAware:!1},{name:`Blue 500`,cssVariable:`--lufa-primitive-color-blue-500`,level:`primitive`,themeable:!1,modeAware:!1},{name:`Blue 600`,cssVariable:`--lufa-primitive-color-blue-600`,level:`primitive`,themeable:!1,modeAware:!1},{name:`Green 600`,cssVariable:`--lufa-primitive-color-green-600`,level:`primitive`,themeable:!1,modeAware:!1}]})]})},g={render:()=>(0,d.jsxs)(a,{title:`Primitive Token Immutability`,children:[(0,d.jsxs)(`div`,{style:{padding:`20px`,borderRadius:`8px`,backgroundColor:`var(--lufa-primitive-color-purple-100)`,border:`2px solid var(--lufa-primitive-color-purple-500)`,marginBottom:`32px`},children:[(0,d.jsx)(`div`,{style:{fontSize:`16px`,fontWeight:700,color:`var(--lufa-primitive-color-purple-500)`,marginBottom:`12px`},children:`🔒 Immutability Guarantee`}),(0,d.jsxs)(`div`,{style:{fontSize:`13px`,color:`var(--lufa-primitive-color-purple-500)`,lineHeight:`1.6`},children:[`Primitive tokens are the foundation of our design system. They provide stable, unchanging values that higher layers can reference. No matter what theme or mode you select, these tokens will `,(0,d.jsx)(`strong`,{children:`always`}),` `,`return the same computed value.`]})]}),(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:`20px`},children:[(0,d.jsx)(o,{tokenName:`Blue 500`,cssVariable:`--lufa-primitive-color-blue-500`,level:`primitive`,themeable:!1,modeAware:!1,description:`Primary brand blue, always constant`,category:`color`,showValue:!0}),(0,d.jsx)(o,{tokenName:`Blue 600`,cssVariable:`--lufa-primitive-color-blue-600`,level:`primitive`,themeable:!1,modeAware:!1,description:`Darker blue shade, immutable`,category:`color`,showValue:!0}),(0,d.jsx)(o,{tokenName:`Gray 50`,cssVariable:`--lufa-primitive-color-gray-50`,level:`primitive`,themeable:!1,modeAware:!1,description:`Lightest gray, never changes`,category:`color`,showValue:!0}),(0,d.jsx)(o,{tokenName:`Gray 900`,cssVariable:`--lufa-primitive-color-gray-900`,level:`primitive`,themeable:!1,modeAware:!1,description:`Darkest gray, constant`,category:`color`,showValue:!0}),(0,d.jsx)(o,{tokenName:`Green 600`,cssVariable:`--lufa-primitive-color-green-600`,level:`primitive`,themeable:!1,modeAware:!1,description:`Success green, immutable`,category:`color`,showValue:!0}),(0,d.jsx)(o,{tokenName:`Red 500`,cssVariable:`--lufa-primitive-color-red-500`,level:`primitive`,themeable:!1,modeAware:!1,description:`Error red, always the same`,category:`color`,showValue:!0})]}),(0,d.jsx)(`div`,{style:{marginTop:`32px`,padding:`16px`,borderRadius:`6px`,backgroundColor:`var(--lufa-semantic-ui-background-info)`,border:`1px solid var(--lufa-semantic-ui-border-info)`},children:(0,d.jsxs)(`div`,{style:{fontSize:`12px`,color:`var(--lufa-semantic-ui-text-info)`,lineHeight:`1.5`},children:[(0,d.jsx)(`strong`,{children:`Why Immutability Matters:`}),` Having stable primitive tokens ensures that when you use a specific color (like blue-500), it's predictable across your entire application. Higher-level tokens can reference these primitives and add themability on top.`]})})]})},_={render:()=>(0,d.jsxs)(a,{title:`Token Reference Chains`,children:[(0,d.jsx)(`div`,{style:{padding:`16px`,borderRadius:`8px`,backgroundColor:`var(--lufa-semantic-ui-background-info)`,border:`1px solid var(--lufa-semantic-ui-border-info)`,marginBottom:`32px`},children:(0,d.jsx)(`div`,{style:{fontSize:`13px`,color:`var(--lufa-semantic-ui-text-info)`,lineHeight:`1.5`},children:`These chains show how tokens flow through the architecture. Read from left to right: Component → Semantic → Primitive. When you change themes/modes, watch how the semantic layer acts as a translator between immutable primitives and flexible components.`})}),(0,d.jsx)(c,{title:`Button Primary Background Chain`,description:`How the primary button gets its background color`,chain:[{name:`Button Primary BG`,cssVariable:`--lufa-component-button-type-solid-variant-primary-background-default`,level:`component`,description:`Component token for button`},{name:`Brand Primary`,cssVariable:`--lufa-core-color-brand-primary-default`,level:`semantic`,description:`Semantic brand color`},{name:`Blue 500`,cssVariable:`--lufa-primitive-color-blue-500`,level:`primitive`,description:`Base primitive value`}]}),(0,d.jsx)(c,{title:`Badge Success Background Chain`,description:`How success badges get their background color`,chain:[{name:`Badge Success BG`,cssVariable:`--lufa-component-badge-variant-success-background`,level:`component`,description:`Badge component token`},{name:`Success Background`,cssVariable:`--lufa-semantic-ui-background-success`,level:`semantic`,description:`Semantic success color`},{name:`Green 100`,cssVariable:`--lufa-primitive-color-green-100`,level:`primitive`,description:`Light green primitive`}]}),(0,d.jsx)(c,{title:`Card Border Chain`,description:`How card borders reference the design system`,chain:[{name:`Card Border`,cssVariable:`--lufa-component-card-border`,level:`component`,description:`Card-specific border`},{name:`Border Default`,cssVariable:`--lufa-semantic-ui-border-default`,level:`semantic`,description:`Semantic default border`},{name:`Gray 300`,cssVariable:`--lufa-primitive-color-gray-300`,level:`primitive`,description:`Base gray primitive`}]}),(0,d.jsx)(`div`,{style:{marginTop:`32px`,padding:`16px`,borderRadius:`6px`,backgroundColor:`var(--lufa-semantic-ui-background-success)`,border:`1px solid var(--lufa-semantic-ui-border-success)`},children:(0,d.jsxs)(`div`,{style:{fontSize:`12px`,color:`var(--lufa-semantic-ui-text-success)`,lineHeight:`1.5`},children:[(0,d.jsx)(`strong`,{children:`💡 Pro Tip:`}),` By chaining tokens this way, we can change the semantic layer's mapping without touching component code. For example, in dark mode, "Border Default" might reference gray-700 instead of gray-300, and all components automatically adapt.`]})})]})},v={render:()=>(0,d.jsxs)(a,{title:`Component Examples with Themeable Tokens`,children:[(0,d.jsxs)(`div`,{style:{padding:`16px`,borderRadius:`8px`,backgroundColor:`var(--lufa-semantic-ui-background-success)`,border:`1px solid var(--lufa-semantic-ui-border-success)`,marginBottom:`32px`},children:[(0,d.jsx)(`div`,{style:{fontSize:`14px`,fontWeight:600,color:`var(--lufa-semantic-ui-text-success)`,marginBottom:`8px`},children:`🎨 Live Component Theming`}),(0,d.jsx)(`div`,{style:{fontSize:`13px`,color:`var(--lufa-semantic-ui-text-success)`,lineHeight:`1.5`},children:`These real components use themeable tokens. Switch themes and modes to see them adapt in real-time without any code changes.`})]}),(0,d.jsxs)(`div`,{style:{marginBottom:`40px`},children:[(0,d.jsx)(`h3`,{style:{fontSize:`18px`,fontWeight:700,color:`var(--lufa-semantic-ui-text-primary)`,marginBottom:`16px`},children:`Button Components`}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`12px`,padding:`24px`,borderRadius:`8px`,backgroundColor:`var(--lufa-semantic-ui-background-surface-default)`,border:`1px solid var(--lufa-semantic-ui-border-default)`},children:[(0,d.jsx)(i,{type:`solid`,variant:`primary`,children:`Primary Button`}),(0,d.jsx)(i,{type:`solid`,variant:`secondary`,children:`Secondary Button`}),(0,d.jsx)(i,{type:`solid`,variant:`success`,children:`Success Button`}),(0,d.jsx)(i,{type:`solid`,variant:`danger`,children:`Danger Button`}),(0,d.jsx)(i,{type:`outline`,variant:`primary`,children:`Outline Button`}),(0,d.jsx)(i,{type:`ghost`,variant:`primary`,children:`Ghost Button`})]}),(0,d.jsx)(`div`,{style:{marginTop:`12px`,fontSize:`12px`,color:`var(--lufa-semantic-ui-text-secondary)`,fontStyle:`italic`},children:`Uses: --lufa-component-button-* tokens`})]}),(0,d.jsxs)(`div`,{style:{marginBottom:`40px`},children:[(0,d.jsx)(`h3`,{style:{fontSize:`18px`,fontWeight:700,color:`var(--lufa-semantic-ui-text-primary)`,marginBottom:`16px`},children:`Badge Components`}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`12px`,padding:`24px`,borderRadius:`8px`,backgroundColor:`var(--lufa-semantic-ui-background-surface-default)`,border:`1px solid var(--lufa-semantic-ui-border-default)`,alignItems:`center`},children:[(0,d.jsx)(`span`,{style:{padding:`4px 12px`,borderRadius:`12px`,fontSize:`13px`,fontWeight:600,backgroundColor:`var(--lufa-component-badge-variant-default-background)`,color:`var(--lufa-component-badge-variant-default-text)`},children:`Default`}),(0,d.jsx)(`span`,{style:{padding:`4px 12px`,borderRadius:`12px`,fontSize:`13px`,fontWeight:600,backgroundColor:`var(--lufa-component-badge-variant-success-background)`,color:`var(--lufa-component-badge-variant-success-text)`},children:`Success`}),(0,d.jsx)(`span`,{style:{padding:`4px 12px`,borderRadius:`12px`,fontSize:`13px`,fontWeight:600,backgroundColor:`var(--lufa-component-badge-variant-error-background)`,color:`var(--lufa-component-badge-variant-error-text)`},children:`Error`}),(0,d.jsx)(`span`,{style:{padding:`4px 12px`,borderRadius:`12px`,fontSize:`13px`,fontWeight:600,backgroundColor:`var(--lufa-component-badge-variant-warning-background)`,color:`var(--lufa-component-badge-variant-warning-text)`},children:`Warning`}),(0,d.jsx)(`span`,{style:{padding:`4px 12px`,borderRadius:`12px`,fontSize:`13px`,fontWeight:600,backgroundColor:`var(--lufa-component-badge-variant-info-background)`,color:`var(--lufa-component-badge-variant-info-text)`},children:`Info`})]}),(0,d.jsx)(`div`,{style:{marginTop:`12px`,fontSize:`12px`,color:`var(--lufa-semantic-ui-text-secondary)`,fontStyle:`italic`},children:`Uses: --lufa-component-badge-* tokens`})]}),(0,d.jsxs)(`div`,{style:{marginBottom:`40px`},children:[(0,d.jsx)(`h3`,{style:{fontSize:`18px`,fontWeight:700,color:`var(--lufa-semantic-ui-text-primary)`,marginBottom:`16px`},children:`Card Components`}),(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:`20px`},children:[(0,d.jsxs)(`div`,{style:{padding:`20px`,borderRadius:`8px`,backgroundColor:`var(--lufa-component-card-background)`,border:`1px solid var(--lufa-component-card-border)`,boxShadow:`0 2px 4px rgba(0,0,0,0.1)`},children:[(0,d.jsx)(`div`,{style:{fontSize:`16px`,fontWeight:700,color:`var(--lufa-semantic-ui-text-primary)`,marginBottom:`8px`},children:`Themeable Card`}),(0,d.jsx)(`div`,{style:{fontSize:`13px`,color:`var(--lufa-semantic-ui-text-secondary)`,lineHeight:`1.5`},children:`This card uses component tokens for background and border. Watch it adapt to different themes and modes.`})]}),(0,d.jsxs)(`div`,{style:{padding:`20px`,borderRadius:`8px`,backgroundColor:`var(--lufa-component-card-background)`,border:`1px solid var(--lufa-component-card-border)`,boxShadow:`0 2px 4px rgba(0,0,0,0.1)`},children:[(0,d.jsx)(`div`,{style:{fontSize:`16px`,fontWeight:700,color:`var(--lufa-semantic-ui-text-primary)`,marginBottom:`12px`,paddingBottom:`12px`,borderBottom:`1px solid var(--lufa-component-card-header-border)`},children:`Card with Header`}),(0,d.jsx)(`div`,{style:{fontSize:`13px`,color:`var(--lufa-semantic-ui-text-secondary)`,lineHeight:`1.5`},children:`Header borders also use themeable tokens to ensure consistency across themes.`})]})]}),(0,d.jsx)(`div`,{style:{marginTop:`12px`,fontSize:`12px`,color:`var(--lufa-semantic-ui-text-secondary)`,fontStyle:`italic`},children:`Uses: --lufa-component-card-* tokens`})]}),(0,d.jsxs)(`div`,{style:{padding:`20px`,borderRadius:`8px`,backgroundColor:`var(--lufa-primitive-color-blue-100)`,border:`2px solid var(--lufa-primitive-color-blue-500)`},children:[(0,d.jsx)(`div`,{style:{fontSize:`14px`,fontWeight:700,color:`var(--lufa-primitive-color-blue-600)`,marginBottom:`12px`},children:`🎯 Key Takeaway`}),(0,d.jsx)(`div`,{style:{fontSize:`13px`,color:`var(--lufa-primitive-color-blue-600)`,lineHeight:`1.6`},children:`By using themeable tokens in component implementations, we get automatic theming and mode support without writing any theme-specific code. The token architecture handles all the complexity, letting designers change themes and developers write components once.`})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <StoryContainer title="Theme Architecture Overview">
      {/* Architecture Diagram */}
      <div style={{
      marginBottom: '48px',
      padding: '32px',
      borderRadius: '12px',
      backgroundColor: 'var(--lufa-semantic-ui-background-surface-default)',
      border: '2px solid var(--lufa-semantic-ui-border-default)'
    }}>
        <h2 style={{
        fontSize: '24px',
        fontWeight: 700,
        marginBottom: '24px',
        color: 'var(--lufa-semantic-ui-text-primary)'
      }}>
          Token Architecture Hierarchy
        </h2>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          {/* Component Layer */}
          <div style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: 'var(--lufa-primitive-color-green-100)',
          border: '2px solid var(--lufa-primitive-color-green-600)'
        }}>
            <div style={{
            flex: 1
          }}>
              <div style={{
              fontSize: '16px',
              fontWeight: 700,
              color: 'var(--lufa-primitive-color-green-600)',
              marginBottom: '8px'
            }}>
                3️⃣ Component Tokens
              </div>
              <div style={{
              fontSize: '13px',
              color: 'var(--lufa-primitive-color-green-600)',
              lineHeight: '1.5'
            }}>
                Component-specific tokens. Example:{' '}
                <code>--lufa-component-button-type-solid-variant-primary-background-default</code>
                <br />
                <strong>Themeable:</strong> ✅ Yes | <strong>Mode-Aware:</strong> ✅ Yes
              </div>
            </div>
            <div style={{
            fontSize: '24px'
          }}>🎨</div>
          </div>

          <div style={{
          textAlign: 'center',
          fontSize: '24px',
          color: 'var(--lufa-semantic-ui-text-tertiary)'
        }}>↓</div>

          {/* Semantic Layer */}
          <div style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: 'var(--lufa-primitive-color-blue-100)',
          border: '2px solid var(--lufa-primitive-color-blue-500)'
        }}>
            <div style={{
            flex: 1
          }}>
              <div style={{
              fontSize: '16px',
              fontWeight: 700,
              color: 'var(--lufa-primitive-color-blue-600)',
              marginBottom: '8px'
            }}>
                2️⃣ Semantic Tokens
              </div>
              <div style={{
              fontSize: '13px',
              color: 'var(--lufa-primitive-color-blue-600)',
              lineHeight: '1.5'
            }}>
                Purpose-driven tokens. Example: <code>--lufa-semantic-ui-background-page</code>
                <br />
                <strong>Themeable:</strong> ✅ Yes | <strong>Mode-Aware:</strong> ✅ Yes
              </div>
            </div>
            <div style={{
            fontSize: '24px'
          }}>💡</div>
          </div>

          <div style={{
          textAlign: 'center',
          fontSize: '24px',
          color: 'var(--lufa-semantic-ui-text-tertiary)'
        }}>↓</div>

          {/* Primitive Layer */}
          <div style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: 'var(--lufa-primitive-color-purple-100)',
          border: '2px solid var(--lufa-primitive-color-purple-500)'
        }}>
            <div style={{
            flex: 1
          }}>
              <div style={{
              fontSize: '16px',
              fontWeight: 700,
              color: 'var(--lufa-primitive-color-purple-500)',
              marginBottom: '8px'
            }}>
                1️⃣ Primitive Tokens
              </div>
              <div style={{
              fontSize: '13px',
              color: 'var(--lufa-primitive-color-purple-500)',
              lineHeight: '1.5'
            }}>
                Raw immutable values. Example: <code>--lufa-primitive-color-blue-500</code>
                <br />
                <strong>Themeable:</strong> ❌ No | <strong>Mode-Aware:</strong> ❌ No | <strong>Immutable:</strong> ✅
                Always
              </div>
            </div>
            <div style={{
            fontSize: '24px'
          }}>🔒</div>
          </div>
        </div>
      </div>

      {/* Testing Guide */}
      <div style={{
      padding: '24px',
      borderRadius: '8px',
      backgroundColor: 'var(--lufa-semantic-ui-background-info)',
      border: '1px solid var(--lufa-semantic-ui-border-info)',
      marginBottom: '32px'
    }}>
        <h3 style={{
        fontSize: '18px',
        fontWeight: 700,
        color: 'var(--lufa-semantic-ui-text-info)',
        marginBottom: '16px'
      }}>
          📋 How to Test Themability
        </h3>
        <ol style={{
        fontSize: '13px',
        color: 'var(--lufa-semantic-ui-text-info)',
        lineHeight: '1.6',
        margin: 0,
        paddingLeft: '20px'
      }}>
          <li>
            <strong>Switch Themes:</strong> Use the Theme toolbar (🎨 paintbrush icon) → Try Default, Ocean 🌊, Forest
            🌲
          </li>
          <li>
            <strong>Switch Modes:</strong> Use the Mode toolbar (◐ contrast icon) → Try Light ☀️, Dark 🌙, High Contrast
            ◐
          </li>
          <li>
            <strong>Observe Changes:</strong>
            <ul style={{
            marginTop: '8px',
            paddingLeft: '20px'
          }}>
              <li>Semantic tokens (blue badges) should change values</li>
              <li>Component tokens (green badges) should change values</li>
              <li>Primitive tokens (purple badges) should NEVER change</li>
            </ul>
          </li>
          <li>
            <strong>Navigate Stories:</strong> Explore each story below to see different aspects of themability
          </li>
        </ol>
      </div>

      {/* Key Concepts */}
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px'
    }}>
        <div style={{
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: 'var(--lufa-semantic-ui-background-success)',
        border: '1px solid var(--lufa-semantic-ui-border-success)'
      }}>
          <div style={{
          fontSize: '16px',
          fontWeight: 700,
          color: 'var(--lufa-semantic-ui-text-success)',
          marginBottom: '12px'
        }}>
            ✅ Themeable Tokens
          </div>
          <div style={{
          fontSize: '12px',
          color: 'var(--lufa-semantic-ui-text-success)',
          lineHeight: '1.5'
        }}>
            Semantic and Component tokens that adapt to theme and mode changes. These provide flexibility and
            accessibility. Use these for most UI elements.
          </div>
        </div>

        <div style={{
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: 'var(--lufa-primitive-color-gray-100)',
        border: '1px solid var(--lufa-primitive-color-gray-300)'
      }}>
          <div style={{
          fontSize: '16px',
          fontWeight: 700,
          color: 'var(--lufa-primitive-color-gray-700)',
          marginBottom: '12px'
        }}>
            🔒 Immutable Tokens
          </div>
          <div style={{
          fontSize: '12px',
          color: 'var(--lufa-primitive-color-gray-700)',
          lineHeight: '1.5'
        }}>
            Primitive tokens that never change. These provide stability and consistency across all themes and modes. Use
            for fixed brand colors or special cases.
          </div>
        </div>

        <div style={{
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: 'var(--lufa-semantic-ui-background-warning)',
        border: '1px solid var(--lufa-semantic-ui-border-warning)'
      }}>
          <div style={{
          fontSize: '16px',
          fontWeight: 700,
          color: 'var(--lufa-semantic-ui-text-warning)',
          marginBottom: '12px'
        }}>
            💡 Mode-Aware Tokens
          </div>
          <div style={{
          fontSize: '12px',
          color: 'var(--lufa-semantic-ui-text-warning)',
          lineHeight: '1.5'
        }}>
            Tokens that adapt to accessibility modes (light/dark/high-contrast). These ensure your UI works in all
            visibility conditions.
          </div>
        </div>
      </div>
    </StoryContainer>
}`,...p.parameters?.docs?.source},description:{story:`## Overview

Visual guide to our token architecture hierarchy and testing workflow.

This page provides a comprehensive overview of how tokens flow through
the three-layer system and how to test themability.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <StoryContainer title="Themeable vs Non-Themeable Tokens">
      <div style={{
      padding: '16px',
      borderRadius: '8px',
      backgroundColor: 'var(--lufa-semantic-ui-background-warning)',
      border: '1px solid var(--lufa-semantic-ui-border-warning)',
      marginBottom: '32px'
    }}>
        <div style={{
        fontSize: '14px',
        fontWeight: 600,
        color: 'var(--lufa-semantic-ui-text-warning)',
        marginBottom: '8px'
      }}>
          🧪 Interactive Test
        </div>
        <div style={{
        fontSize: '13px',
        color: 'var(--lufa-semantic-ui-text-warning)',
        lineHeight: '1.5'
      }}>
          Switch themes and modes using the Storybook toolbar. Watch the <strong>left column</strong> change while the{' '}
          <strong>right column</strong> remains constant.
        </div>
      </div>

      <TokenComparison title="Primary Color Comparison" description="Brand primary color: themeable semantic vs immutable primitive" themeableToken={{
      name: 'Brand Primary',
      cssVariable: '--lufa-core-color-brand-primary-default',
      description: 'Themeable brand color that changes with theme'
    }} nonThemeableToken={{
      name: 'Blue 500',
      cssVariable: '--lufa-primitive-color-blue-500',
      description: 'Immutable primitive that never changes'
    }} />

      <TokenComparison title="Background Comparison" description="Page background: mode-aware semantic vs fixed primitive" themeableToken={{
      name: 'Background Page',
      cssVariable: '--lufa-semantic-ui-background-page',
      description: 'Adapts to light/dark/high-contrast modes'
    }} nonThemeableToken={{
      name: 'Gray 50',
      cssVariable: '--lufa-primitive-color-gray-50',
      description: 'Always the same light gray value'
    }} />

      <TokenComparison title="Success Color Comparison" description="Success semantic vs green primitive" themeableToken={{
      name: 'Success Color',
      cssVariable: '--lufa-semantic-ui-text-success',
      description: 'Mode-aware success color for feedback'
    }} nonThemeableToken={{
      name: 'Green 600',
      cssVariable: '--lufa-primitive-color-green-600',
      description: 'Fixed green shade'
    }} />
    </StoryContainer>
}`,...m.parameters?.docs?.source},description:{story:`## Themeable vs Non-Themeable

Side-by-side comparison of themeable semantic tokens vs immutable primitive tokens.

**Test Instructions:**
1. Switch between themes (Default/Ocean/Forest) using the toolbar
2. Notice how the LEFT column changes but the RIGHT column stays the same
3. Try switching modes (Light/Dark/High-Contrast) too`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <StoryContainer title="Mode-Aware Tokens">
      <TokenMatrix title="Mode-Aware Semantic Tokens" description="These tokens automatically adapt to the selected mode (light/dark/high-contrast)" showModeInfo tokens={[{
      name: 'Page Background',
      cssVariable: '--lufa-semantic-ui-background-page',
      level: 'semantic',
      themeable: true,
      modeAware: true,
      description: 'Main page background'
    }, {
      name: 'Surface Background',
      cssVariable: '--lufa-semantic-ui-background-surface-default',
      level: 'semantic',
      themeable: true,
      modeAware: true,
      description: 'Cards and panels'
    }, {
      name: 'Primary Text',
      cssVariable: '--lufa-semantic-ui-text-primary',
      level: 'semantic',
      themeable: true,
      modeAware: true,
      description: 'Main text color'
    }, {
      name: 'Secondary Text',
      cssVariable: '--lufa-semantic-ui-text-secondary',
      level: 'semantic',
      themeable: true,
      modeAware: true,
      description: 'Supporting text'
    }, {
      name: 'Border Default',
      cssVariable: '--lufa-semantic-ui-border-default',
      level: 'semantic',
      themeable: true,
      modeAware: true,
      description: 'Default borders'
    }, {
      name: 'Border Strong',
      cssVariable: '--lufa-semantic-ui-border-strong',
      level: 'semantic',
      themeable: true,
      modeAware: true,
      description: 'Emphasized borders'
    }]} />

      <div style={{
      height: '40px'
    }} />

      <TokenMatrix title="Static Primitive Tokens" description="These primitive tokens remain constant regardless of mode" tokens={[{
      name: 'Gray 50',
      cssVariable: '--lufa-primitive-color-gray-50',
      level: 'primitive',
      themeable: false,
      modeAware: false
    }, {
      name: 'Gray 100',
      cssVariable: '--lufa-primitive-color-gray-100',
      level: 'primitive',
      themeable: false,
      modeAware: false
    }, {
      name: 'Gray 900',
      cssVariable: '--lufa-primitive-color-gray-900',
      level: 'primitive',
      themeable: false,
      modeAware: false
    }, {
      name: 'Blue 500',
      cssVariable: '--lufa-primitive-color-blue-500',
      level: 'primitive',
      themeable: false,
      modeAware: false
    }, {
      name: 'Blue 600',
      cssVariable: '--lufa-primitive-color-blue-600',
      level: 'primitive',
      themeable: false,
      modeAware: false
    }, {
      name: 'Green 600',
      cssVariable: '--lufa-primitive-color-green-600',
      level: 'primitive',
      themeable: false,
      modeAware: false
    }]} />
    </StoryContainer>
}`,...h.parameters?.docs?.source},description:{story:`## Mode-Aware Tokens

Demonstrates tokens that adapt to light/dark/high-contrast modes.

**Test Instructions:**
1. Use the Mode toolbar: ☀️ Light / 🌙 Dark / ◐ High Contrast
2. Watch the top matrix (mode-aware) change with each mode
3. Notice the bottom matrix (primitives) never changes`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <StoryContainer title="Primitive Token Immutability">
      <div style={{
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: 'var(--lufa-primitive-color-purple-100)',
      border: '2px solid var(--lufa-primitive-color-purple-500)',
      marginBottom: '32px'
    }}>
        <div style={{
        fontSize: '16px',
        fontWeight: 700,
        color: 'var(--lufa-primitive-color-purple-500)',
        marginBottom: '12px'
      }}>
          🔒 Immutability Guarantee
        </div>
        <div style={{
        fontSize: '13px',
        color: 'var(--lufa-primitive-color-purple-500)',
        lineHeight: '1.6'
      }}>
          Primitive tokens are the foundation of our design system. They provide stable, unchanging values that higher
          layers can reference. No matter what theme or mode you select, these tokens will <strong>always</strong>{' '}
          return the same computed value.
        </div>
      </div>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px'
    }}>
        <TokenCard tokenName="Blue 500" cssVariable="--lufa-primitive-color-blue-500" level="primitive" themeable={false} modeAware={false} description="Primary brand blue, always constant" category="color" showValue />

        <TokenCard tokenName="Blue 600" cssVariable="--lufa-primitive-color-blue-600" level="primitive" themeable={false} modeAware={false} description="Darker blue shade, immutable" category="color" showValue />

        <TokenCard tokenName="Gray 50" cssVariable="--lufa-primitive-color-gray-50" level="primitive" themeable={false} modeAware={false} description="Lightest gray, never changes" category="color" showValue />

        <TokenCard tokenName="Gray 900" cssVariable="--lufa-primitive-color-gray-900" level="primitive" themeable={false} modeAware={false} description="Darkest gray, constant" category="color" showValue />

        <TokenCard tokenName="Green 600" cssVariable="--lufa-primitive-color-green-600" level="primitive" themeable={false} modeAware={false} description="Success green, immutable" category="color" showValue />

        <TokenCard tokenName="Red 500" cssVariable="--lufa-primitive-color-red-500" level="primitive" themeable={false} modeAware={false} description="Error red, always the same" category="color" showValue />
      </div>

      <div style={{
      marginTop: '32px',
      padding: '16px',
      borderRadius: '6px',
      backgroundColor: 'var(--lufa-semantic-ui-background-info)',
      border: '1px solid var(--lufa-semantic-ui-border-info)'
    }}>
        <div style={{
        fontSize: '12px',
        color: 'var(--lufa-semantic-ui-text-info)',
        lineHeight: '1.5'
      }}>
          <strong>Why Immutability Matters:</strong> Having stable primitive tokens ensures that when you use a specific
          color (like blue-500), it's predictable across your entire application. Higher-level tokens can reference
          these primitives and add themability on top.
        </div>
      </div>
    </StoryContainer>
}`,...g.parameters?.docs?.source},description:{story:`## Primitive Immutability

Proves that primitive tokens never change across themes or modes.

**Test Instructions:**
1. Try ALL theme combinations (Default/Ocean/Forest)
2. Try ALL mode combinations (Light/Dark/High-Contrast)
3. Notice these tokens NEVER change their computed values`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <StoryContainer title="Token Reference Chains">
      <div style={{
      padding: '16px',
      borderRadius: '8px',
      backgroundColor: 'var(--lufa-semantic-ui-background-info)',
      border: '1px solid var(--lufa-semantic-ui-border-info)',
      marginBottom: '32px'
    }}>
        <div style={{
        fontSize: '13px',
        color: 'var(--lufa-semantic-ui-text-info)',
        lineHeight: '1.5'
      }}>
          These chains show how tokens flow through the architecture. Read from left to right: Component → Semantic →
          Primitive. When you change themes/modes, watch how the semantic layer acts as a translator between immutable
          primitives and flexible components.
        </div>
      </div>

      <TokenReferenceChain title="Button Primary Background Chain" description="How the primary button gets its background color" chain={[{
      name: 'Button Primary BG',
      cssVariable: '--lufa-component-button-type-solid-variant-primary-background-default',
      level: 'component',
      description: 'Component token for button'
    }, {
      name: 'Brand Primary',
      cssVariable: '--lufa-core-color-brand-primary-default',
      level: 'semantic',
      description: 'Semantic brand color'
    }, {
      name: 'Blue 500',
      cssVariable: '--lufa-primitive-color-blue-500',
      level: 'primitive',
      description: 'Base primitive value'
    }]} />

      <TokenReferenceChain title="Badge Success Background Chain" description="How success badges get their background color" chain={[{
      name: 'Badge Success BG',
      cssVariable: '--lufa-component-badge-variant-success-background',
      level: 'component',
      description: 'Badge component token'
    }, {
      name: 'Success Background',
      cssVariable: '--lufa-semantic-ui-background-success',
      level: 'semantic',
      description: 'Semantic success color'
    }, {
      name: 'Green 100',
      cssVariable: '--lufa-primitive-color-green-100',
      level: 'primitive',
      description: 'Light green primitive'
    }]} />

      <TokenReferenceChain title="Card Border Chain" description="How card borders reference the design system" chain={[{
      name: 'Card Border',
      cssVariable: '--lufa-component-card-border',
      level: 'component',
      description: 'Card-specific border'
    }, {
      name: 'Border Default',
      cssVariable: '--lufa-semantic-ui-border-default',
      level: 'semantic',
      description: 'Semantic default border'
    }, {
      name: 'Gray 300',
      cssVariable: '--lufa-primitive-color-gray-300',
      level: 'primitive',
      description: 'Base gray primitive'
    }]} />

      <div style={{
      marginTop: '32px',
      padding: '16px',
      borderRadius: '6px',
      backgroundColor: 'var(--lufa-semantic-ui-background-success)',
      border: '1px solid var(--lufa-semantic-ui-border-success)'
    }}>
        <div style={{
        fontSize: '12px',
        color: 'var(--lufa-semantic-ui-text-success)',
        lineHeight: '1.5'
      }}>
          <strong>💡 Pro Tip:</strong> By chaining tokens this way, we can change the semantic layer's mapping without
          touching component code. For example, in dark mode, "Border Default" might reference gray-700 instead of
          gray-300, and all components automatically adapt.
        </div>
      </div>
    </StoryContainer>
}`,..._.parameters?.docs?.source},description:{story:`## Token Reference Chains

Visualizes how tokens reference each other through the architecture layers.

**Test Instructions:**
1. See how component tokens reference semantic tokens
2. See how semantic tokens reference primitive tokens
3. Switch themes/modes to see which levels change`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <StoryContainer title="Component Examples with Themeable Tokens">
      <div style={{
      padding: '16px',
      borderRadius: '8px',
      backgroundColor: 'var(--lufa-semantic-ui-background-success)',
      border: '1px solid var(--lufa-semantic-ui-border-success)',
      marginBottom: '32px'
    }}>
        <div style={{
        fontSize: '14px',
        fontWeight: 600,
        color: 'var(--lufa-semantic-ui-text-success)',
        marginBottom: '8px'
      }}>
          🎨 Live Component Theming
        </div>
        <div style={{
        fontSize: '13px',
        color: 'var(--lufa-semantic-ui-text-success)',
        lineHeight: '1.5'
      }}>
          These real components use themeable tokens. Switch themes and modes to see them adapt in real-time without any
          code changes.
        </div>
      </div>

      {/* Buttons Section */}
      <div style={{
      marginBottom: '40px'
    }}>
        <h3 style={{
        fontSize: '18px',
        fontWeight: 700,
        color: 'var(--lufa-semantic-ui-text-primary)',
        marginBottom: '16px'
      }}>
          Button Components
        </h3>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        padding: '24px',
        borderRadius: '8px',
        backgroundColor: 'var(--lufa-semantic-ui-background-surface-default)',
        border: '1px solid var(--lufa-semantic-ui-border-default)'
      }}>
          <Button type="solid" variant="primary">
            Primary Button
          </Button>
          <Button type="solid" variant="secondary">
            Secondary Button
          </Button>
          <Button type="solid" variant="success">
            Success Button
          </Button>
          <Button type="solid" variant="danger">
            Danger Button
          </Button>
          <Button type="outline" variant="primary">
            Outline Button
          </Button>
          <Button type="ghost" variant="primary">
            Ghost Button
          </Button>
        </div>
        <div style={{
        marginTop: '12px',
        fontSize: '12px',
        color: 'var(--lufa-semantic-ui-text-secondary)',
        fontStyle: 'italic'
      }}>
          Uses: --lufa-component-button-* tokens
        </div>
      </div>

      {/* Badges Section */}
      <div style={{
      marginBottom: '40px'
    }}>
        <h3 style={{
        fontSize: '18px',
        fontWeight: 700,
        color: 'var(--lufa-semantic-ui-text-primary)',
        marginBottom: '16px'
      }}>
          Badge Components
        </h3>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        padding: '24px',
        borderRadius: '8px',
        backgroundColor: 'var(--lufa-semantic-ui-background-surface-default)',
        border: '1px solid var(--lufa-semantic-ui-border-default)',
        alignItems: 'center'
      }}>
          <span style={{
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '13px',
          fontWeight: 600,
          backgroundColor: 'var(--lufa-component-badge-variant-default-background)',
          color: 'var(--lufa-component-badge-variant-default-text)'
        }}>
            Default
          </span>
          <span style={{
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '13px',
          fontWeight: 600,
          backgroundColor: 'var(--lufa-component-badge-variant-success-background)',
          color: 'var(--lufa-component-badge-variant-success-text)'
        }}>
            Success
          </span>
          <span style={{
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '13px',
          fontWeight: 600,
          backgroundColor: 'var(--lufa-component-badge-variant-error-background)',
          color: 'var(--lufa-component-badge-variant-error-text)'
        }}>
            Error
          </span>
          <span style={{
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '13px',
          fontWeight: 600,
          backgroundColor: 'var(--lufa-component-badge-variant-warning-background)',
          color: 'var(--lufa-component-badge-variant-warning-text)'
        }}>
            Warning
          </span>
          <span style={{
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '13px',
          fontWeight: 600,
          backgroundColor: 'var(--lufa-component-badge-variant-info-background)',
          color: 'var(--lufa-component-badge-variant-info-text)'
        }}>
            Info
          </span>
        </div>
        <div style={{
        marginTop: '12px',
        fontSize: '12px',
        color: 'var(--lufa-semantic-ui-text-secondary)',
        fontStyle: 'italic'
      }}>
          Uses: --lufa-component-badge-* tokens
        </div>
      </div>

      {/* Card Section */}
      <div style={{
      marginBottom: '40px'
    }}>
        <h3 style={{
        fontSize: '18px',
        fontWeight: 700,
        color: 'var(--lufa-semantic-ui-text-primary)',
        marginBottom: '16px'
      }}>
          Card Components
        </h3>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
          <div style={{
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: 'var(--lufa-component-card-background)',
          border: '1px solid var(--lufa-component-card-border)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <div style={{
            fontSize: '16px',
            fontWeight: 700,
            color: 'var(--lufa-semantic-ui-text-primary)',
            marginBottom: '8px'
          }}>
              Themeable Card
            </div>
            <div style={{
            fontSize: '13px',
            color: 'var(--lufa-semantic-ui-text-secondary)',
            lineHeight: '1.5'
          }}>
              This card uses component tokens for background and border. Watch it adapt to different themes and modes.
            </div>
          </div>

          <div style={{
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: 'var(--lufa-component-card-background)',
          border: '1px solid var(--lufa-component-card-border)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <div style={{
            fontSize: '16px',
            fontWeight: 700,
            color: 'var(--lufa-semantic-ui-text-primary)',
            marginBottom: '12px',
            paddingBottom: '12px',
            borderBottom: '1px solid var(--lufa-component-card-header-border)'
          }}>
              Card with Header
            </div>
            <div style={{
            fontSize: '13px',
            color: 'var(--lufa-semantic-ui-text-secondary)',
            lineHeight: '1.5'
          }}>
              Header borders also use themeable tokens to ensure consistency across themes.
            </div>
          </div>
        </div>
        <div style={{
        marginTop: '12px',
        fontSize: '12px',
        color: 'var(--lufa-semantic-ui-text-secondary)',
        fontStyle: 'italic'
      }}>
          Uses: --lufa-component-card-* tokens
        </div>
      </div>

      {/* Summary */}
      <div style={{
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: 'var(--lufa-primitive-color-blue-100)',
      border: '2px solid var(--lufa-primitive-color-blue-500)'
    }}>
        <div style={{
        fontSize: '14px',
        fontWeight: 700,
        color: 'var(--lufa-primitive-color-blue-600)',
        marginBottom: '12px'
      }}>
          🎯 Key Takeaway
        </div>
        <div style={{
        fontSize: '13px',
        color: 'var(--lufa-primitive-color-blue-600)',
        lineHeight: '1.6'
      }}>
          By using themeable tokens in component implementations, we get automatic theming and mode support without
          writing any theme-specific code. The token architecture handles all the complexity, letting designers change
          themes and developers write components once.
        </div>
      </div>
    </StoryContainer>
}`,...v.parameters?.docs?.source},description:{story:`## Component Examples

Real components using themeable tokens to demonstrate practical themability.

**Test Instructions:**
1. Switch themes (Default/Ocean/Forest) - see buttons and badges change
2. Switch modes (Light/Dark/High-Contrast) - see backgrounds adapt
3. Notice how components automatically respond to token changes`,...v.parameters?.docs?.description}}},y=[`Overview`,`ThemeableVsNonThemeable`,`ModeAwareTokens`,`PrimitiveImmutability`,`TokenReferenceChains`,`ComponentExamples`]}))();export{v as ComponentExamples,h as ModeAwareTokens,p as Overview,g as PrimitiveImmutability,m as ThemeableVsNonThemeable,_ as TokenReferenceChains,y as __namedExportsOrder,f as default};