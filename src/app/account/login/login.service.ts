import { Injectable } from '@angular/core';
import { of, throwError, BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';





const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsIm5hbWUiOjEyMzQ1Nn0.HqKAVDFjcMyas2lAbhme-2MwT_WY7VDCpXY7FqpQUSA";
const KEYUSER = "user";
const KEY = "token";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  
  constructor( private router: Router, private jwtHelper: JwtHelperService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(this.getUser()));
    this.currentUser = this.currentUserSubject.asObservable();
    
  }
   

  usuarios: Array<any> = [
    { 'email': 'teste@gmail.com',
      'password': '123456',
      'name': 'flavio' }
  ];

  

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  
  
  login(email,password){
    var token = this.apiLogin(email,password);
    console.log(token +" aaaaaaaaaaa");

    if(token == null){
      return of (false);
    }

    let user = this.usuarios.find(el => el.name == 'flavio');
    this.currentUserSubject.next(user);
    this.setUser(user);
    
    console.log(user + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

    console.log(token);
    
    this.setToken(token);
    

    return of (true);
    
  }

  private apiLogin(email, password):string{
    console.log(email,password);

    var achou = false;

      this.usuarios.forEach(element => {
        console.log(element);
        if(email === element.email){
          console.log("salve");
          if(password === element.password){
            console.log(TOKEN);
            achou=true;
            
          }
        }
    });
    if(achou){
      return TOKEN;
    }else{
      return null;
    }
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem(KEY);
    localStorage.removeItem(KEYUSER);

    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }

  

  /*
    fazer a validação dentro dessa "api" para ver se o user foi logado
      se ele for logado, retorno o token


  */
 hasToken() {
  const token = this.getToken();
  return !this.jwtHelper.isTokenExpired(token);
}

setToken(token) {
  window.localStorage.setItem(KEY, token);
}

getToken() {
  return window.localStorage.getItem(KEY);
}

removeToken() {
  window.localStorage.removeItem(KEY);
}


hasUser(){
  const user = this.getUser();
  return !this.jwtHelper.isTokenExpired(user);
}
setUser(user){
  window.localStorage.setItem(KEYUSER, JSON.stringify(user));
}
getUser(){
  return window.localStorage.getItem(KEYUSER);
}

removeUser(){
  window.localStorage.removeItem(KEYUSER);
}

}
