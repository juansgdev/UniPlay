import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged ():boolean {
    return localStorage.getItem('username') != null;
  };
}
