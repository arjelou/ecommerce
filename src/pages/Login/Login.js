import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Login extends React.Component {
  render(){
    return (
        <>
            <div className="container">
                <div className='row justify-content-md-center mb-5'>
                    <div className='col-lg-4 col-md-auto login'>
                        <h2 className='text-center mb-4'><strong>Login to your account</strong></h2>
                        <div className='container'>
                            <form className='col'>
                                <label for='email'>Email or Username</label>
                                <input type='email' id='email' placeholder='john@example.com' className='inpuInactive'/>
                                <label for='password'>Password</label>
                                <input type='password' id='password' placeholder='*********' className='inpuInactive'/>
                                <button className='btnDefault'>Continue</button>
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
}
