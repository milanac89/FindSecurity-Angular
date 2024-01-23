import { Component } from '@angular/core';
import {Information} from "../../shared/models/information.model";
import {User} from "../../shared/models/user.model";
import {InformationService} from "../../shared/services/information.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  information: any;
  user: User;



  isLoaded = false;

  constructor(private informationService: InformationService) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user')!);
    const infPerem = this.user;
    this.informationService.getInformationById(infPerem.id)
      .subscribe((information: Information | undefined) => {
        this.information = information;
        this.isLoaded = true;
      });
  }
}
