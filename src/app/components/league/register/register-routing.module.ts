import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { SelectDatesComponent } from './select-dates/select-dates.component';
import { UploadCoachComponent } from './upload-coach/upload-coach.component';
import { UploadPlayerComponent } from './upload-player/upload-player.component';

import { AuthGuardService } from '../../../services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'select-dates', component: SelectDatesComponent },
      { path: 'upload-coach', component: UploadCoachComponent },
      { path: 'upload-player', component: UploadPlayerComponent },
      { path: '', component: IndexComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }