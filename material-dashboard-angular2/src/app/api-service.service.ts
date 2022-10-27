import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http:HttpClient) { }
  env=environment.apiUrl;
  depositfunds=`${this.env}/deposit/deposit`;
  signupuser=`${this.env}/user/createuser`;
  getusers=`${this.env}/getallusers/getallusers`;
  getsingledataUrl=`${this.env}/getsingledata/getsingledata`;
  blockedusers=`${this.env}/user/blockeduser`;
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
    return this._http.get(`${this.blockedusers}`);
  }
  getUnblockedUsers():Observable<any>{
    return this._http.get(`${this.blockedusers}`);
  }
}
