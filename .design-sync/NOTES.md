# design-sync NOTES — HK Design System

Corrections and gotchas carried between syncs. Read before running.

## General fixes

- **[GENERAL] Dark theme needs a surface wrapper.** The preview card template
  forces `body{background:#fff}` (app contract — not configurable). This DS is
  dark-themed and relies on a global `body` background for legibility, so
  transparent controls (`Button variant="ghost"`) and bare `Text` were
  invisible on the white card. Fix: added a `ThemeProvider` root wrapper
  (`src/components/ThemeProvider/`) that paints `var(--color-bg)` +
  `var(--color-text)`, and set `cfg.provider = {"component": "ThemeProvider"}`
  so every preview renders on the themed surface. This is also the documented
  wrap requirement for the design agent (see `conventions.md`).

- **Input → `cardMode: "column"`** (`cfg.overrides.Input`). Input stories use a
  `maxWidth: 320` decorator wider than a grid cell; `[GRID_OVERFLOW] wide` flagged
  it. Column mode gives each story full card width. Presentation-only — grades carry.

## Re-sync risks (watch-list for the next run)

- **Fonts are now bundled locally (resolved `[FONT_REMOTE]`, 2026-08-15).**
  Space Grotesk (latin, 400/500/700) is self-hosted via `@fontsource/space-grotesk`,
  imported from `src/index.ts` (must stay in the *entry* — routing through an
  intermediate `.ts` gets tree-shaken away by `sideEffects: ["*.css"]`). Vite
  inlines the woff2/woff as base64 into `dist/style.css` (~127 KB), so the design
  bundle has **zero external font references** and `styles.css` has 1 `@import`
  (component CSS only). Storybook loads the same fonts via imports in
  `.storybook/preview.ts` (the Google Fonts `preview-head.html` was removed —
  keeping it would make the converter re-scrape a remote `@import`).
  - JetBrains Mono is NOT bundled (no component uses `vars.font.mono`; it falls
    back to system mono). Re-add `@fontsource/jetbrains-mono` if a mono component lands.
  - Size optimization available: the fontsource CSS ships both woff2 AND woff;
    woff2 is universal, so a custom `@font-face` with woff2-only would roughly
    halve the 127 KB. Not done — kept the robust fontsource path.
- **`[REFERENCE_STALE?]` is expected here** when only `ThemeProvider` (an
  unstoried export) changed: existing stories are unaffected, so the reference
  storybook is byte-identical. Rebuild the reference whenever a *storied*
  component's source changes.
- **Story caps.** `Button` has 7 stories; compare captures 6 by default, so
  `Sizes` (sm/md/lg) is verified-by-upload, not individually graded. Raise
  `--max-stories 7` if that variant needs explicit grading.
- **Dialog: added an `Open` story + `cfg.overrides.Dialog {cardMode:single, primaryStory:Open}`.**
  The original `Basic` story starts closed (interaction-gated), so static capture
  only showed the trigger button — the modal itself was unverified. The `Open`
  story renders the dialog open so the modal is graded. Its `::backdrop` tint
  looks lighter in the preview than in storybook: the backdrop is semi-transparent
  and reveals the single-card wrapper bg behind the top layer, not storybook's dark
  body. This is a framing artifact — on a real `ThemeProvider` surface the backdrop
  renders dark. Not a component defect; graded `match` with that note.
- **`[RENDER_THIN]` Dialog is expected.** In `cardMode: single` the card renders
  the one `Open` story; the modal panel is short, so the render reads as thin.
  Triaged — not a new warning on future syncs.
