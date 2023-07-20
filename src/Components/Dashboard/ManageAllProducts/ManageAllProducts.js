import React from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from '../../../Hooks/useAuth';
import useWatches from '../../../Hooks/useWatches';

const ManageAllProducts = () => {
    const { allWatches,setAllWatches } = useWatches();
    const {adminRouteLoading} = useAuth();
    const notify = () => toast("Product Deleted Successfully!");

     
    const handleCancel = (id) =>{
        const proceed = window.confirm("are you sure to cancel?");
        if (proceed) {
            const url = `http://localhost:5000/watches/delete/${id}`;
            fetch(url, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  console.log(data);
                  const remaining = allWatches.filter(
                    (watch) => watch._id !== id
                  );
                  setAllWatches(remaining);
                  notify();
                }
              });
          }
    }
   
    if (adminRouteLoading) {
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
        <ToastContainer />
        <div className="my-4" id="watches">
          <h2 className="text-center mb-4 section-title" style={{marginTop:"40px"}}>Manage All Products</h2>
  
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
                  <Card.Body className="">
                    <div className="watch-body">
                    <Card.Title className="name">
                      <b>{watch.name}</b>
                    </Card.Title>
  
                    <Card.Text>{watch.description.slice(0, 115)}</Card.Text>
                    </div>
                    <button
                      onClick={() => handleCancel(watch._id)}
                      className="primary-btn"
                    >
                      Delete
                    </button>
                  </Card.Body>
  
                  
                    
                
                </Card>
              </Col>
            ))}
          </Row>
        </div>
       
      </div>
    );
};

export default ManageAllProducts;