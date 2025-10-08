// src/examples/SButtonDemo.jsx
import React from 'react';
import { SButton } from '../components/SButton'; // 이름 export 임포트

export default function SButtonDemo() {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <SButton>Default</SButton>
      <SButton $primary>Primary</SButton>
      <SButton disabled>Disabled</SButton>
    </div>
  );
}
