const mongoose = require('mongoose');

const userInfo = new mongoose.Schema({

    firstName: {type: String},
    lastName: {type: String},
    age: {type: Number},
    email: {type: String},
    phone: {type: Number},
    password: {type: String},


})

module.exports = mongoose.model("userInfo", userInfo);