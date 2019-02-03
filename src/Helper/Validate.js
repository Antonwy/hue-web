
export const validateRegister = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Required'
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if(!values.password1){
        errors.password1 = 'Required'
    }else if (values.password1.length <= 8) {
        errors.password1 = 'Must be 8 characters or more.'
    }
    if(!values.password2){
        errors.password2 = 'Required'
    }else if (values.password2.length <= 8) {
        errors.password2 = 'Must be 8 characters or more.'
    }
    return errors
}

export const validateLogin = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if(!values.password){
        errors.password = 'Required'
    }else if (values.password.length <= 8) {
        errors.password = 'Must be 8 characters or more.'
    }
    return errors
}

export const warn = values => {
    const warnings = {}
    if (values.password1 !== values.password2) {
        warnings.password2 = "Passwords must be the same."
    }
    return warnings
}