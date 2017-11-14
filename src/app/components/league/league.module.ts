import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CoachesComponent } from './coaches/coaches.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { PlayersComponent } from './players/players.component';
import { SettingsComponent } from './settings/settings.component';
import { TryoutsComponent } from './tryouts/tryouts.component';

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
    SettingsComponent,
    TryoutsComponent,
  ]
})
export class LeagueModule {
  constructor(router: Router) { }
}