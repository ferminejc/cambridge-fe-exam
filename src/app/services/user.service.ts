import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'JC',
        lastName: 'Fermin',
        email: 'jc@gmail.com',
        isActive: true,
        registered: new Date('01/01/2021 08:30:00'),
        hide: true,
      },
      {
        firstName: 'James',
        lastName: 'Santos',
        email: 'james@yahoo.com',
        isActive: false,
        registered: new Date('01/01/2021 06:20:00'),
        hide: true,
      },

    ];
  }

  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next({ name: 'Brad' });
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
