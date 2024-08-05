import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipePresenterPage from "./recipe.presenter";
import axios from "axios";
import NavBar from '../../components/navbarUnit/navbar';

export default function RecipePage() {
    const { recipeId } = useParams(); // Destructure to get the id directly
    const [response_data, setData] = useState(null);
    const [reviewData, setReviewData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
          try {
            setLoading(true);
            const response = await axios.get(`/api/board/${recipeId}`);
            setData(response.data);
            const reviewResponse = await axios.get(`/api/board/${recipeId}/comments`);
            setReviewData(reviewResponse.data);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
      
        fetchRecipe();
      }, [recipeId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;

    return (
        <div>
            {response_data ? (
                <RecipePresenterPage reviewData={reviewData} response_data={response_data} recipeId={recipeId} />
            ) : (
                <p>No recipe found.</p>
            )}
            <NavBar currentPage="home" />
        </div>
    );
}