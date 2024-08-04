import React from 'react';
import './signup.css'
import icon from './cancle.png';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { response_data } from '../../response_data';

const SignupForm = () => {
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
    // response_data.user.nickname = formData.nickname; 
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
        //TODO BASE URL나오면 URL교체하기!
        const response = await axios.post('http://13.124.20.140:8080/user/save', formData);
        if (response.status === 200) {
          //TODO 나중에 메인페이지로 바꾸기
          console.log("formData:", formData);
          console.log("response_data:", response_data);
          alert("회원가입 성공!");
          navigate('/');
        }
      } catch (error) {
        alert("회원가입 실패");
      }
  }

  const back = () => {
    //TODO 인트로 페이지로 바꾸기!
    navigate('/', { replace : true });
  }

    return (
      <>
        <header id="top">
          <img onClick={back} src= { icon } style={ { width : "24px", height : "24px" } } alt="Cancel Icon" />
        </header>
  
        <div className="signup">
          <span>회원가입</span>
        </div>
  
        <section className='signup_container'>
          <div className="insert">
            <span ref={spanRefs.current[0]} className="title">아이디</span>
            <div className="content">
              <input name="userEmail" onChange={handleChange} value={formData.userEmail} onFocus={handleFocus(0)} onBlur={handleBlur(0)} type="text" id="id" placeholder="mobile@routine.com" />
            </div>
          </div>
  
          <div className="insert">
            <span ref={spanRefs.current[1]} className="title" >비밀번호</span>
            <div className="content">
              <input name="password" onChange={handleChange} value={formData.password} onFocus={handleFocus(1)} onBlur={handleBlur(1)} type="password"  id="password" placeholder='비밀번호를 입력하세요.'/>
            </div>
          </div>
  
          <div className="insert">
            <span ref={spanRefs.current[2]} className="title" >닉네임</span>
            <div className="content">
              <input name="nickname" onChange={handleChange} value={formData.nickname} onFocus={handleFocus(2)} onBlur={handleBlur(2)} type="text" id="nickname" placeholder="닉네임을 입력하세요." />
            </div>
          </div>
        </section>
  
        <footer>
          <input onClick={submit} type="submit" id="signup_button" value="회원가입" />
        </footer>
      </>
    );
  };
  
export default SignupForm;