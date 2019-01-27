import React, { Component } from 'react'
import '../../Style/AllLights.css'
import Light from './Light';
import {connect} from 'react-redux'
import {setCurrentLight} from '../../Redux/actions';

class AllLights extends Component {

    state = {
        searchInput: '',
    }

    handleChange = (value) => {
        this.setState({
            searchInput: value.target.value
        });
    }

    render() {
        const {searchInput} = this.state;
        const {lights, currentLight} = this.props;
        const filterArr = lights.filter(item => {
            return item.name.toLowerCase().includes(searchInput.toLowerCase())
        })
        const allLights = searchInput.replace(/\s/g, '') === '' ? lights : filterArr;
        return (
        <div className='lightsContainer'>
            <input onChange={this.handleChange} placeholder="Search light"></input>
            {
                allLights.map((item, i) => (
                    <Light clicked={currentLight.name === item.name} onClick={this.props.setCurrentLight} item={item} key={i} />
                ))
            }
        </div>
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