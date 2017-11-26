import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CompleteComponent } from './complete/complete.component';
import { FinalizeComponent } from './finalize/finalize.component';
import { IndexComponent } from './index/index.component';
import { SelectDatesComponent } from './select-dates/select-dates.component';
import { UploadCoachComponent } from './upload-coach/upload-coach.component';
import { UploadPlayerComponent } from './upload-player/upload-player.component';
import { UploadTeamComponent } from './upload-team/upload-team.component';

import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegisterRoutingModule
  ],
  declarations: [
    CompleteComponent,
    FinalizeComponent,
    IndexComponent,
    SelectDatesComponent,
    UploadCoachComponent,
    UploadPlayerComponent,
    UploadTeamComponent
  ]
})
export class LeagueRegisterModule {
  constructor(router: Router) { }
}