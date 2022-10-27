const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cookieParser = require('cookie-parser')
const cors=require('cors');
const port=4000;
const path = require('path');
const depositfunds=require('./routes/funds');
app.use(cookieParser());
const User=require('./routes/user');
const getallUsers=require('./routes/getallusers');
const blockuser=require('./routes/blockuser');
app.use(cors());
 app.use('/deposit',depositfunds);
app.use('/user',User);
app.use('/getallusers',getallUsers);
app.use('/getsingledata',blockuser);

const mongodb='mongodb://localhost:27017/my_bank';
mongoose.connect(mongodb,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>
{
  console.log("successfully connected to the database");
}).catch(err=>{
  console.log("error connecting to the database",err)
});


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
})
app.listen(4000,()=>{
    console.log("server is running on port "+port);
})

