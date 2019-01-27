import React, { Component } from 'react';
import './Style/App.css';
import AllLights from './Pages/Dashboard/AllLights';
import LightInfo from './Pages/Dashboard/LightInfo';
import {connect} from 'react-redux'
import {getLights} from './Redux/actions';
import Divider from './Components/Divider';

class App extends Component {

  componentDidMount() {
    this.props.getLights()
  }

  render() {
    return (
      <div>
        <div className="container">
          <AllLights /> 
          <Divider dir="ver" size="100vh"/>
          <LightInfo />
        </div>
      </div>
    );
  }
}

export default connect(null, {getLights})(App);
