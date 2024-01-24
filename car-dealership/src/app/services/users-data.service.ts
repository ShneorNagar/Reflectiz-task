import { Injectable, OnInit } from '@angular/core';
import { EMPTY, catchError, map, tap } from 'rxjs';
import { UserData } from '../models/user-data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  constructor(private http: HttpClient) {}

  initUsers(): void {
    this.http
      .get<UserData[]>('assets/mock-users.json')
      .pipe(
        tap(() => {
          console.log('All users loaded');
          console.log('saving users to local storage');
        }),
        catchError((error) => {
          console.error('Users loading failed ', error);
          return EMPTY;
        })
      )
      .subscribe((users) => {
        localStorage.setItem('users', JSON.stringify(users));
      });
  }

  saveNewUser(user: UserData): void {
    const users: string | null = localStorage.getItem('users');
    const usersData: UserData[] = JSON.parse(users || '');

    if (usersData?.length) {
      usersData.push(user);
      localStorage.setItem('users', JSON.stringify(usersData));
    }
  }
}
