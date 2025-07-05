import React from 'react'
import Container from '../../layouts/Container'

import { Link } from 'react-router';
import { useGetRecipeRandomQuery } from '../../features/api/recipeApiSlice';

const Banner = () => {
  const { data, isLoading, error } = useGetRecipeRandomQuery();
  
  if (isLoading) return <p className='text-center text-primary'>Loading...</p>;
  if (error) return <p className='text-center text-primary'>Error loading data.</p>;
  
  const meals = data?.meals || [];
  console.log(meals);
  return (
    <div className='py-[120px] bg-[url(assets/bannerImg.png)] bg-center bg-cover'   style={{
    backgroundImage: `url(${meals[0].strMealThumb})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
<Container>
  <div className="text-center text-white w-[30%]">
    <h1 className='text-[60px] font-primary font-bold'>{meals[0].strMeal}</h1>
    <Link to={`/food/${meals[0].idMeal}`} className='px-[70px] border border-white mt-5 text-[30px] cursor-pointer'>View</Link>
  </div>
</Container>
    </div>
  )
}

export default Banner