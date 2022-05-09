import { environment } from './../../../environments/environment';
import { EMPTY, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `${environment.budgeaUrl}/auth/token`;

  constructor(private http: HttpClient) {}

  public getConnection$(): Observable<any> {
    if (this.getToken()) {
      return EMPTY;
    }

    const body = {
      username: 'test@budgea.com',
      password: 'test1234',
      application: 'angular',
    };
    return this.http
      .post(this.url, body)
      .pipe(tap((payload: any) => this.setToken(payload.token)));
  }

  public setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  public removeToken(): void {
    sessionStorage.removeItem('token');
  }
}
