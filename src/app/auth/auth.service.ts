import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private userSubject = new BehaviorSubject<User>(null);
  // getUser() {
  //   return this.userSubject;
  // }
}
