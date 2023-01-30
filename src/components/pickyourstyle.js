import React from 'react';
import MainNavbar from './mainNavbar';

export default class pickyourstyle extends React.Component{
constructor(props) {
    super(props);
    this.state = {
        style:  [],
    }
}

render() {
    return (
       <>
       <MainNavbar />
        <div className="container">
            <div className="row">
            <div className='col'>
                <h4 className='text-start mt-5'>Pick your Style</h4>
                <section>
                    <ul className='d-flex justify-content-md-start gap-3'>
                    <li className='list containerImage'>
                        <a href=".">
                        <div class="card-group gap-5">
                            <div class="">
                                <img src="https://via.placeholder.com/110" class="card-img-center rounded-pill" alt="..." />
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                            <div class="">
                                <img src="https://via.placeholder.com/110" class="card-img-center rounded-pill" alt="..." />
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                            <div class="">
                                <img src="https://via.placeholder.com/110" class="card-img-center rounded-pill" alt="..." />
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                            <div class="">
                                <img src="https://via.placeholder.com/110" class="card-img-center rounded-pill" alt="..." />
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                            <div class="">
                                <img src="https://via.placeholder.com/110" class="card-img-center rounded-pill" alt="..." />
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                            <div class="">
                                <img src="https://via.placeholder.com/110" class="card-img-center rounded-pill" alt="..." />
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                            <div class="">
                                <img src="https://via.placeholder.com/110" class="card-img-center rounded-pill" alt="..." />
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                            <div class="">
                                <img src="https://via.placeholder.com/110" class="card-img-center rounded-pill" alt="..." />
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                            <div class="">
                                <img src="https://via.placeholder.com/110" class="card-img-center rounded-pill" alt="..." />
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>
                        </a>
                    </li>          
                    </ul> 
                </section>
            </div>
        </div>
        <div className='row'>
<h4 className='text-start mt-5'>Top list items</h4>
        <div className='col'>
        <section>
        <ul className='d-flex justify-content-md-start gap-3'>
          <li className='list containerImage'>
            <a href=".">
            <div class="card-group gap-5">
                <div class="">
                    <img src="https://via.placeholder.com/150x200" class="card-img-top " alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    </div>
                </div>
                <div class="">
                    <img src="https://via.placeholder.com/150x200" class="card-img-top " alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    </div>
                </div>
                <div class="">
                    <img src="https://via.placeholder.com/150x200" class="card-img-top " alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    </div>
                </div>
                <div class="">
                    <img src="https://via.placeholder.com/150x200" class="card-img-top " alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    </div>
                </div>
                <div class="">
                    <img src="https://via.placeholder.com/150x200" class="card-img-top " alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    </div>
                </div>
                <div class="">
                    <img src="https://via.placeholder.com/150x200" class="card-img-top " alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    </div>
                </div>
                <div class="">
                    <img src="https://via.placeholder.com/150x200" class="card-img-top " alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    </div>
                </div>
                <div class="">
                    <img src="https://via.placeholder.com/150x200" class="card-img-top " alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    </div>
                </div>
                <div class="">
                    <img src="https://via.placeholder.com/150x200" class="card-img-top " alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    </div>
                </div>
            </div>
            </a>
          </li>          
        </ul> 
    </section>
        </div>
    </div>
    </div>
    
</>
      )
}  
}
