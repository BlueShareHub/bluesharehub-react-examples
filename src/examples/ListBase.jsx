import React, { useRef, useState } from 'react';

const initialTodos = [
  { id: 't1', text: 'JSX 복습' },
  { id: 't2', text: '컴포넌트 구조 정리' },
  { id: 't3', text: 'map & key 예제 실습' },
];

export default function BasicList() {
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState('');
  const seqRef = useRef(4);

  const addTodo = () => {
    const text = input.trim();
    if (!text) return;
    setTodos((prev) => [...prev, { id: `t${seqRef.current++}`, text }]);
    setInput('');
  };

  return (
    <section style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8 }}>
      <h3>BasicList 예제 (map과 key)</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
        <input
          type="text"
          value={input}
          placeholder="할 일을 입력 후 Enter 또는 추가"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          style={{ flex: 1 }}
        />
        <button onClick={addTodo}>추가</button>
      </div>
    </section>
  );
}
