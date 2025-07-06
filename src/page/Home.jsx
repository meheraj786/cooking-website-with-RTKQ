import React from 'react'
import Banner from '../components/banner/Banner'
import FirstRow from '../components/firstRow/FirstRow'
import SecondRow from '../components/secondRow/SecondRow'
import ThirdRow from '../components/thirdRow/ThirdRow'
import img from '../assets/menuImg.png'

const Home = () => {
  return (
    <>
    <Banner/>
    <FirstRow/>
    <img className='fixed right-0 top-[30%] z-[-1]' src={img} alt="" />
    <SecondRow/>
    <ThirdRow/>
    </>
  )
}

export default Home