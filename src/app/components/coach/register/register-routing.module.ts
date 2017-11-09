import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompleteComponent } from './complete/complete.component';
import { IndexComponent } from './index/index.component';
import { HistoryComponent } from './history/history.component';

import { AuthGuardService } from '../../../services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'complete', component: CompleteComponent },
      { path: 'history', component: HistoryComponent },
      { path: '', component: IndexComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }