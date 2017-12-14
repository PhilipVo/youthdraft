import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CoachesComponent } from './coaches/coaches.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { PlayersComponent } from './players/players.component';
import { RejectComponent } from './reject/reject.component';
import { ResetComponent } from './reset/reset.component';
import { SettingsComponent } from './settings/settings.component';
import { TeamsComponent } from './teams/teams.component';
import { TryoutsComponent } from './tryouts/tryouts.component';
import { ValidateComponent } from './validate/validate.component';

import { LeagueRoutingModule } from './league-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LeagueRoutingModule
  ],
  declarations: [
    CoachesComponent,
    NavComponent,
    LoginComponent,
    PlayersComponent,
    RejectComponent,
    ResetComponent,
    SettingsComponent,
    TeamsComponent,
    TryoutsComponent,
    ValidateComponent
  ]
})
export class LeagueModule {
  constructor(router: Router) { }
}