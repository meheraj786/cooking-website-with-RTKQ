import React from 'react'

const Flex = ({children, className}) => {
  return (
    <div className={`flex flex-wrap items-center justify-between ${className}`}>{children}</div>
  )
}

export default Flex