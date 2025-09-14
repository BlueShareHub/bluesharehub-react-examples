import React, { useState } from 'react';

function SubmitExamples() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.includes('@')) {
      setError('이메일 형식이 올바르지 않습니다.');
      return;
    }
    if (password.length < 6) {
      setError('비밀번호는 6자 이상이어야 합니다.');
      return;
    }

    // TODO: 실제 API 호출
    // const res = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    alert(`제출됨: ${email}`);
  };

  return (
    <section style={{border:'1px solid #ddd', padding:12, borderRadius:8}}>
      <h4>onSubmit 예제</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이메일</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>비밀번호</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p style={{color:'crimson'}}>{error}</p>}
        <button type="submit">로그인</button>
        <button type="button" onClick={() => { setEmail(''); setPassword(''); setError(''); }}>초기화</button>
      </form>
    </section>
  );
}

export default SubmitExamples;