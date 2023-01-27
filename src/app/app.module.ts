import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ToggleComponent } from './toggle/toggle.component';
import { IconComponent } from './icon/icon.component';
import { BadgeComponent } from './badge/badge.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NavComponent } from './nav/nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { CardsComponent } from './cards/cards.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TabsComponent } from './tabs/tabs.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { StepperComponent } from './stepper/stepper.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogeComponent } from './dialoge/dialoge.component';
import { DialogeOpenComponent } from './dialoge-open/dialoge-open.component';
import { TablesComponent } from './tables/tables.component';
import { TemplateDrivenComponent } from './Forms/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component';
import { ProjectSampleOneComponent } from './project-sample-one/project-sample-one.component';
ReactiveFormsModule


@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    ToggleComponent,
    IconComponent,
    BadgeComponent,
    SpinnerComponent,
    NavComponent,
    SidenavComponent,
    MenuComponent,
    ListComponent,
    GridComponent,
    ExpansionComponent,
    CardsComponent,
    ProgressBarComponent,
    TabsComponent,
    InputComponent,
    SelectComponent,
    StepperComponent,
    AutoCompleteComponent,
    CheckboxComponent,
    RadioComponent,
    DatePickerComponent,
    TooltipComponent,
    SnackbarComponent,
    DialogeComponent,
    DialogeOpenComponent,
    TablesComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    ProjectSampleOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
