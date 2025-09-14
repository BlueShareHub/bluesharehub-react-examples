// src/examples/JsxRules.jsx
import React from 'react';

export default function JsxRules() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ color: "teal" }}>
        JSX 문법 규칙: 인라인 스타일링·className·닫는 태그·주석
      </h2>

      {/* 1. 인라인 스타일링 (카멜 표기법) */}
      <div style={{ backgroundColor: "lightblue", fontSize: "18px", margin: "10px 0" }}>
        인라인 스타일링 예제 (backgroundColor, fontSize)
      </div>

      {/* 2. className 사용 */}
      <p className="jsx-text">
        class 대신 className 사용 예제
      </p>

      {/* 3. 반드시 닫는 태그 */}
      <div>
        <br /> {/* 줄바꿈도 닫아야 함 */}
        <img
          src="https://bluesharehub.com/wp-content/uploads/2023/07/BS_logo-160x40.png"
          alt="샘플 이미지"
          style={{ border: "1px solid #ccc" }}
        />
      </div>

      {/* 4. JSX 주석 */}
      {/* 아래 문장은 JSX 주석 예제 */}
      <p>이 문장은 JSX 주석 아래에 있는 문장입니다.</p>
    </div>
  );
}
