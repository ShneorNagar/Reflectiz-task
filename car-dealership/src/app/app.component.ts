import { Component, OnInit } from '@angular/core';
import { UsersDataService } from './services/users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'car-dealership';

  constructor(private usersDataService: UsersDataService) {}

  ngOnInit(): void {
    this.usersDataService.initUsers();
  }
}
