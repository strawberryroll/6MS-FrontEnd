import * as S from "./survey.styles";
import { survey } from "./survey.data";
// import PreferencePresenter from "../preferenceUnit/preference.container";
import { data } from "../../data";
import { useState, useEffect } from "react";

function SurveyPresenterPage(props) {
  const [category, setCategory] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  // 질문이 넘어갈 때마다 답변 데이터를 초기화하는 함수
  const resetAnswers = () => {
    setSelectedOptions([]);
  };

  const toggleOption = (keyValue) => {
    const propKey = survey[props.page_number].key;
    const isMultiOption = survey[props.page_number].multioption;

    if (!isMultiOption) { // 단일 선택
      setSelectedOptions([keyValue]);
      updateReply(propKey, keyValue);
      return;
    }

    const selectedIndex = selectedOptions.indexOf(keyValue);
    let updatedOptions = [];

    if (selectedIndex === -1) {
      updatedOptions = [...selectedOptions, keyValue];
    } else {
      updatedOptions = selectedOptions.filter((value) => value !== keyValue);
    }

    setSelectedOptions(updatedOptions);
    updateReply(propKey, updatedOptions);
  };

  const updateReply = (propKey, value) => {
    if (data.survey.hasOwnProperty(propKey)) {
      if (Array.isArray(data.survey[propKey])) {
        data.survey[propKey] = value;
      } 
    }
  };

  // 질문이 변경될 때 답변 데이터를 초기화합니다.
  useEffect(() => {
    resetAnswers();
  }, [props.page_number]);
  
  
  return (
    <S.Wrapper>
      <S.CloseBox> <S.Close src="/images/close.png" /> </S.CloseBox>
      <S.GroupBox>
      {/* {props.page_number === "0" && (
          <PreferencePresenter setCategory={setCategory} />
      )} */}
      </S.GroupBox>
      <S.Button>선택 완료</S.Button>
    </S.Wrapper>
  );
}

export default SurveyPresenterPage;

