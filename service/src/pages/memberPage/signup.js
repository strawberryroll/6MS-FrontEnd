import React from 'react';
import styled from 'styled-components';
import './signup.css'
import icon from './cancle.png';


const SignupForm = () => {

    return (
      <>
        <header id="top">
          <img src= { icon } style={ { width : "24px", height : "24px" } } alt="Cancel Icon" />
        </header>
  
        <div className="signup">
          <span>회원가입</span>
        </div>
  
        <section className='container'>
          <div className="insert">
            <span className="title">아이디</span>
            <div className="content">
              <input type="text" id="id" placeholder="아이디를 입력하세요." />
            </div>
          </div>
  
          <div className="insert">
            <span className="title">비밀번호</span>
            <div className="content">
              <input type="password" id="password" placeholder="비밀번호를 입력하세요." />
            </div>
          </div>
  
          <div className="insert">
            <span className="title">닉네임</span>
            <div className="content">
              <input type="text" id="nickname" placeholder="둔둔댄스7402" />
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
