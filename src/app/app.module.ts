import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { DetailesComponent } from './student-Detailes/detailes/detailes.component';
import { McaComponent } from './student-Detailes/mca/mca.component';
import { MscComponent } from './student-Detailes/msc/msc.component';
import { PassComponent } from './student-Detailes/pass/pass.component';
import { FailComponent } from './student-Detailes/fail/fail.component';
import { PostComponent } from './Http/post/post.component';
import { GetComponent } from './Http/get/get.component';
import { PipeComponent } from './pipe/pipe.component';
import { DollorInrPipe } from './dollor-inr.pipe';
import { HomeComponent } from './Router-Sample/home/home.component';
import { AboutComponent } from './Router-Sample/about/about.component';
import { ContactComponent } from './Router-Sample/contact/contact.component';
import { NavComponent } from './Router-Sample/nav/nav.component';
import { PageNotFoundComponent } from './Router-Sample/page-not-found/page-not-found.component';
import { Get2Component } from './Http/get2/get2.component';
import { EmployeeListComponent } from './Router-Sample/employee-list/employee-list.component';

import { ViewchildComponent } from './viewchild/viewchild.component';
import { HostlistnerComponent } from './hostlistner/hostlistner.component';
import { SampleDirective } from './hostlistner/sample.directive';
import { EmployeeDetailesComponent } from './Router-Sample/employee-detailes/employee-detailes.component';
import { EmployeeModule } from './employee/employee.module';
import { DirectiveExamplesComponent } from './directive-examples/directive-examples.component';
import { ColorDirective } from './directive-examples/color.directive';
import { DropdownComponentComponent } from './dropdown-component/dropdown-component.component';
import { DropdownTwoComponent } from './dropdown-two/dropdown-two.component';
import { DropdownOneComponent } from './dropdown-one/dropdown-one.component';
import { SampleComponent } from './sample/sample.component';
import { DropdownoneComponent } from './dropdownone/dropdownone.component';
import { DropdowntwoComponent } from './dropdowntwo/dropdowntwo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';
import { ApiService } from './api.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { LoginComponent } from './Multiple-router/login/login.component';
import { DashModule } from './Multiple-router/dash/dash.module';
import { ExampleComponent } from './Observables/example/example.component';
import { SubjectPostComponent } from './Observables/subject-post/subject-post.component';
import { SubjectGetComponent } from './Observables/subject-get/subject-get.component';






@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    TwoWayBindingComponent,
    NgforComponent,
    NgifComponent,
    NgswitchComponent,
    InputComponent,
    OutputComponent,
    DetailesComponent,
    McaComponent,
    MscComponent,
    PassComponent,
    FailComponent,
    PostComponent,
    GetComponent,
    PipeComponent,
    DollorInrPipe,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    PageNotFoundComponent,
    Get2Component,
    EmployeeListComponent,
    EmployeeDetailesComponent,
    ViewchildComponent,
    HostlistnerComponent,
    SampleDirective,
    DirectiveExamplesComponent,
    ColorDirective,
    DropdownComponentComponent,
    DropdownTwoComponent,
    DropdownOneComponent,
    SampleComponent,
    DropdownoneComponent,
    DropdowntwoComponent,
    ParentComponent,
    ChildComponent,
    HttpInterceptorComponent,
    LoginComponent,
    ExampleComponent,
    SubjectPostComponent,
    SubjectGetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,DashModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
