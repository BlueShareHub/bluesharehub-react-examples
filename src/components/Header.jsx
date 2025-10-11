import React from "react";
import { useTheme } from "../context/theme";

export default function Header() {
  const { theme, toggle } = useTheme();
  return (
    <header
      style={{
        padding: "12px 16px",
        background: theme === "light" ? "#f3f4f6" : "#111827",
        color: theme === "light" ? "#111827" : "#f9fafb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <strong>Theme: {theme}</strong>
      <button onClick={toggle} style={{ padding: "6px 10px" }}>Toggle</button>
    </header>
  );
}
