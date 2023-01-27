import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3R5cGUiOiJzdXBwbGllciIsImlkIjoxLCJleHAiOjE2NzM5NDYwNzF9.GtZzWexYiCvCNx6294788w6n5sbr4IgvgZiy_6QzBn8";

    let tokenInterceptor=req.clone({
      setHeaders:{
        Authorization: `bearer ${token}`
      }
    })
    return next.handle(tokenInterceptor)
  }

  
 
}
