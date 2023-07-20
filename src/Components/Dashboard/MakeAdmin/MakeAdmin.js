import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../Hooks/useAuth";
import img1 from '../../../images/undraw_add_user_re_5oib.svg';

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const { token } = useAuth();
  const notify = () => toast("Admin Make successfully!");
  const notify1 = () => toast("Admin make Failed! Try again!");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    // console.log(email);
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.modifiedCount);

        if (data.modifiedCount === 1) {
          notify();
          e.target.reset();
        } else {
          notify1();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <ToastContainer />
      <div className="container">
        <h2
          className="text-center mb-4 section-title"
          style={{ marginTop: "40px" }}
        >
          Make Admin
        </h2>
        <div className="row">
          <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
          <form className="add-review-form w-100" onSubmit={handleAdminSubmit}>
          <input
            label="Email"
            type="email"
            placeholder="Enter Email"
            variant="standard"
            onBlur={handleOnBlur}
          />
          {/* <Button type="submit">Make Admin</Button> */}
          <input className="review-btn" type="submit" value="Make Admin" />
        </form>
          </div>
          <div className="col-12 col-md-4">
            <div className="d-flex justify-content-center mt-5">
              <img className="img-fluid " src={img1} alt="" />
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default MakeAdmin;
