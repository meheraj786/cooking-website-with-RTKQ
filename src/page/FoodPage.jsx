import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import { useGetRecipeByIdQuery } from '../features/api/recipeApiSlice';


const FoodPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetRecipeByIdQuery(id);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Something went wrong.</p>;

  const meal = data?.meals?.[0];

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }



  return (
    <div className="max-w-4xl font-primary mx-auto my-10 pt-10 p-5 bg-white rounded shadow-md">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-[400px] object-cover rounded-md mb-6" />
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{meal.strMeal}</h2>
      <p className="text-gray-600 mb-1">Category: <span className="font-semibold">{meal.strCategory}</span></p>
      <p className="text-gray-600 mb-1">Area: <span className="font-semibold">{meal.strArea}</span></p>

      <h3 className="mt-6 text-xl font-semibold text-gray-700">Ingredients</h3>
      <ul className="list-disc list-inside text-gray-600">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="mt-6 text-xl font-semibold text-gray-700">Instructions</h3>
      <p className="text-gray-700 whitespace-pre-line leading-relaxed">{meal.strInstructions}</p>

      {meal.strYoutube && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Watch on YouTube:</h4>
{meal?.strYoutube && (
  <div className="mt-6">
    <iframe
      width="560"
      height="315"
      src={meal.strYoutube.replace("watch?v=", "embed/")}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-full h-[315px] rounded-lg"
    ></iframe>
  </div>
)}
        </div>
      )}
    </div>
  );
};

export default FoodPage;
