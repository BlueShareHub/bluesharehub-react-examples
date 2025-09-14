import React from 'react';

// Card: children과 스타일 예시
function Card({ heading = '제목 없음', children }) {
  const box = { border:'1px solid #e5e5e5', padding:'12px', borderRadius:'10px', margin:'10px 0' };
  return (
    <section style={box}>
      <h3>{heading}</h3>
      {children}
    </section>
  );
}

// Info: ES6 기본 매개변수로 기본값 제공
function Info({ name = '게스트', count = 0, onHello = () => alert('안녕!') }) {
  return (
    <div>
      <p>{name}님 환영합니다. 알림 {count}개.</p>
      <button onClick={onHello}>인사하기</button>
    </div>
  );
}

// 통합 Parent
export default function PropsDemo() {
  const user = { name: 'BlueShare', role: 'Admin' };
  const greet = () => alert(`Hello, ${user.name}!`);

  return (
    <div style={{ padding:'16px' }}>
      <h2>props 통합 예제</h2>

      {/* 기본 문법: 다양한 타입의 props 전달 */}
      <Info name={user.name} count={3} onHello={greet} />

      {/* children: 래핑된 콘텐츠 전달 */}
      <Card heading="공지">
        <p>이번 주 시스템 점검이 예정되어 있습니다.</p>
        <button>자세히 보기</button>
      </Card>

      {/* 기본값 동작 확인: name, count, onHello 미전달 */}
      <Card heading="기본값 테스트">
        <Info />
      </Card>
    </div>
  );
}
