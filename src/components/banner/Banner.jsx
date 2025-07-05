import React from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'

const Banner = () => {
  return (
    <div className='py-[120px] bg-[url(assets/bannerImg.png)] bg-center bg-cover'>
<Container>
  <div className="text-center text-white w-[30%]">
    <h1 className='text-[60px] font-primary font-bold'>Meat Chicken</h1>
    <button className='px-[70px] border border-white mt-5 text-[30px] cursor-pointer'>View</button>
  </div>
</Container>
    </div>
  )
}

export default Banner