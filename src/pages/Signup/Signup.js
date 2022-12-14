import React from 'react'

export default class Signup extends React.Component {
  render(){
    return (
        <>
                <div className="container">
                    <div className='row justify-content-md-center'>
                        <div className='col-lg-4 col-md-auto login'>
                            <h2 className='text-center mb-4'><strong>Create your account</strong></h2>
                            <div className='container form'>
                                <form className='col g-3'>
                                    <div class="col-auto form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder='adakd'/>
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="col-auto form-floating mb-3">
                                        <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Password</label>
                                    </div>
                                    <div>
                                        <button className='btn btn-success form-control p-3'>Continue</button>
                                    </div>
                                    <span>Already have an account? <a href='.' className='text-decoration-none'>Log in</a></span>
                                    <hr />
                                <div>
                                    <button className='btn btn-outline-secondary form-control p-3'>Continue with Google</button>
                                    <button className='btn btn-outline-secondary form-control p-3 mt-2'>Continue with Facebook</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
      )
  }
}
