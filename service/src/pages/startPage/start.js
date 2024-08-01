import React from 'react';
import { Link } from 'react-router-dom';
import yoribogoImg from '../../yoribogologo.png'; 

function StartPage() {
    return (
        <div className='wrapper'>
            <div className = "container">
                <img src = {yoribogoImg} className="yoribogo-img" /> 
                <div className='start-box'>
                    <Link to='/login'><button className='orange-btn'>로그인</button></Link>
                    <a href='#' className='signup-btn'>회원가입</a>
                </div>
            </div>
        </div>
    );
}

export default StartPage;