import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public myForm!:FormGroup;
  constructor(private _service: RegisterService,private _router: Router, private formBuilder:FormBuilder) { }
  user1 =new User();
  msg='';
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      firstName:["", Validators.required],
      lastName:["", Validators.required],
      age:[""],
      city:[""],
      email:["",[Validators.required, Validators.email]],
      username:["", Validators.required],
      password:["", [Validators.required, Validators.minLength(5)]]
    })
  }
  register(){

    this._service.registerUserFromRemote(this.user1).subscribe(
      data =>{
        console.log("response recive");
        localStorage.setItem('token', JSON.stringify(data))
        this.msg="Register successful";
        this._router.navigate(['/login']);
      },
      error =>{
        console.log("exception occured");
        this.msg = error.error;
      }
      
    )
  }
}