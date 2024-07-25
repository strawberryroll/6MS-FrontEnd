import { useNavigate } from "react-router-dom";
import { survey } from "./survey.data";
import { useParams } from "react-router-dom";
import SurveyPresenterPage from "./survey.presenter";

export default function SurveyContainerPage() {
    const params = useParams();
    const page_number = params.id;
    const navigate = useNavigate();
    

    const onClickPrev = () => { 
        if (page_number > 0) {
            navigate(`/survey/${Number(page_number)}`);
        }
    };
    const onClickNext = () => { // 선택 완료를 눌렀을 때 다음으로 넘어감
    if (page_number < survey.length - 1) {
        navigate(`/survey/${Number(page_number) + 1}`);
    } else if (page_number == survey.length - 1) {
        navigate(`/home`);
    }
    };

    return (
        <SurveyPresenterPage
            page_number={page_number}
            onClickNext={onClickNext}
        />
    );
}

