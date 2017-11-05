import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

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
    IndexComponent,
    LoginComponent,
    ProfileComponent
  ]
})
export class LeagueModule {
  constructor(router: Router) { }
}