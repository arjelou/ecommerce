import React from "react";
import { NavLink } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
export default class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="container mt-5 mb-5 footer">
          <div className="row justify-content-md-between mt-3">
            <div className="col">
              <h2>ACMADE</h2>
            </div>
            <div className="col">
              <div className="list-category">
                <ul>
                  <h5>Design</h5>
                  <li>
                    <a href=".">Dress</a>
                  </li>
                  <li>
                    <a href=".">Knitwear</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="list-category">
                <ul>
                  <h5>Company</h5>
                  <li>
                    <a href=".">About Us</a>
                  </li>
                  <li>
                    <a href=".">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="list-category">
                <ul className="">
                  <h5>Social</h5>
                  <div className="d-flex gap-3">
                    <a href=".">
                      <BsFacebook size={25} color="blue" />
                    </a>
                    <a href=".">
                      <BsInstagram size={25} color="orange" />
                    </a>
                    <a href=".">
                      <BsYoutube size={30} color="red" />
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-fluid mt-5">
            <div className="row d-flex justify-content-md-between">
              <div className="col">
                <NavLink className="">
                  Copyright 2022 by ACMADE Data. All Rights Reserved.
                </NavLink>
              </div>
              <div className="col d-flex gap-4">
                <NavLink to="">Privacy Policy</NavLink>
                <NavLink to="">Terms & Conditions</NavLink>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
