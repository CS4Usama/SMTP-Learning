const mongoose = require('mongoose');
const AuthSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    }
});

const AuthModel = mongoose.model('users', AuthSchema);
module.exports = AuthModel;