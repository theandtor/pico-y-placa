import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PATTERN_LICENSE_PLATE } from 'src/constants/global-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userLicensePlateForm: FormGroup;

  constructor(private calendar: NgbCalendar, private fb: FormBuilder) {
    /*
      FORM BUILDER FOR VALIDATOS
    */
    this.userLicensePlateForm = this.fb.group({
      licensePlate: ['', [Validators.required, Validators.pattern(PATTERN_LICENSE_PLATE)]],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  get PATTERN_LICENSE_PLATE() {
    return PATTERN_LICENSE_PLATE;
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
  onSubmitUserLicensePlate(formValueObject) {
  }


}
