import React, { createContext, useContext, useState, useMemo } from "react";

const ThemeContext = createContext(null);
// 디버깅에 도움
ThemeContext.displayName = "ThemeContext";

// 안전한 접근용 커스텀 훅
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx; // { theme, setTheme, toggle }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  // value는 메모이제이션하여 불필요 리렌더 최소화
  const value = useMemo(() => ({ theme, setTheme, toggle }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
