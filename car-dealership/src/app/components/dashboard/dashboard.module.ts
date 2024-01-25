import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, NgChartsModule, MatTableModule],
})
export class DashboardModule {}
