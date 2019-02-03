import React, { Component } from 'react'
import '../../Style/LightInfo.css';
import Divider from '../../Components/Divider';
import { connect } from "react-redux";
import InfoCards from './InfoCards';

import {reloadCurrentItem} from '../../Redux/actions'

import Reload from '../../Images/reload-icon.svg';
import posed from 'react-pose';

const InfoContainer = posed.div({
  visible: {staggerChildren: 250},
  hidden: {}
})

const Header = posed.div({
  visible: {staggerChildren: 250},
  hidden: {}
})

const Child = posed.div({
  visible: {opacity: 1, y: 0},
  hidden: {opacity: 0, y: -100}
})

const Name = posed.h1({
  visible: {opacity: 1, scaleY: 1},
  hidden: {opacity: 0, scaleY: 0}
})

class LightInfo extends Component {

  state = {
    animate: false,
    animateName: false
  }

  componentDidMount() {
    this.setState({animate: true})
  }

  componentDidUpdate(prevProps) {
    if(prevProps.light.name !== this.props.light.name) {
      this.setState({animateName: false}, () => {
        setTimeout(() => {
          this.setState({animateName: true})
        }, 500)
      })
    }
  }

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
    const animate = this.state.animate ? 'visible' : 'hidden';
    const animateName = this.state.animateName ? 'visible' : 'hidden';
    return (
      <InfoContainer pose={animate} className='infoContainer'>
        <Header className="header">
          <Child>
            <p className="grey">Overview</p>
            <Name pose={animateName}>{this.props.light.name}</Name>
          </Child>
          <Child>
            <h2 className="date">Today・{this.getCurrentDate()}</h2>
            <img onClick={this.handleReload} src={Reload} alt="reload" />
          </Child>
        </Header>
        <Divider dir="hor" size="100%" style={{marginTop: '30px'}}/>
        <InfoCards />
      </InfoContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    light: state.currentLight
  }
}

export default connect(mapStateToProps, {reloadCurrentItem})(LightInfo);