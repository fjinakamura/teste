import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../account/login/login.service';

@Injectable()
export class HeaderInterceptorInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var token = this.loginService.getToken();
    const modified = request.clone({
      setHeaders:  { "Authorization": token, "Content-Type": "application/json" },
    })
    return next.handle(modified);
  }
}
