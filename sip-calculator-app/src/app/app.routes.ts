import { Routes } from '@angular/router';
import { SipCalculatorComponent } from '../sip-calculator/sip-calculator.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sip', component: SipCalculatorComponent },
];
