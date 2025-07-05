import React from 'react'
import FoodCard from '../foodCard/FoodCard'
import Flex from '../../layouts/Flex'
import Container from '../../layouts/Container'

const SecondRow = () => {
  return (
        <div className='mt-[75px]'>
      <Container>
        <h2 className='text-[45px] mb-4 font-secondary text-primary font-semibold'>Category</h2>
        <Flex>
          <FoodCard/>
          <FoodCard/>
          <FoodCard/>
        </Flex>
      </Container>
    </div>
  )
}

export default SecondRow