import React from 'react';
import { BsPerson,BsChevronRight } from 'react-icons/bs';
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom';
import Ai from '../assets/ai.png';
import Support from '../assets/support.png';
import Forecast from '../assets/forecast.png';
import logo from '../assets/acmade.png';
import GTKUS1 from '../assets/gtkus1.jpeg';
import GTKUS2 from '../assets/gtkus2.jpeg';
import GTKUS3 from '../assets/gtkus3.jpeg';
import GTKUS4 from '../assets/gtkus4.jpg';
import GTKUS5 from '../assets/gtkus5.jpg';



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
<div className='container'>
    <section className='vision'>
        <article>
            <h3>MAGSIGE MPC</h3>
            <p>
            Company that specializes in producing high-quality garments 
            for various markets. With years of experience in the industry, 
            MAGSIGE has become known for its attention to detail and commitment 
            to delivering products that meet the highest standards of quality.
            </p>
        </article>
        <ul className='visionList'>
            <li>
                <img src={Ai} alt='Using AI and Data Science to change the way brands source products' />
                <h4>Using AI and Data Science to change the way brands source products</h4>
                <p>
                I to match the best of the vetted suppliers.
                Fast and flexible supply chain.
                Chat in real-time with suppliers directly.
                </p>
            </li>
            <li>
                <img src={Support} alt='Using AI and Data Science to change the way brands source products' />
                <h4>We support everything from Design to Delivery</h4>
                <p>
                Create customised designs and tech packs.
                End-to-end production to merchandising support.
                Chat in real-time with suppliers directly.
                </p>
                <NavLink role='button' to='/signup'> <button className='btn_signupnow'>Sign up now <BsChevronRight color='black' size={15} /></button> </NavLink>
            </li>
            <li>
                <img src={Forecast} alt='Using AI and Data Science to change the way brands source products' />
                <h4>Forecast Driven Designs</h4>
                <p>
                Forecast driven designs for designs / fabrics.
                45 days Turn around time for our designs.
                Easy sample request.
                </p>
                <NavLink role='button' to='/login'> <button className='btn_signupnow'>Explore designs <BsChevronRight color='black' size={15} /></button> </NavLink>
            </li>
        </ul>
    </section>
</div>
<div className='container-fluid consultation'>
    <h3>Consultation</h3>
    <p>
    The first step in the customer experience of garment manufacturing is usually a consultation with the customer. 
    During this stage, the garment manufacturer will listen to the customer's needs and preferences, 
    and discuss design options, materials, and production timelines.
    </p>
</div>
{/* ##### Get to know us #####*/}
<div className='container gtkus'>
    <section className='get_to_know_us'>
        <h3>Get to know us</h3>
        <ul className='get_to_know_us_images'>
            <li><img src={GTKUS1} alt='...'/></li>
            <li><img src={GTKUS2} alt='...'/></li>
            <li><img src={GTKUS3} alt='...'/></li>
            <li><img src={GTKUS4} alt='...'/></li>
            <li><img src={GTKUS5} alt='...'/></li>
        </ul>
        <p>
            Since its establishment, MAGSIGE MPC grew into one of the top-performing cooperatives in the Davao region and in the Philippines. From 86 members, the cooperative has increased to more than 18,000 members and continuously growing.
            MAGSIGE MPC expanded to different areas in Mindanao with five (5) satellite offices located in Matalam, North Cotabato; Tboli, South Cotabato; Tagbina, Surigao del Sur; and the main Davao City offices. 
        </p>
    </section>
</div>
<div className='container-fluid quality'>
    <h3>Quality</h3>
    <p>
    The first step in the customer experience of garment manufacturing is usually a consultation with the customer. 
    During this stage, the garment manufacturer will listen to the customer's needs and preferences, 
    and discuss design options, materials, and production timelines.
    </p>
</div>
<Footer className='mt-5'/>
</>
)
}
}
 
