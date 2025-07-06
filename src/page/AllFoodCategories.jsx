import React from "react";
import { Link } from "react-router";
import { useGetRecipeByCategoriesQuery } from "../features/api/recipeApiSlice";
import Container from "../layouts/Container";

// const categories = [
//   { name: "Beef", image: "https://www.themealdb.com/images/category/beef.png" },
//   { name: "Chicken", image: "https://www.themealdb.com/images/category/chicken.png" },
//   { name: "Dessert", image: "https://www.themealdb.com/images/category/dessert.png" },
//   { name: "Lamb", image: "https://www.themealdb.com/images/category/lamb.png" },
//   { name: "Miscellaneous", image: "https://www.themealdb.com/images/category/miscellaneous.png" },
//   { name: "Pasta", image: "https://www.themealdb.com/images/category/pasta.png" },
//   { name: "Pork", image: "https://www.themealdb.com/images/category/pork.png" },
//   { name: "Seafood", image: "https://www.themealdb.com/images/category/seafood.png" },
//   { name: "Side", image: "https://www.themealdb.com/images/category/side.png" },
//   { name: "Starter", image: "https://www.themealdb.com/images/category/starter.png" },
//   { name: "Vegan", image: "https://www.themealdb.com/images/category/vegan.png" },
//   { name: "Vegetarian", image: "https://www.themealdb.com/images/category/vegetarian.png" },
//   { name: "Breakfast", image: "https://www.themealdb.com/images/category/breakfast.png" },
//   { name: "Goat", image: "https://www.themealdb.com/images/category/goat.png" },
// ];

const AllFoodCategories = () => {
  const {data, isLoading, error}= useGetRecipeByCategoriesQuery()
    if (isLoading) return <p className='text-center text-primary'>Loading...</p>;
  if (error) return <p className='text-center text-primary'>Error loading data.</p>;
  
  const categories=data?.categories
  return (
    <div className=" py-10 px-6 relative z-[100] bg-gray-50">
      <h2 className='text-primary font-secondary font-semibold text-center mb-10 text-[50px]'>
        All Food Categories
      </h2>
      <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
        {categories.map((cat) => (
          <Link to={`/foods/${cat.strCategory}`} key={cat.idCategory}>
            <div
              className="rounded-xl shadow-lg overflow-hidden relative group h-[200px] flex items-end justify-start bg-cover bg-center cursor-pointer transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${cat.strCategoryThumb})` }}
            >
              <div className="w-full h-full bg-black/40 absolute top-0 left-0 group-hover:bg-black/20 transition"></div>
              <h3 className="relative text-white text-2xl font-bold p-4">
                {cat.strCategory}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      </Container>
    </div>
  );
};

export default AllFoodCategories;
