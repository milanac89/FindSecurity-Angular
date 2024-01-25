import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SystemWrapComponent} from "./system.wrap";
import {ProfileComponent} from "./profile/profile.component";
import {FillProfileComponent} from "./fill-profile/fill-profile.component";
import {AddFormComponent} from "./add-form/add-form.component";


const routes: Routes = [
  {path: 'system', component: SystemWrapComponent, children: [
      {path: 'fill', component: FillProfileComponent},
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
