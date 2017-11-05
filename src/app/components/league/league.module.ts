import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UploadCoachComponent } from './upload-coach/upload-coach.component';

import { LeagueRoutingModule } from './league-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LeagueRoutingModule
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    UploadCoachComponent
  ]
})
export class LeagueModule {
  constructor(router: Router) { }
}