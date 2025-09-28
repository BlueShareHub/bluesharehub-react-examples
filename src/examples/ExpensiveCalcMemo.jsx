import React, { useMemo, useState } from 'react';

function heavyFib(n) {
  if (n < 2) return n;
  return heavyFib(n - 1) + heavyFib(n - 2); // 일부러 O(2^n)
}

export default function ExpensiveCalcMemo() {
  const [n, setN] = useState(35);
  const [label, setLabel] = useState('메모 데모');

  const fib = useMemo(() => heavyFib(n), [n]);

  return (
    <section style={{border:'1px solid #ddd', padding:12, borderRadius:8, maxWidth:520}}>
      <h3>ExpensiveCalcMemo (useMemo)</h3>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
        <label>
          n:
          <input
            type="number"
            value={n}
            onChange={(e)=>setN(Number(e.target.value)||0)}
            style={{marginLeft:6, width:100}}
          />
        </label>

        <label>
          라벨:
          <input
            value={label}
            onChange={(e)=>setLabel(e.target.value)}
            style={{marginLeft:6}}
          />
        </label>
      </div>

      <p style={{marginTop:8}}>fib({n}) = <strong>{fib}</strong></p>
      <p style={{color:'#64748b'}}>라벨만 바꿔도 fib 재계산은 일어나지 않습니다.</p>
    </section>
  );
}