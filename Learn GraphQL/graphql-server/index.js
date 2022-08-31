import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send('Up and Running with GraphQL');
});

app.listen(5000, () => console.log('App Running at 5000 Port'));
