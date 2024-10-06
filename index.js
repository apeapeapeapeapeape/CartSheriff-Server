const express = require('express');
const cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const User = require('./models/user');



const dbURI =  'mongodb+srv://andrew:norm@users.rcgzh.mongodb.net/?retryWrites=true&w=majority&appName=USERS';
mongoose.connect(dbURI,{useNewUrlParser: true,useUnifiedTopology:true})
  .then((result)=> app.listen(3000))
  .catch((err)=> console.log(err));

  const UsersTable = mongoose.model('Users', new mongoose.Schema({
    _id: String,
    name: String,
    bal: String,
    rate: String,
    UID: String, // user id
  }));

  


// Middleware
app.use(cors()); // Allow requests from the client
app.use(express.json()); // To parse JSON request bodies

// // Routes

runfunk3()
async function runfunk3(){
  const user = await User.create({
    name: "AND",
    bal: "0.00",
    rate: "2.00",
    UID: "0"
  })
  await user.save()

  console.log(user)
}

// app.get('/add-users',(req,res)=>{
//   const user = new User({
//     name: 'Andrew',
//     bal: '0.00',
//     rate: '2.00',
//     UID: '0'
//   });
//   user.save()
//     .then((result)=>{
//       res.send(result);
//     })
//     .catch((err)=>{
//       console.log(err);
//     }); 
// })



// app.get('/', (req, res) => {
//   res.send('Hello from Express!');
// });

// Define a route with cartId parameter
// should we make it send you to /scan/:cardId or should we keep it as /home/
app.get('/home/', (req, res) => {
  const {cardId} = req.params; // Access the parameter value
  
  // this is the response you are sending back (basically return in C#)
  res.send(`Cart ID is: ${cardId}`);

  // get user id then build contract

});
// change path later
// app.get('api/user', async (req, res) => {
//   const options = {
//     projection: {}
//   }
// }


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
