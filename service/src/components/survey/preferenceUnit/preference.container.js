import PreferencePresenter from "./preference.presenter";
import { data } from "../../../data";

export default function PreferenceComponent(props) {
  const onClickOption = (event) => {
    const preference = data.survey.preference;
    const nameElement = event.currentTarget.querySelector(".Name");

    if (preference.includes(event.currentTarget.id)) {
      preference.splice(preference.indexOf(event.currentTarget.id), 1);
      nameElement.style.backgroundColor = "#f0f0f0";
      nameElement.style.border = "none";
    } else {
      preference.push(event.currentTarget.id);
      props.setPreference(event.currentTarget.id);
      nameElement.style.backgroundColor = "#ffe5ed";
      nameElement.style.border = "1px solid #ff7ca3";
    }
    console.log(data);
  };
  return <PreferencePresenter onClickOption={onClickOption} />;
}
