import React, { useState } from 'react';

function ClickExamples() {
  const [count, setCount] = useState(0);

  // 분리한 핸들러 (권장)
  const handleIncrement = () => setCount((c) => c + 1);

  // 매개변수 전달 (화살표로 감싸기)
  const handleGreet = (name) => {
    alert(`안녕하세요, ${name}!`);
  };

  // 전파 차단 / 기본동작 취소 예시
  const handleOuter = () => alert('바깥 DIV 클릭');
  const handleInner = (e) => {
    e.stopPropagation(); // 버블링 중단
    alert('버튼만 처리 (전파 차단됨)');
  };
  const handleLink = (e) => {
    e.preventDefault(); // a 태그 기본 이동 막기
    alert('페이지 이동 대신 커스텀 로직 실행');
  };

  return (
    <section style={{border:'1px solid #ddd', padding:12, borderRadius:8}}>
      <h4>onClick 예제</h4>
      <p>카운트: {count}</p>
      <button onClick={handleIncrement} type="button">+1</button>
       
      <button onClick={() => handleGreet('BlueShareHub')} type="button">인사하기</button>

      <div onClick={handleOuter} style={{marginTop:12, padding:12, background:'#f8f8f8'}}>
        <button onClick={handleInner} type="button">전파 차단 테스트</button>
      </div>

      <p style={{marginTop:12}}>
        <a href="https://bluesharehub.com" onClick={handleLink}>bluesharehub.com 로 이동 (막힘)</a>
      </p>
    </section>
  );
}

export default ClickExamples;