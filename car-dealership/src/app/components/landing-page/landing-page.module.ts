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
import { MatNativeDateModule } from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


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
  declarations: [LandingPageComponent, HeaderComponent, FooterComponent],
  imports: [
    ANGULAR_MATERIAL_MODULES,
    LandingPageRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class LandingPageModule {}
