import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoachesComponent } from './coaches/coaches.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PlayersComponent } from './players/players.component';
import { SettingsComponent } from './settings/settings.component';
import { TryoutsComponent } from './tryouts/tryouts.component';

import { AuthGuardService } from '../../services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    loadChildren: './register/league-register.module#LeagueRegisterModule'
  },
  {
    path: '',
    component: NavComponent,
    children: [
      { path: 'coaches', component: CoachesComponent },
      { path: 'players', component: PlayersComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'tryouts', component: TryoutsComponent },
      { path: '', component: IndexComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }