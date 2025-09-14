// src/examples/index.js
import JsxPractice from './JsxPractice';
import JsxRules from './JsxRules';
import PropsDemo from './PropsDemo';
import StateDemo from './StateDemo';
import ClickExamples from './ClickExamples';
import ChangeExamples from './ChangeExamples';
import SubmitExamples from './SubmitExamples';
import WindowSizeWatcher from './WindowSizeWatcher';
import LifecycleLogDemo from './LifecycleLogDemo';
import UsersFetcher from './UsersFetcher';
import DomControlDemo from './DomControlDemo';
import InputFocusDemo from './InputFocusDemo';
import PreviousValueDemo from './PreviousValueDemo';

// slug -> { title, Component }
export const examples = {
  'jsx-basic':            { title: 'JSX 기본 예제',              Component: JsxPractice },
  'jsx-rules':            { title: 'JSX 문법 규칙',              Component: JsxRules },
  'props-demo':           { title: 'props 사용법',               Component: PropsDemo },
  'state-demo':           { title: 'state 예제',                 Component: StateDemo },
  'onclick':              { title: 'onClick 예제',               Component: ClickExamples },
  'onchange':             { title: 'onChange 예제',              Component: ChangeExamples },
  'onsubmit':             { title: 'onSubmit 예제',              Component: SubmitExamples },
  'window-size-watcher':  { title: 'WindowSizeWatcher 예제',     Component: WindowSizeWatcher },
  'lifecycle-log':        { title: 'LifecycleLogDemo 예제',      Component: LifecycleLogDemo },
  'users-fetcher':        { title: 'UsersFetcher 예제',          Component: UsersFetcher },
  'dom-control':          { title: 'DomControlDemo 예제',        Component: DomControlDemo },
  'input-focus':          { title: 'InputFocusDemo 예제',        Component: InputFocusDemo },
  'previous-value':       { title: 'PreviousValueDemo 예제',     Component: PreviousValueDemo },
};
