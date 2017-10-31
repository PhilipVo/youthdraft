import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth.module';

import { AuthGuardService } from './services/auth-guard.service';
import { HttpService } from './services/http.service';
import { SessionService } from './services/session.service';

@NgModule({
  imports: [
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  providers: [
    AuthGuardService,
    HttpService,
    SessionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }