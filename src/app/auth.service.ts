import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient ) {
    if(localStorage.getItem("currenUserToken"))  //function to save when reload
    {
      this.saveCurrentData()      
    }
   }

   logout() {
     localStorage.removeItem("currenUserToken");
      this.currentUserData.next(null);     


   }
  currentUserData:any= new BehaviorSubject(null);
  register(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup',userData)
  }
  login(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin',userData)
  }
  saveCurrentData()
  {
    let encoded:any = localStorage.getItem("currenUserToken");
    this.currentUserData.next(jwtDecode(encoded) );
    console.log(this.currentUserData)
  }
 
   
}

