import { useParams } from "react-router-dom";
import RecipePresenterPage from "./recipe.presenter";

export default function RecipeContainerPage(props) {
    const params = useParams();
    const page_number = params.id;

    return (
        <RecipePresenterPage
            page_number={page_number}
        />
    );
}

