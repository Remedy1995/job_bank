import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from 'app/api-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private service:ApiServiceService) { }
    createUser=new FormGroup({
    firstname:new FormControl('',Validators.required),
    lastname:new FormControl('',Validators.required),
    username:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    confirm_password:new FormControl('',Validators.required)
  })
 
  signUp(){
    if(this.createUser.value.password===this.createUser.value.confirm_password){
  if(this.createUser.valid){
    this.service.signUp(this.createUser.value).subscribe({
    next(x){
      console.log(x.message) 
    },
    error(err){
      console.error('There was an error in signing up',err)
    },
     complete(){
      console.log('done');
     }
    })
  }else{
  console.log("All fields are required")
  }
}
else{
  console.log("Passwords do not match please check")
}
  }


 

}
