// import styled, { createGlobalStyle } from 'styled-components';

// export const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR&display=swap');
// }
// `;

// export const ContainerStart = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-color: #ffffff;
//   font-family: 'Noto Sans KR', sans-serif;
//   text-align: center;
//   position: relative;
// `;

// export const YoribogoImg = styled.img`
//   width: 200px;
//   height: 233.83px;
//   display: inline-block;
//   margin-top: 160px;
// `;

// export const StartBox = styled.div`
//   width: 327px;
//   height: 95px;
//   margin: 160px auto 0; 
//   text-align: center; 
//   position: absolute; 
//   left: 50%; 
//   transform: translateX(-50%);
// `;

// export const SignupBtn = styled.button`
//   color: #707070;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 19.6px;
//   display: block; 
//   margin-top: 17px; 
//   background: none;
//   border: none;
//   cursor: pointer;
// `;

// export const OrangeBtn = styled.button`
//   display: inline-block;
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
// `;

import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR&display=swap');
  }
`;

export const ContainerStart = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  position: relative;
`;

export const YoribogoImg = styled.img`
  width: 200px;
  height: 233.83px;
  display: inline-block;
  margin-top: 160px;
`;

export const StartBox = styled.div`
  width: 327px;
  height: 95px;
  margin: 160px auto 0;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SignupBtn = styled.button`
  color: #707070;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.6px;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: auto;  /* Add margin-top: auto; to push the button to the bottom */
`;

export const OrangeBtn = styled.button`
  display: inline-block;
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
`;
