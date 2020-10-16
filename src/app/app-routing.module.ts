import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InfraestructureComponent } from './infraestructure/infraestructure.component';
import { StaticContentComponent } from './static-content/static-content.component';
import {LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { PasswordRecoverComponent } from './account/password-recover/password-recover.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service'


const routes: Routes = [

  {
    path: '',component: StaticContentComponent, //path raiz, qndo ta vazio é a raiz, é a barra vazia "http://localhost:4200/, só tem o header e footer por enquanto"
    children: [ //tudo isso aqui vai ser carregado dentro do router outlet
        { path: '', component: HomePageComponent },
        { path: 'sobre', component: AboutComponent },
        { path: 'infraestrutura',   component: InfraestructureComponent },
        
        { path: 'login', component: LoginComponent},
        { path: 'registrar', component: RegisterComponent},
        { path: 'recuperar', component: PasswordRecoverComponent},
        
        { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

        //todo caminho que não existir vai ser redirecionado pra pagina principal
        { path: '**', redirectTo: '' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
