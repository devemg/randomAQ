import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MaterialAngularModule } from './material-angular.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { MessageComponent } from './components/message/message.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from './admin/interceptors/headers.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MessageComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAngularModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
