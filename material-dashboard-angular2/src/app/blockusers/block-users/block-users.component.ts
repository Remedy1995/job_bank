import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'app/api-service.service';

@Component({
  selector: 'app-block-users',
  templateUrl: './block-users.component.html',
  styleUrls: ['./block-users.component.scss']
})
export class BlockUsersComponent implements OnInit {

  constructor(private service:ApiServiceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
   this.getBlockedUsers();
   this.router.params.subscribe(id=>{
    console.log(id)
   })
  }
  newusers:any;
  getparamid:any;
  
  getBlockedUsers(){
    this.service.getblockedUsers().subscribe(users=>{
      console.log(users)
      this.newusers=users.data;
      console.log(this.newusers)
      this.getparamid
    })
  }


}
