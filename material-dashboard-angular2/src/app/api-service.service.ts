import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams, } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { JwtHelperService} from "@auth0/angular-jwt";



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  loggedUser:any;
  constructor(private _http:HttpClient) { }
  //get our token
  user=localStorage.getItem('token')
   gettermsheader = {
    'Authorization': `Bearer ${this.user}`,
     'Accept':'application/json',
     };
 //for only authorization header with bearer
  requesttermsoptions={headers:this.gettermsheader}
  env=environment.apiURL;
  depositfunds=`${this.env}/deposit/deposit`;
  signupuser=`${this.env}/user/createuser`;
  getusers=`${this.env}/getallusers/getallusers`;
  getsingledataUrl=`${this.env}/getsingledata/getsingledata`;
  blockedusers=`${this.env}/user/blockeduser`;
  getUsertoken=`${this.env}/user/token`;
  signin=`${this.env}/user/login`;
  helper=new JwtHelperService();
  
  deposit(data:any):Observable<any>{
    return this._http.post(`${this.depositfunds}`,data);
  }

  signUp(data:any):Observable<any>{
    return this._http.post(`${this.signupuser}`,data);
  }
  getSingleData(id:any):Observable<any>{
    let ids=id;
    return this._http.get(`${this.getsingledataUrl}/${ids}`);
  }
  allUsers():Observable<any>{
    return this._http.get(`${this.getusers}`);
  }
  getblockedUsers():Observable<any>{
    return this._http.get(`${this.blockedusers}`,this.requesttermsoptions);
  }
  getUnblockedUsers():Observable<any>{
    return this._http.get(`${this.blockedusers}`);
  }
  authSign(data:any):Observable<any>{
    return this._http.post(`${this.signin}`,data, {withCredentials:true})
  }

 checkAuth(){
   return this._http.get(this.getUsertoken,this.requesttermsoptions);
 }

 verifytoken(){
 return this.helper.isTokenExpired(this.user);
}
}