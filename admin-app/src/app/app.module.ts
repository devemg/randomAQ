import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MaterialAngularModule } from './material-angular.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from './admin/interceptors/headers.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAngularModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
