import React, { memo, useMemo, useState } from 'react';

const Row = memo(function Row({ item }) {
  return <li>{item.name} — {item.score}</li>;
});

const makeData = () =>
  Array.from({length: 2000}).map((_, i) => ({
    id: i+1,
    name: `User ${i+1}`,
    score: Math.floor(Math.random()*1000),
  }));

export default function MemoizedList() {
  const [data] = useState(makeData); // 최초 한 번 생성
  const [query, setQuery] = useState('');
  const [min, setMin] = useState(500);

  const filteredSorted = useMemo(() => {
    const q = query.toLowerCase();
    // 원본 불변성 유지: filter로 새 배열 생성 후, 정렬은 복사본에 수행
    const f = data.filter(d => d.score >= min && d.name.toLowerCase().includes(q));
    return [...f].sort((a,b) => b.score - a.score).slice(0, 50);
  }, [data, query, min]);

  return (
    <section style={{border:'1px solid #ddd', padding:12, borderRadius:8}}>
      <h3>MemoizedList (useMemo + React.memo)</h3>

      <div style={{display:'flex', gap:8}}>
        <input
          placeholder="이름 검색"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />
        <input
          type="number"
          value={min}
          onChange={(e)=>setMin(Number(e.target.value)||0)}
          style={{width:120}}
        />
      </div>

      <ul style={{marginTop:8}}>
        {filteredSorted.map(item => <Row key={item.id} item={item} />)}
      </ul>

      <p style={{color:'#64748b'}}>검색/최소점수 변경 때만 파생 리스트를 재계산합니다.</p>
    </section>
  );
}
