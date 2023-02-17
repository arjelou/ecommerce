import React from 'react';
import Footer from "../../components/Footer";
import Pickyourstyle from '../../components/pickyourstyle';
import UNavbar from '../../components/uNavbar';
import { Outlet } from 'react-router-dom';
import InquiriesCanvas from './inquiriesCanvas';

export default class home extends React.Component {
render() {
return (
<>
<UNavbar />
<Outlet />
<InquiriesCanvas />
<Pickyourstyle />
    {/* BESTSELLERS CONTAINER */}
        <div className='container'>
            <h3 className='mt-5 mb-3 text-center'>BESTSELLERS</h3>
            <div className='row f-flex justify-content-md-center gap-2'>
            <div className='col-lg-1 card-image'>
                <img src='.' alt='hello' width={180}/>
                    <h6 className='card-image-title'>Gala Bed Chiropractic Spring Mattress</h6>
                        <p className='card-image-content'>P 890.90</p>
                <button className='btn btn-primary form-control'>Add to Cart</button>
            </div>
            </div>
        </div>
        <div className='container mt-5 mb-5'>
            <div className='row text-center'>
                <div className='col'>
                    <img className='explore-more image-fluid' src='.' height={300} alt='banner-fooer'/>
                </div>
            </div>
        </div>
    <hr />
    <Footer />
</>
        )
    }
}
 
