import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { InfraestructureComponent } from './infraestructure/infraestructure.component';
import { StaticContentComponent } from './static-content/static-content.component';
import { LoginComponent } from './account/login/login.component';
import { PasswordRecoverComponent } from './account/password-recover/password-recover.component';
import { RegisterComponent } from './account/register/register.component';
import { AlertMessageComponent } from './utils/alert-message/alert-message.component';
import { ProfileComponent } from './profile/profile.component';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    InfraestructureComponent,
    StaticContentComponent,
    LoginComponent,
    PasswordRecoverComponent,
    RegisterComponent,
    AlertMessageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
