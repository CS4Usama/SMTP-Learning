const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// const port = 3000;


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
    req.clientData;
    // Logics of Main Server - When a GET Request is made to the Homepage
    res.send('Server is Working...');
});

app.get('/login', function(req, res) {
    // Logics of Login
    let resBack = {userID:'123', email:'test@gmail.com'};
    res.status(200).json(resBack);
});

app.post('/signup', function(req, res) {
    console.log(req.body);
    // Logics of Signup
    res.json({name: req.body.name})
});

app.get('/forget', function(req, res) {
    // Logics
    res.send("HELLO WORLD");
});

// else Request => If user enter wrong path or path which is not exist - always write at the end of requests
// means sab sy last py likhain gy yeh else-Request jahan sari requests khatam hoon gi
app.get('*', function(req, res) {
    res.send("Route / Path does not Exist");
    // res.sendFile();
});


// IP:5000/login

app.listen('5000', (err) => {

    if(err) {
        console.log("Something went Wrong", error);
    }

});


// app.listen(port, () => {
//     console.log(`App Listening at http://localhost:${port}`)
// });