import { Injectable } from '@angular/core';
import { ILicensePlate } from 'src/model/license-plate-form';
import { DAYS_OF_WEEK, LIST_OF_LICESE_PLATE_END_DIGIT_ALLOWED_PER_DAY, HOURS_LOCKED } from 'src/constants/global-constants';
var moment = require('moment');

@Injectable({
  providedIn: 'root'
})
export class CalculatePermissionsService {

  constructor() { }

  /*
    SIMULATE BACK END
  */
  getPermission(licensePlateObject: ILicensePlate) {
    const lastDigitOfLicense = licensePlateObject.licensePlate.split('').pop();
    const dayOfTheWeekNumber = moment(licensePlateObject.date).day();
    const dayOfTheWeekString = DAYS_OF_WEEK[dayOfTheWeekNumber];
    // GET AND CONVER HOURS
    const hourAndMin = licensePlateObject.time.split(':'); //at the position 0 is the hour and the position 1 is mins ex: [23, 11] for 11:11:PM

    // start validation with the data get it
    // validate if the current hour is in range for "Pico y placa"
    if (this.validateCurrentHour(hourAndMin)) {
      return this.valudateLicensePlateLastDigitByDay(dayOfTheWeekString, parseInt(lastDigitOfLicense));
    }
    return false;
  }


  /*
    validate current hour for continue calculating permission
    @param hourAndMin array that contains hour for calculate
  */
  validateCurrentHour(hourAndMin: string[]) {
    return (
      (parseInt(hourAndMin[0]) >= HOURS_LOCKED.DAY_START.HOUR && parseInt(hourAndMin[1]) >= HOURS_LOCKED.DAY_START.MIN
        && parseInt(hourAndMin[0]) <= HOURS_LOCKED.DAY_END.HOUR && parseInt(hourAndMin[1]) <= HOURS_LOCKED.DAY_END.MIN)
      ||
      (parseInt(hourAndMin[0]) >= HOURS_LOCKED.NIGHT_START.HOUR && parseInt(hourAndMin[1]) >= HOURS_LOCKED.NIGHT_START.MIN
        && parseInt(hourAndMin[0]) <= HOURS_LOCKED.NIGHT_END.HOUR && parseInt(hourAndMin[1]) <= HOURS_LOCKED.NIGHT_END.MIN)
    )
  }

  /*
    validate if the last digit of the license plate is in the array alowed last digits
    @param dayOfTheWeekString day name of the week
    @param lastDigitOfLicense number of the last digit
  */
  valudateLicensePlateLastDigitByDay(dayOfTheWeekString: string, lastDigitOfLicense: number) {
    return (LIST_OF_LICESE_PLATE_END_DIGIT_ALLOWED_PER_DAY[dayOfTheWeekString].includes(lastDigitOfLicense))
  }
}
