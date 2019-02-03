import React from 'react'
import {Field, reduxForm} from 'redux-form';

import Email from '../../Images/email-icon.svg'
import Password from '../../Images/password-icon.svg'
import { validateLogin as validate } from '../../Helper/Validate';

const LoginForm = ({handleSubmit, renderField, mySubmit, hasError}) => {
  return (
    <form className="registerForm" onSubmit={handleSubmit(mySubmit)}>                        
        <Field name="email" type="email" component={renderField} label="Email" icon={Email}/>
        <Field name="password" type="password" component={renderField} label="Password" icon={Password}/>
        {
          hasError ? <p>Wrong credentials!</p> : <div></div>
        }
        <button style={{backgroundColor: "#66a6ff"}} type="submit">SIGN IN</button>
    </form>
  )
}

export default reduxForm({
    form: 'login',
    validate,
})(LoginForm)
