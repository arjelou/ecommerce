import React from "react";
import { BsCircleSquare, BsPerson, BsChevronRight } from "react-icons/bs";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import Products from "../assets/Products.jpg";
import Ai from "../assets/ai.png";
import Support from "../assets/support.png";

export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:4002/product/")
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          productList: [...response],
        });
      });
  }

  render() {
    return (
      <>
        <div>
          <nav className="navbar navbar-expand-lg homeNav container-fluid">
            <div className="container ">
              <a className="navbar-brand homeNavFont" href=".">
                ACMADE MAGSIGE
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabIndex="1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <ul className="navbar-nav justify-content-start">
                  <li className="nav-item dropdown unactive-category-btn">
                    <a
                      className="nav-link dropdown-toggle homeNavFont"
                      href="."
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Company
                    </a>
                    <ul className="dropdown-menu">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "active_category_dropdown"
                            : "unactive_category_dropdown"
                        }
                        to="/dashboard/listofcustomers"
                      >
                        About Us
                      </NavLink>
                      <NavLink
                        className="unactive_category_dropdown"
                        data-bs-toggle="modal"
                        data-bs-target="#addNewModalCreateCustomer"
                      >
                        Contact Us
                      </NavLink>
                      <NavLink
                        className="unactive_category_dropdown"
                        data-bs-toggle="modal"
                        data-bs-target="#addNewModalCreateCustomer"
                      >
                        Join Our Team
                      </NavLink>
                    </ul>
                  </li>
                  <li className="nav-item dropdown unactive-category-btn">
                    <a
                      className="nav-link dropdown-toggle homeNavFont"
                      href="."
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Other Services
                    </a>
                    <ul className="dropdown-menu">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "active_category_dropdown"
                            : "unactive_category_dropdown"
                        }
                        to="/dashboard/alldesigns"
                      >
                        Labor
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "active_category_dropdown"
                            : "unactive_category_dropdown"
                        }
                        to="/dashboard/categories"
                      >
                        Agriculture
                      </NavLink>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-category-btn" : "unactive-category-btn"
                  }
                  to="/login"
                >
                  <BsPerson size={30} title="Login" color="white" />
                </NavLink>
                <NavLink className="signup_btn homeNavFont" to="/signup">
                  Sign up
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
        <div className="container-fluid hero">
          <div className="row">
            <div className="col-sm-6 d-flex align-self-center">
              <h2 className="text-center caption_hero">
                Tech-enabled manufacturing platform for Unique Brands
              </h2>
              <br />
            </div>
            <div className="col-sm-4 hero_image_product mt">
              <img src={Products} className="card-img-top" alt="ad" />
            </div>
            <div className="col-sm-2 mt"></div>
          </div>
          <div className="row">
            <div className="col-sm-6 text-center">
              <NavLink className="btn_get_started" to="/login">
                Get Started <BsChevronRight color="white" size={15} />
              </NavLink>
            </div>
            <div className="col-sm-4 hero_image_product mt"></div>
            <div className="col-sm-2 mt"></div>
          </div>
        </div>

        <div className="container text-center mt-5">
          <h3>What We Do</h3>
          <br />
          <div className="row">
            <section>
              <ul className="d-flex gap-3">
                {this.state.productList.map((product, index) => {
                  return (
                    <>
                      <div className="col-sm-4">
                        <li className="" key={index}>
                          <a href=".">
                            <img
                              src="https://via.placeholder.com/150x150"
                              className="card-img-top"
                              alt="ad"
                            />
                            <h4 className="card-title">
                              {product.product_name}
                            </h4>
                          </a>
                        </li>
                      </div>
                    </>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>
        {/* A powerful technology platform that solves manufacturing */}
        <div className="container-fluid text-center powerful_technology">
          <div className="row">
            <h3 className="text-center mt-5 mb-5 ai">
              A powerful technology platform that <br /> solves manufacturing
            </h3>
            <br />
            <div className="col-sm-6">
              <img src={Ai} alt="" className="img-responsive" />
            </div>
            <div className="col-sm-6 align-self-center">
              <div className="text-start">
                <h4>
                  Using AI and Data Science to change the way brands source
                  products!
                </h4>
                <br />
                <div className="d-flex gap-3">
                  <BsCircleSquare size={20} color="#2B3A55" />
                  <p>AI to match the best of the vetted suppliers.</p>
                </div>
                <div className="d-flex gap-3">
                  <BsCircleSquare size={20} color="#2B3A55" />
                  <p>Fast and flexible supply chain.</p>
                </div>
                <div className="d-flex gap-3">
                  <BsCircleSquare size={20} color="#2B3A55" />
                  <p>Chat in real-time with suppliers directly.</p>
                </div>
                <div>
                  <button className="btn_Book_Demon">
                    Book a Demo <BsChevronRight color="black" size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* We support everything from Design to Delivery */}
        <div className="container-fluid text-center support_everything">
          <div className="row">
            <div className="col-sm-6">
              <img src={Support} alt="" className="img-responsive" />
            </div>
            <div className="col-sm-6 align-self-center">
              <div className="text-start">
                <h4>We support everything from Design to Delivery</h4>
                <br />
                <div className="d-flex gap-3">
                  <BsCircleSquare size={20} color="#2B3A55" />
                  <p>Create customised designs and tech packs.</p>
                </div>
                <div className="d-flex gap-3">
                  <BsCircleSquare size={20} color="#2B3A55" />
                  <p>End-to-end production to merchandising support.</p>
                </div>
                <div className="d-flex gap-3">
                  <BsCircleSquare size={20} color="#2B3A55" />
                  <p>Dedicated Customer Success Manager.</p>
                </div>
                <div>
                  <NavLink role="button" to="/signup">
                    {" "}
                    <button className="btn_signupnow">
                      Sign up now <BsChevronRight color="black" size={15} />
                    </button>{" "}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Forecast Driven Designs */}
        <div className="container-fluid text-center powerful_technology_2">
          <div className="row">
            <div className="col-sm-6">
              <img src={Support} alt="" className="img-responsive" />
            </div>
            <div className="col-sm-6 align-self-center">
              <div className="text-start">
                <h4>Forecast Driven Designs</h4>
                <br />
                <div className="d-flex gap-3">
                  <BsCircleSquare size={20} color="#2B3A55" />
                  <p>Forecast driven designs for designs / fabrics.</p>
                </div>
                <div className="d-flex gap-3">
                  <BsCircleSquare size={20} color="#2B3A55" />
                  <p>45 days Turn around time for our designs.</p>
                </div>
                <div className="d-flex gap-3">
                  <BsCircleSquare size={20} color="#2B3A55" />
                  <p>Easy sample request.</p>
                </div>
                <div>
                  <NavLink role="button" to="/signup">
                    {" "}
                    <button className="btn_signupnow">
                      Explore designs <BsChevronRight color="black" size={15} />
                    </button>{" "}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center mt-5">
          <h3>What our partners say about us</h3>
          <br />
          <div className="row">
            <div className="col-sm-8">
              <div className="text-start">
                <h5>MAGSIGE MPC</h5>
                <h6>
                  ‘Very clear when it came to tracking the order’s progress’
                </h6>
                <p>
                  ACMADE is helping brands like us to upscale and focus more on
                  to sales rather than putting our time for sourcing. We are
                  getting detailed input for our order by which we can plan our
                  order smoothly.
                </p>
                <h6>Kristina Garrison,</h6>
                <h6>Head of Purchasing</h6>
              </div>
            </div>
            <div className="col-sm-4">
              <img
                src="https://via.placeholder.com/350x350"
                alt=""
                className="img-responsive"
              />
            </div>
          </div>
        </div>

        <div className="container text-center mt-5">
          <div className="item">
            <img src="https://via.placeholder.com/1366x300" alt="art" />
            <div className="carousel-caption"></div>
          </div>
        </div>
        <hr />
        <Footer />
      </>
    );
  }
}
