import {Component, HostBinding, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {Router} from '@angular/router';
import {fadeStateTrigger} from '../../shared/animation/fade.animation';



@Component({
  selector: 'wfm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  animations: [fadeStateTrigger]
})

export class RegistrationComponent implements OnInit {

  password: string;

  get f()
  {
    return this.form.controls;
  }


  @HostBinding('@fade') a = true;


  form: FormGroup;

  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      password: new FormControl('', Validators.required),
      confirmPass: new FormControl('', [Validators.required, this.checkPass.bind(this)]),
    });
  }

  checkPass(control: AbstractControl) {
    if(control.value !== this.password){
      return { invalid: true };
    }
    return null;
  }

  forbiddenEmails(control: AbstractControl): Promise<any>{
    return new Promise((resolve, reject) => {
      this.usersService.getUserByEmail(control.value)
        .subscribe((user: User | undefined) => {
          if (user) {
            resolve({forbiddenEmail: true});
          } else {
            resolve(null);
          }
        })
    });
  }

  onSubmit() {
    const {email, password, confirmPass} = this.form.value;
    const user = new User(email, password, confirmPass)
    this.usersService.createNewUser(user)
      .subscribe(() => {
        this.router.navigate(['/login'], {
          queryParams: {
            message: true
          }
        });
      });
  }


}

