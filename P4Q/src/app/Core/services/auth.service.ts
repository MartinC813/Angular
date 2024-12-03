import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false; 

  constructor() {}

  login(email: string, password: string): Observable<boolean> {
    // Aquí iría la lógica para laburar con la API
    if (email === 'test@example.com' && password === 'password') {
      this.loggedIn = true;
      return of(true); 
    }
    return of(false); 
  }


  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  // Método para logout
  logout(): void {
    this.loggedIn = false;
  }
}
