const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cookieParser = require('cookie-parser')
const cors=require('cors');
const userToken=require('./middleware/auth');
require('dotenv').config()
const port=4000;
const path = require('path');
const depositfunds=require('./routes/funds');
app.use(cookieParser());
const User=require('./routes/user');
const getallUsers=require('./routes/getallusers');
const blockuser=require('./routes/blockuser');
 app.use('/deposit',depositfunds);
app.use('/user',User);
app.use('/getallusers',getallUsers);
app.use('/getsingledata',blockuser);
const mongodb=process.env.MONGO_ONLINE;
mongoose.connect(mongodb,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>
{
  console.log("successfully connected to the database");
}).catch(err=>{
  console.log("error connecting to the database",err)
});


app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.static(path.join(__dirname + '/public/dist')));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/public/dist/index.html'));});
app.listen(process.env.PORT || 4000,()=>{
    console.log("server is running on port "+port);
})

