//PaymentSuccess.js
 
import React from 'react';

const PaymentSuccess = () => {
    return (
        <div className="container my-5 d-flex justify-content-center align-items-center vh-100">
            <div className="card text-center shadow-lg p-5">
                <div className="card-body">
                    
                    <h1 className="card-title font-bold text-success mb-4">
                        Your Payment is Successful
                    </h1>
                    <p className="card-text">
                        You are now part of the Great Reads Book Club!
                    </p>
                    <a href="/" className="btn btn-primary mt-4">
                        Go to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
