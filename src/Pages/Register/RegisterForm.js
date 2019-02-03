import React from 'react'
import {Field, reduxForm} from 'redux-form';

import Email from '../../Images/email-icon.svg'
import User from '../../Images/user-icon.svg'
import Password from '../../Images/password-icon.svg'
import { validateRegister as validate, warn } from '../../Helper/Validate';

const RegisterForm = (props) => {
    const {handleSubmit, renderField, mySubmit, hasError} = props;
  return (
    <form className="registerForm" onSubmit={handleSubmit(mySubmit)}>
        <Field name="username" type="text" component={renderField} label="Username" icon={User}/>
        <Field name="email" type="email" component={renderField} label="Email" icon={Email}/>
        <Field name="password1" type="password" component={renderField} label="Password" icon={Password}/>
        <Field name="password2" type="password" component={renderField} label="Password" icon={Password}/>
        {
            hasError ? <p>Something went wrong! Try again!</p> : <div></div>
        }
        <button style={{backgroundColor: "#72afd3"}} type="submit">SIGN UP</button>
    </form>
  )
}

export default reduxForm({
    form: 'register',
    validate,
    warn
})(RegisterForm)
