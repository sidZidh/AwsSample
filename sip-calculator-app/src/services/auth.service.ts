import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://localhost:7050/api/Auth';

  constructor(private http: HttpClient) {}

  register(data: any) {
    return firstValueFrom(this.http.post(`${this.baseUrl}/register`, data));
  }

  login(data: any) {
    return firstValueFrom(this.http.post(`${this.baseUrl}/login`, data));
  }
}
