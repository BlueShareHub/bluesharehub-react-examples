import React, { useEffect, useRef, useState } from 'react';

function PreviousValueDemo() {
  const [text, setText] = useState('');
  const prevTextRef = useRef(text);   // 초기값을 현재 값으로 저장

  // text가 바뀔 때마다 '이전 값 저장소' 갱신
  useEffect(() => {
    prevTextRef.current = text;
  }, [text]);

  // 리렌더 없이 누적 카운트 저장 (UI 보조 정보용)
  const changeCountRef = useRef(0);
  useEffect(() => {
    changeCountRef.current += 1;
  }, [text]);

  return (
    <section style={{border:'1px solid #ddd', padding:12, borderRadius:8}}>
      <h4>PreviousValueDemo 예제</h4>
      <p>입력할 때마다 현재 값과 이전 값을 나란히 보여주고, 변경 횟수는 ref에 누적됩니다.</p>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="아무 내용이나 입력"
        style={{display:'block', width:'100%', marginBottom:12}}
      />

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
        <div style={{background:'#f8fafc', padding:8, borderRadius:6}}>
          <strong>현재 값</strong>
          <pre style={{margin:0}}>{text || '(빈 문자열)'}</pre>
        </div>
        <div style={{background:'#fff7ed', padding:8, borderRadius:6}}>
          <strong>이전 값 (ref)</strong>
          <pre style={{margin:0}}>{prevTextRef.current || '(초기값)'}</pre>
        </div>
      </div>

      <p style={{marginTop:8, color:'#64748b'}}>
        변경 횟수(리렌더 없이 ref로 누적): {changeCountRef.current}
      </p>

      <hr/>
      <pre style={{background:'#f6f8fa', padding:8}}>
        {JSON.stringify(
          { current: text, previous: prevTextRef.current, changes: changeCountRef.current },
          null,
          2
        )}
      </pre>
    </section>
  );
}

export default PreviousValueDemo;
