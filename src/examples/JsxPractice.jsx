import React from 'react';

function JsxPractice() {
  const items = ['React', 'JSX', 'Props'];
  const hasTopics = items.length > 0;

  return (
    <div>
      <h2>JSX 예제 컴포넌트</h2>
      <p>다양한 JSX 문법 기능을 확인해 보세요.</p>

      {/* 표현식 삽입 */}
      <p>오늘의 학습 주제: {items[0]}</p>

      {/* 논리 연산자 && */}
      {hasTopics && <p>총 {items.length}개의 주제가 있습니다.</p>}

      {/* 삼항 연산자 ?: */}
      {items.length > 2 ? (
        <p>3개 이상의 주제가 준비되어 있습니다.</p>
      ) : (
        <p>주제가 충분하지 않습니다.</p>
      )}

      {/* 리스트 렌더링 */}
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default JsxPractice;