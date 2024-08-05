// success.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from "./writing.style";

function SuccessPage() {
  // const location = useLocation();
  // const { result } = location.state || {}; // Get the result data from the location state

  return (
    <S.Wrapper>
      <S.Box>
        <S.Icon style={{width: 70, height: 70}} src="/images/check.png" />
        <S.Text style={{fontSize: 15, fontWeight: 600}}>레시피 작성 완료!</S.Text>
        <S.Text>내가 작성한 레시피를 성공적으로 등록했어요😊</S.Text>
        <S.Text style={{marginTop: -40}}>마이페이지에서 수정 및 삭제가 가능해요</S.Text>
      </S.Box>
      
      <Link to='/home' style={{ 
        textDecoration: 'none', 
        width: "100%", 
        height: 58,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' }}>
        <S.SubmitButton style={{ marginTop: 50 }}>확인</S.SubmitButton>
      </Link>
    </S.Wrapper>
  );
}

export default SuccessPage;
