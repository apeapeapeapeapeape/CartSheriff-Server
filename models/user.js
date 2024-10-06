const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const userSchema = new mongoose.Schema({
   name:String, 
    bal:String,
    rate:String,
    UID:String
});

module.exports = mongoose.model('User', userSchema);


