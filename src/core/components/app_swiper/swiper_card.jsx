import React from 'react'

const SwiperCard = ({ title }, ...props) => {

  return (
    <div {...props}>
      <h3 style={{ textAlign:"center",paddingTop: "1rem", paddingLeft: "0.5rem",  }}>{title}</h3>
    </div>
  )
}

export default SwiperCard