import React from 'react';
import MainNavbar from './mainNavbar';

export default class pickyourstyle extends React.Component{
constructor(props) {
    super(props);
    this.state = {
        productList:  [],
    }
}

componentDidMount() {
    fetch('http://localhost:4002/')
    .then((res) => res.json())
    .then((response) => {
      this.setState({ 
        productList: [...response]
      })
    })
}

CollectID = (e,id)=>{
alert('Collect', id)
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
                {
                this.state.productList.map((product,index) =>{
                    return (
                    <>
                        <li className='list containerImage' onClick={(e) => this.CollectID(
                                product.id
                            )}>
                            <a href=".">
                                <div className="card-group gap-5">
                                    <div className="text-center">
                                        <img src="https://via.placeholder.com/110" className="card-img-center rounded-pill" alt="..." />
                                        <div className="card-body">
                                        <h6 className="card-title"  key={index}>{product.product_name}</h6>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>    
                    </>
                    )})
                }
                </ul> 
            </section>
        </div>
    </div>
    <div className="row">
        <div className='col'>
            <h4 className='text-start mt-5'>Top list items</h4>
            <section>
                <ul className='d-flex justify-content-md-start gap-3'>
                {
                this.state.productList.map((product,index) =>{
                    return (
                    <>
                        <li className='list containerImage' key={index}>
                            <a href=".">
                                <div className="card-group gap-5">
                                    <div className="text-center">
                                        <img src="https://via.placeholder.com/150x200" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                        <h6 className="card-title">{product.product_name}</h6>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>    
                    </>
                    )})
                }
                </ul> 
            </section>
        </div>
    </div>
</div>
    
</>
)}}
