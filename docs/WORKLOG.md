# WORKLOG — HK Design System

## 2026-08-15 — 디자인 시스템 초기 스캐폴드

**목표**: claude.ai/design(`/design-sync`)에 올릴 수 있는 React + TS 컴포넌트 라이브러리를
처음부터 스캐폴드한다.

**결정사항** (상세 [[DECISIONS]]):
- 타깃 React 18 + TypeScript, 스타일링 vanilla-extract, 브랜드 "Metaverse" 다크 테마.
- 빌드 Vite 라이브러리 모드 + tsc 선언, Storybook 8(react-vite).
- 초기 범위 코어 9개 컴포넌트.
- 웹 컴포넌트 → React 전환 경위는 [[RATIONALE]] R1.

**산출물**:
- 빌드 체인: `package.json`, `tsconfig.json`, `vite.config.ts`, `.storybook/`, `.gitignore`.
- 토큰: `src/theme/theme.css.ts`(`createGlobalTheme`), `global.css.ts`(base reset).
- 컴포넌트 9개(각 `.css.ts` + `.tsx` + `index.ts` + `.stories.tsx`):
  Button, Text, Stack, Card, Badge, Input, Checkbox, Select, Dialog.
- 배럴 `src/index.ts`, 유틸 `src/utils/cx.ts`.
- 문서: `README.md`, `DECISIONS.md`, `docs/RATIONALE.md`, 본 로그.

**현재 진행도** (2026-08-15 실측):
- `tsc --noEmit` 통과.
- `npm run build` → `dist/{index.js, index.cjs, index.d.ts, style.css(9.29kB), components/**/*.d.ts}` 방출.
- `npm run build-storybook` → `storybook-static/` 성공(전 스토리 컴파일).

**남은 미해결**:
- 시각 충실도(픽셀 단위)는 미검증 — `/design-sync` 프리뷰 채점 단계에서 확인 예정.
- 폰트: Storybook은 Google Fonts로 Space Grotesk 로드. 배포 번들에는 폰트 미포함
  (시스템 폴백) — `/design-sync`가 폰트를 로컬 번들로 가져갈지 후속 판단.
- 컴포넌트 확장 후보: Field/Label 래퍼, Tooltip, Tabs, Radio, Switch.

**다음 단계**:
1. `/design-sync` 실행 → 이 `dist/`를 claude.ai/design 프로젝트로 변환·업로드. ✅ 완료(아래).
2. 규약 헤더(`.design-sync/conventions.md`) 저작. ✅ 완료(아래).

## 2026-08-15 — /design-sync → claude.ai/design (KKOBAK)

**목표**: 완성된 DS를 claude.ai/design 프로젝트로 변환·업로드해, 디자인 에이전트가 실제
컴포넌트로 UI를 조립하게 한다.

**결정사항** (상세 [[NOTES]] · `.design-sync/config.json`):
- 대상: 신규 프로젝트 **KKOBAK** (`03272dcd-2cc4-4cad-9c3a-200ab4a4bcc0`), storybook shape.
- **다크 테마 대응**: 프리뷰 카드 배경이 흰색 고정(app-contract)이라, `ThemeProvider`
  루트 래퍼를 신설하고 `cfg.provider`로 프리뷰를 다크 표면에 렌더. 이게 디자인 에이전트의
  wrapping 규약이기도 함.
- Input `cardMode: column`(그리드 오버플로), Dialog `Open` 스토리 신설 + `cardMode: single`
  (모달 정적 검증).

**산출물**:
- claude.ai/design KKOBAK 프로젝트에 56파일 업로드(9 컴포넌트 × `.html/.jsx/.d.ts/.prompt.md`
  + 번들·styles·프리뷰·vendor·guidelines·앵커).
- `.design-sync/{config.json, conventions.md, NOTES.md}` (durable set, 재동기화 재사용).
- `src/components/ThemeProvider/` (라이브러리 10번째 export).

**현재 진행도** (2026-08-15 실측):
- 9개 컴포넌트 전부 reference Storybook 대조 시각 `match` (Dialog 모달 포함).
- 드라이버 영수증 `ok: true`, `pendingGrade` 없음, 9개 전부 `carried forward`.
- validate 클린(1 non-blocking warning: `[FONT_REMOTE]`), 업로드 앵커 기록·검증 완료.

**남은 미해결**:
- `[FONT_REMOTE]` Space Grotesk 원격 @import — 오프라인 안전화(로컬 `@font-face` + `cfg.extraFonts`) 미적용.
- 토큰 CSS 변수명이 해시(`--_…`) — 에이전트는 `window.HKDS.vars`로 접근(규약 헤더에 명시). 가독 var명 필요 시 토큰 시스템 재설계 검토.
- guidelines에 dev 문서(RATIONALE/WORKLOG)가 실림 — 다음 동기화에서 guidelines 디스커버리 정제 검토.

**다음 단계**: 재동기화는 `node .ds-sync/resync.mjs … --remote …`로 앵커 기반 증분 실행.

## 2026-08-15 — 폰트 로컬 번들링 (오프라인 안전화)

**목표**: `[FONT_REMOTE]`(Google Fonts 원격 @import) 제거 — 라이브러리·Storybook·design-sync
전부 외부 폰트 의존 없이 동작하게 한다.

**결정사항**:
- `@fontsource/space-grotesk`(latin, 400/500/700)를 **엔트리 `src/index.ts`에서 import**
  (중간 `.ts` 경유 시 `sideEffects:["*.css"]`로 트리셰이킹됨 — 실측). Vite가 woff2/woff를
  base64로 `style.css`에 인라인 → 외부 폰트 참조 0.
- Storybook은 `.storybook/preview.ts`에서 동일 폰트 import, Google `preview-head.html` 제거.
- JetBrains Mono는 미번들(어느 컴포넌트도 `vars.font.mono` 미사용, 시스템 폴백).

**산출물**: `_ds_bundle.css` ~127KB(폰트 인라인), design-sync `styles.css` @import 2→1.
KKOBAK에 변경분 재업로드(앵커 기반 재동기화, `upload.styling:true`) + 앵커 갱신. 커밋 `6ff04c3`.

**현재 진행도** (2026-08-15 실측):
- 드라이버 `--remote` 영수증 `ok:true`, `pendingGrade` 없음, `changed/added` 없음.
- reference-drift canary(Dialog·Input·Badge·Text·Select) 5개 시트 재확인 — 발산 없음, 등급 유지.
- `[FONT_REMOTE]` 소멸, 잔여 경고는 `[RENDER_THIN] Dialog`(triaged)뿐.

**남은 미해결**: woff 폴백 동봉(woff2-only 커스텀 `@font-face`로 ~절반 감량 가능, 미적용).
