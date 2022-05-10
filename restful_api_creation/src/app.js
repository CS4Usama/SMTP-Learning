// https://worldathletics.org/world-rankings/100m/women


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('./db/connect');
const router = require('./routers/mensRouter');

app.get('/', async(req,res) => {
    res.send('Hello World!');
});

// Permission dena keh Postman sy Data kis format aur kis maqsad ky liye lena... (Use Post Request in our App)
app.use(express.json());

app.use(router);


app.listen(port, () => {
    console.log(`Connection is Live at Port No. ${port}`);
});
