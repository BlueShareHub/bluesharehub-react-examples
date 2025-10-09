import React from "react";
import styles from "../styles/UiDemo.module.css";

export default function CssModulesDemo() {
  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ marginBottom: 12 }}>CSS Modules Demo (hover/focus + responsive)</h2>
      <div className={styles.grid}>
        <button className={styles.btn}>액션</button>
        <button className={styles.btn}>두번째</button>
        <button className={styles.btn}>세번째</button>
      </div>
      <p style={{ fontSize: 12, color: "#6b7280", marginTop: 8 }}>
        데스크톱(≥768px)에서 3열, 모바일에서 1열로 보이며 hover/focus 상태를 확인하세요.
      </p>
    </div>
  );
}
