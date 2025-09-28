import React, { memo, useCallback, useState } from 'react';

// 메모된 자식: 동일 props면 리렌더 생략
const Row = memo(function Row({ item, onInc }) {
  console.log('Row render:', item.id); // 개발자도구에서 렌더 횟수 확인용
  return (
    <li style={{display:'flex', alignItems:'center', gap:8}}>
      {item.label}
      <button onClick={() => onInc(item.id)}>+1</button>
    </li>
  );
});

const seed = [
  { id: 1, label: '🍎 사과' },
  { id: 2, label: '🍌 바나나' },
  { id: 3, label: '🍒 체리' },
];

export default function MemoizedChildWithCallback() {
  const [text, setText] = useState('');
  const [counts, setCounts] = useState({ 1: 0, 2: 0, 3: 0 });

  // ❌ 나쁜 예: 매 렌더마다 새 함수 → 자식이 매번 리렌더
  // const onInc = (id) => setCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));

  // ✅ 좋은 예: 참조 안정화 (deps가 바뀔 때만 동일 참조 유지)
  const onInc = useCallback((id) => {
    setCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  }, []); // setState 업데이터는 안전하므로 deps 비움

  return (
    <section style={{border:'1px solid #ddd', padding:12, borderRadius:8, maxWidth:540}}>
      <h3>MemoizedChildWithCallback (useCallback + React.memo)</h3>

      <div style={{display:'flex', gap:8, marginBottom:8}}>
        <input
          placeholder="부모의 text (자식과 무관)"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{flex:1}}
        />
        <span style={{color:'#64748b'}}>text 길이: {text.length}</span>
      </div>

      <ul>
        {seed.map((it) => (
          <Row key={it.id} item={it} onInc={onInc} />
        ))}
      </ul>

      <hr />
      <p>현재 카운트: 🍎 {counts[1]} / 🍌 {counts[2]} / 🍒 {counts[3]}</p>
      <p style={{color:'#64748b'}}>
        입력창에 타이핑해도 Row가 찍히지 않으면(콘솔 로그 확인) 최적화 성공!</p>
    </section>
  );
}