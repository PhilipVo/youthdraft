import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompleteComponent } from './complete/complete.component';
import { FinalizeComponent } from './finalize/finalize.component';
import { IndexComponent } from './index/index.component';
import { SelectDatesComponent } from './select-dates/select-dates.component';
import { UploadCoachComponent } from './upload-coach/upload-coach.component';
import { UploadPlayerComponent } from './upload-player/upload-player.component';
import { UploadTeamComponent } from './upload-team/upload-team.component';

import { AuthGuardService } from '../../../services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'complete', component: CompleteComponent },
      { path: 'finalize', component: FinalizeComponent },
      { path: 'select-dates', component: SelectDatesComponent },
      { path: 'upload-coach', component: UploadCoachComponent },
      { path: 'upload-player', component: UploadPlayerComponent },
      { path: 'upload-team', component: UploadTeamComponent },
      { path: '', component: IndexComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }