import React from 'react';
import styled from '@emotion/styled';
import icon from './x.png';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = styled.header`
  text-align: left;
  margin: 62px 0 18px 0;
`;

const SignUpContainer = styled.section`
  margin-bottom: 65px;
`;

const SignUpTitle = styled.section`
text-align: left;
color: #111111;
font-size: 32px;
margin-bottom: 32px;
`;

const TitleContainer = styled.div`
  text-align: left;
  margin-bottom: 16px;
  width: 100%;
`;

const Title = styled.span`
  display: inline-block;
  color: #111111;
  font-size: 16px;
  margin-bottom: 8px;
`;

const Content = styled.div`
  color: #828284;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #DFE2E6;
  padding: 16px;
  box-sizing: border-box;
  outline-color: #FF640D;
  &:focus {
    border-color: #FF640D;
  }
`;

const Button = styled.input`
  width: 100%;
  border-radius: 8px;
  background-color: #FF640D;
  height: 58px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  padding: 0;
  border: none;
`;

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    userEmail: '',
    password: '',
    nickname: ''
  });
  const navigate = useNavigate();
  const spanRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);

  const handleFocus = (index) => () => {
    if (spanRefs.current[index].current) {
      spanRefs.current[index].current.style.color = '#FF640D'; // focus 시 색상 변경
    }
  };

  const handleBlur = (index) => () => {
    if (spanRefs.current[index].current) {
      spanRefs.current[index].current.style.color = 'black'; // focus 해제 시 원래 색상 복구
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/user/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("회원가입 성공!");
        navigate('/member/login');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.log(formData);
      alert("회원가입 실패");
    }
  };

  const back = () => {
    navigate('/', { replace: true });
  };

  return (
    <>
      <Header>
        <img onClick={back} src={icon} style={{ width: "24px", height: "24px" }} alt="Cancel Icon" />
      </Header>

      <SignUpTitle >
          <span>회원가입</span>
      </SignUpTitle>

      <SignUpContainer>
        <TitleContainer>
          <Title ref={spanRefs.current[0]}>아이디</Title>
          <Content>
            <Input name="userEmail" onChange={handleChange} value={formData.userEmail} type="text" placeholder="mobile@routine.com" onFocus={handleFocus(0)} onBlur={handleBlur(0)} />
          </Content>
        </TitleContainer>

        <TitleContainer>
          <Title ref={spanRefs.current[1]}>비밀번호</Title>
          <Content>
            <Input name="password" onChange={handleChange} value={formData.password} type="password" placeholder="비밀번호를 입력하세요."  onFocus={handleFocus(1)} onBlur={handleBlur(1)} />
          </Content>
        </TitleContainer>

        <TitleContainer>
          <Title ref={spanRefs.current[2]}>닉네임</Title>
          <Content>
            <Input name="nickname" onChange={handleChange} value={formData.nickname} type="text" placeholder="닉네임을 입력하세요." onFocus={handleFocus(2)} onBlur={handleBlur(2)} />
          </Content>
        </TitleContainer>
      </SignUpContainer>

      <footer>
        <Button onClick={submit} type="submit" value="회원가입" />
      </footer>
    </>
  );
};

export default SignUpForm;
