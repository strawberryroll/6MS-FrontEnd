import React, { useState } from 'react';
import xImg from './x.png'; 
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function LoginPage() {
  const [focus, setFocus] = useState({ id: false, password: false });
  const [id, setId] = useState('');   
  const [pw, setPw] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const loginData = { id, pw };

    // Log the data being sent to the server
    console.log('Sending data to server:', loginData);

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, pw })
    });

    if (response.ok) {
      // 서버가 유효한 자격 증명을 반환한 경우
      navigate('/survey/0');
    } else {
      // 자격 증명이 유효하지 않은 경우 오류 메시지 표시
      setErrorMessage('계정 정보가 일치하지 않습니다.');
    }
  };

  return (
      <div className='container-login'>
        <div className='x-box'>
          <Link to='/'><img src={xImg} className='x-img' /></Link>
        </div>
        <div className='login-box'>
          <h1 className='ft-big'>로그인</h1>
          <div className={`id-box ${focus.id ? 'focused' : ''}`}>
            <label className={`ft-small ${focus.id ? 'focused' : ''}`}>아이디</label>
            <input 
              className='text-box' 
              type='text' 
              placeholder={'mobile@routine.com'}
              id='id'
              onChange={e => setId(e.target.value)}
              onFocus={() => setFocus({ ...focus, id: true })} 
              onBlur={() => setFocus({ ...focus, id: false })} 
            />
          </div>  
          <div className={`password-box ${focus.password ? 'focused' : ''}`}>
            <label className={`ft-small ${focus.password ? 'focused' : ''}`}>비밀번호</label>
            <input 
              className='text-box' 
              type='password' 
              id='password'
              onChange={e => setPw(e.target.value)}
              onFocus={() => setFocus({ ...focus, password: true })} 
              onBlur={() => setFocus({ ...focus, password: false })} 
            />
          </div>
          {errorMessage && <div className='error-message'>{errorMessage}</div>}
          <button 
            className='orange-btn btn-position-login'
            onClick={handleLogin}
          >
            로그인
          </button>
        </div>
      </div>
  );
}

export default LoginPage;