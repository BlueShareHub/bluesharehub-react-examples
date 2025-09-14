import React, { useEffect, useState } from 'react';

function WindowSizeWatcher() {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });

  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', onResize);
    onResize(); // 최초 동기화
    return () => window.removeEventListener('resize', onResize); // 언마운트 시 정리
  }, []);

  return (
    <section style={{border:'1px solid #ddd', padding:12, borderRadius:8}}>
      <h4>WindowSizeWatcher 예제</h4>
      <p>현재 창 크기</p>
      <div>
        <span>가로: {size.w}px</span>
      </div>
      <div>
        <span>세로: {size.h}px</span>
      </div>
      <hr/>
      <pre style={{background:'#f6f8fa', padding:8}}>
        {JSON.stringify(size, null, 2)}
      </pre>
    </section>
  );
}

export default WindowSizeWatcher;
