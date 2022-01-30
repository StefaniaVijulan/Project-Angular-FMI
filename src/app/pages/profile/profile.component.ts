import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userlogged = localStorage.getItem('token')
  userIsLogged:boolean = false;

  user: User = new User();

  constructor() { }

  ngOnInit(): void {
    if (this.userlogged) {
      this.userIsLogged = true;
      this.user = JSON.parse(this.userlogged);
    } else{
      this.userIsLogged = false;
    }
  }

}
