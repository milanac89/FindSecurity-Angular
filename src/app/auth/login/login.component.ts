import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
//import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';


//import {InformationService} from '../../shared/services/information.service';
import {Information} from '../../shared/models/information.model';
import {fadeStateTrigger} from '../../shared/animation/fade.animation';
import {InformationService} from "../../shared/services/information.service";

@Component({
  selector: 'wfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeStateTrigger]
})
export class LoginComponent implements OnInit{

  @HostBinding('@fade') a = true;

  form: FormGroup;
  message = '';

  constructor(private usersService: UsersService,
              //private authService: AuthService,
              private informationService: InformationService,
              private router: Router){}

  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  get f()
  {
    return this.form.controls;
  }

  private showMessage(text: string){
    this.message = text;
    window.setTimeout(() => {
      this.message = '';
    }, 5000);
  }


  onSubmit(){
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User | undefined) => {
        if(user){
          if (user.password === formData.password){
            this.message = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            //this.authService.login();
            this.informationService.getInformationById(user.id)
              .subscribe((information: Information | undefined) => {
                if(information){
                  this.router.navigate(['/system', 'profile']);

                } else {
                  this.router.navigate(['/system', 'fill']);
                }
              });
          } else {
            this.showMessage('Пароль неверный');
          }
        } else {
          this.showMessage('Такого пользователя не существует');
        }
      });
  }


}

