import React, { memo, useState } from 'react';

const seed = [
  { id: 'a', label: '사과',   note: '' },
  { id: 'b', label: '바나나', note: '' },
  { id: 'c', label: '체리',   note: '' },
];

// 행 컴포넌트는 memo로 불필요 렌더를 줄임
const Row = memo(function Row({ item, onChange }) {
  return (
    <div style={{display:'grid', gridTemplateColumns:'120px 1fr', gap:8, marginBottom:8}}>
      <strong>{item.label}</strong>
      <input
        value={item.note}
        onChange={(e) => onChange(item.id, e.target.value)}
        placeholder="메모"
      />
    </div>
  );
});

// ✅ key는 map을 호출하는 “부모” 쪽에서 지정
function KeyPlacementList({ items, onChange }) {
  return (
    <div>
      {items.map((it) => (
        <Row key={it.id} item={it} onChange={onChange} />
      ))}
    </div>
  );
}

export default function ListKeyPlacement() {
  const [items, setItems] = useState(seed);

  const updateNote = (id, value) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, note: value } : it)));
  };

  return (
    <section style={{ border: '1px solid #60a5fa', padding: 12, borderRadius: 8 }}>
      <h3 style={{ color: '#1d4ed8' }}>key 위치: 부모 map에 key (map과 key)</h3>
      <p style={{marginTop:0, color:'#475569'}}>
        행(Row)을 분리했을 때도 key는 <em>반복을 수행하는 부모</em> 쪽에 둡니다.
      </p>
      <KeyPlacementList items={items} onChange={updateNote} />
    </section>
  );
}
