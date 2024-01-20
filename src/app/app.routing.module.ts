import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
