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
import ListBase from './ListBase';
import ListBadIndexKey from './ListBadIndexKey';
import ListStableKey from './ListStableKey';
import ListKeyPlacement from './ListKeyPlacement';
import CategoryListDemo from './CategoryListDemo';
import CounterWithReducer from './CounterWithReducer';
import SignupFormReducer from './SignupFormReducer';
import ExpensiveCalcMemo from './ExpensiveCalcMemo';
import MemoizedList from './MemoizedList';
import MemoizedChildWithCallback from './MemoizedChildWithCallback';
import StaleClosureFix from './StaleClosureFix';
import ThemeSwitcherDemo from './ThemeSwitcherDemo';
import UsersFetcherSafe from './UsersFetcherSafe';
import ButtonModuleDemo from './ButtonModuleDemo.jsx';
import SButtonDemo from './SButtonDemo';
import ProgressDemo from './ProgressDemo';
import CssModulesDemo from './CssModulesDemo';

// slug -> { title, Component }
export const examples = {
  'jsx-basic':            { title: 'JSX 기본 예제',                        Component: JsxPractice },
  'jsx-rules':            { title: 'JSX 문법 규칙',                        Component: JsxRules },
  'props-demo':           { title: 'props 사용법',                         Component: PropsDemo },
  'state-demo':           { title: 'state 예제',                           Component: StateDemo },
  'onclick':              { title: 'onClick 예제',                         Component: ClickExamples },
  'onchange':             { title: 'onChange 예제',                        Component: ChangeExamples },
  'onsubmit':             { title: 'onSubmit 예제',                        Component: SubmitExamples },
  'window-size-watcher':  { title: 'WindowSizeWatcher 예제',               Component: WindowSizeWatcher },
  'lifecycle-log':        { title: 'LifecycleLogDemo 예제',                Component: LifecycleLogDemo },
  'users-fetcher':        { title: 'UsersFetcher 예제',                    Component: UsersFetcher },
  'dom-control':          { title: 'DomControlDemo 예제',                  Component: DomControlDemo },
  'input-focus':          { title: 'InputFocusDemo 예제',                  Component: InputFocusDemo },
  'previous-value':       { title: 'PreviousValueDemo 예제',               Component: PreviousValueDemo },
  'list-base':            { title: 'BasicList 예제 (map과 key)',           Component: ListBase },
  'list-bad-index-key':   { title: '안티패턴: 인덱스를 key로 (map과 key)',  Component: ListBadIndexKey },
  'list-stable-key':      { title: '권장: 안정적인 id를 key로 (map과 key)', Component: ListStableKey },
  'list-key-placement':   { title: 'key 위치: 부모 map에 key (map과 key)',  Component: ListKeyPlacement },
  'list-fragment-key':    { title: 'Fragment key 데모',                    Component: CategoryListDemo },
  'counter-with-reducer': { title: 'CounterWithReducer (useReducer)',      Component: CounterWithReducer },
  'signup-form-reducer':  { title: 'SignupForm (useReducer)',              Component: SignupFormReducer },
  'expensive-calc-memo':  { title: 'ExpensiveCalcMemo (useMemo)',          Component: ExpensiveCalcMemo },
  'memoized-list':        { title: 'MemoizedList (useMemo + React.memo)',  Component: MemoizedList },
  'memoized-child-with-callback': { title: 'MemoizedChildWithCallback (useCallback + React.memo)',  Component: MemoizedChildWithCallback },
  'stale-closure-fix':    { title: 'StaleClosureFix (useCallback)',        Component: StaleClosureFix },
  'theme-switcher':       { title: 'useLocalStorage(커스텀 훅) 데모',       Component: ThemeSwitcherDemo },
  'users-fetcher-safe':   { title: 'useFetch(커스텀 훅) 데모',              Component: UsersFetcherSafe },
  'button-css-module':    { title: 'Button (CSS Modules)',                 Component: ButtonModuleDemo },
  'button-styled':        { title: 'Button (styled-components)',           Component: SButtonDemo },
  'progress-demo':        { title: 'Progress (인라인 vs 외부 스타일)',      Component: ProgressDemo },
  'css-modules-demo':     { title: 'CSS Modules 데모',                     Component: CssModulesDemo },
};
