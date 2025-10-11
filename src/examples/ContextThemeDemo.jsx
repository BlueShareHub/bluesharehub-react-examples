import React from "react";
import { ThemeProvider } from "../context/theme";
import Header from "../components/Header";

export default function ContextThemeDemo() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <main style={{ padding: 16 }}>
          <p>아래 버튼으로 라이트/다크 테마를 전역으로 토글해 보세요.</p>
        </main>
      </div>
    </ThemeProvider>
  );
}
