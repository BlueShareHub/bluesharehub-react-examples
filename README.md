# React Examples by BlueShare

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

> GitHub Pages로 배포하면 위 URL의 호스트만 바꾸면 됩니다.
> 예: `https://<your-id>.github.io/<repo>/?ex=users-fetcher`

---

## 🧭 예제 목록

| 슬러그                   | 제목           | 소스 코드                                | 관련 글                                                                                                                                                 |
| --------------------- | ------------ | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `jsx-basic`           | JSX 기본 예제    | `src/examples/JsxPractice.jsx`       | [https://bluesharehub.com/react-jsx-basics/](https://bluesharehub.com/react-jsx-basics/)                                                             |
| `jsx-rules`           | JSX 문법 규칙    | `src/examples/JsxRules.jsx`          | [https://bluesharehub.com/react-jsx-rules/](https://bluesharehub.com/react-jsx-rules/)                                                               |
| `props-demo`          | props 사용법    | `src/examples/PropsDemo.jsx`         | [https://bluesharehub.com/react-props-usage/](https://bluesharehub.com/react-props-usage/)                                                           |
| `state-demo`          | state 예제     | `src/examples/StateDemo.jsx`         | [https://bluesharehub.com/react-state-usestate/](https://bluesharehub.com/react-state-usestate/)                                                     |
| `onclick`             | onClick 예제   | `src/examples/ClickExamples.jsx`     | [https://bluesharehub.com/react-event-handling-onclick-onchange-onsubmit/](https://bluesharehub.com/react-event-handling-onclick-onchange-onsubmit/) |
| `onchange`            | onChange 예제  | `src/examples/ChangeExamples.jsx`    | ↑ 동일                                                                                                                                                 |
| `onsubmit`            | onSubmit 예제  | `src/examples/SubmitExamples.jsx`    | ↑ 동일                                                                                                                                                 |
| `window-size-watcher` | 창 크기 추적      | `src/examples/WindowSizeWatcher.jsx` | [https://bluesharehub.com/react-useeffect-dependency-lifecycle/](https://bluesharehub.com/react-useeffect-dependency-lifecycle/)                     |
| `lifecycle-log`       | 생명주기 로그      | `src/examples/LifecycleLogDemo.jsx`  | ↑ 동일                                                                                                                                                 |
| `users-fetcher`       | API 데이터 가져오기 | `src/examples/UsersFetcher.jsx`      | ↑ 동일                                                                                                                                                 |

> 블로그 글이 나중에 추가/변경되면 위 표의 링크만 업데이트하면 됩니다.

---

## 🗂 프로젝트 구조

```
react-app/
├─ public/
│  └─ index.html           # 필수(루트 #root)
├─ src/
│  ├─ examples/            # 예제 컴포넌트 모음
│  │  ├─ ClickExamples.jsx
│  │  ├─ ChangeExamples.jsx
│  │  ├─ SubmitExamples.jsx
│  │  ├─ WindowSizeWatcher.jsx
│  │  ├─ LifecycleLogDemo.jsx
│  │  ├─ UsersFetcher.jsx
│  │  ├─ JsxPractice.jsx
│  │  ├─ JsxRules.jsx
│  │  ├─ PropsDemo.jsx
│  │  └─ StateDemo.jsx
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

## 🔗 블로그에서 “실행/소스 보기” 버튼 넣기 (복사용)

```html
<p>
  ▶ 실행하기:
  <a href="https://<your-id>.github.io/<repo>/?ex=users-fetcher" target="_blank" rel="noopener">
    UsersFetcher 데모
  </a>
  &nbsp;|&nbsp;
  💾 소스 보기:
  <a href="https://github.com/<your-id>/<repo>/blob/main/src/examples/UsersFetcher.jsx" target="_blank" rel="noopener">
    UsersFetcher.jsx
  </a>
</p>
```

> 블로그 각 글 하단에 **실행 링크 + 소스 링크**를 함께 두면 UX/SEO에 모두 유리합니다.

---

## 🛠 개발 메모

* **스타일**: `src/App.css` 의 `.container` 로 좌우 여백과 최대 폭만 간단히 지정
* **라우팅**: 간단히 `URLSearchParams`로 처리. 필요하면 react-router로 확장 가능
* **코드 스플리팅(선택)**: 예제가 많아지면 `React.lazy`/`Suspense`로 지연 로딩 권장
* **정적 배포**: GitHub Pages 사용 시

  ```bash
  npm run build
  # dist를 gh-pages 브랜치로 배포하거나, gh-pages 패키지를 사용하세요.
  ```

---

## 🤝 기여/이슈

오타, 설명 보강, 예제 추가 PR 환영합니다. 이슈 등록 시 재현 환경(브라우저/OS/노드 버전)과 스크린샷을 함께 첨부해 주세요.

---

## 📄 라이선스

MIT License. 자유롭게 학습·연구·재사용하되, 출처(BlueShare)를 남겨주시면 큰 도움이 됩니다 🙏

---

## 🔵 BlueShare

* 메인: [https://bluesharehub.com](https://bluesharehub.com)
* IT 지식 · IT 공부 · 사이트 운영 · 생활정보
