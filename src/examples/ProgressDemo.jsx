import React, { useState } from "react";
import Progress from "../components/Progress";

export default function ProgressDemo() {
  const [value, setValue] = useState(25);

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ marginBottom: 12 }}>Progress (Inline width + External CSS)</h2>

      <div style={{ marginBottom: 12 }}>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          style={{ width: 300 }}
        />
        <span style={{ marginLeft: 12 }}>{value}%</span>
      </div>

      <Progress value={value} />

      <p style={{ fontSize: 12, color: "#6b7280", marginTop: 8 }}>
        슬라이더를 움직이면 진행률이 부드럽게 변경되는지 확인하세요.
      </p>
    </div>
  );
}
