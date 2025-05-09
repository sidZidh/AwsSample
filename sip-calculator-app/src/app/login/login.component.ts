import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginId = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    const payload = {
      email: this.loginId,
      password: this.password,
    };

    try {
      await this.authService.login(payload);
      alert('Login successful!');
      this.router.navigate(['/sip']);
    } catch (error) {
      alert('Login failed!');
      console.error(error);
    }
  }
}
