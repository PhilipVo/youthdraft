import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FAQComponent } from './components/faq/faq.component';
import { IndexComponent } from './components/index/index.component';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'coach',
				canActivateChild: [AuthGuardService],
				loadChildren: './components/coach/coach.module#CoachModule'
			},
			{
				path: 'league',
				canActivateChild: [AuthGuardService],
				loadChildren: './components/league/league.module#LeagueModule'
			},
			{
				path: 'about',
				component: AboutComponent,
			},
			{
				path: 'contact',
				component: ContactComponent,
			},
			{
				path: 'faq',
				component: FAQComponent,
			},
			{
				path: '',
				component: IndexComponent,
				canActivate: [AuthGuardService]
			},
		]
	},
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }