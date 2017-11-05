import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { SelectDatesComponent } from './select-dates/select-dates.component';
import { UploadCoachComponent } from './upload-coach/upload-coach.component';
import { UploadPlayerComponent } from './upload-player/upload-player.component';

import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegisterRoutingModule
  ],
  declarations: [
    IndexComponent,
    SelectDatesComponent,
    UploadCoachComponent,
    UploadPlayerComponent
  ]
})
export class RegisterModule {
  constructor(router: Router) { }
}