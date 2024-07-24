import PurposePresenter from "./purpose.presenter";
import { data } from "../../../data";
import { useState } from "react";

export default function PurposeComponent(props) {

  const [selectedOption, setSelectedOption] = useState(null);

  const onClickOption = (event) => {
    const purpose = data.survey.purpose;
    const groupElement = event.currentTarget;

    // 이전에 선택된 옵션이 있다면 스타일 초기화
    if (selectedOption && selectedOption !== groupElement) {
      selectedOption.style.border = "none";
    }

    // 선택된 옵션을 업데이트
    if (purpose === groupElement.id) {
      data.survey.purpose = "";
      setSelectedOption(null);
      groupElement.style.border = "none";
    } else {
      data.survey.purpose = groupElement.id;
      setSelectedOption(groupElement);
      groupElement.style.border = "2px solid #FF640D";
    }

    props.setPurpose(data.survey.purpose);
    console.log(data);
  };

  
  return <PurposePresenter onClickOption={onClickOption} />;
}
