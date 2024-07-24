import { useParams } from "react-router-dom";
import RecipePresenterPage from "./recipe.presenter";

function RecipeContainerPage() {
    const params = useParams();
    const page_number = params.id;

    return (
        <RecipePresenterPage
            page_number={page_number}
        />
    );
}

export default RecipeContainerPage;