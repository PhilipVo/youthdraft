import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssessmentsComponent } from './assessments/assessments.component';
import { FormulasComponent } from './formulas/formulas.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { PlayersComponent } from './players/players.component';
import { ResetComponent } from './reset/reset.component';
import { SettingsComponent } from './settings/settings.component';

import { AuthGuardService } from '../../services/auth-guard.service';

const coachRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ResetComponent },
  {
    path: 'register',
    loadChildren: './register/coach-register.module#CoachRegisterModule'
  },
  {
    path: '',
    component: NavComponent,
    canActivateChild: [AuthGuardService],
    children: [
      { path: 'assessments', component: AssessmentsComponent },
      { path: 'formulas', component: FormulasComponent },
      { path: 'players', component: PlayersComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '**', redirectTo: 'players' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(coachRoutes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }