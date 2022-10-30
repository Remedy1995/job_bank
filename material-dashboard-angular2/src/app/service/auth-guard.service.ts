import { Injectable } from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { ApiServiceService } from 'app/api-service.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  routeURL:string;
  constructor(private apiService:ApiServiceService,private router:Router) { 
    this.routeURL=this.router.url;
  }


  // canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
  //   return new Promise((resolve,reject)=>{
  //     this.apiService.getblockedUsers().subscribe((user)=>{
  //       console.log('user is',user)
  //       if (user.message=='A token is required for authentication' && this.routeURL !== '/dashboard') {
  //         // assign '/login' in 'routeURL' to
  //         // avoid get into infinite loop
  //         this.routeURL = '/dashboard';
  //         // when the user is not logged in,
  //         // instead of just returning false
  //         // inject router and redirect to '/login' or any other view
  //         this.router.navigate(['/dashboard'], {
  //           // note: this queryParams returns the current URL
  //           // that we can have in 'return' parameter,
  //           // so when the '/login' page opens,
  //           // this param tell us from where it comes
  //           queryParams: {
  //             return: 'dashboard'
  //           }
  //         });
  //         return resolve(false);
  //       }else if (user.message=='Invalid Token' && this.routeURL !== '/dashboard') {
  //         // assign '/login' in 'routeURL' to
  //         // avoid get into infinite loop
  //         this.routeURL = '/dashboard';
  //         // when the user is not logged in,
  //         // instead of just returning false
  //         // inject router and redirect to '/login' or any other view
  //         this.router.navigate(['/dashboard'], {
  //           // note: this queryParams returns the current URL
  //           // that we can have in 'return' parameter,
  //           // so when the '/login' page opens,
  //           // this param tell us from where it comes
  //           queryParams: {
  //             return: 'dashboard'
  //           }
  //         });
  //         return resolve(false);
  //       }

  //       else{
  //         this.routeURL = this.router.url;
  //        return resolve (true);
  //       }
  //     })
  //   })
  // }




  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return new Promise((resolve,reject)=>{
      this.apiService.checkAuth().subscribe((user)=>{
        console.log('user is',user)
        if (user.message ==='User  authenticated') {
          this.routeURL = '/dashboard';
          this.router.navigate(['/dashboard'], {
            queryParams: {
              return: 'dashboard'
            }
          });
          return resolve(false);
        }
        else{
          this.routeURL = this.router.url;
         return resolve (true);
        }
      })
    })
  }

}
