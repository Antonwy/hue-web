import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../../Style/LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landingContainer">
        <h1>A Philips Hue Web Page</h1>
        <Link to="/dashboard"><button>Dashboard</button></Link>
        <Link to="/register"><button>Register</button></Link>
      </div>
    )
  }
}
