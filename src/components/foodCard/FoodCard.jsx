import React from 'react'

const FoodCard = ({ food }) => {
  return (
    <div className="w-[32%] bg-white border border-gray-200 rounded-lg shadow-sm">
      <a href="#">
        <img className="rounded-t-lg w-full h-68 object-cover" src={food?.strMealThumb} alt={food?.strMeal} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {food?.strMeal || 'Food Name'}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">
          {food?.strCategory ? `Category: ${food.strCategory}` : 'No category available'}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white"
          style={{ backgroundColor: '#84BD00', borderRadius: '20px' }}
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
        </a>
      </div>
    </div>
  )
}

export default FoodCard
