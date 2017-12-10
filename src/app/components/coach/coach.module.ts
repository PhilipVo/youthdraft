import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AssessmentsComponent } from './assessments/assessments.component';
import { FormulasComponent } from './formulas/formulas.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PlayersComponent } from './players/players.component';
import { ResetComponent } from './reset/reset.component';
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
    LoginComponent,
    NavComponent,
    PlayersComponent,
    ResetComponent,
    SettingsComponent
  ]
})
export class CoachModule { }