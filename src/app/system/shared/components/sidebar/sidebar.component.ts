import { Component } from '@angular/core';
import {AuthService} from "../../../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private auth: AuthService, private router: Router){}
  logOut(){
    this.router.navigate(['/login']);
    this.auth.logout()
  }
}
