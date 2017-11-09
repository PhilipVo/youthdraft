import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuardService } from '../../services/auth-guard.service';

const coachRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        canActivateChild: [AuthGuardService],
        children: [
          { path: 'login', component: LoginComponent },
          {
            path: 'register',
            loadChildren: './register/coach-register.module#CoachRegisterModule'
          },
        ]
      },
      {
        path: '',
        component: HeaderComponent,
        canActivateChild: [AuthGuardService],
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'profile', component: ProfileComponent },
          { path: '', component: IndexComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(coachRoutes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }