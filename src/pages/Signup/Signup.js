import React from 'react';
import './Signup.css';
import { NavLink } from 'react-router-dom';
export default class Signup extends React.Component {
  render(){
    return (
        <>
                <div className="container">
                    <div className='row justify-content-md-center'>
                        <div className='col-lg-4 col-md-auto login'>
                            <h2 className='text-center mb-4'><strong>Create your account</strong></h2>
                            <div className='container'>
                            <form className='col'>
                                <label for='email'>Email Address <span className='important'>*</span></label>
                                <input type='email' id='email' placeholder='john@example.com' className='inputField'/>
                                <label for='company'>Company (optional)</label>
                                <input type='text' id='company' placeholder='MAGSIGE MPC' className='inputField'/>
                                <label for='totalEmployee'>Total Employee (optional)</label>
                                <input type='number' id='totalEmployee' placeholder='500' className='inputField'/>
                                <label for='zipcode'>Zip Code <span className='important'>*</span></label>
                                <input type='text' id='zipcode' placeholder='Davao del Sur, 8000' className='inputField'/>
                                <label for='password'>Password <span className='important'>*</span></label>
                                <input type='password' id='password' placeholder='*********' className='inputField'/>
                                <label for='confirmpassword'>Confirm Password <span className='important'>*</span></label>
                                <input type='password' id='confirmpassword' placeholder='*********' className='inputField'/>
                                <button className='btnLogin'>Continue</button>
                                <span>Already have an account? <a href='.' className='text-decoration-none'><NavLink to='/login'><strong>Log in</strong></NavLink></a></span>
                                <hr />
                                <button className='btnLoginWithGoogle'>Continue with Google</button>
                                <button className='btnLoginWithFacebook'>Continue with Facebook</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
      )
  }
}
