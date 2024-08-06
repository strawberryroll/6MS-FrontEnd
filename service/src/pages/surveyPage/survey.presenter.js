import * as S from "./survey.style";
import PreferenceComponent from "../../components/preferenceUnit/preference.container";
import PurposeComponent from "../../components/purposeUnit/purpose.container";
import { useState } from "react";
import { data } from "../../send_data";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SurveyPresenterPage(props) {
  const navigate = useNavigate();

  const [preference, setPreference] = useState([]);
  const [purpose, setPurpose] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Store the survey data in data.survey
    data.survey = {
      preference: preference,
      purpose: purpose,
    };

    if (props.page_number === "1") { // Assuming "1" is the last page
      fetch(`/api/user/survey`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data.survey),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(text => {
        // 응답이 비어있는 경우 빈 객체로 처리
        const result = text ? JSON.parse(text) : {};
        console.log(result); // 서버로부터 받은 실제 결과를 로그로 확인
        console.log(data.survey);
        alert("카테고리 보내기 성공!");
        navigate('/home'); // Navigate to the /home page
      })
      .catch(error => {
        console.error('Error:', error);
        alert("카테고리 보내기 실패");
      });
    } else {
      props.onClickNext();
    }
  };

  return (
    <S.Wrapper>
      <S.CloseBox>
        <Link to='/home'>
          <S.Close src="/images/close.png" />
        </Link>
      </S.CloseBox>
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
        >
          선택 완료
        </S.Button>
      </S.Form>
    </S.Wrapper>
  );
}
