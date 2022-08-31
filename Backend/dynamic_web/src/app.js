const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');
const User = require('./models/userSchema');

require('./models/userSchema');
require('./db/connect');


// Setting the Path
const staticPath = path.join(__dirname, '../public');
const templateView = path.join(__dirname, '../templates/views');
const templatePartial = path.join(__dirname, '../templates/partials');

// Middleware
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
app.use('/jquery', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use(express.static(staticPath));

app.use(express.urlencoded({extended:false}));

app.set('view engine', 'hbs');
app.set('views', templateView);
hbs.registerPartials(templatePartial);


// Routing...
// app.get(path, callback_fun);
app.get('/', async(req,res) => {
    res.render('index');
});

app.post('/contact', async (req,res) => {
    try {
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render('index');
    } catch(err) {
        res.status(500).send(err);
    }
});

// Server
app.listen(port, () => {
    console.log(`Connection is Live at Port No. ${port}`);
});
