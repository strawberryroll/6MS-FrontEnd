import AnimalPresenter from "./animal.presenter";
import { data } from "../../../data";

export default function AnimalComponent(props) {
  const onClickAnimal = (event) => {
    const keyword = window.location.pathname.includes("mykeyWord")
      ? data.myKeyword.mySimilarAnimals
      : data.idealKeyword.idealSimilarAnimals;
    const nameElement = event.currentTarget.querySelector(".Name");
    if (keyword.includes(event.currentTarget.id)) {
      keyword.splice(keyword.indexOf(event.currentTarget.id), 1);
      nameElement.style.backgroundColor = "#f0f0f0";
      nameElement.style.border = "none";
    } else {
      keyword.push(event.currentTarget.id);
      props.setMyAnimal(event.currentTarget.id);
      nameElement.style.backgroundColor = "#ffe5ed";
      nameElement.style.border = "1px solid #ff7ca3";
    }
    console.log(data);
  };
  return <AnimalPresenter onClickAnimal={onClickAnimal} />;
}
