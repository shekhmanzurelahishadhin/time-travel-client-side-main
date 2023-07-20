import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './ManageAllOrders.css';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
  const [modifiedCount,setModifiedCount] = useState(0);
    
  
    const notify = () => toast("Order canceled Successfully!");
    const notify1 = () => toast("Status updated Successfully!");

    useEffect(() => {
      
        fetch("http://localhost:5000/orders")
          .then((res) => res.json())
          .then((data) => {
            setAllOrders(data);
        setModifiedCount(0);

           
          });
      }, [modifiedCount]);

      const handleStatus = (id) =>{
        const url = `http://localhost:5000/order/update/${id}`;
        const data = { status: 'shipped'};
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
              setModifiedCount(data.modifiedCount);
              notify1();
            });
    
      }
    const handleCancel = (id) =>{
        const proceed = window.confirm("are you sure to cancel?");
        if (proceed) {
            const url = `http://localhost:5000/order/delete/${id}`;
            fetch(url, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  console.log(data);
                  const remaining = allOrders.filter(
                    (order) => order._id !== id
                  );
                  setAllOrders(remaining);
                  notify();
                }
              });
          }
    }
    return (
        <div className="my-order-section mb-5">
        <ToastContainer />
      <h2
        className="text-center mb-4 section-title"
        style={{ marginTop: "40px" }}
      >
        Manage All Orders
      </h2>

      <Row xs={1} md={2} lg={3} className="g-4">
        {allOrders.map((order) => (
          <Col key={order._id} data-aos="" data-aos-delay="300">
            <Card className="watch-card">
              <div className="img-section">
                <Card.Img variant="top" className="card-img" src={order.img} />
              </div>
              <Card.Body className="order-body">
                <Card.Title style={{height:"60px"}} className="name">
                  <b>{order.watchName}</b>
                </Card.Title>

                <Card.Text><b>Order by:</b> {order.userName}</Card.Text>
                <Card.Text><b>Email:</b> {order.email}</Card.Text>
                <Card.Text><b>Status: <span className={order.status==='pending'?'pending-color':'approved-color'}>{order.status}</span></b></Card.Text>
                <div className="d-flex justify-content-between">
              <button
                className="d-md-block primary-btn"
                onClick={() => {
                  handleStatus(order._id);
                }}
              >
                Shipped
              </button>

              <button
                className="d-md-block primary-btn"
                onClick={() => {
                  handleCancel(order._id);
                }}
              >
                Cancel
              </button>
              </div>
              </Card.Body>

              
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    );
};

export default ManageAllOrders;