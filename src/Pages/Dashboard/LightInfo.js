import React, { Component } from 'react'
import '../../Style/LightInfo.css';
import Divider from '../../Components/Divider';
import { connect } from "react-redux";
import InfoCards from './InfoCards';

import {reloadCurrentItem} from '../../Redux/actions'

import Reload from '../../Images/reload-icon.svg';

class LightInfo extends Component {


  getCurrentDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][today.getMonth()];
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = `${mm} ${dd}, ${yyyy}`;
    return today;
  }

  handleReload = () => {
    this.props.reloadCurrentItem(this.props.light.id);
  }

  render() {
    return (
      <div className='infoContainer'>
        <div className="header">
          <div>
            <p className="grey">Overview</p>
            <h1>{this.props.light.name}</h1>
          </div>
          <div>
            <h2 className="date">Today・{this.getCurrentDate()}</h2>
            <img onClick={this.handleReload} src={Reload} alt="reload" />
          </div>
        </div>
        <Divider dir="hor" size="100%" style={{marginTop: '30px'}}/>
        <InfoCards />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    light: state.currentLight
  }
}

export default connect(mapStateToProps, {reloadCurrentItem})(LightInfo);