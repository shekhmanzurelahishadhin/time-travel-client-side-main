import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className='about-section my-5' id="about">
      <div className="container">
        <h2 className="text-center mb-5 section-title">
          <span>About</span> us
        </h2>
        <div className="row">
          <div
            className="col-12 col-md-6 order-md-1 order-2 mt-4"
            
            data-aos="fade-up"
            data-aos-delay="500"
          >
           
            <div >
          
            <h5 className="about-small-details mb-4">
              <b>TIME TRAVEL PREMIER ONLINE STORE FOR WRIST WATCHES</b>
            </h5>
            <p className="mb-4">
              We are the top most online watch seller. We have more than 500+ collection of premium watch. You can find your best choice from our collection. We have fastest delivery in town. We providing the service from 2008 and we are make sure customer satisfaction
            </p>
            <Link to="/allWatches">
            <button className="primary-btn">Explore More Items</button>
            </Link>
            
            </div>
          </div>
          <div
            className="col-12 col-md-6 order-md-2 order-1 "
            div
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img
              className="w-100 h-100 about-img"
              src="https://www.tagheuer.com/on/demandware.static/-/Library-Sites-TagHeuer-Shared/default/dw3e6461b1/images/menu/watch-finder-menu_s.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
