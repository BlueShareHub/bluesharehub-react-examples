import React, { useCallback, useEffect, useState } from 'react';

export default function StaleClosureFix() {
  const [count, setCount] = useState(0);

  // ❌ 나쁜 예: count를 참조하지만 deps가 [] → count=0만 본 채로 굳어버림
  // const tick = useCallback(() => setCount(count + 1), []);

  // ✅ 해결 1: 함수형 업데이트(이전 값을 인자로 수신)
  const tick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  // ✅ 해결 2: 정확한 deps 지정 (대신 매번 새 콜백이 됨)
  // const tick = useCallback(() => setCount(count + 1), [count]);

  useEffect(() => {
    const id = setInterval(tick, 500);
    return () => clearInterval(id);
  }, [tick]);

  return (
    <section style={{border:'1px solid #ddd', padding:12, borderRadius:8, maxWidth:420}}>
      <h3>StaleClosureFix (useCallback)</h3>
      <p>0.5초마다 카운트 업: <strong>{count}</strong></p>
      <p style={{color:'#64748b'}}>함수형 업데이트를 쓰면 deps 없이도 최신 값을 안전하게 업데이트합니다.</p>
    </section>
  );
}
