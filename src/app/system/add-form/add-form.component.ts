import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Information} from "../../shared/models/information.model";
import {User} from "../../shared/models/user.model";


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


  constructor(private _formBuilder: FormBuilder){}



  switchForm(num: number){
    this.current += num
  }

  ngOnInit(){


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
    console.log(this.firstFormGroup.value, this.secondFormGroup.value, this.thirdFormGroup.value)
  }



}
