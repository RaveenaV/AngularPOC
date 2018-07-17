import { Injectable } from '@angular/core';
import { AllUsers, User } from './user/user.component';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  // getUsers(): User[]
  // {
  //  return AllUsers;
  // }

  getUsers(): Observable<User[]> {
    return of(AllUsers);
  }
}
