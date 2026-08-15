# DECISIONS — HK Design System

> G2 산출물. 재논의 방지를 위한 확정 결정 기록. 사고 과정은 [[RATIONALE]], 진행은 [[WORKLOG]].

## [D1] 타깃: React 18 + TypeScript (2026-08-15 확정)

- **결정**: 프레임워크는 React 18 + TypeScript. 웹 컴포넌트/기타 프레임워크 후보 기각.
- **근거**: 최종 목적지가 [claude.ai/design](https://claude.ai/design)이며, `/design-sync`
  파이프라인은 **React 컴포넌트를 esbuild로 번들한 `dist/`**를 소비한다. 웹 컴포넌트는 현재
  파이프라인 밖이라 연동이 막힌다. 사용자 초기 선택(웹 컴포넌트)의 전환 경위는 [[RATIONALE]] R1.

## [D2] 스타일링: vanilla-extract (zero-runtime) (2026-08-15 확정)

- **결정**: vanilla-extract `.css.ts`. styled-components 기각.
- **근거**: ① styled-components는 React 런타임 결합이라 번들·규약 열거가 복잡. ② vanilla-extract는
  빌드타임 zero-runtime이라 컴파일된 `dist/`가 정적 CSS로 떨어져 `/design-sync`의 esbuild
  번들러와 정합. ③ `createGlobalTheme`이 토큰을 `var(--*)` 커스텀 프로퍼티로 방출해 Claude
  Design 규약 헤더가 이름을 그대로 열거 가능.

## [D3] 브랜드: "Metaverse" 다크 테마 (2026-08-15 확정)

- **결정**: 다크 쿨 팔레트 — bg `#0B0E1A`, accent cyan `#00E5D0`, accent2 violet `#7C5CFF`,
  Space Grotesk. Professional/Heritage/Editorial 후보 대비 선택.
- **근거**: 사용자 도메인(ETRI 메타버스·디지털 트윈)과 정합. G3 브레인스톰에서 계열이 다른
  4개 방향을 색 스와치로 제시 후 선택.
- **단일 원천**: [[theme.css]] (`createGlobalTheme`).

## [D4] 컴포넌트 API 규약 (2026-08-15 확정)

- **결정**:
  - 네이티브 요소 우선 — `Button`/`Input`/`Select`/`Checkbox`는 네이티브 요소를 감싸고
    나머지 속성을 그대로 전달(`...rest`), `forwardRef`로 ref 노출.
  - variant/size 등 시각 축은 vanilla-extract `styleVariants`로 표현하고 `cx()`로 합성.
  - 레이아웃·타이포는 폴리모픽 `as` prop 지원(`Text`/`Stack`/`Card`).
  - 다이얼로그는 네이티브 `<dialog>` + `showModal()` (top-layer·backdrop·focus trap 무료).
- **근거**: 접근성·폼 통합을 공짜로 얻고 구현 표면을 최소화(카파시 원칙 2).

## [D5] 빌드 체인: Vite 라이브러리 모드 + tsc 선언 방출 (2026-08-15 확정)

- **결정**: `vite build`(ESM+CJS, `cssFileName: "style"`) + `tsc --emitDeclarationOnly`로 `.d.ts`.
  Storybook 8(react-vite 빌더) + `@vanilla-extract/vite-plugin` 공용.
- **근거**: Storybook과 VE 플러그인을 공유해 설정 중복 제거, CSS 추출이 견고. 산출물은
  `dist/{index.js, index.cjs, index.d.ts, style.css, components/**}`.
- **버전 메모**: vite 6 ↔ `@vanilla-extract/vite-plugin` 4 peer 충돌 → vite-plugin 5로 상향해 해소.

## [D6] 초기 범위: 코어 9개 (2026-08-15 확정)

- **결정**: Button, Text, Stack, Card, Badge, Input, Checkbox, Select, Dialog.
- **근거**: Walking skeleton(Button) 관통 후 복제 확장. 폼·레이아웃·피드백 최소 계열 확보.
- **미결**: 폼 그룹(Field/Label 래퍼), Tooltip, Tabs 등은 후속 확장 대상 — [[WORKLOG]] 참조.
