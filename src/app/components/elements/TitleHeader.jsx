import React from 'react'

const TitleHeader = ({children, classname}) => {
  return (
    <>
        <h1 className={`text-center ${classname}`}>{children}</h1>
    </>
  )
}

export default TitleHeader