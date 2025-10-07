import { useEffect, useState, useCallback } from 'react';

export default function useLocalStorage(key, initialValue) {
  const read = () => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const v = window.localStorage.getItem(key);
      return v !== null ? JSON.parse(v) : initialValue;
    } catch { return initialValue; }
  };

  const [value, setValue] = useState(read);

  useEffect(() => {
    try { window.localStorage.setItem(key, JSON.stringify(value)); } catch {}
  }, [key, value]);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === key) {
        try {
          setValue(e.newValue !== null ? JSON.parse(e.newValue) : initialValue);
        } catch {}
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [key, initialValue]);

  const reset = useCallback(() => {
    try { window.localStorage.removeItem(key); } catch {}
    setValue(initialValue);
  }, [key, initialValue]);

  return [value, setValue, reset];
}