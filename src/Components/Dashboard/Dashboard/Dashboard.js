import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AdminRoute from "../../AdminRoute/AdminRoute";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import AddProduct from "../AddProduct/AddProduct";
import AddReview from "../AddReview/AddReview";
import DashboardHome from "../DhashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageAllProducts from "../ManageAllProducts/ManageAllProducts";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import "./Dashboard.css";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, logOut, user } = useAuth();
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
    <div className="dashboard">
      <Navbar
        fixed=""
        className="d-block d-md-none navbar-section"
        variant="dark"
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="logo">
            <b>TimeTravel</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto link-part">
              <Link
                className="d-block my-2"
                style={{
                  textDecoration: "none",
                  color: "black",
                  textAlign: "center",
                }}
                to="/home"
              >
                Home
              </Link>
              {admin ? (
                <>
                  <Link
                    className="d-block my-2"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      textAlign: "center",
                    }}
                    to={`${url}/manageProduct`}
                  >
                    Manage All Product
                  </Link>
                  <Link
                    className="d-block my-2"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      textAlign: "center",
                    }}
                    to={`${url}/manageOrder`}
                  >
                    Manage All Order
                  </Link>

                  <Link
                    className="d-block my-2"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      textAlign: "center",
                    }}
                    to={`${url}/addProduct`}
                  >
                    Add Product
                  </Link>
                  <Link
                    className="d-block my-2"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      textAlign: "center",
                    }}
                    to={`${url}/makeAdmin`}
                  >
                    Make Admin
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className="d-block my-2"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      textAlign: "center",
                    }}
                    to={`${url}/myOrder`}
                  >
                    My Orders
                  </Link>

                  <Link
                    className="d-block my-2"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      textAlign: "center",
                    }}
                    to={`${url}/addReview`}
                  >
                    Add Review
                  </Link>
                  <Link
                    className="d-block my-2"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      textAlign: "center",
                    }}
                    to={`${url}/payment`}
                  >
                    Payment
                  </Link>
                </>
              )}
              <div className="d-flex justify-content-center">
                <Navbar.Text>
                  <a className="user-name" href="#login">
                    {user.displayName}
                  </a>
                </Navbar.Text>
              </div>
              <button onClick={logOut} className="header-btn">
                <b>Logout <i className="fas fa-sign-out-alt"></i></b>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="">
        <div className="row w-100 mx-0">
          <div
            className="col-12 col-md-3 d-none d-md-block link-part"
            style={{
              paddingTop: "50px",
              backgroundColor: "#84947e",
              height: "100vh",
              // marginBottom:"-5000px",
              paddingBottom: "4000px",
            }}
          >
            <div className="sticky">
              <div className="text-center">
                <Navbar.Brand className="logo">
                  <b>TimeTravel</b>
                </Navbar.Brand>
              </div>
              <Link
                className="d-block my-2"
                style={{
                  textDecoration: "none",
                  color: "black",
                  textAlign: "center",
                }}
                to="/home"
              >
                Home
              </Link>

              {admin ? (
                <>
                  <Link
                    className="d-block my-2"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      textAlign: "center",
                    }}
                    to={`${url}/manageProduct`}
                  >
                    Manage All Product
                  </Link>
                  <Link
                    className="d-block my-2"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      textAlign: "center",
                    }}
                    to={`${url}/manageOrder`}
                  >
                    Manage All Order
                  </Link>

                  <Link
                    className="d-block my-2"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      textAlign: "center",
                    }}
                    to={`${url}/addProduct`}
                  >
                    Add Product
                  </Link>
                  <Link
                    className="d-block my-2"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      textAlign: "center",
                    }}
                    to={`${url}/makeAdmin`}
                  >
                    Make Admin
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className="d-block my-2"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      textAlign: "center",
                    }}
                    to={`${url}/myOrder`}
                  >
                    My Orders
                  </Link>

                  <Link
                    className="d-block my-2"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      textAlign: "center",
                    }}
                    to={`${url}/addReview`}
                  >
                    Add Review
                  </Link>
                  <Link
                    className="d-block my-2"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      textAlign: "center",
                    }}
                    to={`${url}/payment`}
                  >
                    Payment
                  </Link>
                </>
              )}
              <div className="d-flex justify-content-center">
                <Navbar.Text>
                  <a className="user-name" href="#login">
                    {user.displayName}
                  </a>
                </Navbar.Text>
              </div>
              <div className="d-flex justify-content-center">
                <button onClick={logOut} className="header-btn">
                  <b>Logout <i className="fas fa-sign-out-alt"></i></b>
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-9 main-part">
            <Switch>
              <PrivateRoute exact path={path}>
                <DashboardHome></DashboardHome>
              </PrivateRoute>
              <PrivateRoute path={`${path}/myOrder`}>
                <MyOrders></MyOrders>
              </PrivateRoute>
              <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
              </AdminRoute>
              <AdminRoute path={`${path}/manageOrder`}>
                <ManageAllOrders></ManageAllOrders>
              </AdminRoute>
              <PrivateRoute path={`${path}/addReview`}>
                <AddReview></AddReview>
              </PrivateRoute>
              <PrivateRoute path={`${path}/payment`}>
                <Payment></Payment>
              </PrivateRoute>
              <AdminRoute path={`${path}/manageProduct`}>
                <ManageAllProducts></ManageAllProducts>
              </AdminRoute>
            </Switch>
            <div className="scroll-to-top">
              {isVisible && (
                <div onClick={scrollToTop}>
                  <i className="fas fa-arrow-circle-up"></i>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
