import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USER_KEY = 'AuthUser';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    const token = sessionStorage.getItem(TOKEN_KEY);
    if (!token) {
      throw new Error('Token not found in session storage');
    }
    return token;
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const userStr = window.sessionStorage.getItem(USER_KEY);
    if (!userStr) {
      throw new Error('User not found in session storage');
    }
    return JSON.parse(userStr);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, username);
  }

  public getUsername(): string {
    const username = sessionStorage.getItem(USER_KEY);
    if (!username) {
      throw new Error('Username not found in session storage');
    }
    return username;
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];
    const authoritiesStr = sessionStorage.getItem(AUTHORITIES_KEY);
    if (authoritiesStr) {
      const authorities = JSON.parse(authoritiesStr);
      authorities.forEach((authority: any) => {
        this.roles.push(authority.auth);
      });
    }
    return this.roles;
  }
  
}





/*import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USER_KEY = 'AuthUser';
const AUTHORITIRS_KEY = ' AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
private roles : Array<string>= [];
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    const token = window.sessionStorage.getItem(TOKEN_KEY);
    if (token === null) {
      throw new Error('Token not found in session storage');
    }
    return token;
  }

 public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const userStr = window.sessionStorage.getItem(USER_KEY);
    if (userStr === null) {
      throw new Error('User not found in session storage');
    }
    return JSON.parse(userStr);
  }

  public saveUsername(username: string){
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USER_KEY);
  }

  public saveAuthorities(authorities: string){
    window.sessionStorage.removeItem(AUTHORITIRS_KEY);
    window.sessionStorage.setItem(AUTHORITIRS_KEY, JSON.stringify( authorities) );
  }

  public getAuthorities(): string[] {
    this.roles = [];
    if ( sessionStorage.getItem[TOKEN_KEY]){

      JSON.parse(sessionStorage.getItem(AUTHORITIRS_KEY))
      .forEach(authority => {
           this.roles.push(authority.auth)
      
         });
      
    }
  }


}*/
