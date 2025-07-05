import React from 'react'

const Container = ({children}) => {
  return (
    <div className='xl:max-w-[1440px] w-full mx-auto'>{children}</div>
  )
}

export default Container