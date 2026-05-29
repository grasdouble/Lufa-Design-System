import{i as e}from"./preload-helper-xPQekRTU.js";import{t,w as n}from"./iframe-Bm_r3Ygs.js";import{b as r,t as i}from"./helpers-D9bnZ3qZ.js";var a,o,s,c,l,u;e((()=>{n(),i(),a=t(),o={title:`3. Tokens/Alpha`,parameters:{layout:`fullscreen`,docs:{description:{component:`Alpha Tokens

Visual guide for alpha/opacity tokens defined in ADR-004.`}}}},s=({token:e,label:t,base:n})=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,minWidth:`140px`},children:[(0,a.jsx)(`div`,{style:{width:`100%`,height:`80px`,borderRadius:`8px`,background:n,border:`1px solid var(--lufa-semantic-ui-border-default)`,position:`relative`,overflow:`hidden`},children:(0,a.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`var(${e})`}})}),(0,a.jsxs)(`div`,{style:{fontSize:`11px`,fontFamily:`monospace`},children:[(0,a.jsx)(`div`,{style:{fontWeight:600,marginBottom:`2px`},children:t}),(0,a.jsx)(`div`,{style:{fontSize:`10px`,color:`var(--lufa-semantic-ui-text-secondary)`},children:e})]})]}),c=({token:e,label:t})=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,a.jsxs)(`div`,{style:{position:`relative`,borderRadius:`10px`,border:`1px solid var(--lufa-semantic-ui-border-default)`,background:`var(--lufa-semantic-ui-background-surface-default)`,overflow:`hidden`,height:`120px`},children:[(0,a.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(135deg, var(--lufa-semantic-ui-background-surface-default) 0%, var(--lufa-semantic-ui-background-page) 100%)`}}),(0,a.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`var(${e})`}})]}),(0,a.jsxs)(`div`,{style:{fontSize:`11px`,fontFamily:`monospace`},children:[(0,a.jsx)(`div`,{style:{fontWeight:600,marginBottom:`2px`},children:t}),(0,a.jsx)(`div`,{style:{fontSize:`10px`,color:`var(--lufa-semantic-ui-text-secondary)`},children:e})]})]}),l={render:()=>(0,a.jsxs)(r,{title:`Alpha Tokens`,children:[(0,a.jsxs)(`section`,{style:{marginBottom:`40px`},children:[(0,a.jsx)(`h2`,{style:{fontSize:`20px`,marginBottom:`16px`,color:`var(--lufa-semantic-ui-text-primary)`},children:`Primitive Alpha - Black`}),(0,a.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`16px`},children:[4,5,8,12,15,16,38,50,60,80,90,100].map(e=>(0,a.jsx)(s,{token:`--lufa-primitive-color-alpha-black-${e}`,label:`black.${e}`,base:`var(--lufa-semantic-ui-background-surface-default)`},`black-${e}`))})]}),(0,a.jsxs)(`section`,{style:{marginBottom:`40px`},children:[(0,a.jsx)(`h2`,{style:{fontSize:`20px`,marginBottom:`16px`,color:`var(--lufa-semantic-ui-text-primary)`},children:`Primitive Alpha - White`}),(0,a.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`16px`},children:[4,5,8,12,15,16,38,50,60,80,90,100].map(e=>(0,a.jsx)(s,{token:`--lufa-primitive-color-alpha-white-${e}`,label:`white.${e}`,base:`var(--lufa-semantic-ui-background-page)`},`white-${e}`))})]}),(0,a.jsxs)(`section`,{style:{marginBottom:`40px`},children:[(0,a.jsx)(`h2`,{style:{fontSize:`20px`,marginBottom:`16px`,color:`var(--lufa-semantic-ui-text-primary)`},children:`Semantic Overlays`}),(0,a.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:`16px`},children:[(0,a.jsx)(c,{token:`--lufa-semantic-ui-overlay-backdrop`,label:`overlay-backdrop`}),(0,a.jsx)(c,{token:`--lufa-semantic-ui-overlay-hover`,label:`overlay-hover`}),(0,a.jsx)(c,{token:`--lufa-semantic-ui-overlay-pressed`,label:`overlay-pressed`}),(0,a.jsx)(c,{token:`--lufa-semantic-ui-overlay-selected`,label:`overlay-selected`}),(0,a.jsx)(c,{token:`--lufa-semantic-ui-overlay-scrim`,label:`scrim`})]})]}),(0,a.jsxs)(`section`,{style:{marginBottom:`40px`},children:[(0,a.jsx)(`h2`,{style:{fontSize:`20px`,marginBottom:`16px`,color:`var(--lufa-semantic-ui-text-primary)`},children:`Interactive Opacity`}),(0,a.jsxs)(`div`,{style:{padding:`16px`,borderRadius:`10px`,border:`1px solid var(--lufa-semantic-ui-border-default)`,background:`var(--lufa-semantic-ui-background-surface-default)`},children:[(0,a.jsx)(`div`,{style:{marginBottom:`8px`,fontSize:`12px`,color:`var(--lufa-semantic-ui-text-primary)`},children:`Disabled opacity (semantic.interactive.disabled-opacity)`}),(0,a.jsx)(`div`,{style:{display:`inline-block`,padding:`8px 12px`,borderRadius:`6px`,background:`var(--lufa-semantic-ui-background-surface-default)`,border:`1px solid var(--lufa-semantic-ui-border-default)`,opacity:`var(--lufa-semantic-interactive-opacity-disabled)`},children:`Disabled example`})]})]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <StoryContainer title="Alpha Tokens">
      <section style={{
      marginBottom: '40px'
    }}>
        <h2 style={{
        fontSize: '20px',
        marginBottom: '16px',
        color: 'var(--lufa-semantic-ui-text-primary)'
      }}>
          Primitive Alpha - Black
        </h2>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
          {[4, 5, 8, 12, 15, 16, 38, 50, 60, 80, 90, 100].map(value => <AlphaSwatch key={\`black-\${value}\`} token={\`--lufa-primitive-color-alpha-black-\${value}\`} label={\`black.\${value}\`} base="var(--lufa-semantic-ui-background-surface-default)" />)}
        </div>
      </section>

      <section style={{
      marginBottom: '40px'
    }}>
        <h2 style={{
        fontSize: '20px',
        marginBottom: '16px',
        color: 'var(--lufa-semantic-ui-text-primary)'
      }}>
          Primitive Alpha - White
        </h2>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
          {[4, 5, 8, 12, 15, 16, 38, 50, 60, 80, 90, 100].map(value => <AlphaSwatch key={\`white-\${value}\`} token={\`--lufa-primitive-color-alpha-white-\${value}\`} label={\`white.\${value}\`} base="var(--lufa-semantic-ui-background-page)" />)}
        </div>
      </section>

      <section style={{
      marginBottom: '40px'
    }}>
        <h2 style={{
        fontSize: '20px',
        marginBottom: '16px',
        color: 'var(--lufa-semantic-ui-text-primary)'
      }}>
          Semantic Overlays
        </h2>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px'
      }}>
          <OverlayTile token="--lufa-semantic-ui-overlay-backdrop" label="overlay-backdrop" />
          <OverlayTile token="--lufa-semantic-ui-overlay-hover" label="overlay-hover" />
          <OverlayTile token="--lufa-semantic-ui-overlay-pressed" label="overlay-pressed" />
          <OverlayTile token="--lufa-semantic-ui-overlay-selected" label="overlay-selected" />
          <OverlayTile token="--lufa-semantic-ui-overlay-scrim" label="scrim" />
        </div>
      </section>

      <section style={{
      marginBottom: '40px'
    }}>
        <h2 style={{
        fontSize: '20px',
        marginBottom: '16px',
        color: 'var(--lufa-semantic-ui-text-primary)'
      }}>
          Interactive Opacity
        </h2>
        <div style={{
        padding: '16px',
        borderRadius: '10px',
        border: '1px solid var(--lufa-semantic-ui-border-default)',
        background: 'var(--lufa-semantic-ui-background-surface-default)'
      }}>
          <div style={{
          marginBottom: '8px',
          fontSize: '12px',
          color: 'var(--lufa-semantic-ui-text-primary)'
        }}>
            Disabled opacity (semantic.interactive.disabled-opacity)
          </div>
          <div style={{
          display: 'inline-block',
          padding: '8px 12px',
          borderRadius: '6px',
          background: 'var(--lufa-semantic-ui-background-surface-default)',
          border: '1px solid var(--lufa-semantic-ui-border-default)',
          opacity: 'var(--lufa-semantic-interactive-opacity-disabled)'
        }}>
            Disabled example
          </div>
        </div>
      </section>
    </StoryContainer>
}`,...l.parameters?.docs?.source}}},u=[`Overview`]}))();export{l as Overview,u as __namedExportsOrder,o as default};