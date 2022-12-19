import React from "react";
import './Home.css';
import '../../components/Footer';
import axios from 'axios';
import Footer from "../../components/Footer";
export default class Home extends React.Component {
    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`https://fakestoreapi.com/products?limit=5`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }

  render() {
    
    return (
      <div>
        <div className="container">
    <div classNa   me="row">
        <div className="col text-center">
          <h3>Carousel Area</h3>
          {/* start carousel */}
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1000">
                <img src="https://cdn.pixabay.com/photo/2015/10/16/13/47/premium-991220_960_720.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/21/23/10/tshirt-2429016_960_720.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/16/13/47/premium-991220_960_720.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* end carousel */}
        </div>
      </div>
      <hr />
      {/* BIGGEST DEALS */}
      <div className="row">
        <div className="col text-center">
          <h3>BIGGEST DEALS</h3>
          <div className="cards-list d-flex gap-4">
            <div className="card">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/17/08/20/online-shopping-2650383_960_720.jpg"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text"> Card text</p>
                <div className="d-flex gap-2">
                  <a href="." className="btn btn-outline-success">
                    Add to card
                  </a>
                  <a href="." className="btn btn-outline-success">
                    Wishlist
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/21/23/10/tshirt-2429016_960_720.jpg"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text"> Card text</p>
                <div className="d-flex gap-2">
                  <a href="." className="btn btn-outline-success">
                    Add to card
                  </a>
                  <a href="." className="btn btn-outline-success">
                    Wishlist
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/17/08/20/online-shopping-2650383_960_720.jpg"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text"> Card text</p>
                <div className="d-flex gap-2">
                  <a href="." className="btn btn-outline-success">
                    Add to card
                  </a>
                  <a href="." className="btn btn-outline-success">
                    Wishlist
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/17/08/20/online-shopping-2650383_960_720.jpg"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text"> Card text</p>
                <div className="d-flex gap-2">
                  <a href="." className="btn btn-outline-success">
                    Add to card
                  </a>
                  <a href="." className="btn btn-outline-success">
                    Wishlist
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/17/08/20/online-shopping-2650383_960_720.jpg"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text"> Card text</p>
                <div className="d-flex gap-2">
                  <a href="." className="btn btn-outline-success">
                    Add to card
                  </a>
                  <a href="." className="btn btn-outline-success">
                    Wishlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BESTSELLERS */}
      <hr />
      <div className="row">
        <div className="col text-center">
          <h3>BESTSELLERS</h3>
          <h6>Carousel here</h6>
        </div>
      </div>
      <hr />
      {/* ADDITIONAL PROMOTIONS HERE */}
      <div className="row">
        <div className="col text-center">
          <h3>CALL TO ACTION IMAGE HERE</h3>
        </div>
      </div>
    </div>
        
       
        {/* Footer */}
        <div className="d-flex footer justify-content-md-center">
            <Footer />
        </div>
        
      </div>
    );
  }
}

