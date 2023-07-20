import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import HomeItems from '../HomeItems/HomeItems';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    // make scrolling smooth
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
    }, []);
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <HomeItems></HomeItems>
            <AboutUs></AboutUs>
            <Reviews></Reviews>
            <Footer></Footer>
            <div className="scroll-to-top">
              {isVisible && (
                <div onClick={scrollToTop}>
                  <i className="fas fa-arrow-circle-up"></i>
                </div>
              )}
            </div>
        </div>
    );
};

export default Home;