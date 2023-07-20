import React from "react";
import { Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Header from "../../Components/Shared/Header/Header";
import useAuth from "../../Hooks/useAuth";
import img1 from '../../images/register.svg';


const Register = () => {
  const {
    signInUsingGoogle,
    setIsLoading,
    setUser,
    signInUsingFacebook,
    handleEmail,
    handlePassword,
    handleName,
    registerNewUsers,
    setMessage,
    message,
    setError,
    error,
    saveUser,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const redirect_uri1 = location.state?.from || "/dashboard";
  // handle google login
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        saveUser(result.user.email, result.user.displayName, "PUT");
        setMessage("Login Successful");
        setError("");
        history.push(redirect_uri1);
      })
      .catch((error) => {
        setMessage("");
        setError("Login Failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //   register
  const handleRegisterNewUser = (e) => {
    e.preventDefault();
    registerNewUsers();
    history.push(redirect_uri);
  };
  return (
    <div>
      <Header></Header>

      <div className="login-section">
        <div className="container">
          <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <div className="w-100 form-section">
              <h3 className="text-center mb-4">Register</h3>
              <Form onSubmit={handleRegisterNewUser}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    onBlur={handleName}
                    className="input-field"
                    type="text"
                    placeholder="Name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onBlur={handleEmail}
                    className="input-field"
                    type="email"
                    required
                    placeholder="Email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    onBlur={handlePassword}
                    className="input-field"
                    required
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <input className="signup-btn" type="Submit" value="Sign up" />
              </Form>
              <p className="text-success mt-2 text-center">{message}</p>
              <p className="text-danger mt-2 text-center">{error}</p>
              <Link to="/login" className="link">
                <p>Already have an account?</p>
              </Link>

              <div className="icon-section">
                <div
                  onClick={handleGoogleLogin}
                  className="d-flex align-items-center google-login pe-2"
                >
                  <img src="https://i.ibb.co/gRXw5VG/google.png" alt="" />
                  <a href="#">Continue with Google</a>
                </div>
              </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex justify-content-center mt-5">
                <img className="img-fluid " src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
