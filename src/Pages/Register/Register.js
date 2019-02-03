import React, { Component } from 'react'
import '../../Style/Register.css'

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import posed from 'react-pose';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

import {registerUser, loginUser} from '../../Redux/userActions'

const animDuration = 750;

const description = {
    signIn: {
        h1: "Welcome Back!",
        p: "To keep connected with Philips Hue, please log into your account.",
        button: "SIGN IN"
    },
    signUp: {
        h1: "Hello, Friend!",
        p: "Enter your personal details, to start using our service.",
        button: "SIGN UP"
    }
}

const Banner = posed.div({
    signUp: {
        x: "calc(100vw - 100%)",
        width: "100%",
        backgroundImage: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
        transition: {
            width: {
                type: 'keyframes',
                values: ["100%", "140%", "100%"],
                duration: animDuration,
            },
            // x: {delay: 500, duration: 500}
            duration: animDuration
        },
    },
    signIn: {
        x: 0,
        width: "100%",
        backgroundImage: "linear-gradient(120deg, #37ecba 0%, #72afd3 100%)",
        transition: {
            width: {
                type: 'keyframes',
                values: ["100%", "140%", "100%"],
                duration: animDuration,
            },
            // x: {delay: 500, duration: 500}
            duration: animDuration
        },
    }
})

const RegisterContainer = posed.div({
    signUp: {
        x: "calc(-100vw + 100%)",
        transition: {duration: animDuration}
    },
    signIn: {
        x: 0,
        transition: {duration: animDuration}
    }
})

class Register extends Component {

    state = {
        signUp: true,
        changeValues: true,
        loginHasError: false,
        registerHasError: false,
    }

    handleSubmitLogin = (v) => {
        this.props.loginUser(v, (e) => {
            if(e){
                this.setState({loginHasError: true})
            }else {
                this.props.history.push('/dashboard')
            }
        })
    }

    handleSubmitRegister = (v) => {
        const user = {
            username: v.username,
            email: v.email,
            password: v.password1
        }
        this.props.registerUser(user, (e) => {
            if(e){
                this.setState({registerHasError: true})
            }else {
                this.props.history.push('/dashboard')
            }
        });
    }

    handleChangeClick = () => {
        this.setState({signUp: !this.state.signUp})
        setTimeout(() => {
            this.setState({changeValues: !this.state.changeValues})
        }, animDuration / 3)
    }

  render() {
      const {signUp, changeValues, loginHasError, registerHasError} = this.state;
      const desc = signUp ? description.signIn : description.signUp;
      const header = changeValues ? 'Create Account' : 'Sign in to Philips Hue';
      const headerColor = changeValues ? "#72afd3" : "#66a6ff";
    return (
        <div className="registerContainer">
            <Banner pose={signUp ? 'signIn' : 'signUp'} className="registerBanner">
                <h1>{desc.h1}</h1>
                <p>{desc.p}</p>
                <button onClick={this.handleChangeClick} className="signInButton">{desc.button}</button>
            </Banner>
            <RegisterContainer pose={signUp ? 'signIn' : 'signUp'} className="register">
                <div>
                    <h1 style={{color: headerColor}}>{header}</h1>
                    {
                        changeValues ? 
                        <RegisterForm hasError={registerHasError} renderField={renderField} mySubmit={this.handleSubmitRegister} />
                        :
                        <LoginForm hasError={loginHasError} renderField={renderField} mySubmit={this.handleSubmitLogin} />
                    }
                </div>
            </RegisterContainer>
        </div>
    )
  }
}
  
const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning },
    icon
    }) => (
    <div className="inputField">
        <div className="inputImg">
            <div><img alt="icon" src={icon} /></div>
            <input {...input} placeholder={label} type={type} />
        </div>
        {touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
)

export default withRouter(connect(null, {registerUser, loginUser})(Register));