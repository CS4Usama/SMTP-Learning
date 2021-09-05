const mongoose = require('mongoose');

function dbConnection() {
    mongoose.connect(
        `mongodb+srv://hawk:123@cluster0.ntn1c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        // { useNewUrlParser: true, useFindAndModify: false },
        { useNewUrlParser: true },
        function(err) {
            if(err) {
                console.log("ERROR in DB Connection", err);
            } else {
                console.log("DB Connected Successfully");
            }
        }
    );
}

module.exports = dbConnection;