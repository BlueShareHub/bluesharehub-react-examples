import React, { useState } from 'react';

const seed = [
  {
    code: 'fruit',
    name: '과일',
    items: [
      { id: 'f1', title: '사과' },
      { id: 'f2', title: '바나나' },
      { id: 'f3', title: '체리' },
    ],
  },
  {
    code: 'veg',
    name: '야채',
    items: [
      { id: 'v1', title: '당근' },
      { id: 'v2', title: '오이' },
    ],
  },
];

export default function CategoryListDemo() {
  const [data, setData] = useState(seed);
  const [asc, setAsc] = useState(true);

  const sortCats = () => {
    const sorted = [...data].sort((a, b) =>
      asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setAsc(!asc);
    setData(sorted);
  };

  const addCategory = () => {
    const t = Date.now();
    setData((prev) => [
      { code: `new-${t}`, name: `신규 카테고리 ${prev.length + 1}`, items: [] },
      ...prev,
    ]);
  };

  const addItemTo = (code) => {
    const t = Date.now();
    setData((prev) =>
      prev.map((c) =>
        c.code === code
          ? { ...c, items: [...c.items, { id: `i-${t}`, title: `추가 ${c.items.length + 1}` }] }
          : c
      )
    );
  };

  return (
    <section style={{ border: '1px solid #93c5fd', padding: 12, borderRadius: 8 }}>
      <h3 style={{ color: '#1e40af' }}>Fragment key 데모 (카테고리/하위 아이템)</h3>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={sortCats}>카테고리 정렬 토글</button>
        <button onClick={addCategory}>카테고리 맨 앞에 추가</button>
      </div>

      <div>
        {data.map((cat) => (
          // ✅ 그룹(제목+리스트)을 하나의 Fragment로 묶고, 카테고리 식별자에 key 부여
          <React.Fragment key={cat.code}>
            <h4 style={{ marginBottom: 6 }}>
              {cat.name}{' '}
              <button onClick={() => addItemTo(cat.code)} style={{ marginLeft: 8 }}>
                이 카테고리에 아이템 추가
              </button>
            </h4>
            <ul style={{ marginTop: 0, marginBottom: 16 }}>
              {cat.items.map((it) => (
                <li key={it.id}>{it.title}</li> // ✅ 하위 아이템에는 item id를 key로
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
