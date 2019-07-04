import { Component, OnInit } from '@angular/core';
import { WIDTH_IMAGE } from 'src/constants/global-constants';

@Component({
  selector: 'app-angular-image',
  templateUrl: './angular-image.component.html',
  styleUrls: ['./angular-image.component.scss']
})
export class AngularImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*
   GET VALUE OF CONSTANT FOR THE HTML
  */
  get WIDTH_IMAGE() {
    return WIDTH_IMAGE;
  }

}
