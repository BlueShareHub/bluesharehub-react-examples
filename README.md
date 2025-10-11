# React Examples by BlueShareHub

리액트 기초\~중급 학습을 위한 **실행 가능한 예제 모음**입니다. 블로그 글과 1:1로 연결되며, URL 쿼리스트링으로 예제를 바로 실행할 수 있습니다.

* 블로그: [https://bluesharehub.com](https://bluesharehub.com)
* 저장소 유지 목적: 학습·공유·참고용 (실무용 템플릿이 아니라 **예제 중심**)

---

## 🚀 빠른 시작

```bash
# 1) 설치
npm install

# 2) 개발 서버 실행
npm start
# 브라우저에서 http://localhost:3000 열기
```

> 개발 서버가 열리면 드롭다운으로 예제를 선택할 수 있고,
> `?ex=슬러그` 를 붙이면 특정 예제를 바로 실행합니다.

---

## ▶️ 데모/직접 실행 (예시)

* JSX 기본 예제: `http://localhost:3000/?ex=jsx-basic`
* props 사용법: `http://localhost:3000/?ex=props-demo`
* onClick 예제: `http://localhost:3000/?ex=onclick`
* onChange 예제: `http://localhost:3000/?ex=onchange`
* onSubmit 예제: `http://localhost:3000/?ex=onsubmit`
* WindowSizeWatcher: `http://localhost:3000/?ex=window-size-watcher`
* LifecycleLogDemo: `http://localhost:3000/?ex=lifecycle-log`
* UsersFetcher: `http://localhost:3000/?ex=users-fetcher`
* DomControlDemo: `http://localhost:3000/?ex=dom-control`
* InputFocusDemo: `http://localhost:3000/?ex=input-focus`
* PreviousValueDemo: `http://localhost:3000/?ex=previous-value`
* ListBase: `http://localhost:3000/?ex=list-base`
* ListBadIndexKey: `http://localhost:3000/?ex=list-bad-index-key`
* ListStableKey: `http://localhost:3000/?ex=list-stable-key`
* ListKeyPlacement: `http://localhost:3000/?ex=list-key-placement`
* Fragment key 데모: `http://localhost:3000/?ex=list-fragment-key`
* CounterWithReducer (useReducer): `http://localhost:3000/?ex=counter-with-reducer`
* SignupForm (useReducer): `http://localhost:3000/?ex=signup-form-reduce`
* ExpensiveCalcMemo (useMemo): `http://localhost:3000/?ex=expensive-calc-memo`
* MemoizedList (useMemo + React.memo): `http://localhost:3000/?ex=memoized-list`
* MemoizedChildWithCallback (useCallback + React.memo): `http://localhost:3000/?ex=memoized-child-with-callback`
* StaleClosureFix (useCallback): `http://localhost:3000/?ex=stale-closure-fix`
* Button (CSS Modules): `http://localhost:3000/?ex=button-css-module`
* Button (styled-components): `http://localhost:3000/?ex=button-styled`
* Progress (인라인 vs 외부 스타일) : `http://localhost:3000/?ex=progress-demo`
* CSS Modules 데모 : `http://localhost:3000/?ex=css-modules-demo`
* Context API: Theme 전역 관리 : `http://localhost:3000/?ex=context-theme-demo`

---

## 🧭 예제 목록

| 슬러그                   | 제목                  | 소스 코드                                 | 관련 글                                                                                                                                                |
| ----------------------- | --------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `jsx-basic`             | JSX 기본 예제 | `src/examples/JsxPractice.jsx` | https://bluesharehub.com/react-jsx-basics/ |
| `jsx-rules`             | JSX 문법 규칙 | `src/examples/JsxRules.jsx` | https://bluesharehub.com/react-jsx-rules/ |
| `props-demo`            | props 사용법 | `src/examples/PropsDemo.jsx` | https://bluesharehub.com/react-props-usage/ |
| `state-demo`            | state 예제 | `src/examples/StateDemo.jsx` | https://bluesharehub.com/react-state-usestate/ |
| `onclick`               | onClick 예제 | `src/examples/ClickExamples.jsx` | https://bluesharehub.com/react-event-handling-onclick-onchange-onsubmit/ |
| `onchange`              | onChange 예제 | `src/examples/ChangeExamples.jsx` | https://bluesharehub.com/react-event-handling-onclick-onchange-onsubmit/ |
| `onsubmit`              | onSubmit 예제 | `src/examples/SubmitExamples.jsx` | https://bluesharehub.com/react-event-handling-onclick-onchange-onsubmit/ |
| `window-size-watcher`   | 창 크기 추적 | `src/examples/WindowSizeWatcher.jsx` | https://bluesharehub.com/react-useeffect-dependency-lifecycle/ |
| `lifecycle-log`         | 생명주기 로그 | `src/examples/LifecycleLogDemo.jsx` | https://bluesharehub.com/react-useeffect-dependency-lifecycle/ |
| `users-fetcher`         | API 데이터 가져오기 | `src/examples/UsersFetcher.jsx` | https://bluesharehub.com/react-useeffect-dependency-lifecycle/ |
| `dom-control`           | DOM 제어 데모 | `src/examples/DomControlDemo.jsx` | https://bluesharehub.com/react-useref-usage/ |
| `input-focus`           | Input 포커스 제어 데모 | `src/examples/InputFocusDemo.jsx` | https://bluesharehub.com/react-useref-usage/ |
| `previous-value`        | 이전 값 저장 데모 | `src/examples/PreviousValueDemo.jsx` | https://bluesharehub.com/react-useref-usage/ |
| `list-base`             | BasicList 예제 (map과 key) | `src/examples/ListBase.jsx` | https://bluesharehub.com/react-list-rendering-map-key/ |
| `list-bad-index-key`    | 안티패턴: 인덱스를 key로 (map과 key) | `src/examples/ListBadIndexKey.jsx` | https://bluesharehub.com/react-list-rendering-map-key/ |
| `list-stable-key`       | 권장: 안정적인 id를 key로 (map과 key) | `src/examples/ListStableKey.jsx` | https://bluesharehub.com/react-list-rendering-map-key/ |
| `list-key-placement`    | key 위치: 부모 map에 key (map과 key) | `src/examples/ListKeyPlacement.jsx` | https://bluesharehub.com/react-list-rendering-map-key/ |
| `list-fragment-key`     | Fragment key 데모 | `src/examples/CategoryListDemo.jsx` | https://bluesharehub.com/react-list-rendering-map-key/ |
| `counter-with-reducer`  | CounterWithReducer (useReducer) | `src/examples/CounterWithReducer.jsx` | https://bluesharehub.com/react-usereducer-vs-usestate-migration/ |
| `signup-form-reduce`    | SignupForm (useReducer) | `src/examples/SignupFormReducer.jsx` | https://bluesharehub.com/react-usereducer-vs-usestate-migration/ |
| `expensive-calc-memo`   | ExpensiveCalcMemo (useMemo) | `src/examples/ExpensiveCalcMemo.jsx` | https://bluesharehub.com/react-usememo-performance/ |
| `memoized-list`         | MemoizedList (useMemo + React.memo) | `src/examples/MemoizedList.jsx` | https://bluesharehub.com/react-usememo-performance/ |
| `memoized-child-with-callback` | MemoizedChildWithCallback (useCallback + React.memo) | `src/examples/MemoizedChildWithCallback.jsx` | https://bluesharehub.com/react-usecallback-optimization/ |
| `stale-closure-fix`     | StaleClosureFix (useCallback) | `src/examples/StaleClosureFix.jsx` | https://bluesharehub.com/react-usecallback-optimization/ |
| `theme-switcher`        | useLocalStorage(커스텀 훅) 데모 | `src/examples/ThemeSwitcherDemo.jsx` | https://bluesharehub.com/react-custom-hooks-uselocalstorage-usefetch/ |
| `users-fetcher-safe`    | useFetch(커스텀 훅) 데모 | `src/examples/UsersFetcherSafe.jsx` | https://bluesharehub.com/react-custom-hooks-uselocalstorage-usefetch/ |
| `button-css-module`     | Button (CSS Modules) | `src/examples/ButtonModuleDemo.jsx` | https://bluesharehub.com/react-css-modules-vs-styled-components/ |
| `button-styled`         | Button (styled-components) | `src/examples/SButtonDemo.jsx` | https://bluesharehub.com/react-css-modules-vs-styled-components/ |
| `progress-demo`         | Progress (인라인 vs 외부 스타일) | `src/examples/ProgressDemo.jsx` | https://bluesharehub.com/react-inline-style-vs-external-style/ |
| `css-modules-demo`      | CSS Modules 데모 | `src/examples/CssModulesDemo.jsx` | https://bluesharehub.com/react-inline-style-vs-external-style/ |
| `context-theme-demo`    | Context API: Theme 전역 관리 | `src/examples/ContextThemeDemo.jsx` | https://bluesharehub.com/react-context-api-global-state/ |

> 블로그 글이 나중에 추가/변경되면 위 표의 링크도 같이 업데이트 됩니다.

---

## 🗂 프로젝트 구조

```
react-app/
├─ public/
│  └─ index.html           # 필수(루트 #root)
├─ src/
│  ├─ components/          # 재사용 가능한 UI 컴포넌트 모음
│  │  ├─ Button.module.jsx
│  │  ├─ Header.jsx
│  │  ├─ Progress.jsx
│  │  └─ Sbutton.jsx
│  ├─ context/             # 전역 상태·설정을 위한 React Context 모음
│  │  └─ theme.js
│  ├─ examples/            # 예제 컴포넌트 모음
│  │  ├─ ButtonModuleDemo.jsx
│  │  ├─ CategoryListDemo.jsx
│  │  ├─ ChangeExamples.jsx
│  │  ├─ ClickExamples.jsx
│  │  ├─ ContextThemeDemo.jsx
│  │  ├─ CounterWithReducer.jsx
│  │  ├─ CssModulesDemo.jsx
│  │  ├─ DomControlDemo.jsx
│  │  ├─ ExpensiveCalcMemo.jsx
│  │  ├─ InputFocusDemo.jsx
│  │  ├─ JsxPractice.jsx
│  │  ├─ JsxRules.jsx
│  │  ├─ LifecycleLogDemo.jsx
│  │  ├─ ListBadIndexKey.jsx
│  │  ├─ ListBase.jsx
│  │  ├─ ListKeyPlacement.jsx
│  │  ├─ ListStableKey.jsx
│  │  ├─ MemoizedChildWithCallback.jsx
│  │  ├─ MemoizedList.jsx
│  │  ├─ PreviousValueDemo.jsx
│  │  ├─ ProgressDemo.jsx
│  │  ├─ PropsDemo.jsx
│  │  ├─ SButtonDemo.jsx
│  │  ├─ SignupFormReducer.jsx
│  │  ├─ StaleClosureFix.jsx
│  │  ├─ StateDemo.jsx
│  │  ├─ SubmitExamples.jsx
│  │  ├─ ThemeSwitcherDemo.jsx
│  │  ├─ UsersFetcher.jsx
│  │  ├─ UsersFetcherSafe.jsx
│  │  └─ WindowSizeWatcher.jsx
│  ├─ hooks/               # 재사용 커스텀 훅 모음
│  │  ├─ useFetch.js
│  │  └─ useLocalStorage.js
│  ├─ styles/              # 전역/모듈 CSS 디렉터리
│  │  ├─ Button.module.css
│  │  ├─ Progress.module.css
│  │  └─ UiDemo.module.css
│  ├─ examples/index.js    # slug → { title, Component } 매핑
│  ├─ App.js               # ?ex=슬러그 로딩/드롭다운
│  ├─ App.css              # .container 등 페이지 기본 스타일
│  ├─ index.js             # 엔트리
│  └─ index.css
├─ .gitignore
├─ package.json
└─ README.md
```

---

## 🤝 기여/이슈

오타, 설명 보강, 예제 추가 PR 환영합니다. 이슈 등록 시 재현 환경(브라우저/OS/노드 버전)과 스크린샷을 함께 첨부해 주세요.

---

## 📄 라이선스

MIT License. 자유롭게 학습·연구·재사용하되, 출처(BlueShareHub)를 남겨주시면 큰 도움이 됩니다 🙏

---

## 🔵 BlueShareHub

* 메인: [https://bluesharehub.com](https://bluesharehub.com)
* IT 지식 · IT 공부 · 사이트 운영 · 생활정보
