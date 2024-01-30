import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SystemWrapComponent} from "./system.wrap";
import {ProfileComponent} from "./profile/profile.component";
import {AddFormComponent} from "./add-form/add-form.component";
import {AuthGuardService} from "../shared/services/auth.guard.service";


const routes: Routes = [
  {path: '', component: SystemWrapComponent, canLoad: [AuthGuardService], children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'form', component: AddFormComponent}
    ]},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class SystemRoutingModule { }
