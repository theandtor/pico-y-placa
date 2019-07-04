import { Injectable } from '@angular/core';
import { ILicensePlate } from 'src/model/license-plate-form';
import { DAYS_OF_WEEK } from 'src/constants/global-constants';
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
  const dayOfTheWeekNumber =  moment(licensePlateObject.date).day();
  const dayOfTheWeekString = DAYS_OF_WEEK[dayOfTheWeekNumber];
 }
}
