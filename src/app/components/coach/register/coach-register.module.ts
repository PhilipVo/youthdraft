import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CompleteComponent } from './complete/complete.component';
import { IndexComponent } from './index/index.component';
import { HistoryComponent } from './history/history.component';

import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegisterRoutingModule
  ],
  declarations: [
    CompleteComponent,
    IndexComponent,
    HistoryComponent,
  ]
})
export class CoachRegisterModule {
  constructor(router: Router) { }
}