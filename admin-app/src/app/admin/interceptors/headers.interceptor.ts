import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private local: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // json header
    if(request.body) {
      const modifiedReq = request.clone({ 
        headers: request.headers.set('Content-Type', 'application/json'),
      });
      return next.handle(modifiedReq);
    }

    //auth header 
    if(this.local.isAuth()) {
      const modifiedReq = request.clone({ 
        headers: request.headers.set('Authorization', this.local.getAuthToken()),
      });
      return next.handle(modifiedReq);
    }
    return next.handle(request);
  }
}
