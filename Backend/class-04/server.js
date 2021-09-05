const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const dbConnection = require('./config/DB');

// Routes List
const ordersRoutes = require('./components/orders/OrdersRoutes');
const authRoutes = require('./components/auth/AuthRoutes');
const verifyToken = require('./middleware/AuthMiddleware');

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

app.use('/auth', authRoutes);
// app.use(verifyToken);    agar yahan sy karain gy to nechy wala sary middlewares login ky baghair nahi chalain gy lekin yeh zyda behtar nahi manually har route mein as a param pass karna behtar hai
app.use('/orders', ordersRoutes);
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