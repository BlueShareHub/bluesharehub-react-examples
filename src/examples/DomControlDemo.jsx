import React, { useRef } from 'react';

function DomControlDemo() {
  const boxRef = useRef(null);

  const scrollToBox = () => {
    boxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const highlight = () => {
    const el = boxRef.current;
    if (!el) return;
    el.style.transition = 'box-shadow 300ms';
    el.style.boxShadow = '0 0 0 3px #3b82f6 inset';
    setTimeout(() => { if (el) el.style.boxShadow = 'none'; }, 700);
  };

  return (
    <section style={{border:'1px solid #ddd', padding:12, borderRadius:8, height:600, overflowY:'auto'}}>
      <h4>DomControlDemo 예제</h4>
      <p>버튼으로 대상 박스로 스크롤하고, 테두리를 잠시 하이라이트합니다.</p>

      <div style={{display:'flex', gap:8, marginBottom:12}}>
        <button onClick={scrollToBox}>해당 영역으로 스크롤</button>
        <button onClick={highlight}>하이라이트</button>
      </div>

      {/* 스크롤 공간용 플레이스홀더 */}
      {Array.from({ length: 4 }).map((_, i) => <div key={i} style={{ height: 80 }} />)}

      <div
        ref={boxRef}
        style={{
          height:160,
          background:'#f8fafc',
          border:'1px solid #94a3b8',
          borderRadius:8,
          display:'grid',
          placeItems:'center',
          fontWeight:'bold'
        }}
      >
        타깃 상자 (ref 대상)
      </div>

      {Array.from({ length: 8 }).map((_, i) => <div key={i} style={{ height: 80 }} />)}
    </section>
  );
}

export default DomControlDemo;
