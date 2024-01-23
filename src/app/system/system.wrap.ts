import {Component, HostBinding} from '@angular/core';
import {fadeStateTrigger} from '../shared/animation/fade.animation';


@Component({
  selector: 'app-system',
  templateUrl: './system.wrap.html',
  animations: [fadeStateTrigger]
})
export class SystemWrapComponent {

  @HostBinding('@fade') a = true;

}
