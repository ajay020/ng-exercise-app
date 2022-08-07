import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExerciseService } from './exercise.service';
import { SharedService } from './service/shared.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown,NgbDropdownMenu, NgbDropdownItem, NgbDropdownToggle} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    ExerciseService,
    SharedService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
