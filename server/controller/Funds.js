const Funds=require('../models/Funds');
const calculate=require('../helpers/Calculate');


exports.depositfunds=(req,res,next)=>{
  const accountnumber=req.body.accountnumber;
   const firstname=req.body.firstname;
  const lastname=req.body.lastname;
  const amount= parseFloat(req.body.amount);
  var value='';
  const compute=new calculate(value,amount);
   const viewamount=compute.totaldeposit()
 

   
const deposit= new Funds({
  accountnumber:accountnumber,
  firstname:firstname,
  lastname:lastname,
  amount:amount,
 transaction:{
     transaction_type:"deposits",
     transaction_description:req.body.transaction.transaction_description,
     transaction_reference:"1334343433443",    
     transaction_deposits:amount,
     transaction_withdrawals:"",
     transaction_date:"",
     },
    //  account:
    //      {
    //      amount:amount,
    //      previous_balance:amount,
    //      new_balance:viewamount
    //       }
    
})
try{
const docs=deposit.save();
res.status(200).json({message:"Deposit made successfully"})
}catch(error){
console.log(error)
res.status(500).json({error:error})
}

}



