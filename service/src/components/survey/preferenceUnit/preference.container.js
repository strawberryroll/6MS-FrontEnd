import PreferencePresenter from "./preference.presenter";
import { data } from "../../../data";

export default function PreferenceComponent(props) {
  const onClickOption = (event) => {
    const preference = data.survey.preference;
    const groupElement = event.currentTarget;

    if (preference.includes(groupElement.id)) { // 옵션 선택 안할 때
      preference.splice(preference.indexOf(groupElement.id), 1);
      groupElement.style.border = "none";
    } else { // 옵션 선택 할 때
      preference.push(groupElement.id);
      props.setPreference(groupElement.id);
      groupElement.style.border = "2px solid #FF640D";
    }
    console.log(data);
  };
  
  return <PreferencePresenter onClickOption={onClickOption} />;
}
