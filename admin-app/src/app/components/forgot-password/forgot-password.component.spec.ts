import { Overlay } from '@angular/cdk/overlay';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

import { ForgotPasswordComponent } from './forgot-password.component';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let routeStateMock: any =  { snapshot: { params: {} }};
  let service: AuthService; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent ],
      providers: [ MatSnackBar, Overlay,
        { provide: ActivatedRoute, useValue: routeStateMock }
      ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call reset password', () => {
    let func = spyOn(component,'resetPassword');
    component.submit();
    expect(func).toHaveBeenCalled();
  });

  it('should reset password', () => {
    let registerAuth = spyOn(service,'resetPassword').and.callFake(user=>new Promise((resolve,reject)=>{
      resolve({});
    }));
    component.username.setValue('username');
    component.resetPassword();
    expect(registerAuth).toHaveBeenCalled();
  });

  it('should not reset password', () => {
    let registerAuth = spyOn(service,'resetPassword').and.callFake(user=>new Promise((resolve,reject)=>{
      resolve({});
    }));
    component.resetPassword();
    expect(registerAuth).not.toHaveBeenCalled();
  });

  it('should reset password with error', () => {
    let registerAuth = spyOn(service,'resetPassword').and.callFake(user=>new Promise((resolve,reject)=>{
      reject({status:404, error:'username not found'});
    }));
    component.username.setValue('username');
    component.resetPassword();
    expect(registerAuth).toHaveBeenCalled();
  });


  it('should change password', () => {
    let registerAuth = spyOn(service,'newPassword').and.callFake(user=>new Promise((resolve,reject)=>{
      resolve({});
    }));
    component.username.setValue('username');
    component.code.setValue('username');
    component.password.setValue('username');
    component.newPassword();
    expect(registerAuth).toHaveBeenCalled();
  });

  it('should not change password', () => {
    let registerAuth = spyOn(service,'resetPassword').and.callFake(user=>new Promise((resolve,reject)=>{
      resolve({});
    }));
    component.username.setValue('username');
    component.password.setValue('username');
    component.newPassword();
    expect(registerAuth).not.toHaveBeenCalled();
  });

});
