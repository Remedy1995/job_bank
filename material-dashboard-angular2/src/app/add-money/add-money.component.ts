import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { ApiServiceService } from 'app/api-service.service';


@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.scss']
})
export class AddMoneyComponent implements OnInit {

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


