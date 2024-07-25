import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const stripe = loadStripe('pk_test_51Pcb3VKJPxnYau7k4cGxAPWhmqyDa14g6KUmcXCdXydNx9TJVePtiuGaMypLyjo4RtzfrMx8vXWppmI8xZ94vMC000L6VqTAaQ');

const StripePayment = () => {
    const [clientSecret, setClientSecret] = useState(null);

    useEffect(() => {
        fetch("https://9xbg1pvbzb.execute-api.us-east-1.amazonaws.com/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                items: [{ id: 1, name: "momos", amount: 50.00 }],
            })
        })
        .then(response => response.json())
        .then(data => setClientSecret(data.clientSecret))
        .catch(error => console.error("Error creating payment intent:", error));
    }, []);

    const options = {
        clientSecret,
        theme: "stripe",
    };

    return (
        clientSecret && (
            <Elements stripe={stripe} options={options}>
                <PaymentForm />
            </Elements>
        )
    );
};

export default StripePayment;
