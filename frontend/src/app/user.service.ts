import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8999";
  router!: any;

  constructor(private httpClient: HttpClient) { }

  signup(user: User): Observable<any> {
    console.log("userservice.signup");
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    return this.httpClient.post(`${this.baseURL}/signup`, body, { 'headers': headers });
  }
  isUserLoggedIn() {
    let status = sessionStorage.getItem('loginStatus')  //active
    return !(status === null)
  }
  signin(email: any, password: any): Observable<any> {
    const params = new HttpParams().set('email', email).set('password', password);
    console.log(params);
    return this.httpClient.get(`${this.baseURL}/login`, { params });
  }
  logOut() {
    sessionStorage.removeItem('loginStatus')
    this.router.navigate['sign-in'];
  }

}