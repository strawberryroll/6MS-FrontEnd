// import styled, { createGlobalStyle } from 'styled-components';

// export const GlobalStyle = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR&display=swap');
// `;

// export const ContainerLogin = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100vw;
//   height: 100vh;
//   font-family: 'Noto Sans KR', sans-serif;
//   position: relative;
// `;

// export const XBox = styled.div`
//   width: 100%;
//   height: 56px;
//   display: flex;
//   justify-content: flex-start;
//   margin-top: 18px;
//   margin-bottom: 18px;
// `;

// export const XImg = styled.img`
//   width: 24px;
//   height: 24px;
//   margin-top: 16px;
//   margin-left: 24px; 
// `;

// export const LoginBox = styled.div`
//   width: 327px;
//   height: auto;
//   text-align: left;
//   margin: 0 auto;
// `;

// export const FtBig = styled.h1`
//   font-size: 32px;
//   font-weight: 600;
//   letter-spacing: -1px;
//   line-height: 46.4px;
//   margin-bottom: 24px; 
// `;

// export const FtSmall = styled.label`
//   font-size: 16px;
//   font-weight: 400;
//   line-height: 22.4px;
//   margin-bottom: 16px;
//   color: ${({ isFocused }) => (isFocused ? '#FF640D' : 'black')};
// `;

// export const TextBox = styled.input`
//   display: inline-block;
//   background-color: white;
//   width: 327px;
//   height: 58px;
//   border-radius: 4px;
//   border: 1px solid #CFCFCF;
//   padding: 16px;
//   gap: 10px;
//   box-sizing: border-box;
//   margin-bottom: 20px;

//   &:focus {
//     border: 2px solid;
//     border-color: #FF640D;
//     outline: none;
//   }
// `;

// export const PasswordBox = styled.div`
//   width: 327px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   margin-top: 20px;
// `;

// export const OrangeBtn = styled.button`
//   width: 327px;
//   height: 58px;
//   background-color: #FF640D;
//   color: white;
//   padding: 10px;
//   gap: 10px;
//   border: none;
//   border-radius: 8px;
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 22.4px;
//   text-align: center;
//   cursor: pointer; 
//   box-sizing: border-box;
//   margin-top: 20px; 
// `;

// export const BtnPositionLogin = styled.div`
//   margin-top: 50px;
// `;

// export const ErrorMessage = styled.div`
//   color: red;
//   font-size: 14px;
//   margin-top: 10px;
// `;

import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR&display=swap');
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  position: relative;
`;

export const XBox = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: flex-start;
  margin-top: 18px;
  margin-bottom: 18px;
`;

export const XImg = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 16px;
  margin-left: 24px; 
`;

export const LoginBox = styled.div`
  width: 327px;
  height: auto;
  text-align: left;
  margin: 0 auto;
`;

export const FtBig = styled.h1`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 46.4px;
  margin-bottom: 24px; 
`;

export const FtSmall = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  margin-bottom: 16px;
  color: ${({ isFocused }) => (isFocused ? '#FF640D' : 'black')};
`;

export const TextBox = styled.input`
  display: inline-block;
  background-color: white;
  width: 327px;
  height: 58px;
  border-radius: 4px;
  border: 1px solid #CFCFCF;
  padding: 16px;
  gap: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;

  &:focus {
    border: 2px solid; 
    border-color: #FF640D;
    outline: none;
  }
`;

export const PasswordBox = styled.div`
  width: 327px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const OrangeBtn = styled.button`
  width: 327px;
  height: 58px;
  background-color: #FF640D;
  color: white;
  padding: 10px;
  gap: 10px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
  text-align: center;
  cursor: pointer; 
  box-sizing: border-box;
  margin-top: 20px; 
`;

export const BtnPositionLogin = styled.div`
  margin-top: 50px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;
