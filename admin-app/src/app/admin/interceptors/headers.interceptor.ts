import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.body) {
      const modifiedReq = request.clone({ 
        headers: request.headers.set('Content-Type', 'application/json'),
      });
      return next.handle(modifiedReq);
    }
    return next.handle(request);
  }
}
