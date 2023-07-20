import React from 'react';
import img1 from '../../../images/undraw_wallet_aym5.svg';

const Payment = () => {
    return (
        <div>
            <h2 className="text-center mb-4 section-title"
        style={{ marginTop: "40px" }}>Payment method coming soon..</h2>
        <div className="d-flex justify-content-center mt-5">
         
        <img className="img-fluid " src={img1} alt="" />
           
        </div>
        </div>
    );
};

export default Payment;