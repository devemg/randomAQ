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
    let modifiedReq = request;
    if(request.body) {
      modifiedReq = modifiedReq.clone({ 
        headers: modifiedReq.headers.set('Content-Type', 'application/json'),
      });
    }

    //auth header 
    if(this.local.isAuth()) {
      modifiedReq = modifiedReq.clone({ 
        headers: modifiedReq.headers.set('Authorization', this.local.getAuthToken()),
      });
    }
    return next.handle(modifiedReq);
  }
}
