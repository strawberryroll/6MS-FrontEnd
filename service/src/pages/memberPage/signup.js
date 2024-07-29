import React from 'react';
import styled from 'styled-components';
import './signup.css'
import icon from './cancle.png';
import { useState, useRef } from 'react';


const SignupForm = () => {
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

    return (
      <>
        <header id="top">
          <img src= { icon } style={ { width : "24px", height : "24px" } } alt="Cancel Icon" />
        </header>
  
        <div className="signup">
          <span>회원가입</span>
        </div>
  
        <section className='signup_container'>
          <div className="insert">
            <span ref={spanRefs.current[0]} className="title">아이디</span>
            <div className="content">
              <input onFocus={handleFocus(0)} onBlur={handleBlur(0)} type="text" id="id" placeholder="아이디를 입력하세요." />
            </div>
          </div>
  
          <div className="insert">
            <span ref={spanRefs.current[1]} className="title" >비밀번호</span>
            <div className="content">
              <input onFocus={handleFocus(1)} onBlur={handleBlur(1)} type="password"  id="password" placeholder='비밀번호를 입력하세요.'/>
            </div>
          </div>
  
          <div className="insert">
            <span ref={spanRefs.current[2]} className="title" >닉네임</span>
            <div className="content">
              <input onFocus={handleFocus(2)} onBlur={handleBlur(2)} type="text" id="nickname" placeholder="둔둔댄스7402" />
            </div>
          </div>
        </section>
  
        <footer>
          <input type="submit" id="signup_button" value="회원가입" />
        </footer>
      </>
    );
  };
  
export default SignupForm;
