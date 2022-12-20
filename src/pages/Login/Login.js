import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

export default class Login extends React.Component {
  render(){
    return (
        <>
            <div className="container">
                <div className='row justify-content-md-center'>
                    <div className='col-lg-4 col-md-auto login'>
                        <h2 className='text-center mb-4'><strong>Welcome back</strong></h2>
                        <div className='container'>
                            <form className='col'>
                                <label for='email'>Email or Username</label>
                                <input type='email' id='email' placeholder='john@example.com' className='inputField'/>
                                <label for='password'>Password</label>
                                <input type='password' id='password' placeholder='*********' className='inputField'/>
                                <button className='btnLogin'>Continue</button>
                                <span>Don't have an account? <a href='.' className='text-decoration-none'><NavLink to='/signup'><strong>Sign up</strong></NavLink></a></span>
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
