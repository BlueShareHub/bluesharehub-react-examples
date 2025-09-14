import React, { useState } from 'react';

function ChangeExamples() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [agree, setAgree] = useState(false);
  const [color, setColor] = useState('red');

  // input name 속성으로 핸들러 통합하기 (선택)
  const [form, setForm] = useState({ nick: '', email: '' });
  const handleUnified = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  return (
    <section style={{border:'1px solid #ddd', padding:12, borderRadius:8}}>
      <h4>onChange 예제</h4>

      <div>
        <label>이름: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label>나이: </label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>

      <div>
        <label>
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          약관 동의
        </label>
      </div>

      <div>
        <label>좋아하는 색: </label>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="red">빨강</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
        </select>
      </div>

      <hr/>
      <p><strong>통합 핸들러</strong> 예제</p>
      <input name="nick" placeholder="닉네임" value={form.nick} onChange={handleUnified} />
      <input name="email" placeholder="이메일" value={form.email} onChange={handleUnified} />

      <pre style={{background:'#f6f8fa', padding:8}}>{JSON.stringify({ name, age, agree, color, form }, null, 2)}</pre>
    </section>
  );
}

export default ChangeExamples;