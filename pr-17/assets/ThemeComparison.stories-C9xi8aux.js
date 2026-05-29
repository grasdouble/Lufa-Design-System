import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n,w as r}from"./iframe-Bm_r3Ygs.js";import{S as i,a}from"./lufa-ui-B9ODeQns.js";import{b as o,t as s}from"./helpers-D9bnZ3qZ.js";var c,l,u,d,f;e((()=>{c=t(r(),1),i(),s(),l=n(),u={title:`1. Architecture/Theme Testing`,parameters:{layout:`fullscreen`,docs:{description:{component:`Interactive theme demonstration. Use the toolbar to switch between Default, Ocean, and Forest themes.`}}}},d={render:()=>{let e=({label:e,cssVariable:t})=>{let[n,r]=c.useState(``);return c.useEffect(()=>{r(getComputedStyle(document.documentElement).getPropertyValue(t).trim())},[t]),(0,l.jsxs)(`div`,{style:{flex:1,minWidth:`140px`},children:[(0,l.jsx)(`div`,{style:{height:`80px`,backgroundColor:`var(${t})`,borderRadius:`8px`,border:`1px solid var(--lufa-semantic-ui-border-default)`,marginBottom:`8px`}}),(0,l.jsx)(`div`,{style:{fontSize:`13px`,fontWeight:600,color:`var(--lufa-semantic-ui-text-primary)`,marginBottom:`4px`},children:e}),(0,l.jsx)(`code`,{style:{fontSize:`11px`,color:`var(--lufa-semantic-ui-text-secondary)`,display:`block`},children:n||t})]})};return(0,l.jsxs)(o,{title:`Theme Testing`,children:[(0,l.jsxs)(`div`,{style:{padding:`20px`,marginBottom:`32px`,backgroundColor:`var(--lufa-semantic-ui-background-info)`,border:`1px solid var(--lufa-semantic-ui-border-info)`,borderRadius:`8px`},children:[(0,l.jsx)(`div`,{style:{fontSize:`16px`,fontWeight:700,color:`var(--lufa-semantic-ui-text-info)`,marginBottom:`8px`},children:`🎨 Use the Theme Toolbar to Switch Themes`}),(0,l.jsxs)(`div`,{style:{fontSize:`14px`,color:`var(--lufa-semantic-ui-text-info)`,lineHeight:`1.5`},children:[`Click the `,(0,l.jsx)(`strong`,{children:`Theme toolbar button`}),` (🎨 paintbrush icon) at the top of the page. Select Default, Ocean 🌊, or Forest 🌲 to see the components below update instantly.`]})]}),(0,l.jsxs)(`div`,{style:{maxWidth:`900px`,margin:`0 auto`},children:[(0,l.jsxs)(`section`,{style:{marginBottom:`48px`},children:[(0,l.jsx)(`h3`,{style:{fontSize:`18px`,fontWeight:700,color:`var(--lufa-semantic-ui-text-primary)`,marginBottom:`16px`},children:`Brand Colors (Change with Theme)`}),(0,l.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,flexWrap:`wrap`},children:[(0,l.jsx)(e,{label:`Primary`,cssVariable:`--lufa-core-color-brand-primary-default`}),(0,l.jsx)(e,{label:`Secondary`,cssVariable:`--lufa-core-color-brand-secondary-default`})]})]}),(0,l.jsxs)(`section`,{style:{marginBottom:`48px`},children:[(0,l.jsx)(`h3`,{style:{fontSize:`18px`,fontWeight:700,color:`var(--lufa-semantic-ui-text-primary)`,marginBottom:`8px`},children:`Buttons (Change with Theme)`}),(0,l.jsx)(`p`,{style:{fontSize:`13px`,color:`var(--lufa-semantic-ui-text-secondary)`,marginBottom:`16px`},children:`These buttons automatically use the active theme's brand colors`}),(0,l.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`},children:[(0,l.jsx)(a,{type:`solid`,variant:`primary`,size:`md`,children:`Primary Button`}),(0,l.jsx)(a,{type:`solid`,variant:`secondary`,size:`md`,children:`Secondary Button`}),(0,l.jsx)(a,{type:`outline`,variant:`primary`,size:`md`,children:`Outline Button`}),(0,l.jsx)(a,{type:`ghost`,variant:`primary`,size:`md`,children:`Ghost Button`})]})]}),(0,l.jsxs)(`section`,{style:{marginBottom:`48px`},children:[(0,l.jsx)(`h3`,{style:{fontSize:`18px`,fontWeight:700,color:`var(--lufa-semantic-ui-text-primary)`,marginBottom:`8px`},children:`Links (Change with Theme)`}),(0,l.jsx)(`p`,{style:{fontSize:`13px`,color:`var(--lufa-semantic-ui-text-secondary)`,marginBottom:`16px`},children:`Links use the primary brand color`}),(0,l.jsx)(`a`,{href:`#`,style:{color:`var(--lufa-core-color-brand-primary-default)`,textDecoration:`underline`,fontSize:`14px`,fontWeight:500},onClick:e=>e.preventDefault(),children:`Example themed link - click to see hover state`})]}),(0,l.jsxs)(`section`,{style:{marginBottom:`48px`},children:[(0,l.jsx)(`h3`,{style:{fontSize:`18px`,fontWeight:700,color:`var(--lufa-semantic-ui-text-primary)`,marginBottom:`8px`},children:`Card with Brand Accent (Changes with Theme)`}),(0,l.jsx)(`p`,{style:{fontSize:`13px`,color:`var(--lufa-semantic-ui-text-secondary)`,marginBottom:`16px`},children:`Cards can use brand colors for accents and highlights`}),(0,l.jsxs)(`div`,{style:{padding:`20px`,backgroundColor:`var(--lufa-component-card-background)`,border:`1px solid var(--lufa-component-card-border)`,borderRadius:`8px`,borderLeft:`4px solid var(--lufa-core-color-brand-primary-default)`},children:[(0,l.jsx)(`div`,{style:{fontSize:`16px`,fontWeight:600,color:`var(--lufa-semantic-ui-text-primary)`,marginBottom:`8px`},children:`Themed Card Example`}),(0,l.jsx)(`div`,{style:{fontSize:`14px`,color:`var(--lufa-semantic-ui-text-secondary)`,marginBottom:`16px`},children:`This card has a brand-colored accent border on the left that updates with the active theme.`}),(0,l.jsx)(a,{type:`solid`,variant:`primary`,size:`sm`,children:`Card Action`})]})]}),(0,l.jsxs)(`section`,{style:{marginBottom:`48px`},children:[(0,l.jsx)(`h3`,{style:{fontSize:`18px`,fontWeight:700,color:`var(--lufa-semantic-ui-text-primary)`,marginBottom:`8px`},children:`Semantic Colors (Do NOT Change)`}),(0,l.jsx)(`p`,{style:{fontSize:`13px`,color:`var(--lufa-semantic-ui-text-secondary)`,marginBottom:`16px`},children:`These colors stay the same across all themes to maintain consistent meaning`}),(0,l.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,l.jsx)(`span`,{style:{padding:`6px 14px`,borderRadius:`12px`,fontSize:`13px`,fontWeight:600,backgroundColor:`var(--lufa-component-badge-variant-success-background)`,color:`var(--lufa-component-badge-variant-success-text)`},children:`Success (Always Green)`}),(0,l.jsx)(`span`,{style:{padding:`6px 14px`,borderRadius:`12px`,fontSize:`13px`,fontWeight:600,backgroundColor:`var(--lufa-component-badge-variant-error-background)`,color:`var(--lufa-component-badge-variant-error-text)`},children:`Error (Always Red)`}),(0,l.jsx)(`span`,{style:{padding:`6px 14px`,borderRadius:`12px`,fontSize:`13px`,fontWeight:600,backgroundColor:`var(--lufa-component-badge-variant-warning-background)`,color:`var(--lufa-component-badge-variant-warning-text)`},children:`Warning (Always Yellow)`}),(0,l.jsx)(`span`,{style:{padding:`6px 14px`,borderRadius:`12px`,fontSize:`13px`,fontWeight:600,backgroundColor:`var(--lufa-component-badge-variant-info-background)`,color:`var(--lufa-component-badge-variant-info-text)`},children:`Info (Always Blue)`})]})]}),(0,l.jsxs)(`div`,{style:{padding:`20px`,backgroundColor:`var(--lufa-semantic-ui-background-success)`,border:`1px solid var(--lufa-semantic-ui-border-success)`,borderRadius:`8px`},children:[(0,l.jsx)(`div`,{style:{fontSize:`14px`,fontWeight:700,color:`var(--lufa-semantic-ui-text-success)`,marginBottom:`12px`},children:`✅ How Theming Works`}),(0,l.jsxs)(`ul`,{style:{fontSize:`13px`,color:`var(--lufa-semantic-ui-text-success)`,lineHeight:`1.6`,margin:0,paddingLeft:`20px`},children:[(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`strong`,{children:`Default Theme:`}),` Blue (#2563eb) primary, Purple (#a855f7) secondary`]}),(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`strong`,{children:`Ocean Theme:`}),` Cyan (#0891b2) primary, Teal (#14b8a6) secondary`]}),(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`strong`,{children:`Forest Theme:`}),` Emerald (#059669) primary, Green (#16a34a) secondary`]}),(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`strong`,{children:`Dark Mode:`}),` All themes use brighter shades for better contrast on dark backgrounds`]}),(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`strong`,{children:`Semantic colors`}),` (success/error/warning) stay consistent across all themes`]})]})]})]})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Simple color swatch component
    const ColorSwatch = ({
      label,
      cssVariable
    }: {
      label: string;
      cssVariable: string;
    }) => {
      const [computedColor, setComputedColor] = React.useState('');
      React.useEffect(() => {
        const color = getComputedStyle(document.documentElement).getPropertyValue(cssVariable).trim();
        setComputedColor(color);
      }, [cssVariable]);
      return <div style={{
        flex: 1,
        minWidth: '140px'
      }}>
          <div style={{
          height: '80px',
          backgroundColor: \`var(\${cssVariable})\`,
          borderRadius: '8px',
          border: '1px solid var(--lufa-semantic-ui-border-default)',
          marginBottom: '8px'
        }} />
          <div style={{
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--lufa-semantic-ui-text-primary)',
          marginBottom: '4px'
        }}>
            {label}
          </div>
          <code style={{
          fontSize: '11px',
          color: 'var(--lufa-semantic-ui-text-secondary)',
          display: 'block'
        }}>
            {computedColor || cssVariable}
          </code>
        </div>;
    };
    return <StoryContainer title="Theme Testing">
        {/* Instructions Banner */}
        <div style={{
        padding: '20px',
        marginBottom: '32px',
        backgroundColor: 'var(--lufa-semantic-ui-background-info)',
        border: '1px solid var(--lufa-semantic-ui-border-info)',
        borderRadius: '8px'
      }}>
          <div style={{
          fontSize: '16px',
          fontWeight: 700,
          color: 'var(--lufa-semantic-ui-text-info)',
          marginBottom: '8px'
        }}>
            🎨 Use the Theme Toolbar to Switch Themes
          </div>
          <div style={{
          fontSize: '14px',
          color: 'var(--lufa-semantic-ui-text-info)',
          lineHeight: '1.5'
        }}>
            Click the <strong>Theme toolbar button</strong> (🎨 paintbrush icon) at the top of the page. Select Default,
            Ocean 🌊, or Forest 🌲 to see the components below update instantly.
          </div>
        </div>

        <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
          {/* Brand Colors Section */}
          <section style={{
          marginBottom: '48px'
        }}>
            <h3 style={{
            fontSize: '18px',
            fontWeight: 700,
            color: 'var(--lufa-semantic-ui-text-primary)',
            marginBottom: '16px'
          }}>
              Brand Colors (Change with Theme)
            </h3>
            <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
              <ColorSwatch label="Primary" cssVariable="--lufa-core-color-brand-primary-default" />
              <ColorSwatch label="Secondary" cssVariable="--lufa-core-color-brand-secondary-default" />
            </div>
          </section>

          {/* Buttons Section */}
          <section style={{
          marginBottom: '48px'
        }}>
            <h3 style={{
            fontSize: '18px',
            fontWeight: 700,
            color: 'var(--lufa-semantic-ui-text-primary)',
            marginBottom: '8px'
          }}>
              Buttons (Change with Theme)
            </h3>
            <p style={{
            fontSize: '13px',
            color: 'var(--lufa-semantic-ui-text-secondary)',
            marginBottom: '16px'
          }}>
              These buttons automatically use the active theme's brand colors
            </p>
            <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
              <Button type="solid" variant="primary" size="md">
                Primary Button
              </Button>
              <Button type="solid" variant="secondary" size="md">
                Secondary Button
              </Button>
              <Button type="outline" variant="primary" size="md">
                Outline Button
              </Button>
              <Button type="ghost" variant="primary" size="md">
                Ghost Button
              </Button>
            </div>
          </section>

          {/* Links Section */}
          <section style={{
          marginBottom: '48px'
        }}>
            <h3 style={{
            fontSize: '18px',
            fontWeight: 700,
            color: 'var(--lufa-semantic-ui-text-primary)',
            marginBottom: '8px'
          }}>
              Links (Change with Theme)
            </h3>
            <p style={{
            fontSize: '13px',
            color: 'var(--lufa-semantic-ui-text-secondary)',
            marginBottom: '16px'
          }}>
              Links use the primary brand color
            </p>
            <a href="#" style={{
            color: 'var(--lufa-core-color-brand-primary-default)',
            textDecoration: 'underline',
            fontSize: '14px',
            fontWeight: 500
          }} onClick={e => e.preventDefault()}>
              Example themed link - click to see hover state
            </a>
          </section>

          {/* Card Example */}
          <section style={{
          marginBottom: '48px'
        }}>
            <h3 style={{
            fontSize: '18px',
            fontWeight: 700,
            color: 'var(--lufa-semantic-ui-text-primary)',
            marginBottom: '8px'
          }}>
              Card with Brand Accent (Changes with Theme)
            </h3>
            <p style={{
            fontSize: '13px',
            color: 'var(--lufa-semantic-ui-text-secondary)',
            marginBottom: '16px'
          }}>
              Cards can use brand colors for accents and highlights
            </p>
            <div style={{
            padding: '20px',
            backgroundColor: 'var(--lufa-component-card-background)',
            border: '1px solid var(--lufa-component-card-border)',
            borderRadius: '8px',
            borderLeft: \`4px solid var(--lufa-core-color-brand-primary-default)\`
          }}>
              <div style={{
              fontSize: '16px',
              fontWeight: 600,
              color: 'var(--lufa-semantic-ui-text-primary)',
              marginBottom: '8px'
            }}>
                Themed Card Example
              </div>
              <div style={{
              fontSize: '14px',
              color: 'var(--lufa-semantic-ui-text-secondary)',
              marginBottom: '16px'
            }}>
                This card has a brand-colored accent border on the left that updates with the active theme.
              </div>
              <Button type="solid" variant="primary" size="sm">
                Card Action
              </Button>
            </div>
          </section>

          {/* Semantic Colors Section */}
          <section style={{
          marginBottom: '48px'
        }}>
            <h3 style={{
            fontSize: '18px',
            fontWeight: 700,
            color: 'var(--lufa-semantic-ui-text-primary)',
            marginBottom: '8px'
          }}>
              Semantic Colors (Do NOT Change)
            </h3>
            <p style={{
            fontSize: '13px',
            color: 'var(--lufa-semantic-ui-text-secondary)',
            marginBottom: '16px'
          }}>
              These colors stay the same across all themes to maintain consistent meaning
            </p>
            <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
              <span style={{
              padding: '6px 14px',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: 600,
              backgroundColor: 'var(--lufa-component-badge-variant-success-background)',
              color: 'var(--lufa-component-badge-variant-success-text)'
            }}>
                Success (Always Green)
              </span>
              <span style={{
              padding: '6px 14px',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: 600,
              backgroundColor: 'var(--lufa-component-badge-variant-error-background)',
              color: 'var(--lufa-component-badge-variant-error-text)'
            }}>
                Error (Always Red)
              </span>
              <span style={{
              padding: '6px 14px',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: 600,
              backgroundColor: 'var(--lufa-component-badge-variant-warning-background)',
              color: 'var(--lufa-component-badge-variant-warning-text)'
            }}>
                Warning (Always Yellow)
              </span>
              <span style={{
              padding: '6px 14px',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: 600,
              backgroundColor: 'var(--lufa-component-badge-variant-info-background)',
              color: 'var(--lufa-component-badge-variant-info-text)'
            }}>
                Info (Always Blue)
              </span>
            </div>
          </section>

          {/* Summary Box */}
          <div style={{
          padding: '20px',
          backgroundColor: 'var(--lufa-semantic-ui-background-success)',
          border: '1px solid var(--lufa-semantic-ui-border-success)',
          borderRadius: '8px'
        }}>
            <div style={{
            fontSize: '14px',
            fontWeight: 700,
            color: 'var(--lufa-semantic-ui-text-success)',
            marginBottom: '12px'
          }}>
              ✅ How Theming Works
            </div>
            <ul style={{
            fontSize: '13px',
            color: 'var(--lufa-semantic-ui-text-success)',
            lineHeight: '1.6',
            margin: 0,
            paddingLeft: '20px'
          }}>
              <li>
                <strong>Default Theme:</strong> Blue (#2563eb) primary, Purple (#a855f7) secondary
              </li>
              <li>
                <strong>Ocean Theme:</strong> Cyan (#0891b2) primary, Teal (#14b8a6) secondary
              </li>
              <li>
                <strong>Forest Theme:</strong> Emerald (#059669) primary, Green (#16a34a) secondary
              </li>
              <li>
                <strong>Dark Mode:</strong> All themes use brighter shades for better contrast on dark backgrounds
              </li>
              <li>
                <strong>Semantic colors</strong> (success/error/warning) stay consistent across all themes
              </li>
            </ul>
          </div>
        </div>
      </StoryContainer>;
  }
}`,...d.parameters?.docs?.source},description:{story:`## Theme Showcase

Use the **Theme toolbar** (🎨) to switch between Default, Ocean 🌊, and Forest 🌲 themes.
All components below will update instantly to show the active theme.

**Try this:**
1. Click the Theme toolbar button
2. Select "Ocean 🌊" → observe cyan/teal colors
3. Select "Forest 🌲" → observe emerald/green colors
4. Try Dark mode (◐) → notice colors brighten for visibility`,...d.parameters?.docs?.description}}},f=[`ThemeShowcase`]}))();export{d as ThemeShowcase,f as __namedExportsOrder,u as default};