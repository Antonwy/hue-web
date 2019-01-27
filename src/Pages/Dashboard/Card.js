import React from 'react'


const cardStyle = {
  height: 200,
  borderRadius: 15,
  boxShadow: "0 5px 50px rgba(180, 200, 230, 0.3)"
}

const Card = ({children, className}) => {
  return (
    <div className={className} style={cardStyle}>
      {children}
    </div>
  )
}

export default Card
