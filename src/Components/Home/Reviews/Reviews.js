import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import Rating from "react-rating";
import useWatches from "../../../Hooks/useWatches";
import './Reviews.css';

const Reviews = () => {
  const { reviews, isLoading } = useWatches();

  useEffect(() => {
    AOS.init();
  }, []);
  if (isLoading) {
    return (
      <div>
        <h2 className="section-title text-center my-4">Client Reviews</h2>
        <div className="d-flex justify-content-center spinner spinner-section my-5">
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
        </div>
      </div>
    );
  }
  return (
    <div className="container my-4" id="reviews">
      <h2 className="text-center mt-3 mb-4 section-title ">Client Reviews</h2>

      <Row xs={1} md={2} lg={3} className="g-4">
        {reviews.map((review) => (
          <Col key={review._id} data-aos="fade-up" data-aos-delay="300">
            <Card className="offer-card">
              <Card.Body className="review-body">
                <div className="">
                  <h4 className="text-center">
                    <b>{review.reviewerName}</b>
                  </h4>
                  <p className="text-center my-2"> {review.review}</p>
                </div>
                <Card.Title className="text-center">
                 
                    <Rating
                      initialRating={review.rating}
                      emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color"
                      readonly
                    />
                 
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Reviews;
