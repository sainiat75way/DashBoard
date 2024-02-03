import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    this.authService.register(this.user).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        // Redirect to login page after successful registration
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed', error);
        // Handle error, e.g., display error message
      },
    });
  }
}
