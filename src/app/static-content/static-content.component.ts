import { Component, OnInit } from '@angular/core';
import { LoginService } from '../account/login/login.service';
import { User } from '../account/user'


@Component({
  selector: 'app-static-content',
  templateUrl: './static-content.component.html'
})
export class StaticContentComponent implements OnInit {
  
  currentUser: User;
  

  constructor(private loginService: LoginService) {
    this.loginService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
    
  }

  sair(){
    this.loginService.logout();
    
  }

    
}
