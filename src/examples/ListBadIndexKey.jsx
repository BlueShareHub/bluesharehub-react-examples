import React, { useState } from 'react';

const seed = [
  { id: 'a', label: '사과',   note: '' },
  { id: 'b', label: '바나나', note: '' },
  { id: 'c', label: '체리',   note: '' },
];

export default function ListBadIndexKey() {
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

  return (
    <section style={{ border: '1px solid #f87171', padding: 12, borderRadius: 8 }}>
      <h3 style={{ color: '#b91c1c' }}>안티패턴: 인덱스를 key로 (map과 key)</h3>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={sortToggle}>정렬 토글</button>
        <button onClick={addFront}>맨 앞에 추가</button>
      </div>

      {items.map((item, index) => (
        // ❌ 나쁜 예: key로 인덱스를 사용 (정렬/삽입 시 상태가 섞임)
        <div
          key={index}
          style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 8, marginBottom: 8 }}
        >
          <strong>{item.label}</strong>
          <input
            placeholder="메모를 입력"
            value={item.note}
            onChange={(e) => {
              const next = [...items];
              next[index] = { ...next[index], note: e.target.value };
              setItems(next);
            }}
          />
        </div>
      ))}

      <p style={{ color: '#b91c1c', marginTop: 8 }}>
        정렬/추가 후 입력한 메모가 다른 항목으로 이동하는 현상을 확인해 보세요.
      </p>
    </section>
  );
}
