import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, adminRouteLoading } = useAuth();
    // console.log(adminRouteLoading);
    if (adminRouteLoading) {
        return (
          <div className="d-flex justify-content-center spinner-section" style={{marginTop:"100px"}}>
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
          </div>
        );
      }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default AdminRoute;
