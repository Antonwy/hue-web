import React, { Component } from 'react'
import '../../Style/AllLights.css'
import Light from './Light';
import {connect} from 'react-redux'
import {setCurrentLight} from '../../Redux/actions';
import posed from 'react-pose';

const LightsContainer = posed.div({
    visible: {staggerChildren: 250,},
    hidden: {}
})

const Input = posed.input({
    visible: {opacity: 1, x: 0},
    hidden: {opacity: 0, x: -100}
})

class AllLights extends Component {

    state = {
        searchInput: '',
        animate: false
    }

    componentDidMount() {
        this.setState({animate: true})
    }

    handleChange = (value) => {
        this.setState({
            searchInput: value.target.value
        });
    }

    render() {
        const {searchInput, animate} = this.state;
        const {lights, currentLight} = this.props;
        const filterArr = lights.filter(item => {
            return item.name.toLowerCase().includes(searchInput.toLowerCase())
        })
        const allLights = searchInput.replace(/\s/g, '') === '' ? lights : filterArr;
        return (
            <LightsContainer pose={animate ? "visible" : "hidden"} className='lightsContainer'>
                <Input onChange={this.handleChange} placeholder="Search light" />
                {
                    allLights.map((item, i) => (
                        <Light clicked={currentLight.name === item.name} onClick={this.props.setCurrentLight} item={item} key={i} />
                    ))
                }
            </LightsContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        lights: state.lights,
        currentLight: state.currentLight
    }
}

export default connect(mapStateToProps, {setCurrentLight})(AllLights);