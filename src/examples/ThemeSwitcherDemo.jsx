import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function ThemeSwitcherDemo() {
  const [theme, setTheme, reset] = useLocalStorage('demo-theme', 'light');
  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  const styles = theme === 'dark'
    ? { background: '#111', color: '#fff', padding: 12 }
    : { background: '#f7f7f7', color: '#222', padding: 12 };

  return (
    <div style={styles}>
      <h3>useLocalStorage 데모</h3>
      <p>현재 테마: <strong>{theme}</strong></p>
      <button onClick={toggle}>테마 토글</button>
      <button onClick={reset} style={{ marginLeft: 8 }}>리셋</button>
      <p style={{ marginTop: 8 }}>새로고침/다른 탭에서도 값이 유지되는지 확인하세요.</p>
    </div>
  );
}