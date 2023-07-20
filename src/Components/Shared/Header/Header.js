import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import './Header.css';
const Header = () => {
  const [isActive, setIsActive] = useState("");
  const { user, logOut } = useAuth();

  const handleActive = (data) => {
    setIsActive(data);
  };
  return (
    <Navbar expand="lg" variant="dark" className="navbar-section">
      <Container>
        <Navbar.Brand href="#home" className="logo"><b>TimeTravel</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center ">
            <Nav.Link
              as={HashLink}
              to="/home#home"
              onClick={() => handleActive("home")}
              className={isActive === "home" ? "active-class" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              to="/home#watches"
              onClick={() => handleActive("watches")}
              className={isActive === "watches" ? "active-class" : ""}
            >
              Watches
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              to="/home#about"
              onClick={() => handleActive("about")}
              className={isActive === "about" ? "active-class" : ""}
            >
              About us
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              to="/home#reviews"
              onClick={() => handleActive("reviews")}
              className={isActive === "reviews" ? "active-class" : ""}
            >
              Reviews
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              to="/allWatches"
              onClick={() => handleActive("allWatches")}
              className={isActive === "allWatches" ? "active-class" : ""}
            >
              Explore More
            </Nav.Link>

            {user?.displayName ? (
              <>
                <Nav.Link as={HashLink} to="/dashboard" onClick={()=>handleActive('dashboard')} className={isActive==='dashboard'?'active-class':''}>
                Dashboard
                </Nav.Link>
                <Navbar.Text>
                  <a className="user-name" href="#login">
                    {user.displayName}
                  </a>
                </Navbar.Text>
                <button onClick={logOut} className="header-btn">
                  <b>Logout <i className="fas fa-sign-out-alt"></i></b>
                </button>
              </>
            ) : (
              <>
                <Nav.Link
                  as={HashLink}
                  to="/login"
                  onClick={() => handleActive("login")}
                  className={isActive === "login" ? "active-class" : ""}
                >
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
