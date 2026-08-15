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

- **`[FONT_REMOTE]` Space Grotesk / JetBrains Mono.** Fonts load via a remote
  `@import` (Google Fonts) captured from `.storybook/preview-head.html`, not a
  local bundle. Verified only under the assumption the font host is reachable at
  render time. If claude.ai/design blocks external font hosts, designs fall back
  to system sans. To make it offline-safe: download the woff2 files, add
  `@font-face` locally, and set `cfg.extraFonts` — then re-verify.
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
