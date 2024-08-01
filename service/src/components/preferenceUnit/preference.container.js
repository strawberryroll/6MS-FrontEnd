import PreferencePresenter from "./preference.presenter";
import { data } from "../../send_data";

export default function PreferenceComponent(props) {
    const onClickOption = (event) => {
        const preference = data.survey.preference;
        const groupElement = event.currentTarget;

        if (preference.includes(groupElement.id)) { // 옵션 선택 해제
            preference.splice(preference.indexOf(groupElement.id), 1);
            groupElement.style.border = "none";
        } else {
            if (preference.length < 3) { // 옵션 선택, 최대 3개까지 허용
                preference.push(groupElement.id);
                groupElement.style.border = "2px solid #FF640D";
            } else {
                // 여기서 선택 불가 메시지 표시 등 추가 처리를 할 수 있습니다.
                alert("최대 3개까지 선택 가능합니다.");
            }
        }
        console.log(data);
        props.setPreference([...preference]); // 배열을 전달
    };
    
    return <PreferencePresenter onClickOption={onClickOption} />;
  }
