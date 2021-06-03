import { Overlay } from '@angular/cdk/overlay';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from 'src/app/admin/components/home/home.component';
import { AuthService } from 'src/app/services/auth.service';
import { FakeUserLogin } from 'src/app/services/mock-services.spec';
import { MessageComponent } from '../message/message.component';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;
  let snackbar: MatSnackBar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ 
        RouterTestingModule.withRoutes([{path:'admin',component:MessageComponent}]), 
        HttpClientTestingModule 
      ],
      providers: [ FormBuilder, MatSnackBar, Overlay ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    snackbar = TestBed.inject(MatSnackBar);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form be invalid', () => {
    expect(component.loginForm.valid).toBeFalse();
  });

  it('should not login user', () => {
    let registerAuth = spyOn(service,'login');
    component.login();
    expect(registerAuth).not.toHaveBeenCalled();
  });

  it('should login user', () => {
    let functionAuth = spyOn(service,'login').and.callFake(user=>new Promise((resolve,reject)=>{
      resolve({});
    }));
    component.loginForm.patchValue(FakeUserLogin);
    expect(component.loginForm.valid).toBeTrue();
    component.login();
    expect(functionAuth).toHaveBeenCalled();
  });

  it('should not login user', () => {
    let functionAuth = spyOn(service,'login').and.callFake(user=>new Promise((resolve,reject)=>{
      reject({status:404,error:'user not found'});
    }));
    component.loginForm.patchValue(FakeUserLogin);
    expect(component.loginForm.valid).toBeTrue();
    component.login();
    expect(functionAuth).toHaveBeenCalled();
  });

  it('should username be valid', () => {
    component.loginForm.controls.username.setValue('1234');
    expect(component.isError('username','required')).toBeFalse();
  });

  it('should username be invalid', () => {
    component.loginForm.controls.username.markAsTouched();
    expect(component.isError('username','required')).toBeTrue();
  });

});
