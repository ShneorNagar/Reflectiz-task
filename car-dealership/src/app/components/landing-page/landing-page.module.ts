import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LandingPageComponent } from './landing-page.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';


const ANGULAR_MATERIAL_MODULES = [
  MatRadioModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatSliderModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatChipsModule,
  MatIconModule
];

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    ANGULAR_MATERIAL_MODULES,
    LandingPageRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
  ],
})
export class LandingPageModule {}
