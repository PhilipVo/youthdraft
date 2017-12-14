import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoachesComponent } from './coaches/coaches.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PlayersComponent } from './players/players.component';
import { RejectComponent } from './reject/reject.component';
import { ResetComponent } from './reset/reset.component';
import { SettingsComponent } from './settings/settings.component';
import { TeamsComponent } from './teams/teams.component';
import { TryoutsComponent } from './tryouts/tryouts.component';
import { ValidateComponent } from './validate/validate.component';

import { AuthGuardService } from '../../services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ResetComponent },
  {
    path: 'register',
    loadChildren: './register/league-register.module#LeagueRegisterModule'
  },
  { path: 'reject/:jwt', component: RejectComponent },
  { path: 'validate/:jwt', component: ValidateComponent },
  {
    path: '',
    component: NavComponent,
    children: [
      { path: 'coaches', component: CoachesComponent },
      { path: 'players', component: PlayersComponent },
      { path: 'reject', component: RejectComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'teams', component: TeamsComponent },
      { path: 'tryouts', component: TryoutsComponent },
      { path: '**', redirectTo: 'coaches' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }