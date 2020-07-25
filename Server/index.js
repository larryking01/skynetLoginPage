//Skynet Login.
//importing the required modules.
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Users = require('./models/User');

//the port.
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//mongodb connection string.
let atlasDatabase = 'mongodb+srv://larry_king111:CB35529086@skynetcluster.7hpcr.mongodb.net/SkynetDatabase?retryWrites=true&w=majority'

//connect to mongo
mongoose.connect(atlasDatabase, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true})
   .then(()=> {
       console.log('DATABASE CONNECTED SUCCESSFULLY.......')
   })
   .catch(err => {
       console.log(`Failed to connect database due to: ${err}`)
   })



//the login route.
app.get('/skynet', (req,res)=>{
    res.status(200).send('WELCOME PAGE....')
})


//the sign up page...
app.post('/skynet/signUp', (req,res)=>{
    const newUser = new Users({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        telephone: req.body.telephone
    });

    newUser.save((err)=>{
      if(err){
        res.send(`Failed to save user due to error: ${err}`)
      }
      else {
        res.json({message: 'New User Added'})
      }
      
    })
  
});



//the logins
app.post('/skynet/login', async (req, res) => {
    const newUser = {};
    newUser.email = req.body.email;
    newUser.password = req.body.password;
  
    await Users.findOne({email: newUser.email })
      .then(profile => {
        if (!profile) {
          res.send("User does not exist");
        } else {
          if (profile.password === newUser.password) {
            res.send("User authenticated....Login Successful !!!");
          } else {
            res.send(`Invalid Password for ${newUser.email}`);
          }
        }
      })
      .catch(err => {
        console.log("Failed to login due to error: ", err.message);
      });
  });




//listening on the port.
app.listen(port, ()=>{
    console.log(`SERVER RUNNING ON PORT ${port}.....`)
})
