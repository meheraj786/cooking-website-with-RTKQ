import React from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import FoodCard from '../foodCard/FoodCard'
import { useGetRecipeByCategoryQuery } from '../../features/api/recipeApiSlice'

const FirstRow = () => {
const { data, isLoading, error } = useGetRecipeByCategoryQuery("Chicken");

if (isLoading) return <p className='text-center text-primary'>Loading...</p>;
if (error) return <p className='text-center text-primary'>Error loading data.</p>;

const meals = data?.meals || [];

  
  return (
    <div className='mt-[75px]'>
      <Container>
        <h2 className='text-[45px] mb-4 font-secondary text-primary font-semibold'>Chicken</h2>
        <Flex>
          <FoodCard food={meals[0]}/>
          <FoodCard food={meals[1]}/>
          <FoodCard food={meals[2]}/>
        </Flex>
      </Container>
    </div>
  )
}

export default FirstRow