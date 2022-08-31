const mongoose = require('mongoose');

const DB = 'mongodb+srv://hawk:123@cluster0.ntn1c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connection is Successful');
}).catch((err) => {
    console.log(`No Connection ${err}`);
});
