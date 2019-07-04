import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  model: NgbDateStruct;
  date: {year: number, month: number};

  userLicensePlateForm = this.fb.group({
    licensePlate: ['Homero Simpson', Validators.required ],
    date: ['', Validators.required],
    time: ['', Validators.required]
 });
  constructor(private calendar: NgbCalendar, private fb: FormBuilder) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
  ngOnInit() {
  }
  onSubmitUserLicensePlate(formValue) {
    console.log(this.userLicensePlateForm);
  }


}
