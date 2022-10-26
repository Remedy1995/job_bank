import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http:HttpClient) { }

  depositfunds="http://localhost:4000/depositfunds/depositfunds";
  signupuser="http://localhost:4000/user/createuser";
  getusers="http://localhost:4000/getallusers/getallusers";
  getsingledataUrl="http://localhost:4000/getsingledata/getsingledata";
  blockedusers="http://localhost:4000/user/blockeduser";
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
