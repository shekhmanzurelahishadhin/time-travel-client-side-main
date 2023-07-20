
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from '../../Hooks/useAuth';
import Header from "../Shared/Header/Header";
import './BuyWatch.css';


const BuyWatch = () => {
    const { id } = useParams();
    const [watch, setWatch] = useState({});
    const notify = () => toast("Watch order successfully!");
    const {
      register,
      reset,
      handleSubmit,
      setFocus,
     
      formState: { errors },
    } = useForm();
    const { user } = useAuth();
    console.log(user.email);
    console.log(user);
    // get single data by id 
    useEffect(() => {
      fetch(`http://localhost:5000/selectedWatch/${id}`)
        .then((res) => res.json())
        .then((data) => setWatch(data));
    }, []);
  
    useEffect(() => {
      setFocus("watchName");
    }, [setFocus]);
  
    // send booking data to data base 
    const onSubmit = (data) => {
      data.status = "pending";
      data.img = watch.img;
      fetch("http://localhost:5000/purchase", {
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
        <div className="mb-5">
      <ToastContainer />
      <Header></Header>
      <div className="container">
        {/* selected watch information  */}
        <div className="row buy-section">
          <h3 className="text-center section-title mb-5">Order Now</h3>
          <div className="col-12 col-md-6">
            <img className="img-fluid w-100" src={watch.img} alt="" />
            <h3 className="mt-3">
              <b>{watch.name}</b>
            </h3>

            

            <h3>
              <b>$ {watch.price}</b>
            </h3>
            <p className="details">{watch.description}</p>
          </div>
          <div className="col-12 col-md-6">
            {/* buy form  */}

            <form className=" buy-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                value={user.displayName}
                {...register("userName", { required: true })}
              />

              <input
                value={user.email}
                {...register("email", { required: true })}
              />

              <input
                defaultValue={watch.name}
                {...register("watchName", { required: true })}
              />

              <input
                {...register("address", { required: true })}
                placeholder="Address"
              />

              <input
                {...register("phone", { required: true })}
                placeholder="phone"
              />

              {/* <input
                type="date"
                {...register("date", { required: true })}
                placeholder="date"
              /> */}

              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <input className="buy-btn" type="submit" value="Order now" />
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default BuyWatch;