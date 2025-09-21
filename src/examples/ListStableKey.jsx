import React, { useState } from 'react';

const seed = [
  { id: 'a', label: '사과',   note: '' },
  { id: 'b', label: '바나나', note: '' },
  { id: 'c', label: '체리',   note: '' },
];

export default function ListStableKey() {
  const [items, setItems] = useState(seed);
  const [asc, setAsc] = useState(true);

  const sortToggle = () => {
    const sorted = [...items].sort((x, y) =>
      asc ? x.label.localeCompare(y.label) : y.label.localeCompare(x.label)
    );
    setAsc(!asc);
    setItems(sorted);
  };

  const addFront = () => {
    setItems([{ id: String(Date.now()), label: '신규', note: '' }, ...items]);
  };

  const updateNote = (id, value) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, note: value } : it)));
  };

  return (
    <section style={{ border: '1px solid #10b981', padding: 12, borderRadius: 8 }}>
      <h3 style={{ color: '#065f46' }}>권장: 안정적인 id를 key로 (map과 key)</h3>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={sortToggle}>정렬 토글</button>
        <button onClick={addFront}>맨 앞에 추가</button>
      </div>

      {items.map((item) => (
        // ✅ 좋은 예: stable id를 key로 사용
        <div
          key={item.id}
          style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 8, marginBottom: 8 }}
        >
          <strong>{item.label}</strong>
          <input
            placeholder="메모를 입력"
            value={item.note}
            onChange={(e) => updateNote(item.id, e.target.value)}
          />
        </div>
      ))}

      <p style={{ color: '#065f46', marginTop: 8 }}>
        정렬/추가 후에도 메모가 해당 항목에 안정적으로 유지됩니다.
      </p>
    </section>
  );
}
