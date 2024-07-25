import * as S from "./survey.styles";
import PreferenceComponent from "./preferenceUnit/preference.container";
import PurposeComponent from "./purposeUnit/purpose.container";
import { useState} from "react";

export default function SurveyPresenterPage(props) {
  const [preference, setPreference] = useState([]);
  const [purpose, setPurpose] = useState("");
  
  return (
    <S.Wrapper>
      <S.CloseBox> <S.Close src="/images/close.png" /> </S.CloseBox>
      <S.GroupBox>
      {props.page_number === "0" && (
          <PurposeComponent setPurpose={setPurpose} />
      )}
      {props.page_number === "1" && (
          <PreferenceComponent setPreference={setPreference} />
      )}
      </S.GroupBox>
      <S.Button onClick={
              (props.page_number === "0" && purpose !== "") ||
              (props.page_number === "1" && preference.length > 0)
                ? props.onClickNext : null}>
        선택 완료
      </S.Button>
    </S.Wrapper>
  );
}



