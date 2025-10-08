// src/components/Button.module.jsx
import React from 'react';
import styles from '../styles/Button.module.css';

export default function Button({ children, variant = 'default', ...props }) {
  const cls = [styles.btn, variant === 'primary' && styles.primary].filter(Boolean).join(' ');
  return <button className={cls} {...props}>{children}</button>;
}
