const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const userSchema = new mongoose.Schema({
    name: String,
    bal: Number,
    deposit: Number,
    password: String,
    userId: String,
    userName: String,
    karmaPoints: Number,
    penaltyPoints: Number,
    cartsSaved: Number,
    cartsReturned: Number,
    cartsNotReturned: Number,
    totalCartsSignedOut: Number,
});

module.exports = mongoose.model('Users', userSchema);


