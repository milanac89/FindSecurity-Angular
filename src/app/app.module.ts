import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from "./app.routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UsersService} from "./shared/services/users.service";
import {HttpClientModule} from "@angular/common/http";
import {InformationService} from "./shared/services/information.service";
import {AuthService} from "./shared/services/auth.service";
import {AuthGuardService} from "./shared/services/auth.guard.service";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [UsersService, InformationService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
