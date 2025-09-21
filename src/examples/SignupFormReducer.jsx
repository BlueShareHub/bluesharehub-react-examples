import React, { useReducer } from 'react';

const initialForm = {
  name: '',
  email: '',
  password: '',
  errors: {},
  submitted: false,
};

function validate({ name, email, password }) {
  const errors = {};
  if (!name.trim()) errors.name = '이름을 입력하세요';
  if (!email.includes('@')) errors.email = '이메일 형식이 올바르지 않습니다';
  if (password.length < 6) errors.password = '비밀번호는 6자 이상';
  return errors;
}

function reducer(state, action) {
  switch (action.type) {
    case 'change': {
      const { field, value } = action.payload;
      return { ...state, [field]: value, submitted: false };
    }
    case 'reset':
      return initialForm;
    case 'submit': {
      const errors = validate(state);
      if (Object.keys(errors).length > 0) {
        return { ...state, errors, submitted: false };
      }
      return { ...state, errors: {}, submitted: true };
    }
    default:
      return state;
  }
}

export default function SignupFormReducer() {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (field) => (e) =>
    dispatch({ type: 'change', payload: { field, value: e.target.value } });

  return (
    <section style={{border:'1px solid #ddd', padding:12, borderRadius:8, maxWidth:520}}>
      <h3>SignupForm (useReducer)</h3>

      <label>이름</label>
      <input value={state.name} onChange={onChange('name')} style={{display:'block', width:'100%', marginBottom:4}} />
      <p style={{color:'#b91c1c', minHeight:18}}>{state.errors.name || ''}</p>

      <label>이메일</label>
      <input value={state.email} onChange={onChange('email')} style={{display:'block', width:'100%', marginBottom:4}} />
      <p style={{color:'#b91c1c', minHeight:18}}>{state.errors.email || ''}</p>

      <label>비밀번호</label>
      <input type="password" value={state.password} onChange={onChange('password')} style={{display:'block', width:'100%', marginBottom:4}} />
      <p style={{color:'#b91c1c', minHeight:18}}>{state.errors.password || ''}</p>

      <div style={{display:'flex', gap:8}}>
        <button onClick={() => dispatch({ type: 'submit' })}>제출</button>
        <button onClick={() => dispatch({ type: 'reset' })}>리셋</button>
      </div>

      {state.submitted && (
        <p style={{color:'#065f46', marginTop:8}}>제출 성공! 🎉</p>
      )}
    </section>
  );
}
