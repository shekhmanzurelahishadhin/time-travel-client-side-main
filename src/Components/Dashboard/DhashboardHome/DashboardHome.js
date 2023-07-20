import React from "react";
import img from '../../../images/undraw_financial_data_es63.svg';

const DashboardHome = () => {
  return (
    <div>
      <h2
        className="text-center mb-4 section-title"
        style={{ marginTop: "40px" }}
      >
        Time Travel Watch Zone Dashboard
      </h2>

      <div className="d-flex justify-content-center mt-5">
        <img className="img-fluid " src={img} alt="" />
      </div>
    </div>
  );
};

export default DashboardHome;
