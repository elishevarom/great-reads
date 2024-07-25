require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Use your Stripe secret key from environment variables
const serverless = require('serverless-http');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));  // Ensure CORS allows localhost:3000
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
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000'); // Set CORS headers in response
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("Error creating payment intent:", error);
        res.status(500).set('Access-Control-Allow-Origin', 'http://localhost:3000').send({ error: "Failed to create payment intent" }); // Set CORS headers in error response
    }
});

// Handle CORS preflight requests
app.options("/create-payment-intent", (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');  // or '*'
    res.set('Access-Control-Allow-Headers', 'Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token');
    res.set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET');
    res.sendStatus(200);
});

// If you need to run the app locally
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server started on PORT ${PORT}`);
    });
}

module.exports.handler = serverless(app);
