import React from 'react';
import { BsCircleSquare,BsPerson,BsChevronRight } from 'react-icons/bs';
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom';
import Products from '../assets/Products.jpg';
import Ai from '../assets/ai.png';
import Support from '../assets/support.png';
import Forecast from '../assets/forecast.png';
import Sayabout from '../assets/sayabout.jpg';
import logo from '../assets/acmade.png';


export default class index extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        productList: []
    }
}
componentDidMount() {
    fetch('http://localhost:4002/product/')
    .then((res) => res.json())
    .then((response) => {
        this.setState({ 
        productList: [...response]
        })
    })
}

render() {
    return (
<>
<header className="header_hero">
    <img src={logo} alt='acmade logo' />
    <article>
        <h1>Gre Garments Manufacturing</h1>
        <p>
        The company prides itself on using only the best materials and employing skilled workers who 
        are passionate about their craft. MAGSIGE offers a range of services, 
        from design and prototyping to mass production and delivery.
        </p>
    </article>
</header>

<div>
    <nav className="navbar navbar-expand-lg homeNav container-fluid">
        <div className="container ">
        <a className="navbar-brand homeNavFont" href=".">ACMADE MAGSIGE</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <ul className="navbar-nav justify-content-start">
            <li className="nav-item dropdown unactive-category-btn">
                <a className="nav-link dropdown-toggle homeNavFont" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Company
                </a>
                <ul className="dropdown-menu">
                <NavLink className={({isActive}) => isActive ? "active_category_dropdown" : "unactive_category_dropdown"} to='/dashboard/listofcustomers'>About Us</NavLink>
                <NavLink className="unactive_category_dropdown" data-bs-toggle="modal" data-bs-target="#addNewModalCreateCustomer">Contact Us</NavLink>
                <NavLink className="unactive_category_dropdown" data-bs-toggle="modal" data-bs-target="#addNewModalCreateCustomer">Join Our Team</NavLink>
                </ul>
            </li>
            <li className="nav-item dropdown unactive-category-btn">
                <a className="nav-link dropdown-toggle homeNavFont" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Other Services
                </a>
                <ul className="dropdown-menu">
                <NavLink className={({isActive}) => isActive ? "active_category_dropdown" : "unactive_category_dropdown"} to='/dashboard/alldesigns'>Labor</NavLink>
                <NavLink className={({isActive}) => isActive ? "active_category_dropdown" : "unactive_category_dropdown"} to='/dashboard/categories'>Agriculture</NavLink>
                </ul>
            </li>
        </ul>
        </div>
        <div>
            <NavLink className={({isActive}) => isActive ? "active-category-btn" : "unactive-category-btn"} to='/login'><BsPerson size={30} title='Login' color='black' /></NavLink>
            <NavLink className='signup_btn homeNavFont' to='/signup'>Sign up</NavLink>
        </div>
        </div>
    </nav>
</div>

{/* A powerful technology platform that solves manufacturing */}
<div className="powerful_technology">    
    <h3 className='text-center mt-2 ai'>A powerful technology platform that solves manufacturing</h3>
    <img src={Ai} alt='A powerful technology platform that solves manufacturing' />
    <section>
        <h4>Using AI and Data Science to change the way brands source products!</h4>
        <div className='d-flex gap-3'>
            <BsCircleSquare size={20} color='#2B3A55'/> 
            <p>AI to match the best of the vetted suppliers.</p>
        </div>
        <div className='d-flex gap-3'>
            <BsCircleSquare size={20} color='#2B3A55'/> 
            <p>Fast and flexible supply chain.</p>
        </div>
        <div className='d-flex gap-3'>
            <BsCircleSquare size={20} color='#2B3A55'/> 
            <p>Chat in real-time with suppliers directly.</p>
        </div>
        <div id='SAMPLEdivID'>
            <button className='btn_Book_Demon'>Book a Demo <BsChevronRight color='black' size={15} /></button>
        </div>
    </section>
</div>
{/* We support everything from Design to Delivery */}
<div className="powerful_technology">    
    <img src={Support} alt='We support everything from Design to Delivery' />
    <section>
        <h4>We support everything from Design to Delivery.</h4>
        <div className='d-flex gap-3'>
            <BsCircleSquare size={20} color='#2B3A55'/> 
            <p>Create customised designs and tech packs.</p>
        </div>
        <div className='d-flex gap-3'>
            <BsCircleSquare size={20} color='#2B3A55'/> 
            <p>End-to-end production to merchandising support.</p>
        </div>
        <div className='d-flex gap-3'>
            <BsCircleSquare size={20} color='#2B3A55'/> 
            <p>Chat in real-time with suppliers directly.</p>
        </div>
        <div id='SAMPLEdivID'>
            <NavLink role='button' to='/signup'> <button className='btn_signupnow'>Sign up now <BsChevronRight color='black' size={15} /></button> </NavLink>
        </div>
    </section>
</div>
{/* Forecast Driven Designs */}
<div className="powerful_technology">    
    <img src={Forecast} alt='Forecast Driven Designs' />
    <section>
        <h4>Forecast Driven Designs.</h4>
        <div className='d-flex gap-3'>
            <BsCircleSquare size={20} color='#2B3A55'/> 
            <p>Forecast driven designs for designs / fabrics.</p>
        </div>
        <div className='d-flex gap-3'>
            <BsCircleSquare size={20} color='#2B3A55'/> 
            <p>45 days Turn around time for our designs.</p>
        </div>
        <div className='d-flex gap-3'>
            <BsCircleSquare size={20} color='#2B3A55'/> 
            <p>Easy sample request.</p>
        </div>
        <div id='SAMPLEdivID'>
            <NavLink role='button' to='/signup'> <button className='btn_signupnow'>Explore designs <BsChevronRight color='black' size={15} /></button> </NavLink>
        </div>
    </section>
</div>

<div className="container text-center mt-5 partners">    
    <h3 className='partnersss'>What our partners say about us</h3><br />
    <div className="row mtb">
        <div className="col-sm-8">
            <div className='text-start'>
                <h5>MAGSIGE MPC</h5>
                <h6>‘Very clear when it came to tracking the order’s progress’</h6>
                <p>ACMADE is helping brands like us to upscale 
                and focus more on to sales rather 
                than putting our time for sourcing. We are getting detailed input for our order 
                by which we can plan our order smoothly.</p>
                <h6>Kristina Garrison,</h6>
                <h6>Head of Purchasing</h6>
            </div>
        </div>
        <div className="col-sm-4"> 
        <img src={Sayabout} alt='' className="img-responsive" />
    </div>
    </div>
</div>

{/* <div className="container text-center mt-5">
    <div className="item">
        <img src='https://via.placeholder.com/1366x300' alt='art' />
        <div className="carousel-caption">
        </div>      
    </div>
</div> */}
            <hr />
            <Footer />
        </>
        )
    }
}
 
