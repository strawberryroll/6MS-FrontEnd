import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Group = styled.span`
  width: 99px;
  height: 133px;
  background: rgba(255, 100, 13, 0.2);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RowGroup = styled.span`
  display: flex;
  justify-content: space-evenly;
  padding: 5px 0px;
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
  padding: 15px;
`;

export const Name = styled.div`
  width: 80px;
  height: 26px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  font-family: "Noto Sans KR";
`;
