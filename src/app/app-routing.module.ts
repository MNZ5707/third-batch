import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Multiple-router/login/login.component';
import { AboutComponent } from './Router-Sample/about/about.component';
import { ContactComponent } from './Router-Sample/contact/contact.component';
import { EmployeeDetailesComponent } from './Router-Sample/employee-detailes/employee-detailes.component';
import { EmployeeListComponent } from './Router-Sample/employee-list/employee-list.component';
import { HomeComponent } from './Router-Sample/home/home.component';
import { PageNotFoundComponent } from './Router-Sample/page-not-found/page-not-found.component';


const routes: Routes = [
  {path:"ho",component:HomeComponent},
  {path:"",component:LoginComponent},
  // {path:"employee",loadChildren:()=>import('../app/employee/employee.module').then(i=>i.EmployeeModule)},
  
  // {path:"",redirectTo:"emp",pathMatch:"full"},
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent},
  {path:"emp",component:EmployeeListComponent},
  {path:"emp/:id",component:EmployeeDetailesComponent},
  {path:"**",component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
