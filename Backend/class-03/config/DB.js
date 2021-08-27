const mongoose = require('mongoose');

function dbConnection() {
    mongoose.connect(
        ,
        { useNewUrlParser: true, useFindAndModify: false },
        function(err) {
            if(err) {
                console.log("ERROR at DB", err);
            } else {
                console.log("DB Connected Successfully");
            }
        }
    );
}

module.exports = dbConnection;