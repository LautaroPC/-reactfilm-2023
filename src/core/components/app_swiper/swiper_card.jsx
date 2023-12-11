import React from 'react'

const SwiperCard = ({title}, ...props ) => {
  
  return (
    <div {...props}>
        <h3 style={{paddingTop:"0.5rem",paddingLeft:"0.5rem",}}>{title}</h3>
    </div>
  )
}

export default SwiperCard