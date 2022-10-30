import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'app/api-service.service';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  constructor(private service:ApiServiceService,private router:Router,private cookie:CookieService) { }

  ngOnInit(): void {
   this.service.checkAuth().subscribe(data=>{
    console.log(data);
   })
  }
    loginData=new FormGroup({
    email:new FormControl('adjetadj@gmail.com',Validators.required),
    password:new FormControl('12345',Validators.required),
  
  })
  

   Login(){
  if(this.loginData.valid){
   
    this.service.authSign(this.loginData.value).subscribe({
      next:(data)=>{
        console.log(data.token)
          // this.showspinner=false;
          this.router.navigate(['dashboard']);
          //set user token
          this.cookie.set('user',data.token)
        //set results in cookie to display map
        // this.cookie.set('latitude',data.message.country_latitude);
        // this.cookie.set('longitude',data.message.country_longitude)
        // this.cookie.set('destination',data.message.destination);
        // this.cookie.set('description',data.message.itemsDescription);
        // this.cookie.set('country',data.message.country);
        // this.cookie.set('tracking',data.message.trackingstatus);
        // this.cookie.set('date',data.message.orderDate);
        // this.cookie.set('expected-date',data.message.deliveryDate);
        // this.cookie.set('remarks',data.message.remarks);
        // this.cookie.set('quantity',data.message.quantity);
       },
        error:(error)=>
        {
          // this.notification=error.error.message,
         
            // this.showspinner = false;
            // this.consignmentInformation.reset()
            // Swal.fire({  
            //   position: 'top-end',  
            //   icon: 'error',  
            //   title: this.notification,  
            //   showConfirmButton: true 
            // }) 
        console.log(error)
        },
       complete:()=>console.log("completed"),
       
       })
     
      }
      else{
        // Swal.fire({  
        //   position: 'top-end',  
        //   icon: 'error',  
        //   title:'Field cannot be empty',  
        //   showConfirmButton: true 
        // })
      }
    
    }
   
}
