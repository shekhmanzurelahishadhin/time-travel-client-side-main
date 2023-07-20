import React from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useWatches from '../../../Hooks/useWatches';
import './HomeItems.css';

const HomeItems = () => {
    const { watches, isLoading } = useWatches();
    const history = useHistory();
  const handleBuy = (id) =>{
    history.push(`/buy/${id}`);
  }
  if (isLoading) {
    return (
      <div>
         <h2 className="section-title text-center my-4">
         Our Watches
      </h2>
      <div className="d-flex justify-content-center spinner spinner-section">
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
      </div>
      </div>
      
    );
  }
    return (
        <div className="container my-4" id="watches">
        <h2 className="text-center mt-3 mb-4 section-title ">Our Watches</h2>
  
        <Row xs={1} md={2} lg={3} className="g-4" >
          {watches.map((watch) => (
            <Col key={watch._id} data-aos="fade-up" data-aos-delay="300">
              <Card className="watch-card">
                <div className="img-section">
                  <Card.Img variant="top" className="card-img" src={watch.img} />
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
                  <button onClick={()=>handleBuy(watch._id)} className="primary-btn">Buy Now</button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default HomeItems;