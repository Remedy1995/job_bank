import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'app/api-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';  

  
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  constructor(private service:ApiServiceService,private router:Router) { }

  ngOnInit(): void {
   this.getAllUsers();
  }
  newusers:any;
  disable_button:boolean=false;
  disable_grantAccess:any;
  formatuser:[];
  getAllUsers(){
    this.service.allUsers().subscribe(users=>{
     this.newusers=users;
    console.log(this.newusers.data)
    this.newusers=this.newusers.data;
    })
  }


  checkedUser(data:any){
  Swal.fire({  
        title: 'Are you sure want to block the User?',  
        text: 'You will not be able to recover this file!',  
        icon: 'warning',  
        showCancelButton: true,  
        confirmButtonText: 'Yes, Block!',  
        cancelButtonText: 'No, Ignore' 
      }).then((result) => {  
   if (result.value) {  
    Swal.fire('You have successfully blocked the user'),
   //push data to block user
   this.service.getSingleData(data).subscribe(blocked=>{
    console.log(blocked)
    if(blocked.message==="you have successfully blocked this user"){
    this.disable_button=true;
    this.router.navigate(['blocked'])
    }
    else{
    this.disable_button=false;
    }
   }) 
  } 
  else if (result.dismiss === Swal.DismissReason.cancel) {  
    Swal.fire(  
   'Cancelled',  
   'You are Safe :)',  
   'error' 
          )  
        }  
      })  
    }  

    
  } 
 
   







 