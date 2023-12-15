import React from 'react'

const SwiperCard = ({ title }, ...props) => {

  return (
    <div {...props}>
      <h3 style={{color:"transparent"}}>{title}</h3>
    </div>
  )
}

export default SwiperCard