import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
  authUser: any;
  constructor(private service:ApiServiceService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   
    // return new Promise((resolve,reject)=>{
    //   this.service.checkAuth().subscribe(data=>{
    //     if(data===true|| localStorage.getItem('user')){
    //       console.log('hello')
    //       console.log(data)
    //       resolve (true);
    //     }else{
    //       localStorage.removeItem('user')
    //       return reject(this.router.navigate(['login']))
    //     }
    //   })
    // })
    // if (localStorage.getItem('token') != null)
    //  return true;
    //  this.router.navigate(['/login']);
    //  return false;

    if(this.service.verifytoken()){
      localStorage.removeItem('token');
      this.router.navigate(['login'])
      return false;
    }
     if(!this.service.verifytoken()){
    return true;
    }

    }
}
