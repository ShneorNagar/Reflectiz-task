import { Injectable, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError, map, tap } from 'rxjs';
import { UserData } from '../models/user-data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  loadAllUsers(): void {
    this.http.get<UserData[]>('assets/mock-users.json').pipe(
      tap(() => {
        console.log('All users loaded');
        console.log('saving users to local storage');
      }),
      map((users) => {
        localStorage.setItem('users', JSON.stringify(users));
      }),
      catchError((error) => {
        console.error('Users loading failed ', error);
        return EMPTY;
      })
    ).subscribe();
  }

  saveNewUser(user: UserData): void {
    
  }
}
