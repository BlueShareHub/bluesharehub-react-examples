// src/App.js
import React from 'react';
import { examples } from './examples';
import './App.css';

function App() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('ex') || 'jsx-basic'; // 기본값
  const entry = examples[slug];
  const Component = entry?.Component;

  return (
    <div className="container">
      <h1>React 예제</h1>

      {/* 드롭다운(선택 시 URL 갱신) */}
      <label>예제 선택: </label>
      <select
        style={{ height: 30, padding: '0 8px', boxSizing: 'border-box' }}
        value={slug}
        onChange={(e) => {
          const s = e.target.value;
          const url = new URL(window.location.href);
          url.searchParams.set('ex', s);
          window.history.pushState({}, '', url);
          window.location.reload();
        }}
      >
        {Object.entries(examples).map(([key, value]) => (
          <option key={key} value={key}>{value.title}</option>
        ))}
      </select>

      <hr />

      {!Component ? (
        <p>예제를 찾을 수 없습니다.</p>
      ) : (
        <Component />
      )}
    </div>
  );
}

export default App;
