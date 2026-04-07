import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://common.stoccoz.com/api/v1/Login';
  constructor(private httpClient: HttpClient) { }
  login(email: string, password: string): Observable<any> {
    const body = { 
      includeAudit: true,
      createdBy:0,
      username: email,
      passwordHash: password
    };
    return this.httpClient.post(this.apiUrl, body);
  }
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  saveUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  logout() {
    localStorage.clear();
  }
}