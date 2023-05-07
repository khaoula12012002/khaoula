import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';
import { SignupInfo } from '../signup-info';
import { JwtResponse } from '../jwt-response';
import { AuthLoginInfo } from '../login-info';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const TOKEN_KEY ="AuthToken"

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  private signupUrl='http://localhost:8080/api/login/register';
  private loginUrl ='http://localhost:8080/api/login/authenticate';

  constructor(
    private http: HttpClient  ,
    private tokenStorage: TokenStorageService , 
    private router: Router,
    ) {
    

    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem(TOKEN_KEY));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  /*login(user:any): Observable<any> {
    return this.http.post(`${this.signupUrl}/login`,user,
      httpOptions
    );
  }*/
  login(AuthLoginInfo: AuthLoginInfo){
    return this.http.post<JwtResponse>(this.loginUrl , AuthLoginInfo, httpOptions)
    .pipe(map(data=>{
      this.saveUserData(data);
      return data ;
    }));
  }


  register(signupInfo: SignupInfo): Observable<JwtResponse>{  
     return this.http.post<JwtResponse>(`${this.signupUrl}`,signupInfo, httpOptions)
    .pipe( map((data: JwtResponse) => { this.saveUserData(data);
        return data; }) )
   // .pipe(map((response) => response.accessToken.split('.')[1]))
    //.pipe(map((payload) => JSON.parse(atob(payload)).role));
  }

  private saveUserData(data: JwtResponse) {
    this.tokenStorage.saveToken(data.accessToken);
    this.tokenStorage.saveUsername(data.username);
    this.tokenStorage.saveAuthorities(data.authorities);
    this.currentUserSubject.next(data.accessToken);
  }


  logout(): Observable<any> {
    return this.http.post(this.signupUrl + '/signout', httpOptions);
  }
}

