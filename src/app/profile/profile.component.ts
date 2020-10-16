import { Component, OnInit } from '@angular/core';
import { LoginService } from '../account/login/login.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: boolean = false;
  user: any = {};

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    
    this.user = this.loginService.getUser();
    this.user = JSON.parse(this.user);
    
    console.log(this.user.name);
    
  }

  showForm(){
    this.profileForm = true
  }

  hideForm(){
    this.profileForm = false;
  }

  

}
