import React from 'react';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import loginSchema from '../schemas/loginSchema';
import axios from 'axios';


const onSubmit = (values,actions) => {
    axios.post('http://localhost:4002/login', {
        email: values.email,
        password: values.password,
        })
        .then(res => {
            const userID = document.cookie = res.data.id > 0 ? `user = ${res.data.id}` : "";
            console.log(userID);
        if(res.data === ''){
            alert('Incorrect username or password!')
            actions.resetForm();
        }
        else if(res.data.email === 'arjelou.jelou@gmail.com')
        {
            alert('You are logged in as administrator!')
            window.location.href = '/dashboard'
        }
        else{
            alert('You are logged in successfully')
            window.location.href = '/designs'
        }
    })
}

const Login = () => {
const {values, handleChange, handleBlur, handleSubmit,errors, touched} = useFormik({
    initialValues: {
        email: '',
        password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
})

return (
<>
<div className="container">
    <div className='row justify-content-md-center mb-5'>
        <div className='col-lg-4 col-md-auto login'>
            <h2 className='text-center mb-4'><strong>Login to your account</strong></h2>
            <div className='container'>
                <form className='col' onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email or Username</label>
                    <input 
                    type='email' 
                    id='email'
                    name='email' 
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    placeholder='john@example.com' 
                    className={errors.email && touched.email ? 'inpuInactive input-error' : 'inpuInactive'}

                    />
                    {errors.email && touched.email && <p className='error'>{errors.email}</p>}

                    <label htmlFor='password'>Password</label>
                    <input 
                    type='password' 
                    id='password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    placeholder='*********' 
                    className={errors.password && touched.password ? 'inpuInactive input-error' : 'inpuInactive'}

                    />
                    {errors.password && touched.password && <p className='error'>{errors.password}</p>}

                    <button className='btnDefault' type='submit'>Continue</button>
                    <span>Don't have an account? <a href='.' className='text-decoration-none'><NavLink to='/signup'><strong>Sign up</strong></NavLink></a></span>
                    <hr />
                    <button className='loginOR mb-2'>Continue with Google</button>
                    <button className='loginOR'>Continue with Facebook</button>
                </form>
            </div>
        </div>                 
    </div>
</div> 
</>
  )
}

export default Login; 

