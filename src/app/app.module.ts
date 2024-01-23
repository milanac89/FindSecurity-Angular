import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from "./app.routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UsersService} from "./shared/services/users.service";
import {HttpClientModule} from "@angular/common/http";
import {SystemModule} from "./system/system.module";
import {InformationService} from "./shared/services/information.service";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    SystemModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [UsersService, InformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
