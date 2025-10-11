// src/examples/UsersAxiosBasic.jsx
import React, { useEffect, useState } from "react";
import { http } from "../lib/http";

export default function UsersAxiosBasic() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();

    async function run() {
      setLoading(true); setErr(null);
      try {
        const { data } = await http.get("/users", { signal: ctrl.signal });
        setData(data);
      } catch (e) {
        if (e.name !== "CanceledError") setErr(e);
      } finally {
        setLoading(false);
      }
    }
    run();

    return () => ctrl.abort();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (err) return <p>에러: {String(err.message || err)}</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
