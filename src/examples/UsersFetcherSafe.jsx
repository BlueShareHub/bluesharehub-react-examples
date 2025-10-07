import React from 'react';
import useFetch from '../hooks/useFetch';

export default function UsersFetcherSafe() {
  const { data, loading, error, refetch } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  return (
    <div style={{ padding: 12, border: '1px solid #ddd' }}>
      <h3>useFetch(커스텀 훅) 데모</h3>
      {loading && <p>로딩 중...</p>}
      {error && <p style={{ color: 'crimson' }}>에러: {String(error.message)}</p>}
      {data && (
        <ul>
          {data.map((u) => (
            <li key={u.id}>{u.name} ({u.email})</li>
          ))}
        </ul>
      )}
      <button onClick={refetch} style={{ marginTop: 8 }}>다시 불러오기</button>
    </div>
  );
}
