import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthComponent} from './auth.component';
import {PassComponent} from './pass/pass.component';

const routes: Routes = [
  {path: '', component: AuthComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'password', component: PassComponent}
    ]},
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AuthRoutingModule { }
