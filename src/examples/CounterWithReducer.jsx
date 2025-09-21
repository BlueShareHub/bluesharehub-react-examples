import React, { useReducer } from 'react';

const initialState = { value: 0, step: 1, max: 10 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment': {
      const next = state.value + state.step;
      return { ...state, value: Math.min(next, state.max) };
    }
    case 'decrement': {
      const next = state.value - state.step;
      return { ...state, value: Math.max(next, 0) };
    }
    case 'changeStep': {
      const step = Number(action.payload) || 1;
      return { ...state, step };
    }
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export default function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section style={{border:'1px solid #ddd', padding:12, borderRadius:8, maxWidth:420}}>
      <h3>CounterWithReducer (useReducer)</h3>
      <p>값: <strong>{state.value}</strong> / 최대 {state.max}</p>

      <div style={{display:'flex', gap:8, margin:'8px 0'}}>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'reset' })}>리셋</button>
      </div>

      <label>스텝 변경</label>
      <input
        type="number"
        value={state.step}
        onChange={(e) => dispatch({ type: 'changeStep', payload: e.target.value })}
        style={{width:100, marginLeft:8}}
      />
    </section>
  );
}
