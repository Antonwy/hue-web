import React, { Component } from 'react'
import posed from 'react-pose';
import '../Style/CustomComponents.css'


const Container = posed.div({
    checked: {backgroundColor: 'rgb(83, 216, 83)'},
    unChecked: {backgroundColor: 'rgb(216, 216, 216)'}
})

const Circle = posed.div({
    checked: {x: 23.5},
    unChecked: {x: 0},
    enter: {scale: .8},
    exit: {scale: 1}
})

export default class Switch extends Component {

    state = {
        enter: false
    }

    componentDidMount() {
        this.setState({
            checked: this.props.defaultChecked
        })
    }

    toggleSwitch = () => {
        this.props.onClick(!this.props.checked);
    }

    onMouseExitEnter = () => {
        this.setState({enter: !this.state.enter})
    }

  render() {
    const {enter} = this.state;
    const {checked} = this.props;
    return (
      <Container onClick={this.toggleSwitch} className="switchContainer" pose={checked ? 'checked' : 'unChecked'}>
        <Circle pose={enter ? 'enter' : 'exit'} onMouseEnter={this.onMouseExitEnter} onMouseLeave={this.onMouseExitEnter} />
      </Container>
    )
  }
}
