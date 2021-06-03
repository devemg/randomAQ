import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { FakeUserRegister } from 'src/app/services/mock-services.spec';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ FormBuilder ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form be invalid', () => {
    expect(component.registerForm.valid).toBeFalse();
  });

  it('should have error in email', () => {
    component.registerFControls.email.markAsTouched();
    expect(component.isError('email','required')).toBeTrue();
  });

  it('should not have error in email', () => {
    component.registerFControls.email.setValue("email@email.com");
    expect(component.isError('email','required')).toBeFalse();
  });

  it('should not register user', () => {
    let registerAuth = spyOn(service,'register');
    component.register();
    expect(registerAuth).not.toHaveBeenCalled();
  });

  it('should register user', () => {
    let registerAuth = spyOn(service,'register').and.callFake(user=>new Promise((resolve,reject)=>{
      resolve({});
    }));
    component.registerForm.patchValue(FakeUserRegister);
    expect(component.registerForm.valid).toBeTrue();
    component.register();
    expect(registerAuth).toHaveBeenCalled();
  });

  it('should show error to user', () => {
    let registerAuth = spyOn(service,'register').and.callFake(user=>new Promise((resolve,reject)=>{
      reject({status:400, error:'user already exist'});
    }));
    component.registerForm.patchValue(FakeUserRegister);
    component.register();
    expect(registerAuth).toHaveBeenCalled();
    expect(component.registerFControls.username.hasError('usernameAlreadyExists')).toBeFalse();
  });

  it('should password validator is false', () => {
    component.registerFControls.password.setValue('1234');
    component.registerFControls.confirmPassword.setValue('123');
    expect(component.registerFControls.confirmPassword.hasError('PasswordValidator')).toBeTrue();
  });

  it('should password validator is true', () => {
    component.registerFControls.password.setValue('1234');
    component.registerFControls.confirmPassword.setValue('1234');
    expect(component.registerFControls.confirmPassword.hasError('PasswordValidator')).toBeFalse();
  });

});
