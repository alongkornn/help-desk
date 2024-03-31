const mongoose = require('mongoose');

const schema = mongoose.Schema({
    typeProblem: {
        type: String
    },
    description: {
        type: String
    },
    position: {
        type: String
    },
    name: {
        type: String
    },
    status: {
        type: String,
        default: "pending"
    }
}, { timestamps: true }
);

module.exports = mongoose.model('ticket', schema);