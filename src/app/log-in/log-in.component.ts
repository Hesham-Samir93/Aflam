import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor( private _AuthService:AuthService, private _Router:Router) { }
  error:any;
  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(`^[a-zA-Z0-9]{8,15}$`)]
    )
  });
  submitform(loginForm:FormGroup)
  {
  
   
    if(loginForm.valid){
      this._AuthService.login(loginForm.value).subscribe((response)=>{

        if (response.message ==="success"){


          this._Router.navigate(['/home']);
          localStorage.setItem("currenUserToken", response.token);
          this._AuthService.saveCurrentData()
          
          
        }
        else
        {
          this.error=response.message
        }
      })  
    }
  }
  closeAlert()
  {
    this.error=null;
  }
  ngOnInit(): void {
 
  }

}
