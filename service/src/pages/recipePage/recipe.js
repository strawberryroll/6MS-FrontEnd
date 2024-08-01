// Import necessary modules and components
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipePresenterPage from "./recipe.presenter";
import { response_data } from "../../response_data"; 

export default function RecipePage(props) {
    const { id } = useParams(); // Destructure to get the id directly
    const page_number = parseInt(id, 10); // Convert the id to an integer if necessary
    const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch(`/board/${page_number}`)
    //     .then((response) => response.json())
    //     .then((data) => setData(data))
    //     .catch((error) => console.error('Error fetching data:', error));
    // }, [page_number]);

    // Here, we're assuming `response_data` is an array and you want to get a specific recipe by id
    useEffect(() => {
        const recipe = response_data.find(item => item.recipeId === page_number);
        setData(recipe);
    }, [page_number]);

    return (
        <div>
            {data ? (
                <RecipePresenterPage
                    page_number={page_number}
                    // response_data={data}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
