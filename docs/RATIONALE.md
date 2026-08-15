# RATIONALE — HK Design System

> 고찰 로그. 사고 과정·통찰·논문 소재. 결정 결과는 [[DECISIONS]], 진행은 [[WORKLOG]].

## R1 — 웹 컴포넌트 → React 전환 (2026-08-15)

**문제 상황**: 사용자가 새 디자인 시스템의 타깃으로 "웹 컴포넌트/기타 프레임워크"를,
스타일링으로 "CSS-in-JS(styled-components/vanilla-extract)"를 선택했다.

**검토한 대안과 기각 논리**:
- **웹 컴포넌트 유지 (Lit + vanilla-extract)**: 진짜 프레임워크 무관 컴포넌트를 얻지만,
  사용자가 **같은 세션에서 방금 실행한 `/design-sync`**의 파이프라인이 React `dist/`만
  소비한다. 즉 오늘의 목적(claude.ai/design 연동)이 무산된다. 기각.
- **하이브리드 (웹 컴포넌트 코어 + React 래퍼)**: 두 생태계 모두 지원하나 빌드·유지보수
  복잡도가 규모 대비 과임(카파시 원칙 2 위반). 기각.

**채택 논증**: 선택 조합 자체에 **두 개의 비정합**이 있었다 — ① styled-components는
React 전용이라 "웹 컴포넌트 + styled-components"는 기술적으로 성립 불가, ② "웹 컴포넌트"는
방금 실행한 도구의 소비 형식 밖. 조용히 하나를 고르지 않고(카파시 원칙 1) 두 모순을
드러내 사용자에게 방향을 되물었고, 사용자가 React 전환을 택했다. vanilla-extract는
프레임워크 무관이라 React에서도 그대로 유효해 스타일링 선택의 절반은 보존됐다.

**일반화 가능한 통찰**: 사용자의 선택지가 서로/맥락과 모순될 때, **선택을 수용하기 전에
정합성을 먼저 검사**해야 한다. 특히 "직전에 사용자가 취한 행동(도구 실행)"은 명시되지 않은
제약(implicit constraint)의 강력한 원천이다 — 프로토콜 G1의 "기록 기반 반박"을 대화 내
직전 행동에까지 확장 적용한 사례. `#design-system` `#ux-decision`

관련: [[DECISIONS#[D1] 타깃: React 18 + TypeScript (2026-08-15 확정)|D1]],
[[DECISIONS#[D2] 스타일링: vanilla-extract (zero-runtime) (2026-08-15 확정)|D2]]
