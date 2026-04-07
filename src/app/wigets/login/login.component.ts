import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  err = '';
  loginForm: any;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.err = 'Please fill in all fields correctly.';
      return;
    }

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.auth.login(email, password).subscribe({
  next: (response) => {
    console.log('API response:', response);
    this.auth.saveToken(response.token);
    this.auth.saveUser({
      id: response.userID,
      name: response.username,
      email: response.email,
      role: response.userRole
    });
    this.router.navigate(['/dashboard']);
  },
  error: (error) => {
    console.error('Login error:', error);
    this.err = 'Login failed. Please check your credentials.';
  }
});
  }
}