const mongoose = require('mongoose');

const schema = mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: "admin"
    }
}, { timestamps: true }
);

module.exports = mongoose.model('admin', schema);