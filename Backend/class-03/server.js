const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const dbConnection = require('./config/DB');

// Routes List
const ordersRoutes = require('./components/orders/OrdersRoutes');
const authRoutes = require('./components/auth/AuthRoutes');

const app = express();

app.use(bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());
app.use(cors());

dbConnection();

app.get('/', function(req, res) {
    req.clientData;
    res.send("Server is Working");
});

app.use('/orders', ordersRoutes);
app.use('/auth', authRoutes);
// IP:port/auth/login - POST
// IP:port/orders/create-order - POST
// IP:port/orders - GET


// Server Port Listener
app.listen('5000', (err) => {
    if(err) {
        console.log("Something went Wrong", err);
    } else {
        console.log("Server is Working on Port, 5000");
    }
});