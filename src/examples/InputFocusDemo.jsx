import React, { useEffect, useRef } from 'react';

function InputFocusDemo() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  // 마운트 시 첫 입력창 자동 포커스
  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const focusNext = () => emailRef.current?.focus();

  return (
    <section style={{border:'1px solid #ddd', padding:12, borderRadius:8}}>
      <h4>InputFocusDemo 예제</h4>
      <p>첫 렌더링 시 이름 입력창에 포커스가 자동으로 이동하고, Enter 입력 시 이메일 입력창으로 넘어갑니다.</p>

      <label>이름</label>
      <input
        ref={nameRef}
        placeholder="이름 입력"
        onKeyDown={(e) => { if (e.key === 'Enter') focusNext(); }}
        style={{display:'block', width:'100%', marginBottom:8}}
      />

      <label>이메일</label>
      <input
        ref={emailRef}
        placeholder="email@example.com"
        style={{display:'block', width:'100%', marginBottom:8}}
      />

      <button onClick={focusNext}>다음 입력으로 포커스</button>

    </section>
  );
}

export default InputFocusDemo;
