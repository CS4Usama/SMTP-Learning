// const fs = require('fs');
// import { copyFileSync } from "node:fs";

// copyFileSync('file1.txt', 'file2.txt');
// console.log('USAma');


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
    res.send('This is a Contact Page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
