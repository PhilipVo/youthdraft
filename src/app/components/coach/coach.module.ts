import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

import { CoachRoutingModule } from './coach-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoachRoutingModule
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ]
})
export class CoachModule { }