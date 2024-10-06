const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const cartsSchema = new mongoose.Schema({
    cartId: String,
    numberOfUses: Number,
    status: String,
});

module.exports = mongoose.model('CartsDB', cartsSchema);


