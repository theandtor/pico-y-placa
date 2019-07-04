import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /*
    FORM BUILDER FOR VALIDATOS
  */
  userLicensePlateForm = this.fb.group({
    licensePlate: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required]
  });
  constructor(private calendar: NgbCalendar, private fb: FormBuilder) {
  }

  /*
    SET BY DEFAULT DAY SELECTED AS TODAY
  */
  selectToday() {
    this.userLicensePlateForm.setValue({ date: this.calendar.getToday() });
  }

  ngOnInit() {
  }

  /*
    IF THE USER SUBMIT THE FORM
  */
  onSubmitUserLicensePlate(formValue) {
    console.log(this.userLicensePlateForm);
  }


}
