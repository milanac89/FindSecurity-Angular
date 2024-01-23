import {NgModule} from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PassComponent } from './pass/pass.component';
import {CommonModule} from "@angular/common";
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth.routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, PassComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
