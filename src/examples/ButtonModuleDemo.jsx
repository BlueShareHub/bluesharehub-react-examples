// src/examples/ButtonModuleDemo.jsx
import React from 'react';
import Button from '../components/Button.module.jsx';

export default function ButtonModuleDemo() {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}
