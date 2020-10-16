import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import {StaticContentComponent} from '../../static-content/static-content.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../account.css']
})
export class LoginComponent implements OnInit {
  invalid: boolean = false;
  error: string = '';
  email: string = '';
  password: string = '';

  usuarios: Array<object>;

  constructor(private loginService: LoginService,
    private router: Router,
    private staticContent : StaticContentComponent) {
      
      
   }

  ngOnInit(): void {
    //redireciona pra home se ja esta logado
    if (this.loginService.hasToken()) {
        
      this.router.navigate(['/']);
    }
  }

  

  onSubmit(form: NgForm){
      console.log(form.value);

      this.loginService.login(this.email,this.password).subscribe(res=>{
        if(res){
          
          
          this.router.navigate([
            'profile'
          ]);
        }else{
          this.invalid = true;
          this.error = "email ou senha invalidos";
          form.reset();
        }
      });

      // if(this.loginService.login(this.email, this.password)){
      //   this.router.navigate([
      //     "/"
      //   ]);
      // }else{
      //   this.invalid = true;
      //   this.error = "email ou senha invalidos";
      //   form.reset();
      // }
  }
 
  /*
    modificar o array para ter login e senha = feito
    criar variaveis do login component, ligar elas com os inputs atraves do ngModel = feito
    botão do login vai acessar a função logar = feito
    dentro dessa função logar, fazer a chamada do loginService = feito
    fazer um foreach para dentro do array, para pegar os valores de login e senha e comparar com os logins salvos nas variaveis locais = feito
    ter validação do html = feito
    logar e redirecionar
    mudar o "entrar" na header para o nome do usuario e adicionar uma opção de deslogar na header
    adicionar a funcionalidade de deslogar
    se n existir, mensagem de erro ou um console log de erro e reseta os campos = feito

  */
 
}
