import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accounts: Account[] = [];

  newUserStatus(username: string, email: string, password: any) {
    console.log(username, email, password);
  }

  signUp(username: string, email: string, password: any) {
    let newAccount = new Account(email, username);
    this.accounts.push(newAccount);
    console.log(this.accounts);
  }
}
