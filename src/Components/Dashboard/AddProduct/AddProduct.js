import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWatches from "../../../Hooks/useWatches";
import img1 from '../../../images/undraw_add_information_j2wg.svg';

const AddProduct = () => {
  const { allWatches } = useWatches();
  
  const notify = () => toast("Watch Added successfully!");
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.nId = allWatches.length + 1;
    // send new added watches data to database
    fetch("http://localhost:5000/watches", {
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

      <div className="container">
        <div className="add-watches">
          <h3 className="section-title text-center my-4">Add Products</h3>
          {/* add resort form  */}
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <form
                className="add-review-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  {...register("name", { required: true })}
                  placeholder="Watch name"
                />

                <input
                  {...register("img", { required: true })}
                  placeholder="image url"
                />

                <input
                  {...register("price", { required: true })}
                  placeholder="price"
                  type="number"
                />

                <textarea
                  {...register("description", { required: true })}
                  placeholder="description"
                />

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input className="review-btn" type="submit" value="Add Now" />
              </form>
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

export default AddProduct;
