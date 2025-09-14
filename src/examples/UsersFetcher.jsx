import React, { useEffect, useState } from 'react';

function UsersFetcher() {
  const [users, setUsers]   = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');

  useEffect(() => {
    const ctrl = new AbortController();

    async function fetchUsers() {
      try {
        setLoading(true);
        setError('');
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
          signal: ctrl.signal,
        });
        if (!res.ok) throw new Error('네트워크 오류');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message ?? '알 수 없는 오류');
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
    return () => ctrl.abort(); // 언마운트/재요청 시 이전 요청 중단
  }, []);

  return (
    <section style={{border:'1px solid #ddd', padding:12, borderRadius:8}}>
      <h4>UsersFetcher 예제</h4>

      {loading ? (
        <p>로딩 중...</p>
      ) : error ? (
        <p style={{color:'crimson'}}>오류: {error}</p>
      ) : (
        <ul>
          {users.map(u => (<li key={u.id}>{u.name} ({u.email})</li>))}
        </ul>
      )}

      <hr/>
      <pre style={{background:'#f6f8fa', padding:8}}>
        {JSON.stringify(
          { loading, error: Boolean(error), usersCount: users.length, sample: users[0] ?? null },
          null,
          2
        )}
      </pre>
    </section>
  );
}

export default UsersFetcher;
