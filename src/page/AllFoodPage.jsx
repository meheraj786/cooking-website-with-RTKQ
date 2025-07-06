import React from 'react'
import { Link, useParams } from 'react-router';
import Container from '../layouts/Container';
import Flex from '../layouts/Flex';
import { useGetRecipeByCategoryQuery } from '../features/api/recipeApiSlice';

const AllFoodPage = () => {
  const { name } = useParams();
  const {data, isLoading, error}= useGetRecipeByCategoryQuery(name)
      if (isLoading) return <p className='text-center text-primary'>Loading...</p>;
  if (error) return <p className='text-center text-primary'>Error loading data.</p>;
  const items = data?.meals || [];
  console.log("all food: "+ items);
  
  return (
    <div className='pt-[150px]'>
      <Container>
        <h1 className='text-primary font-secondary font-bold border-b text-center mb-10 text-[50px]'>All Recipes of {name}</h1>
        <Flex className="justify-center gap-5 w-full">
{items.map((item) => (
              <div
                key={item.idMeal}
                className="w-[30%] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
              >
                <Link to={`/food/${item.idMeal}`}>
                  <img
                    className="w-full h-56 object-cover"
                    src={item?.strMealThumb}
                    alt={item?.strMeal}
                  />
                </Link>

                <div className="p-5">
                  <Link to={`/food/${item.idMeal}`}>
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 hover:text-[#84BD00] transition">
                      {item?.strMeal || "Food Name"}
                    </h5>
                  </Link>

                  <p className="mb-3 text-gray-700 text-sm">
                    {item?.strCategory
                      ? `Category: ${item.strCategory}`
                      : "No category available"}
                  </p>

                  <Link
                    to={`/food/${item.idMeal}`}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white"
                    style={{
                      backgroundColor: "#84BD00",
                      borderRadius: "20px",
                    }}
                  >
                    View Recipe
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}

        </Flex>
      </Container>
    </div>
  )
}

export default AllFoodPage