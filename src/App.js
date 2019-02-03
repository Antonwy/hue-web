import React, { Component } from 'react';
import './Style/App.css';
import {connect} from 'react-redux'
import {getLights} from './Redux/actions';
import Dashboard from './Pages/Dashboard/Dashboard';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from './Pages/Register/Register';
import LandingPage from './Pages/HomePage/LandingPage';

class App extends Component {

  componentDidMount() {
    this.props.getLights()
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL + "#/"}>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default connect(null, {getLights})(App);
