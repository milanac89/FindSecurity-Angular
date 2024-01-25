import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {SystemRoutingModule} from "./system.routing.module";
import { ProfileComponent } from './profile/profile.component';
import { FillProfileComponent } from './fill-profile/fill-profile.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import {SystemWrapComponent} from "./system.wrap";
import {AddFormComponent} from "./add-form/add-form.component";
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    ProfileComponent,
    FillProfileComponent,
    SidebarComponent,
    SystemWrapComponent,
    AddFormComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [provideNgxMask()]
})
export class SystemModule { }
