import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import UsersSchema from '../../schemas/usersSchema';


const onSubmit = (values, actions) => {
    alert(values.email)
}

const Signup = () =>{
const {values, handleChange, handleBlur, handleSubmit, errors, touched} = useFormik({
    initialValues: {
        email: '',
        company: '',
        totalEmployee: '',
        zipcode: '',
        password: '',
        confirmpassword: ''
    },
    validationSchema: UsersSchema,
    onSubmit
    
});    
 
 
    return (
    <>
        <div className="container">
                     <div className='row justify-content-md-center'>
                         <div className='col-lg-4 col-md-auto login'>
                             <h2 className='text-center mb-4'><strong>Create your account</strong></h2>
                             <div className='container'>
                             <form className='col' onSubmit={handleSubmit}>
                                 <label for='email'>Email Address <span className='important'>*</span></label>
                                 <input 
                                 type='email'
                                 name='email' 
                                 id='email' 
                                 value={values.email}
                                 onChange={handleChange}
                                 onBlur={handleBlur} 
                                 placeholder='john@example.com' 
                                 className='inpuInactive'

                                 />
                                 <label for='company'>Company (optional)</label>
                                 <input 
                                 type='text' 
                                 name='company'
                                 id='company' 
                                 value={values.company}
                                 onChange={handleChange}
                                 onBlur={handleBlur} 
                                 placeholder='MAGSIGE MPC' 
                                 className='inpuInactive'

                                 />
                                 <label for='totalEmployee'>Total Employee (optional)</label>
                                 <input 
                                 type='number'
                                 name='totalEmployee' 
                                 id='totalEmployee'
                                 value={values.totalEmployee} 
                                 onChange={handleChange}
                                 onBlur={handleBlur} 
                                 placeholder='500' 
                                 className='inpuInactive'
                                    
                                 />
                                 <label for='zipcode'>Zip Code <span className='important'>*</span></label>
                                 <input 
                                 type='text'
                                 name='zipcode' 
                                 id='zipcode' 
                                 value={values.zipcode}
                                 onChange={handleChange}
                                 onBlur={handleBlur} 
                                 placeholder='Davao del Sur, 8000' 
                                 className='inpuInactive'

                                 />
                                 <label for='password'>Password <span className='important'>*</span></label>
                                 <input 
                                 type='password' 
                                 name='password' 
                                 id='password' 
                                 value={values.password}
                                 onChange={handleChange}
                                 onBlur={handleBlur} 
                                 placeholder='*********' 
                                 className='inpuInactive'

                                 />
                                 <label for='confirmpassword'>Confirm Password <span className='important'>*</span></label>
                                 <input 
                                 type='password' 
                                 name='confirmpassword'
                                 id='confirmpassword' 
                                 value={values.confirmpassword}
                                 onChange={handleChange}
                                 onBlur={handleBlur} 
                                 placeholder='*********' 
                                 className='inpuInactive'

                                 />
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

export default Signup;




















// import React from 'react';
// import { NavLink } from 'react-router-dom';

// export default class Signup extends React.Component {
//   render(){
//     return (
//         <>
//                 <div className="container">
//                     <div className='row justify-content-md-center'>
//                         <div className='col-lg-4 col-md-auto login'>
//                             <h2 className='text-center mb-4'><strong>Create your account</strong></h2>
//                             <div className='container'>
//                             <form className='col'>
//                                 <label for='email'>Email Address <span className='important'>*</span></label>
//                                 <input type='email' id='email' placeholder='john@example.com' className='inpuInactive'/>
//                                 <label for='company'>Company (optional)</label>
//                                 <input type='text' id='company' placeholder='MAGSIGE MPC' className='inpuInactive'/>
//                                 <label for='totalEmployee'>Total Employee (optional)</label>
//                                 <input type='number' id='totalEmployee' placeholder='500' className='inpuInactive'/>
//                                 <label for='zipcode'>Zip Code <span className='important'>*</span></label>
//                                 <input type='text' id='zipcode' placeholder='Davao del Sur, 8000' className='inpuInactive'/>
//                                 <label for='password'>Password <span className='important'>*</span></label>
//                                 <input type='password' id='password' placeholder='*********' className='inpuInactive'/>
//                                 <label for='confirmpassword'>Confirm Password <span className='important'>*</span></label>
//                                 <input type='password' id='confirmpassword' placeholder='*********' className='inpuInactive'/>
//                                 <button className='btnDefault'>Continue</button>
//                                 <span>Already have an account? <a href='.' className='text-decoration-none'><NavLink to='/login'><strong>Log in</strong></NavLink></a></span>
//                                 <hr />
//                                 <button className='loginOR'>Continue with Google</button>
//                                 <button className='loginOR mt-2'>Continue with Facebook</button>
//                             </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//       )
//   }
// }
