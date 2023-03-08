import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import Users from '../schemas/usersSchema';
import axios from 'axios';
import { Store } from 'react-notifications-component';


const onSubmit = (values, actions) =>{
    axios.post('https://containers-us-west-74.railway.app:4003/signup', {
        fullname: values.fullname,
        email: values.email,
        company: values.company,
        totalEmployee: values.totalEmployee,
        zipcode: values.zipcode,
        password: values.password,
        confirmpassword: values.confirmpassword,
        }, 
        validSignup(),
        actions.resetForm(),
        // window.location.href = '/login'
        )
        .then(res => {
        console.log(res);
        console.log(res.data);
    })
}
const validSignup = () =>{
Store.addNotification({
    title: "Thank you for signing up",
    message: "Your account was created",
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
        duration: 4000,
        onScreen: true
    }
    });
} 
const SignupNew = () =>{   
const {values,handleChange,handleBlur,handleSubmit,errors, touched} = useFormik({
    initialValues: {
        fullname: '',
        email: '',
        company: '',
        totalEmployee: '',
        zipcode: '',
        password: '',
        confirmpassword: ''
    },
    validationSchema: Users,
    onSubmit,
});
   
return (
<>
    <div className="container">
        <div className='row justify-content-md-center'>
            <div className='col-lg-4 col-md-auto login'>
                <h2 className='text-center mb-4'><strong>Create your account</strong></h2>
                <div className='container'>
                <form  className='col' onSubmit={handleSubmit}>
                    <label htmlFor='fullname'>Full Name <span className='important'>*</span></label>
                    <input 
                    type='text'
                    id='fullname' 
                    name='fullname'
                    value={values.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    placeholder='John Smith' 
                    className={errors.fullname && touched.fullname ? 'inpuInactive input-error' : 'inpuInactive' }
                    />
                    {errors.fullname && touched.fullname && <p className='error'>{errors.fullname}</p>}
                    <label htmlFor='email'>Email Address <span className='important'>*</span></label>
                    <input 
                    type='email'
                    id='email' 
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    placeholder='john@example.com' 
                    className={errors.email && touched.email ? 'inpuInactive input-error' : 'inpuInactive' }
                    />
                    {errors.email && touched.email && <p className='error'>{errors.email}</p>}
                    <label htmlFor='company'>Company (optional)</label>
                    <input 
                    type='text' 
                    id='company' 
                    name='company'
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    placeholder='MAGSIGE MPC' 
                    className='inpuInactive'
                    />
                    <label htmlFor='totalEmployee'>Total Employee (optional)</label>
                    <input 
                    type='number'
                    id='totalEmployee'
                    name='totalEmployee'
                    value={values.totalEmployee} 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    placeholder='500' 
                    className={errors.totalEmployee && touched.totalEmployee ? 'inpuInactive input-error' : 'inpuInactive' }
                    />
                    {errors.totalEmployee && touched.totalEmployee && <p className='error'>{errors.totalEmployee}</p>}
                    <label htmlFor='zipcode'>Zip Code <span className='important'>*</span></label>
                    <input 
                    type='text'
                    id='zipcode' 
                    name='zipcode'
                    value={values.zipcode}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    placeholder='Davao del Sur, 8000' 
                    className={errors.zipcode && touched.zipcode ? 'inpuInactive input-error' : 'inpuInactive' }
                    />
                    {errors.zipcode && touched.zipcode && <p className='error'>{errors.zipcode}</p>}
                    <label htmlFor='password'>Password <span className='important'>*</span></label>
                    <input 
                    type='password' 
                    id='password'
                    name='password' 
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    placeholder='*********' 
                    className={errors.password && touched.password ? 'inpuInactive input-error' : 'inpuInactive' }
                    />
                    {errors.password && touched.password && <p className='error'>{errors.password}</p>}

                    <label htmlFor='confirmpassword'>Confirm Password <span className='important'>*</span></label>
                    <input 
                    type='password' 
                    id='confirmpassword' 
                    name='confirmpassword'
                    value={values.confirmpassword}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    placeholder='*********' 
                    className={errors.confirmpassword && touched.confirmpassword ? 'inpuInactive input-error' : 'inpuInactive' }
                    />
                    {errors.confirmpassword && touched.confirmpassword && <p className='error'>{errors.confirmpassword}</p>}

                    <button className='btnDefault' type='submit'>Continue</button>
                    <span>Already have an account? <a href='.' className='text-decoration-none'><NavLink to='/login'><strong>Log in</strong></NavLink></a></span>
                    <hr />
                    <button className='loginOR'>Continue with Google</button>
                    <button className='loginOR mt-2'>Continue with Facebook</button>
                </form>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default SignupNew;