import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ViewchildComponent } from './viewchild/viewchild.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ViewchildComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
  ]
})
export class EmployeeModule { }
