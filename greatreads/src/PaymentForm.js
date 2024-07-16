import React, { useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

const PAYMENT_SUCCESS_URL = "http://localhost:3000/success";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setIsLoading(true);
        setMessage("Payment in Progress");

        const resp = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: PAYMENT_SUCCESS_URL,
            },
        });

        if (resp.error) setMessage("Some Error Occurred !!");
        setIsLoading(false);
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-body p-4">
                            <h1 className="card-title text-center mb-4">Complete your payment here!</h1>
                            <form onSubmit={handleSubmit}>
                                <PaymentElement className="mb-3" />
                                <div className="d-flex justify-content-center">
                                    <button
                                        className="btn btn-primary"
                                        disabled={isLoading || !stripe || !elements}
                                    >
                                        {isLoading ? "Loading..." : "Pay now"}
                                    </button>
                                </div>
                                {message && <div className="mt-3 text-center">{message}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;
