import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  providers: [AuthService],
})
export class AuthComponent {
  user: any[] = [];

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const username = form.value.username;
    const password = form.value.password;
    const email = form.value.email;

    this.authService.newUserStatus(username, email, password);
    this.authService.signUp(username, email, password);

    form.reset();
  }
}
