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

  getSex(){
    if(this.information.sex == 'men'){
      return 'Мужской'
    } else return 'Женский'
  }
  getEmploymentType(){
    switch(this.information.employmentType) {
      case 'fullTime':
        return 'Полная занятость'
        break;
      case 'partTime':
        return 'Частичная занятость'
        break;
      case 'volunteering':
        return 'Волонтерство'
        break;
      default:
        return 'Стажировка'
    }
  }
  isLoaded = false;


  // translateDate(){
  //   let day = this.information.birthDate.slice(0,2)
  //   let month = this.information.birthDate.slice(2,4)
  //   let year = this.information.birthDate.slice(4)
  //   let birth = day+'/'+month+'/'+year
  //   return birth
  // }
  translatePay(){
    let pay = Number(this.information.pay)
    return pay.toLocaleString()
  }

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
