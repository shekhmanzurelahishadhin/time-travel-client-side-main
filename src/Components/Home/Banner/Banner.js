import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-section" id="home">
        <Carousel>
          <Carousel.Item className="carousel-item">
            <img
              className="carousel-img d-block w-100"
              src="https://i.ibb.co/HFQBPwH/photo-1488860929259-5d0a1e5f8a81.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="caption">
              <h3 className="title">
                <b>NEW ARRIVALS</b>
               
              </h3>
  
              <p>Complete your everyday look with a classic watch</p>
              <Link to="/allWatches">
              <button>View More Items</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="carousel-img d-block w-100"
              src="https://i.ibb.co/vztW98M/photo-1490367532201-b9bc1dc483f6.jpg"
              alt="Second slide"
            />
  
            <Carousel.Caption className="caption">
              <h3 className="title"><b>THE CLASSICS</b>
              
                </h3>
              <p>Complete your everyday look with a classic watch</p>
              <Link to="/allWatches">
              <button>View More Items</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="carousel-img d-block w-100"
              src="https://i.ibb.co/hgdmFKD/photo-1482954363933-4bed6bbea570.jpg"
              alt="Third slide"
            />
  
            <Carousel.Caption className="caption">
              <h3 className="title"><b>EXCLUSIVE COLLECTION</b>
             
                </h3>
              <p>Complete your everyday look with a classic watch</p>
              <Link to="/allWatches">
              <button>View More Items</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Banner;