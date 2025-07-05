import React from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import FoodCard from '../foodCard/FoodCard'

const ThirdRow = () => {
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

export default ThirdRow