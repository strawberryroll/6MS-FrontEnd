import React, { useState } from 'react';
import xImg from './x.png'; 
import { Link, useNavigate } from 'react-router-dom';
import * as S from "./login.style";

function LoginPage() {
  const [focus, setFocus] = useState({ id: false, password: false });
  const [id, setId] = useState('');   
  const [pw, setPw] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, pw })
    });

    if (response.ok) {
      // 서버가 유효한 자격 증명을 반환한 경우
      navigate('/home');
    } else {
      // 자격 증명이 유효하지 않은 경우 오류 메시지 표시
      setErrorMessage('계정 정보가 일치하지 않습니다.');
    }
  };

  return (
      <S.ContainerLogin>
        <S.XBox>
          <Link to='/'><S.XImg src={xImg} /></Link>
        </S.XBox>
        <S.LoginBox>
          <S.FtBig>로그인</S.FtBig>
          <div className={`id-box ${focus.id ? 'focused' : ''}`}>
            <S.FtSmall className={focus.id ? 'focused' : ''}>아이디</S.FtSmall>
            <S.TextBox 
              type='text' 
              placeholder={'mobile@routine.com'}
              id='id'
              onChange={e => setId(e.target.value)}
              onFocus={() => setFocus({ ...focus, id: true })} 
              onBlur={() => setFocus({ ...focus, id: false })} 
            />
          </div>  
          <S.PasswordBox className={`password-box ${focus.password ? 'focused' : ''}`}>
            <S.FtSmall className={focus.password ? 'focused' : ''}>비밀번호</S.FtSmall>
            <S.TextBox 
              type='password' 
              id='password'
              onChange={e => setPw(e.target.value)}
              onFocus={() => setFocus({ ...focus, password: true })} 
              onBlur={() => setFocus({ ...focus, password: false })} 
            />
          </S.PasswordBox>
          {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          <S.OrangeBtn 
            className='btn-position-login'
            onClick={handleLogin}
          >
            로그인
          </S.OrangeBtn>
        </S.LoginBox>
      </S.ContainerLogin>
  );
}

export default LoginPage;
