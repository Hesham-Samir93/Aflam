import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor( private _AuthService:AuthService, private _Router:Router) { }
  error:string="";
  registerForm:FormGroup=new FormGroup({
    first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    age:new FormControl(null,[Validators.required,Validators.min(10),Validators.max(100),Validators.pattern(`^[0-9]{1,2}$`)]),
    password:new FormControl(null,[Validators.required,Validators.pattern(`^[a-zA-Z0-9]{8,15}$`)]
    )
  });

  submitform(registerForm:FormGroup)
  {
    console.log(registerForm.value);
   
    if(registerForm.valid){
      this._AuthService.register(registerForm.value).subscribe((response)=>{

        if (response.message ==="success"){
          this._Router.navigate(['/login']);
        }
        else
        {
          this.error=response.message
        }
      })  
    }
    
    
  }
  ngOnInit(): void {
  }

}
