import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 375px;
  height: 500px;
`;

export const Group = styled.span`
  width: 98px;
  height: 113px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RowGroup = styled.span`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0px;
`;

export const Character = styled.div`
  width: "98px";
  height: "113px";
  background-color: #f0f0f0;
  border-radius: 10px;
  :hover {
    background-color: #ffe5ed;
    border: 1px solid #ff7ca3;
  }
`;
export const Icon = styled.img`
  width: 70px;
  height: 70px;
  padding: 15px;
`;
export const Name = styled.div`
  width: 55px;
  height: 26px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  font-family: "Noto Sans KR";
`;
