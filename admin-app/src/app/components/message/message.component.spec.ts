import { Overlay } from '@angular/cdk/overlay';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';

import { MessageComponent } from './message.component';

fdescribe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;
  let routeStateMock: any = { snapshot: {url: [ {path:'verificated'} ] }, url: '/admin'};
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ MatSnackBar, Overlay,
        { provide: ActivatedRoute, useValue: routeStateMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    routeStateMock = { snapshot: {url: [ {path:'verificate-account'} ], params: {username: 'username'} }, url: '/admin'};
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should fill username form field', () => {
    routeStateMock = { snapshot: {url: [ {path:'verificate-account'} ], params: {username: 'username'} }, url: '/admin'};
    expect(component.username).toBeTruthy();
  });

  it('should not activate account', () => {
    let registerAuth = spyOn(service,'confirmAccount').and.callFake(user=>new Promise((resolve,reject)=>{
      resolve({});
    }));;
    component.activate();
    expect(registerAuth).not.toHaveBeenCalled();
  });

  it('should activate account with success', () => {
    let registerAuth = spyOn(service,'confirmAccount').and.callFake(user=>new Promise((resolve,reject)=>{
      resolve({});
    }));
    component.username.setValue('username');
    component.code.setValue('123');
    component.activate();
    expect(registerAuth).toHaveBeenCalled();
  });

  it('should activate account with error', () => {
    let registerAuth = spyOn(service,'confirmAccount').and.callFake(user=>new Promise((resolve,reject)=>{
      reject({status:404});
    }));
    component.username.setValue('username');
    component.code.setValue('123');
    component.activate();
    expect(registerAuth).toHaveBeenCalled();
  });

});
