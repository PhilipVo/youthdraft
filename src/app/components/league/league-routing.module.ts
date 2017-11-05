import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UploadCoachComponent } from './upload-coach/upload-coach.component';

import { AuthGuardService } from '../../services/auth-guard.service';

const leagueRoutes: Routes = [
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
            children: [
              { path: 'upload-coach', component: UploadCoachComponent },
              { path: '', component: RegisterComponent },
            ]
          },
          { path: '', redirectTo: 'login' }
        ]
      },
      {
        path: '',
        component: HeaderComponent,
        canActivateChild: [AuthGuardService],
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'profile', component: ProfileComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(leagueRoutes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }