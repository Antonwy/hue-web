import React from 'react'
import {hsbToRgb} from '../../Helper/ColorHelper';
import posed from 'react-pose';

const Container = posed.div({
    visible: {opacity: 1, x: 0},
    hidden: {opacity: 0, x: -100}
})

const LightContainer = posed.div({
    idle: {boxShadow: "0 0px 10px rgba(0,0,0,0)"},
    clicked: {boxShadow: "0 10px 20px rgba(180, 200, 230, 0.5)"},
})

const Light = ({item, onClick, clicked}) => {

    const rgb = hsbToRgb(item.state.hue, item.state.sat, item.state.bri);
    const brightness = Math.round(item.state.bri / 254 * 100);

    const handleClick = () => {
        onClick(item)
    }

  return (
    <Container>
        <LightContainer pose={clicked ? 'clicked' : 'idle'} onClick={handleClick} className="light">
            <h3
            style={{
                textShadow: `0px 3px 10px rgba(0,0,0, .1)`
            }}
            >
            {item.name}
            </h3>
            <div className="description">
                <div className="colorContainer">
                    <p>Color</p>
                    <div style={{backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}} className="color"></div>
                </div>
                <div className="brightnessContainer">
                    <p>Brightness</p>
                    <h2>{brightness}%</h2>
                </div>
            </div>
        </LightContainer>
    </Container>
  )
}

export default Light
