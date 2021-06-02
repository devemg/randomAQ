import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';
import { RegisterComponent } from './components/register/register.component';
import { PublicGuard } from './services/public.guard';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    canActivate: [ PublicGuard ]
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate: [ PublicGuard ]
  },
  {
    path:'register',
    component:RegisterComponent,
    canActivate: [ PublicGuard ]
  },
  {
    path: 'verificated',
    component:MessageComponent,
    canActivate: [ PublicGuard ]
  },
  {
    path: 'verificate-account/:username',
    component:MessageComponent,
    canActivate: [ PublicGuard ]
  },
  {
    path: 'reset-password',
    component:ForgotPasswordComponent,
    canActivate: [ PublicGuard ]
  },
  {
    path: 'reset-password/:username',
    component:ForgotPasswordComponent,
    canActivate: [ PublicGuard ]
  },
  {
    path:'admin',
    loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'***',
    pathMatch:'full',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
