import React from 'react';
import { Link } from 'react-router-dom';
import yoribogoImg from './yoribogologo.png';
import * as S from "./start.style";

function StartPage() {
    return (
        <>
            <S.GlobalStyle />
            <S.ContainerStart>
                <S.YoribogoImg src={yoribogoImg} alt="Yoribogo Logo" />
                <S.StartBox>
                    <Link to='/login'>
                        <S.OrangeBtn>로그인</S.OrangeBtn>
                    </Link>
                    <S.SignupBtn href='#'>회원가입</S.SignupBtn>
                </S.StartBox>
            </S.ContainerStart>
        </>
    );
}

export default StartPage;
