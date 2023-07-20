import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../Hooks/useAuth";
import img1 from '../../../images/undraw_for_review_eqxk.svg';
import "./AddReview.css";

const AddReview = () => {
  const { user } = useAuth();
  const notify = () => toast("Review Added successfully!");
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    // send new added review data to database
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          notify();
          reset();
        }
      });
  };
  return (
    <div>
      <ToastContainer />
      <h2
        className="text-center mb-4 section-title"
        style={{ marginTop: "40px" }}
      >
        Add Review
      </h2>
      <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <div>
          <form className="add-review-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              value={user.displayName}
              {...register("reviewerName", { required: true })}
            />

            <select className="rating-field" {...register("rating")}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>

            <textarea
              {...register("review", { required: true })}
              placeholder="Write Review"
            />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input className="review-btn" type="submit" value="Add now" />
          </form>
          </div>
        </div>
        <div className="col-12 col-md-6">
        <div className="d-flex justify-content-center mt-5">
         
         <img className="img-fluid " src={img1} alt="" />
            
         </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
