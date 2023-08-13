import React from 'react';

export default function Form(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props
    
    const onSubmit = evt => {
        evt.preventDefault()
        submit();
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name,valueToUse);
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>User Login</h2>

                <button type="Submit" disabled={disabled}>SUBMIT</button>
                
                <div className='errors'>
                    <div>{errors.first_name}</div>
                    <div>{errors.last_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.termsofservice}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <label>First Name
                    <input 
                        type="text"
                        name='first_name'
                        value={values.first_name}
                        onChange={onChange}
                    />
                </label>

                <label>Last Name
                    <input 
                        type="text"
                        name='last_name'
                        value={values.last_name}
                        onChange={onChange}
                    />
                </label>

                <label>Email
                    <input 
                        type="email"
                        name='email'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                
                <label>Password
                    <input 
                        type="password"
                        name='password'
                        value={values.password}
                        onChange={onChange}
                    />
                </label>

                <label>Terms of Service
                    <input 
                        type="checkbox"
                        name="termsofservice"
                        checked={values.termsofservice}
                        onChange={onChange}
                    />
                </label>                
            </div>
        </form>
    )
};