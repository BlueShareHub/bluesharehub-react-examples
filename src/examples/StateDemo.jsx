import React, { useState } from 'react';

export default function StateDemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['React 공부하기']);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input) return;
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div style={{ padding: '16px' }}>
      <h2>state 통합 예제</h2>

      {/* 카운터 */}
      <div>
        <p>카운트: {count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>

      {/* 할 일 목록 */}
      <div>
        <h3>할 일 목록</h3>
        <ul>
          {todos.map((todo, idx) => (
            <li key={idx}>{todo}</li>
          ))}
        </ul>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>추가</button>
      </div>
    </div>
  );
}
