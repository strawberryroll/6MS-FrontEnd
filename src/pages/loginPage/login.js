import React, { useState } from 'react';
import xImg from './x.png';
import { Link, useNavigate } from 'react-router-dom';
import * as S from "./login.style";
import axios from 'axios';

function LoginPage() {
  const [focus, setFocus] = useState({ id: false, password: false });
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://13.124.20.140:8080/user/login', {
        userEmail,
        password,
      });

      if (response.status === 200) {
        navigate('/home');
      }
    } catch (error) {
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
        <div>
          <S.FtSmall isFocused={focus.id}>아이디</S.FtSmall>
          <S.TextBox
            type='text'
            placeholder='mobile@routine.com'
            id='id'
            onChange={e => setUserEmail(e.target.value)}
            onFocus={() => setFocus({ ...focus, id: true })}
            onBlur={() => setFocus({ ...focus, id: false })}
          />
        </div>
        <S.PasswordBox>
          <S.FtSmall isFocused={focus.password}>비밀번호</S.FtSmall>
          <S.TextBox
            type='password'
            id='password'
            onChange={e => setPassword(e.target.value)}
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
