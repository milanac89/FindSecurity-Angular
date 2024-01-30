import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {AuthService} from '../../shared/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';


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
  message: any;

  constructor(private usersService: UsersService,
              private authService: AuthService,
              private informationService: InformationService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(){

    if(this.route.snapshot.queryParams['accessDenied']){
      this.showMessage('Войдите в систему', 'info')
    }

    if(this.route.snapshot.queryParams['message']){
      this.showMessage('Теперь вы можете войти в систему', 'info')
    }


    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  get f()
  {
    return this.form.controls;
  }

  private showMessage(text: string, type: string){
    this.message = {text, type};
    window.setTimeout(() => {
      this.message = {};
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
            this.authService.login();
            this.informationService.getInformationById(user.id)
              .subscribe((information: Information | undefined) => {
                if(information){
                  this.router.navigate(['/system', 'profile']);

                } else {
                  this.router.navigate(['/system', 'form']);
                }
              });
          } else {
            this.showMessage('Пароль неверный', 'danger');
          }
        } else {
          this.showMessage('Такого пользователя не существует', 'danger');
        }
      });
  }


}

