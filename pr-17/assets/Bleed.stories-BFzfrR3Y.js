import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n,w as r}from"./iframe-Bm_r3Ygs.js";import{S as i,l as a,r as o,y as s}from"./lufa-ui-B9ODeQns.js";import{b as c,g as l,t as u,v as d}from"./helpers-D9bnZ3qZ.js";import{r as f,t as p}from"./storyColors-RAOlxH1p.js";var m,h,g,_,v,y,b,x,S,C;e((()=>{m=t(r(),1),i(),u(),f(),h=n(),g=p.neutral,_={title:`4. Foundation/Bleed`,component:o,parameters:{layout:`fullscreen`,docs:{description:{component:`Bleed - Layout Primitive for Breaking Container Constraints

A specialized layout component that allows content to "bleed" beyond its parent
container's boundaries. Essential for content-focused layouts and marketing pages.

## Features
- ✅ Inline bleed (horizontal): numeric spacing units or "full" for 100vw
- ✅ Block bleed (vertical): numeric spacing units
- ✅ Polymorphic \`as\` prop for semantic HTML
- ✅ CSS-based implementation (no JavaScript calculations)

## When to Use

| Use Case            | Layout Pattern                 | Bleed Necessity | Example                                           |
| ------------------- | ------------------------------ | --------------- | ------------------------------------------------- |
| **Content-focused** | Narrow containers (65ch prose) | 🔴 **HIGH**     | Article with full-width hero images               |
| **Marketing**       | Constrained sections + accents | 🟠 **MEDIUM**   | Landing page with alternating full-width sections |
| **App-focused**     | Full-width layouts             | 🟢 **LOW**      | Dashboard with naturally wide data tables         |`}}},argTypes:{as:{control:`select`,options:[`div`,`section`,`article`,`figure`],description:`HTML element to render`,table:{category:`Polymorphic`,type:{summary:`ElementType`},defaultValue:{summary:`div`}}},inline:{control:`select`,options:[0,4,8,12,16,24,32,40,48,64,80,96,`full`],description:`Horizontal bleed (inline axis). Use numeric values for negative margin, or "full" for 100vw`,table:{category:`Layout`,type:{summary:`SpacingValue | "full"`}}},block:{control:`select`,options:[void 0,0,4,8,12,16,24,32,40,48,64,80,96],description:`Vertical bleed (block axis). Uses negative margin`,table:{category:`Layout`,type:{summary:`SpacingValue | undefined`},defaultValue:{summary:`undefined`}}},children:{control:`text`,table:{category:`Content`,type:{summary:`ReactNode`}}},className:{control:`text`,description:`Additional CSS classes`,table:{category:`Styling`,type:{summary:`string`}}}}},v={args:{inline:16,block:void 0,children:`Bleeding content`},render:e=>(0,h.jsx)(c,{children:(0,h.jsxs)(a,{size:`md`,style:{backgroundColor:g.backgroundLight,padding:`24px`,border:`2px dashed ${p.primary.blue.main}`},children:[(0,h.jsx)(`div`,{style:{marginBottom:`16px`,color:g.textSecondary},children:`Container boundary (constrained)`}),(0,h.jsx)(o,{...e,children:(0,h.jsx)(`div`,{style:{backgroundColor:p.primary.blue.light,padding:`16px`,border:`2px solid ${p.primary.blue.main}`},children:e.children})})]})})},y={name:`Prop: inline`,render:()=>{let[e,t]=m.useState(`numeric`);return(0,h.jsx)(c,{children:(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`48px`},children:[(0,h.jsx)(`div`,{onMouseEnter:()=>t(`numeric`),children:(0,h.jsx)(d,{label:`Numeric Values (Spacing Scale)`,highlight:e===`numeric`,children:(0,h.jsx)(s,{spacing:`comfortable`,children:[8,16,32,48].map(e=>(0,h.jsxs)(a,{size:`md`,style:{backgroundColor:g.backgroundLight,padding:`16px`,border:`1px dashed #ccc`},children:[(0,h.jsxs)(`p`,{style:{fontSize:`12px`,marginBottom:`8px`,color:g.textSecondary},children:[`inline=`,String(e)]}),(0,h.jsx)(o,{inline:e,children:(0,h.jsxs)(`div`,{style:{backgroundColor:p.primary.blue.light,padding:`12px`,textAlign:`center`,fontSize:`14px`},children:[`Bleeds `,e,`px on each side`]})})]},e))})})}),(0,h.jsx)(`div`,{onMouseEnter:()=>t(`full`),children:(0,h.jsx)(d,{label:`Full Width (inline="full")`,highlight:e===`full`,children:(0,h.jsxs)(a,{size:`md`,style:{backgroundColor:g.backgroundLight,padding:`16px`,border:`1px dashed #ccc`},children:[(0,h.jsx)(`p`,{style:{fontSize:`12px`,marginBottom:`8px`,color:g.textSecondary},children:`inline="full"`}),(0,h.jsx)(o,{inline:`full`,children:(0,h.jsx)(`div`,{style:{backgroundColor:p.primary.green.main,padding:`24px`,textAlign:`center`,color:`white`,fontSize:`16px`},children:`Full viewport width (100vw technique)`})})]})})}),(0,h.jsx)(l,{code:e===`numeric`?`<Container size="md">
  <Bleed inline={16}>
    <Box>Bleeds 16px on each side</Box>
  </Bleed>
</Container>`:`<Container size="md">
  <Bleed inline="full">
    <Box>Full viewport width</Box>
  </Bleed>
</Container>`,language:`jsx`,title:`JSX`})]})})}},b={name:`Prop: block`,render:()=>(0,h.jsx)(c,{children:(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,h.jsx)(d,{label:`Block Bleed (Vertical)`,children:(0,h.jsxs)(`div`,{style:{backgroundColor:g.backgroundLight,padding:`24px`},children:[(0,h.jsx)(`div`,{style:{backgroundColor:`#ddd`,padding:`16px`,marginBottom:`16px`},children:`Content above`}),(0,h.jsx)(o,{inline:16,block:8,children:(0,h.jsx)(`div`,{style:{backgroundColor:p.primary.orange.light,padding:`16px`,textAlign:`center`},children:`inline=16, block=8 (bleeds both horizontally and vertically)`})}),(0,h.jsx)(`div`,{style:{backgroundColor:`#ddd`,padding:`16px`,marginTop:`16px`},children:`Content below`})]})}),(0,h.jsx)(l,{code:`<Bleed inline={16} block={8}>
  <Box>Bleeds horizontally and vertically</Box>
</Bleed>`,language:`jsx`,title:`JSX`})]})})},x={name:`Use Case: Content-Focused (Blog/Documentation)`,render:()=>(0,h.jsx)(c,{children:(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,h.jsx)(d,{label:`Before: Without Bleed`,children:(0,h.jsxs)(a,{size:`md`,style:{backgroundColor:`white`,padding:`32px`},children:[(0,h.jsx)(`h2`,{style:{fontSize:`24px`,fontWeight:`bold`,marginBottom:`16px`},children:`Article Title`}),(0,h.jsx)(`p`,{style:{marginBottom:`16px`,lineHeight:`1.6`},children:`This is an article with narrow reading width. Without Bleed, all content including images is constrained to the same width.`}),(0,h.jsx)(`div`,{style:{backgroundColor:p.primary.blue.main,height:`150px`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`white`,marginBottom:`16px`},children:`Image constrained to container width`}),(0,h.jsx)(`p`,{style:{lineHeight:`1.6`},children:`Content continues...`})]})}),(0,h.jsx)(d,{label:`After: With Bleed`,children:(0,h.jsxs)(a,{size:`md`,style:{backgroundColor:`white`,padding:`32px`},children:[(0,h.jsx)(`h2`,{style:{fontSize:`24px`,fontWeight:`bold`,marginBottom:`16px`},children:`Article Title`}),(0,h.jsx)(`p`,{style:{marginBottom:`16px`,lineHeight:`1.6`},children:`This article uses Bleed to break out of the narrow reading width for hero images and featured content, creating visual interest while maintaining optimal text width.`}),(0,h.jsx)(o,{inline:`full`,children:(0,h.jsx)(`div`,{style:{backgroundColor:p.primary.blue.main,height:`200px`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`white`,fontSize:`18px`},children:`Full-width hero image (inline="full")`})}),(0,h.jsx)(`p`,{style:{marginTop:`16px`,marginBottom:`16px`,lineHeight:`1.6`},children:`The text returns to optimal reading width after the image. This creates a nice rhythm.`}),(0,h.jsx)(o,{inline:24,children:(0,h.jsxs)(`div`,{style:{backgroundColor:`#fff3cd`,border:`2px solid #ffc107`,padding:`16px`,borderRadius:`4px`},children:[(0,h.jsx)(`strong`,{children:`💡 Tip:`}),` Use partial bleed for callouts to make them stand out slightly.`]})}),(0,h.jsx)(`p`,{style:{marginTop:`16px`,lineHeight:`1.6`},children:`More content continues...`})]})}),(0,h.jsx)(l,{code:`<Container size="md">
  <h2>Article Title</h2>
  <Text>Article introduction...</Text>
  
  {/* Hero image breaks out to full viewport width */}
  <Bleed inline="full">
    <img src="hero.jpg" alt="Hero" />
  </Bleed>
  
  <Text>Article content continues...</Text>
  
  {/* Callout box bleeds beyond prose width */}
  <Bleed inline={24}>
    <Callout>Important note</Callout>
  </Bleed>
</Container>`,language:`jsx`,title:`JSX`})]})})},S={name:`Use Case: Marketing (Landing Pages)`,render:()=>(0,h.jsx)(c,{children:(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,h.jsx)(d,{label:`Marketing Page with Alternating Sections`,children:(0,h.jsxs)(a,{size:`lg`,style:{padding:`0`},children:[(0,h.jsxs)(`div`,{style:{padding:`32px`,backgroundColor:`white`},children:[(0,h.jsx)(`h1`,{style:{fontSize:`36px`,fontWeight:`bold`,marginBottom:`16px`},children:`Product Title`}),(0,h.jsx)(`p`,{style:{fontSize:`18px`,color:g.textSecondary},children:`Transform your workflow with our amazing product`})]}),(0,h.jsx)(o,{inline:`full`,children:(0,h.jsx)(`div`,{style:{backgroundColor:p.primary.blue.main,padding:`48px`},children:(0,h.jsx)(a,{size:`lg`,children:(0,h.jsxs)(`div`,{style:{textAlign:`center`,color:`white`},children:[(0,h.jsx)(`h2`,{style:{fontSize:`28px`,fontWeight:`bold`,marginBottom:`16px`},children:`Special Offer`}),(0,h.jsx)(`p`,{style:{fontSize:`16px`,marginBottom:`24px`},children:`Get started today with 50% off`}),(0,h.jsx)(`button`,{style:{backgroundColor:`white`,color:p.primary.blue.main,padding:`12px 24px`,border:`none`,borderRadius:`4px`,fontSize:`16px`,fontWeight:`bold`,cursor:`pointer`},children:`Get Started`})]})})})}),(0,h.jsxs)(`div`,{style:{padding:`32px`,backgroundColor:`white`},children:[(0,h.jsx)(`h2`,{style:{fontSize:`24px`,fontWeight:`bold`,marginBottom:`16px`},children:`Key Features`}),(0,h.jsxs)(s,{spacing:`compact`,children:[(0,h.jsx)(`div`,{children:`✨ Feature 1: Amazing capability`}),(0,h.jsx)(`div`,{children:`🚀 Feature 2: Lightning fast`}),(0,h.jsx)(`div`,{children:`🔒 Feature 3: Secure and reliable`})]})]}),(0,h.jsx)(o,{inline:`full`,children:(0,h.jsx)(`div`,{style:{backgroundColor:g.backgroundLight,padding:`48px`},children:(0,h.jsxs)(a,{size:`lg`,children:[(0,h.jsx)(`h2`,{style:{fontSize:`24px`,fontWeight:`bold`,marginBottom:`16px`,textAlign:`center`},children:`What Our Customers Say`}),(0,h.jsx)(`div`,{style:{textAlign:`center`,fontStyle:`italic`},children:`"This product changed how we work. Highly recommended!"`})]})})})]})}),(0,h.jsx)(l,{code:`<Container size="lg">
  <Hero>
    <Heading>Product Title</Heading>
    <Text>Description</Text>
  </Hero>
  
  {/* Full-width accent section */}
  <Bleed inline="full">
    <Box bg="brand.500" py={16}>
      <Container size="lg">
        <Stack spacing={4} align="center">
          <Heading color="white">Special Offer</Heading>
          <Button size="lg">Get Started</Button>
        </Stack>
      </Container>
    </Box>
  </Bleed>
  
  <Features />
  
  {/* Another full-width section */}
  <Bleed inline="full">
    <Box bg="gray.100" py={16}>
      <Container size="lg">
        <Testimonials />
      </Container>
    </Box>
  </Bleed>
</Container>`,language:`jsx`,title:`JSX`})]})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    inline: 16,
    block: undefined,
    children: 'Bleeding content'
  },
  render: (args: ComponentProps<typeof Bleed>) => <StoryContainer>
      <Container size="md" style={{
      backgroundColor: NEUTRAL.backgroundLight,
      padding: '24px',
      border: \`2px dashed \${STORY_COLORS.primary.blue.main}\`
    }}>
        <div style={{
        marginBottom: '16px',
        color: NEUTRAL.textSecondary as string
      }}>
          Container boundary (constrained)
        </div>
        <Bleed {...args}>
          <div style={{
          backgroundColor: STORY_COLORS.primary.blue.light,
          padding: '16px',
          border: \`2px solid \${STORY_COLORS.primary.blue.main}\`
        }}>
            {args.children}
          </div>
        </Bleed>
      </Container>
    </StoryContainer>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Prop: inline',
  render: () => {
    const [hoveredVariant, setHoveredVariant] = React.useState<'numeric' | 'full'>('numeric');
    const numericValues = [8, 16, 32, 48] as const;
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px'
      }}>
          {/* Numeric values */}
          <div onMouseEnter={() => setHoveredVariant('numeric')}>
            <PropCard label="Numeric Values (Spacing Scale)" highlight={hoveredVariant === 'numeric'}>
              <Stack spacing="comfortable">
                {numericValues.map(value => <Container key={value} size="md" style={{
                backgroundColor: NEUTRAL.backgroundLight,
                padding: '16px',
                border: '1px dashed #ccc'
              }}>
                    <p style={{
                  fontSize: '12px',
                  marginBottom: '8px',
                  color: NEUTRAL.textSecondary as string
                }}>
                      inline={String(value)}
                    </p>
                    <Bleed inline={value}>
                      <div style={{
                    backgroundColor: STORY_COLORS.primary.blue.light,
                    padding: '12px',
                    textAlign: 'center',
                    fontSize: '14px'
                  }}>
                        Bleeds {value}px on each side
                      </div>
                    </Bleed>
                  </Container>)}
              </Stack>
            </PropCard>
          </div>

          {/* Full-width */}
          <div onMouseEnter={() => setHoveredVariant('full')}>
            <PropCard label='Full Width (inline="full")' highlight={hoveredVariant === 'full'}>
              <Container size="md" style={{
              backgroundColor: NEUTRAL.backgroundLight,
              padding: '16px',
              border: '1px dashed #ccc'
            }}>
                <p style={{
                fontSize: '12px',
                marginBottom: '8px',
                color: NEUTRAL.textSecondary as string
              }}>
                  inline="full"
                </p>
                <Bleed inline="full">
                  <div style={{
                  backgroundColor: STORY_COLORS.primary.green.main,
                  padding: '24px',
                  textAlign: 'center',
                  color: 'white',
                  fontSize: '16px'
                }}>
                    Full viewport width (100vw technique)
                  </div>
                </Bleed>
              </Container>
            </PropCard>
          </div>

          <CodeBlock code={hoveredVariant === 'numeric' ? \`<Container size="md">
  <Bleed inline={16}>
    <Box>Bleeds 16px on each side</Box>
  </Bleed>
</Container>\` : \`<Container size="md">
  <Bleed inline="full">
    <Box>Full viewport width</Box>
  </Bleed>
</Container>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Prop: block',
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <PropCard label="Block Bleed (Vertical)">
            <div style={{
            backgroundColor: NEUTRAL.backgroundLight,
            padding: '24px'
          }}>
              <div style={{
              backgroundColor: '#ddd',
              padding: '16px',
              marginBottom: '16px'
            }}>Content above</div>

              <Bleed inline={16} block={8}>
                <div style={{
                backgroundColor: STORY_COLORS.primary.orange.light,
                padding: '16px',
                textAlign: 'center'
              }}>
                  inline=16, block=8 (bleeds both horizontally and vertically)
                </div>
              </Bleed>

              <div style={{
              backgroundColor: '#ddd',
              padding: '16px',
              marginTop: '16px'
            }}>Content below</div>
            </div>
          </PropCard>

          <CodeBlock code={\`<Bleed inline={16} block={8}>
  <Box>Bleeds horizontally and vertically</Box>
</Bleed>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Use Case: Content-Focused (Blog/Documentation)',
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <PropCard label="Before: Without Bleed">
            <Container size="md" style={{
            backgroundColor: 'white',
            padding: '32px'
          }}>
              <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '16px'
            }}>Article Title</h2>
              <p style={{
              marginBottom: '16px',
              lineHeight: '1.6'
            }}>
                This is an article with narrow reading width. Without Bleed, all content including images is constrained
                to the same width.
              </p>
              <div style={{
              backgroundColor: STORY_COLORS.primary.blue.main,
              height: '150px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              marginBottom: '16px'
            }}>
                Image constrained to container width
              </div>
              <p style={{
              lineHeight: '1.6'
            }}>Content continues...</p>
            </Container>
          </PropCard>

          <PropCard label="After: With Bleed">
            <Container size="md" style={{
            backgroundColor: 'white',
            padding: '32px'
          }}>
              <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '16px'
            }}>Article Title</h2>
              <p style={{
              marginBottom: '16px',
              lineHeight: '1.6'
            }}>
                This article uses Bleed to break out of the narrow reading width for hero images and featured content,
                creating visual interest while maintaining optimal text width.
              </p>

              {/* Full-width hero image */}
              <Bleed inline="full">
                <div style={{
                backgroundColor: STORY_COLORS.primary.blue.main,
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '18px'
              }}>
                  Full-width hero image (inline="full")
                </div>
              </Bleed>

              <p style={{
              marginTop: '16px',
              marginBottom: '16px',
              lineHeight: '1.6'
            }}>
                The text returns to optimal reading width after the image. This creates a nice rhythm.
              </p>

              {/* Callout with partial bleed */}
              <Bleed inline={24}>
                <div style={{
                backgroundColor: '#fff3cd',
                border: '2px solid #ffc107',
                padding: '16px',
                borderRadius: '4px'
              }}>
                  <strong>💡 Tip:</strong> Use partial bleed for callouts to make them stand out slightly.
                </div>
              </Bleed>

              <p style={{
              marginTop: '16px',
              lineHeight: '1.6'
            }}>More content continues...</p>
            </Container>
          </PropCard>

          <CodeBlock code={\`<Container size="md">
  <h2>Article Title</h2>
  <Text>Article introduction...</Text>
  
  {/* Hero image breaks out to full viewport width */}
  <Bleed inline="full">
    <img src="hero.jpg" alt="Hero" />
  </Bleed>
  
  <Text>Article content continues...</Text>
  
  {/* Callout box bleeds beyond prose width */}
  <Bleed inline={24}>
    <Callout>Important note</Callout>
  </Bleed>
</Container>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Use Case: Marketing (Landing Pages)',
  render: () => {
    return <StoryContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <PropCard label="Marketing Page with Alternating Sections">
            <Container size="lg" style={{
            padding: '0'
          }}>
              {/* Hero Section */}
              <div style={{
              padding: '32px',
              backgroundColor: 'white'
            }}>
                <h1 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                marginBottom: '16px'
              }}>Product Title</h1>
                <p style={{
                fontSize: '18px',
                color: NEUTRAL.textSecondary as string
              }}>
                  Transform your workflow with our amazing product
                </p>
              </div>

              {/* Full-width accent section */}
              <Bleed inline="full">
                <div style={{
                backgroundColor: STORY_COLORS.primary.blue.main,
                padding: '48px'
              }}>
                  <Container size="lg">
                    <div style={{
                    textAlign: 'center',
                    color: 'white'
                  }}>
                      <h2 style={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      marginBottom: '16px'
                    }}>Special Offer</h2>
                      <p style={{
                      fontSize: '16px',
                      marginBottom: '24px'
                    }}>Get started today with 50% off</p>
                      <button style={{
                      backgroundColor: 'white',
                      color: STORY_COLORS.primary.blue.main,
                      padding: '12px 24px',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}>
                        Get Started
                      </button>
                    </div>
                  </Container>
                </div>
              </Bleed>

              {/* Features Section */}
              <div style={{
              padding: '32px',
              backgroundColor: 'white'
            }}>
                <h2 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '16px'
              }}>Key Features</h2>
                <Stack spacing="compact">
                  <div>✨ Feature 1: Amazing capability</div>
                  <div>🚀 Feature 2: Lightning fast</div>
                  <div>🔒 Feature 3: Secure and reliable</div>
                </Stack>
              </div>

              {/* Another full-width section */}
              <Bleed inline="full">
                <div style={{
                backgroundColor: NEUTRAL.backgroundLight,
                padding: '48px'
              }}>
                  <Container size="lg">
                    <h2 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                    textAlign: 'center'
                  }}>
                      What Our Customers Say
                    </h2>
                    <div style={{
                    textAlign: 'center',
                    fontStyle: 'italic'
                  }}>
                      "This product changed how we work. Highly recommended!"
                    </div>
                  </Container>
                </div>
              </Bleed>
            </Container>
          </PropCard>

          <CodeBlock code={\`<Container size="lg">
  <Hero>
    <Heading>Product Title</Heading>
    <Text>Description</Text>
  </Hero>
  
  {/* Full-width accent section */}
  <Bleed inline="full">
    <Box bg="brand.500" py={16}>
      <Container size="lg">
        <Stack spacing={4} align="center">
          <Heading color="white">Special Offer</Heading>
          <Button size="lg">Get Started</Button>
        </Stack>
      </Container>
    </Box>
  </Bleed>
  
  <Features />
  
  {/* Another full-width section */}
  <Bleed inline="full">
    <Box bg="gray.100" py={16}>
      <Container size="lg">
        <Testimonials />
      </Container>
    </Box>
  </Bleed>
</Container>\`} language="jsx" title="JSX" />
        </div>
      </StoryContainer>;
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`PropInline`,`PropBlock`,`UseCaseContent`,`UseCaseMarketing`]}))();export{v as Playground,b as PropBlock,y as PropInline,x as UseCaseContent,S as UseCaseMarketing,C as __namedExportsOrder,_ as default};