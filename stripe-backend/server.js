// Disable SSL certificate validation (for development only)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

require('dotenv').config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("stripe")('sk_test_51Pcb3VKJPxnYau7kX04rOQNgM2r5RS5YxXsYEiz4wmZIEJAqWm0sGYJP1udIhiUIY7OxcInbK8k3DXv4qnAQkp8400SJW3s0Qb'); // Use your Stripe secret key

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

const calculateTotalOrderAmount = (items) => {
    return items[0].amount * 100;
};

app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateTotalOrderAmount(items),
            currency: "usd",
            description: "This is for GFG Stripe API Demo",
            automatic_payment_methods: {
                enabled: true,
            },
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("Error creating payment intent:", error);
        res.status(500).send({ error: "Failed to create payment intent" });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});
