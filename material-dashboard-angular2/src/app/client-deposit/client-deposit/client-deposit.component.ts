import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from 'app/api-service.service';

@Component({
  selector: 'app-client-deposit',
  templateUrl: './client-deposit.component.html',
  styleUrls: ['./client-deposit.component.scss']
})
export class ClientDepositComponent implements OnInit {

  constructor(private service:ApiServiceService) { }

  addmoney=new FormGroup({
    accountnumber:new FormControl('',Validators.required),
    firstname:new FormControl('',Validators.required),
    lastname:new FormControl('',Validators.required),
    amount:new FormControl('',Validators.required)
  })
  ngOnInit(): void {
   
  }

  depositFunds(){
  if(this.addmoney.valid){
   
    this.service.deposit(this.addmoney.value).subscribe({
    next(x){
      console.log(x.message)
      
    },
    error(err){
      console.error('something went wrong',err)
    },
     complete(){
      console.log('done')
      
     }
    })
  }else{
  console.log("All fields are required")
  }
  
  }


 

}
