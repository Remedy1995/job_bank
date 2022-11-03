
class calculate{
    constructor(previous_amount,new_amount){
     this.previous_amount=previous_amount;
     this.new_amount=new_amount;
     this.totaldeposit=this.deposit;
     this.totalwithdrawal=this.withdrawal;
     this.checkDeposit=function(amount){
        return this.new_amount=amount;
     }
    }

  deposit(){
    return this.previous_amount + this.new_amount;
  }

  withdrawal(){
  return this.previous_amount - this.new_amount;
  }

  
}

module.exports=calculate;
