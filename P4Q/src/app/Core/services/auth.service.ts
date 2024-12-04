import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


/*
  Si usas providedIn: 'root': El servicio se hace disponible globalmente (como un singleton) sin necesidad de configurarlo explícitamente en ningún módulo. 
  Angular lo crea solo una vez, y cada vez que lo inyectes en cualquier componente o servicio, 
  recibirás la misma instancia (esto es útil para servicios que gestionan el estado de la aplicación). 
  A partir de esta explicación me parece muy util usarlo aca.
 */
@Injectable({
  providedIn: 'root',  //Lo hago un Singleton (una unica instancia) la cual estara disponible en toda la aplicacion.
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
