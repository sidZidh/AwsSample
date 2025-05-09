import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  fullName = '';
  email = '';
  phone = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  async register() {
    const payload = {
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      password: this.password,
    };

    try {
      await this.authService.register(payload);
      alert('Registration successful!');
      this.router.navigate(['/sip']);
    } catch (error) {
      alert('Registration failed!');
      console.error(error);
    }
  }
}
