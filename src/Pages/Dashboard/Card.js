import React from 'react'
import posed from 'react-pose';


const Container = posed.div({
  visible: {scale: 1, opacity: 1},
  hidden: {scale: 0, opacity: 0}
})

const cardStyle = {
  height: 200,
  borderRadius: 15,
  boxShadow: "0 5px 50px rgba(180, 200, 230, 0.3)"
}

const Card = ({children, className}) => {
  return (
    <Container className={className} style={cardStyle}>
      {children}
    </Container>
  )
}

export default Card
