# HK Design System

A small, production-ready React + TypeScript component library with a
**"Metaverse"** dark theme, built with [vanilla-extract](https://vanilla-extract.style/)
zero-runtime CSS. Designed to be imported into
[Claude Design](https://claude.ai/design) via `/design-sync` so the design
agent builds UI from these real components.

## Install

```bash
npm install
```

Requires Node ≥ 18 (developed on Node 26). Package manager: **npm**.

## Usage

```tsx
import { Button, Card, Stack, Text } from "hk-design-system";
import "hk-design-system/styles.css"; // design tokens + component styles

export function Example() {
  return (
    <Card padding="lg">
      <Stack gap="md">
        <Text as="h2" size="xl" weight="bold">Digital Twin</Text>
        <Button variant="primary">Connect</Button>
      </Stack>
    </Card>
  );
}
```

No provider is required — importing `styles.css` registers the theme tokens on
`:root` and the base document styles. All color/spacing/type comes from CSS
custom properties (`var(--*)`) defined in [[theme.css]].

## Components

| Component  | Summary |
|------------|---------|
| `Button`   | Primary control · variants `primary` / `secondary` / `ghost` / `danger`, sizes `sm` / `md` / `lg` |
| `Text`     | Typographic primitive · polymorphic `as`, `size` / `weight` / `tone` / `align` |
| `Stack`    | Flexbox layout · `direction` / `gap` / `align` / `justify` / `wrap` |
| `Card`     | Surface container · `padding`, `interactive` hover glow |
| `Badge`    | Status label · tones `neutral` / `accent` / `violet` / `success` / `warning` / `danger` |
| `Input`    | Text field · native `<input>`, `invalid` state |
| `Checkbox` | Custom-styled checkbox over a native input · `label` |
| `Select`   | Styled native `<select>` with chevron · `invalid` state |
| `Dialog`   | Modal on the native `<dialog>` element · controlled `open` / `onClose` |

## Design tokens

Defined once in [[theme.css]] via `createGlobalTheme(":root", …)`:

- **color** — `bg`, `surface`, `text`, `border`, `accent` (cyan `#00E5D0`),
  `accent2` (violet `#7C5CFF`), `danger`, `success`, `warning`, …
- **font** — `body` (Space Grotesk), `mono` (JetBrains Mono)
- **fontSize** — `xs`…`xxl`
- **space** — `xs` (4px) … `xxxl` (48px)
- **radius** — `sm` / `md` / `lg` / `full`
- **shadow** — `sm` / `md` / `lg` / `glow`

## Scripts

| Script | Action |
|--------|--------|
| `npm run build` | Build the library to `dist/` (ESM + CJS + `.d.ts` + `style.css`) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run storybook` | Storybook dev server on port 6006 |
| `npm run build-storybook` | Static Storybook build |

## Build output (`dist/`)

- `index.js` (ESM) · `index.cjs` (CJS) · `index.d.ts` (types)
- `style.css` — all tokens + component styles, side-effect-free import
- `components/**/*.d.ts` — per-component declarations

## Project docs

- [[DECISIONS]] — architecture decisions (stack, theme, API shape)
- [[WORKLOG]] — progress log
- [[RATIONALE]] — reasoning behind key pivots

## License

MIT
