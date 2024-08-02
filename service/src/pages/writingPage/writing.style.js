import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-left: -2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans KR";
`;

export const Form = styled.form`
  width: 100%;
  margin-left: 2%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans KR";
`;

export const CloseBox = styled.div`
  width: 100%;
  height: 15%;
  margin-top: 10%;
  display: flex;
  justify-content: flex-start;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  padding: 10px;
`;

export const Title = styled.div`
  width: 100%;
  height: 33px;
  padding: 15px;
  margin-left: 25px;
  font-weight: 700;
  font-size: 28px;
  text-align: left;
  letter-spacing: -1px;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 33px;
  font-size: 28px;
  padding-left: 10px;
  margin: 10px 0;
  border: none;
  box-sizing: border-box;
  font-family: "Noto Sans KR";
  font-weight: 600;
  color: '#757575';
  letter-spacing: -1px;

   &:focus {
    border: 1px solid black;
    border-radius: 10px;
    outline: none;
  }
`;

export const ImageUpload = styled.div`
  width: 100%;
  height: 168px;
  background-color: #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-direction: column;
`;

export const UserBox = styled.div`
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    font-size: 10px;
    font-weight: 600;
  }
`;

export const TextArea = styled.textarea`
  width: 90%;
  height: 15px;
  margin: 0px 0;
  padding: 0px;
  font-size: 10px;
  box-sizing: border-box;
  color: #757575;
  font-weight: 500;
  border: none;
  font-family: "Noto Sans KR";

  &:focus {
    border: 1px solid black;
    border-radius: 10px;
    outline: none;
  }
`;

export const Info = styled.div`
  margin-top: 30px;
  padding: 20px 0 20px 20px;
  background: ${(props) => (props.highlight ? "#fff5f5" : "#fff")};
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Difficulty = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label`
  padding: 15px;
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  letter-spacing: -1px;
`;

export const DifficultyLevels = styled.div`
  display: flex;
//   justify-content: space-between;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

export const DifficultyLevel = styled.div`
  width: 20px;
  height: 24px;
  margin-right: 8px;
  background: #FF640D33;
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: ${(props) => (props.isSelected ? '1px solid #FF640D' : 'none')};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  width: 45%;
  font-size: 8px;
  padding-left: 5px;
  margin: 10px 0;
  box-sizing: border-box;
  border: 1px solid #FF640D;
  border-radius: 10px;
  font-family: "Noto Sans KR";

  &:focus {
    border: 1px solid black;
    border-radius: 10px;
    outline: none;
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PriceOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: row;
  width: 75%;
  margin-left: 16px;
`;

export const PriceOption = styled.div`
  width: 65px;
  height: 24px;
  background: #FF640D33;
  margin: 5px 5px;
  font-size: 9px;
  border-radius: 20px;
  padding: 1px;
  border: ${(props) => (props.isSelected ? '1px solid #FF640D' : 'none')};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Ingredients = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const IngredientInput = styled.input`
  width: 48%;
  padding: 8px;
  margin: 5px 0px;
  box-sizing: border-box;
  border: 1px solid #FF640D;
  border-radius: 10px;
  font-size: 8px;

  &:focus {
    border: 1px solid black;
    border-radius: 10px;
    outline: none;
  }
`;

export const AddButton = styled.button`
  width: 48px;
  height: 21px;
  background: #FF640D;
  font-size: 8px;
  color: white;
  margin: 5px 0;
  border: none;
  border-radius: 8px;
`;

export const CookingOrder = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled.button`
  width: 95%;
  height: 58px;
  padding: 15px;
  background: #FF640D;
  color: white;
  margin: 20px 0;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-family: "Noto Sans KR";
`;

export const LogButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
