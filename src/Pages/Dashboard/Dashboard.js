import React, { Component } from 'react'
import AllLights from './AllLights';
import Divider from '../../Components/Divider';
import LightInfo from './LightInfo';

export default class Dashboard extends Component {
  render() {
    return (
        <div className="container">
            <AllLights /> 
            <Divider dir="ver" size="100vh"/>
            <LightInfo />
        </div>
    )
  }
}
