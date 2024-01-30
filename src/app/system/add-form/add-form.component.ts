import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Information} from "../../shared/models/information.model";
import {User} from "../../shared/models/user.model";
import {InformationService} from "../../shared/services/information.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})

export class AddFormComponent implements OnInit{

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  sex = [
      {value: 'men', valueText: 'Мужской'},
      {value: 'women', valueText: 'Женский'}
    ];
  checkSex: string;
  current: number = 1;
  user: User;
  isLoaded = true;



  constructor(private _formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private informationService: InformationService,){}



  switchForm(num: number){
    this.current += num
  }

  ngOnInit(){
    this.user = JSON.parse(window.localStorage.getItem('user')!);
    if(this.route.snapshot.queryParams['edit']) {
      this.isLoaded = false;
      this.informationService.getInformationById(this.user.id)
        .subscribe((information: Information | undefined) => {
            this.isLoaded = true;
            this.firstFormGroup.setValue({
              surname: information!.surname,
              name: information!.name,
              fatherName: information!.fatherName,
              sex: information!.sex,
              birthDate: information!.birthDate,
              regionName: information!.regionName,
              workRegionName: information!.workRegionName
            });
            this.secondFormGroup.setValue({
              phone: information!.phone,
              mail: information!.mail,
              driverLicense: information!.driverLicense,
              specialty: information!.specialty,
              experienceYears: information!.experienceYears
            });
            this.thirdFormGroup.setValue({
              employmentType: information!.employmentType,
              workSchedule: information!.workSchedule,
              pay: information!.pay,
              comment: information!.comment
            });
        });
    }
    this.firstFormGroup = this._formBuilder.group({
      surname: ['', Validators.required],
      name: ['', Validators.required],
      fatherName: ['', Validators.required],
      sex: ['', Validators.required],
      birthDate: ['', Validators.required],
      regionName: ['', Validators.required],
      workRegionName: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      phone: ['', Validators.required],
      mail: new FormControl('', [Validators.required, Validators.email]),
      driverLicense: new FormControl(),
      specialty: ['', Validators.required],
      experienceYears: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      employmentType: ['', Validators.required],
      workSchedule: ['', Validators.required],
      pay: ['', Validators.required],
      comment: ['', Validators.required]
    });

  }


  get thirdValidForm() {
    return this.thirdFormGroup.invalid;
  }

  nextDisabled(){
     if (this.current == 1 && this.firstFormGroup.invalid){
      return true
    } else
    if(this.current == 2 && this.secondFormGroup.invalid){
      return true
    } else return false
  }


  save(){
    const id = this.user.id
    const {name, surname, fatherName, sex, birthDate, regionName, workRegionName} = this.firstFormGroup.value;
    const {phone, mail, driverLicense, specialty, experienceYears} = this.secondFormGroup.value;
    const {employmentType, workSchedule, pay, comment} = this.thirdFormGroup.value;
    const information = new Information(name, surname, fatherName, sex, birthDate, regionName, workRegionName, phone, mail, driverLicense, specialty, experienceYears, employmentType, workSchedule, pay, comment, id)

    if (this.route.snapshot.queryParams['edit']){
      this.informationService.updateInformation(information)
        .subscribe(() => {
          this.router.navigate(['/system', 'profile']);
        });
    } else {
      this.informationService.createNewInformationUser(information)
        .subscribe(() => {
          this.router.navigate(['/system', 'profile']);
        });
    }



  }



}
