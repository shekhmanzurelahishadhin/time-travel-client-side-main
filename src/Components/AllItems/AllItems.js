import React, { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { useHistory } from "react-router";
import useWatches from "../../Hooks/useWatches";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const AllItems = () => {
  
  const { allWatches, isLoading } = useWatches();
  const history = useHistory();
  console.log(allWatches);

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

  const handleBuy = (id) => {
    history.push(`/buy/${id}`);
  };
  if (isLoading) {
    return (
      <div>
        <h2 className="section-title text-center my-4">Our More Collections</h2>
        <div className="d-flex justify-content-center spinner spinner-section">
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Header></Header>
      <div className="container my-4" id="watches">
        <h2
          className="text-center mb-4 section-title"
          style={{ marginTop: "50px" }}
        >
          Our More Collections
        </h2>

        <Row xs={1} md={2} lg={3} className="g-4">
          {allWatches.map((watch) => (
            <Col key={watch._id} data-aos="" data-aos-delay="300">
              <Card className="watch-card">
                <div className="img-section">
                  <Card.Img
                    variant="top"
                    className="card-img"
                    src={watch.img}
                  />
                </div>
                <Card.Body className="watch-body">
                  <Card.Title className="name">
                    <b>{watch.name}</b>
                  </Card.Title>

                  <Card.Text>{watch.description.slice(0, 120)}</Card.Text>
                </Card.Body>

                <div className="watch-bottom d-flex justify-content-between m-4 align-items-center">
                  <h4>
                    <b>$ {watch.price}</b>
                  </h4>
                  <button
                    onClick={() => handleBuy(watch._id)}
                    className="primary-btn"
                  >
                    Buy Now
                  </button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
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

export default AllItems;
