import {Component, HostBinding, OnInit} from '@angular/core';
import {UsersService} from '../../shared/services/users.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/models/user.model';
import {Router} from '@angular/router';
import {fadeStateTrigger} from '../../shared/animation/fade.animation';

@Component({
  selector: 'wfm-password',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css'],
  animations: [fadeStateTrigger]
})
export class PassComponent implements OnInit {

  @HostBinding('@fade') a = true;

  form: FormGroup;

  constructor(private usersService: UsersService,
              private router: Router) { }


  get f()
  {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this))
    });
  }




  onSubmit() {
      //logic
  }

  forbiddenEmails(control: AbstractControl): Promise<any>{
    return new Promise((resolve, reject) => {
      this.usersService.getUserByEmail(control.value)
        .subscribe((user: User | undefined) => {
          if (user) {
            resolve(null);
          } else {
            resolve({forbiddenEmail: true});
          }
        })
    });
  }

}
