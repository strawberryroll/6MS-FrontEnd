import * as S from "./survey.style";
import PreferenceComponent from "../../components/preferenceUnit/preference.container";
import PurposeComponent from "../../components/purposeUnit/purpose.container";
import { useState } from "react";
import { data } from "../../send_data";

export default function SurveyPresenterPage(props) {
  const [preference, setPreference] = useState([]);
  const [purpose, setPurpose] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Store the survey data in data.survey
    // data.survey = {
    //   preference: preference,
    //   purpose: purpose
    // };

    if (props.page_number === "1") { // Assuming "1" is the last page
      fetch(`http://localhost:4000/api/survey`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data.survey)
      })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        // Handle the response here, like showing a success message or redirecting
      })
      .catch(error => {
        console.error('Error:', error);
      });
    } else {
      props.onClickNext();
    }
  };

  return (
    <S.Wrapper>
      <S.CloseBox> <S.Close src="/images/close.png" /> </S.CloseBox>
      <S.Form onSubmit={onSubmitHandler}>
        <S.GroupBox>
          {props.page_number === "0" && (
            <PurposeComponent setPurpose={setPurpose} />
          )}
          {props.page_number === "1" && (
            <PreferenceComponent setPreference={setPreference} />
          )}
        </S.GroupBox>
        <S.Button
          type="submit"
          disabled={
            (props.page_number === "0" && purpose === "") ||
            (props.page_number === "1" && preference.length === 0)
          }
          onClick={props.onClickNext}
        >
          선택 완료
        </S.Button>
      </S.Form>
    </S.Wrapper>
  );
}
