import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


isLogin:boolean=false;
  constructor(private _AuthService:AuthService) {
    
    _AuthService.currentUserData.subscribe(()=>{
      if(_AuthService.currentUserData.getValue()==null) {
        this.isLogin=false;
  
      }
      else{
        this.isLogin=true;
      }
    })
   }
  
  logout() {
    this._AuthService.logout();
  }
  ngOnInit(): void {
  }


}
