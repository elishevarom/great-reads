//StripePayment.js
 
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import PaymentForm from "./PaymentForm";
 
const stripe = loadStripe('pk_test_51Pcb3VKJPxnYau7k4cGxAPWhmqyDa14g6KUmcXCdXydNx9TJVePtiuGaMypLyjo4RtzfrMx8vXWppmI8xZ94vMC000L6VqTAaQ');
 
const StripePayment = () => {
    const [clientSecret, setClientSecret] = useState(null);
 
    useEffect(() => {
        axios
            .post("http://localhost:4000/create-payment-intent", {
                items: [{ id: 1, name: "momos", amount: 50.00 }],
            })
            .then((resp) => setClientSecret(resp.data.clientSecret));
    }, []);
 
    const options = {
        clientSecret,
        theme: "stripe",
    };
 
    return (
        clientSecret && (
            <Elements stripe={stripe} options={options}>
                <PaymentForm></PaymentForm>
            </Elements>
        )
    );
};
 
export default StripePayment;