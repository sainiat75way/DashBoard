import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    // Perform login only if email and password are provided
    if (this.user.email && this.user.password) {
      this.authService.login(this.user).subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
          // Redirect to home or any other page after successful login
          this.router.navigate(['/dashboard']);
        },
        error: (error: any) => {
          console.error('Login failed', error);
          // Handle error, e.g., display error message
        },
      });
    } else {
      console.error('Email and password are required for login.');
    }
  }
}
