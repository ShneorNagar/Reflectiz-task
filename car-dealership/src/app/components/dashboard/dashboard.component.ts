import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ChartConfiguration, ChartDataset, ChartOptions } from 'chart.js';
import { combineLatest } from 'rxjs';
import { UserData } from 'src/app/models/user-data.model';
import { UsersDataService } from 'src/app/services/users-data.service';

@UntilDestroy()
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor(
    private usersDataService: UsersDataService,
    private cdr: ChangeDetectorRef
  ) {}

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels: string[] = [];
  public pieChartDatasets: ChartDataset<'pie'>[] = [];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  // Bar
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Electric', 'Fule'],
    datasets: [],
  };
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  // Line
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ([] = []),
    datasets: ([] = []),
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend = true;

  ngOnInit(): void {
    this.initGenderPieChart();
    this.initMotorTypeBarChart();
    this.initAgeAndNumSeatsLineChart();
    this.initTableData();
  }

  private initAgeAndNumSeatsLineChart() {
    this.usersDataService
      .getUsersAgeAndSeats$()
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.lineChartData.labels = data.map((d) => d.age);
        this.lineChartData.datasets = [
          {
            data: data.map((d) => d.seats),
            label: 'Series A',
            fill: true,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0.3)',
          },
        ];
      });
  }

  displayedColumns: string[] = [];
  tableDataSource: UserData[] = [];

  initTableData() {
    this.usersDataService
      .getAll$()
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.displayedColumns = Object.keys(data[0]);
        this.tableDataSource = data;
        this.cdr.markForCheck();
      });
  }

  private initGenderPieChart() {
    combineLatest([
      this.usersDataService.getMaleUsersCount$(),
      this.usersDataService.getFemailUsersCount$(),
    ])
      .pipe(untilDestroyed(this))
      .subscribe(([maleCount, femailCount]) => {
        this.pieChartLabels = ['Male', 'Female'];
        this.pieChartDatasets = [
          {
            data: [maleCount, femailCount],
            label: 'Genders Pie',
          },
        ];
        this.cdr.markForCheck();
      });
  }

  private initMotorTypeBarChart() {
    combineLatest([
      this.usersDataService.getElectricMotorCount$(),
      this.usersDataService.getFuleMotorTypeCount$(),
    ])
      .pipe(untilDestroyed(this))
      .subscribe(([electricMotorCount, fuleMotorTypeCount]) => {
        this.barChartData = {
          labels: ['Electric', 'Fule'],
          datasets: [
            {
              data: [electricMotorCount, fuleMotorTypeCount],
              label: 'Engine Type',
            },
          ],
        };
        this.cdr.markForCheck();
      });
  }
}
