import {Component, HostBinding, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {fadeStateTrigger} from '../shared/animation/fade.animation';


@Component({
  selector: 'wfm-auth',
  templateUrl: './auth.component.html',
  animations: [fadeStateTrigger]
})
export class AuthComponent implements OnInit{

  @HostBinding('@fade') a = true;

  hide = false;
  constructor(private router: Router){}

  public ngOnInit() {
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationStart) {
        if (events.url === '/registration' || events.url === '/login' || events.url === '/password') {
          this.hide = true;
        } else {
          this.hide = false;
        }
      }
    });
  }

}

