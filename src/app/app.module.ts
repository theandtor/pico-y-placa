import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { AngularImageComponent } from './home/angular-image/angular-image.component';

import { ReactiveFormsModule  } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AngularImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
