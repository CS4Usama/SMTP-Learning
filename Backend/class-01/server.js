const express = require('express');
const app = express();
const port = 3000;


app.get('/', function(request, response) {
    // Logics of Main Server
    console.log("Sample Log");
    response.send('Hello World');
});

// Respond with 'Hello World' when a GET Request is made to the Homepage
app.get('/login', function(req, res) {
    // Logics of Login
    res.json({item: 'Login'})
});

app.get('/signup', function(req, res) {
    // Logics of Signup
    res.send("Singup Now to Create an Account");
});

app.get('/forget', function(req, res) {
    // Logics
    res.send("Forget Password");
})


// IP:5000/login

app.listen('5000', (err) => {

    if(err) {
        console.log("Something went Wrong", error);
    }

});


// app.listen(port, () => {
//     console.log(`App Listening at http://localhost:${port}`)
// });