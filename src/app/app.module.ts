import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Cookie } from 'ng2-cookies';

import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt'

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';

import { AuthGuardService } from './services/auth-guard.service';
import { SessionService } from './services/session.service';

export function tokenGetter() {
  return Cookie.get('youthdraftToken');
}

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['youthdraft.com']
      }
    })
  ],
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  providers: [
    AuthGuardService,
    SessionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }