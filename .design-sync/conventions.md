# HK Design System — build conventions

Dark-themed React library (the "Metaverse" theme). Components are on
`window.HKDS.*` (bundle: `_ds_bundle.js`). Compose them; do not re-implement.

## 1. Wrap everything in `ThemeProvider`

This is a **dark theme** — components assume a `var(--color-bg)` surface with
light text. Without a themed surface, transparent controls (`Button
variant="ghost"`) and bare `Text` render as near-invisible light glyphs on
white. Wrap the app (or any rendered region) in `ThemeProvider`, which paints
the background + foreground + base font:

```jsx
const { ThemeProvider, Button, Stack, Text, Card, vars } = window.HKDS;

<ThemeProvider style={{ minHeight: "100vh", padding: vars.space.xl }}>
  <Card padding="lg">
    <Stack gap="md">
      <Text as="h2" size="xl" weight="bold">Twin Node 04</Text>
      <Text tone="muted">Real-time building telemetry.</Text>
      <Stack direction="row" gap="sm">
        <Button variant="primary">Connect</Button>
        <Button variant="ghost">Details</Button>
      </Stack>
    </Stack>
  </Card>
</ThemeProvider>
```

Also load the styles once: `styles.css` (it `@import`s the component CSS).

## 2. Style through props and `vars` — no CSS classes

There is **no utility-class system**. Two levers only:

**a) Component props carry the design language.** Prefer them over custom CSS:
- `Button` — `variant` (`primary`/`secondary`/`ghost`/`danger`), `size` (`sm`/`md`/`lg`), `fullWidth`
- `Text` — `size` (`xs`…`xxl`), `weight` (`regular`/`medium`/`bold`), `tone` (`default`/`muted`/`accent`/`danger`), `as`
- `Stack` — `direction` (`row`/`column`), `gap` (`none`,`xs`…`xxxl`), `align`, `justify`, `wrap`
- `Card` — `padding` (`none`/`sm`/`md`/`lg`), `interactive`
- `Badge` — `tone` (`neutral`/`accent`/`violet`/`success`/`warning`/`danger`), `size`
- `Input` / `Select` — native props + `invalid`; `Checkbox` — `label`
- `Dialog` — controlled `open` + `onClose`, `title`, `footer`

**b) For custom layout glue, use the `vars` token object** — never hardcode hex
or raw `var(--…)` (the CSS custom-property names are hashed and unstable).
`window.HKDS.vars` resolves each token to its variable:
- `vars.color.*` — `bg surface surfaceHover text textMuted border borderStrong accent accentHover accentActive accentText accent2 accent2Hover danger success warning focusRing overlay`
- `vars.space.*` — `none xs sm md lg xl xxl xxxl` (4→48px)
- `vars.fontSize.*` — `xs sm md lg xl xxl`; `vars.fontWeight.*` — `regular medium bold`
- `vars.radius.*` — `none sm md lg full`; `vars.shadow.*` — `sm md lg glow`
- `vars.font.*` — `body` (Space Grotesk), `mono`

```jsx
<div style={{ background: vars.color.surface, borderRadius: vars.radius.lg,
              padding: vars.space.lg, boxShadow: vars.shadow.glow }} />
```

## 3. Where the truth lives

- `styles.css` + `_ds_bundle.css` — the compiled tokens and component styles.
- `components/<group>/<Name>/<Name>.prompt.md` + `.d.ts` — per-component API + examples.
- The token source of truth is the exported `vars` object; read it before inventing values.
