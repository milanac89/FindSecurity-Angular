import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SystemWrapComponent} from "./system.wrap";
import {ProfileComponent} from "./profile/profile.component";
import {FillProfileComponent} from "./fill-profile/fill-profile.component";


const routes: Routes = [
  {path: 'system', component: SystemWrapComponent, children: [
      {path: 'fill', component: FillProfileComponent},
      {path: 'profile', component: ProfileComponent},
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
