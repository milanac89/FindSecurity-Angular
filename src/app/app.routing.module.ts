import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'not-found', component: NotFoundComponent },
  { path: 'system', loadChildren: () => import('./system/system.module').then(m => m.SystemModule) },
  { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
