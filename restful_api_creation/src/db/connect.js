const mongoose = require('mongoose');

const DB = 'mongodb+srv://hawk:123@cluster0.ntn1c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// mongoose.connect('mongodb://localhost:27017/olympics', {
mongoose.connect(DB, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log('Connection is Successful');
}).catch((err) => {
    console.log(`No Connection ${err}`);
});
