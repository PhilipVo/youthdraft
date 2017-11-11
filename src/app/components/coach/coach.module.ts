import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AssessmentsComponent } from './assessments/assessments.component';
import { FormulasComponent } from './formulas/formulas.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PlayersComponent } from './players/players.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

import { CoachRoutingModule } from './coach-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoachRoutingModule
  ],
  declarations: [
    AssessmentsComponent,
    FormulasComponent,
    IndexComponent,
    LoginComponent,
    NavComponent,
    PlayersComponent,
    ProfileComponent,
    SettingsComponent
  ]
})
export class CoachModule { }