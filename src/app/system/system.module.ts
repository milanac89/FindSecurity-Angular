import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {SystemRoutingModule} from "./system.routing.module";
import { ProfileComponent } from './profile/profile.component';
import { FillProfileComponent } from './fill-profile/fill-profile.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import {SystemWrapComponent} from "./system.wrap";


@NgModule({
  declarations: [
    ProfileComponent,
    FillProfileComponent,
    SidebarComponent,
    SystemWrapComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule
  ]
})
export class SystemModule { }
