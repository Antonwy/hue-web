import React from 'react'
import Card from './Card';
import Switch from '../../Components/Switch'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import posed from 'react-pose'

import {connect} from 'react-redux';
import {toggleLight, setBrightness, setAlert, setEffect} from '../../Redux/actions'
import Divider from '../../Components/Divider';

const AlertButton = posed.div({
  alert: {backgroundColor: "rgb(244, 66, 92)", scale: 1.2},
  noAlert: {backgroundColor: "rgb(66, 83, 175)", scale: 1}
})

const EffectButton = posed.div({
  loop: {backgroundColor: "rgb(244, 66, 92)", scale: 1.2},
  noLoop: {backgroundColor: "rgb(66, 83, 175)", scale: 1}
})

class InfoCards extends React.Component {

  state={
    sliderValue: 0,
    alert: false,
    colorLoop: false
  }

  componentDidUpdate(prevProps) {
    const {light} = this.props;
    const bri = light.state === undefined ? 0 : Math.round(light.state.bri / 254 * 100);
    if (prevProps.light !== light) {
      console.log("NOOW")
      this.setState({
        sliderValue: bri,
        alert: light.state.alert === "lselect" || light.state.alert === "select" ? true : false,
        colorLoop: light.state.effect === "colorloop" ? true : false
      });
    }
  }

  handleChange = (checked) => {
    this.props.toggleLight(this.props.light.id, checked)
  }

  handleSliderChange = (value) => {
    this.setState({sliderValue: value})
  }

  handleChangeComplete = (value) => {
    let bri = Math.round(value / 100 * 254);
    this.props.setBrightness(this.props.light.id, bri)
  }

  handleAlert = () => {
    this.props.setAlert(this.props.light.id, !this.state.alert)
  }

  handleEffect = () => {
    this.props.setEffect(this.props.light.id, !this.state.colorLoop)
  }

  render(){
    const {light} = this.props;
    const {sliderValue, alert, colorLoop} = this.state;
    return (
      <div className="infoCardsContainer">
        <Card className="brightnessCard">
          <div className="brightnessCardHeader">
            <p>Brightness</p>
            <Switch
              onClick={this.handleChange}
              checked={light.state === undefined ? false : light.state.on}
            ></Switch>
          </div>
          <div className="brightnessFooter">
            <h1>{`${sliderValue}%`}</h1>
            <Divider dir="hor" size="100%"/>
            <div className="rangeContainer">
              <InputRange 
                maxValue={100}
                minValue={0}
                value={sliderValue}
                onChange={this.handleSliderChange}
                onChangeComplete={this.handleChangeComplete} 
              />
            </div>
          </div>
        </Card>
        <Card></Card>
        <Card className="effectCard">
          <p>Effects</p>
          <div className="buttonContainer">
            <AlertButton pose={alert ? 'alert' : 'noAlert'} onClick={this.handleAlert}>{alert ? "Stop Alert" : "Start Alert"}</AlertButton>
            <EffectButton pose={colorLoop ? 'loop' : 'noLoop'} onClick={this.handleEffect}>{colorLoop ? "Stop Colorloop" : "Start Colorloop"}</EffectButton>
          </div>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    light: state.currentLight
  }
}

export default connect(mapStateToProps, {toggleLight, setBrightness, setAlert, setEffect})(InfoCards)
