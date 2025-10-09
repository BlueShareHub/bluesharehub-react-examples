import React from "react";
import styles from "../styles/Progress.module.css";

/**
 * value: 0 ~ 100
 * width/transition은 인라인(런타임 계산), 나머지 스타일은 외부 CSS로 처리
 */
export default function Progress({ value = 0 }) {
  return (
    <div className={styles.track}>
      <div
        className={styles.fill}
        style={{ width: value + "%", transition: "width 200ms ease" }}
      />
    </div>
  );
}
