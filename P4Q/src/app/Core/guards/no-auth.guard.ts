import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../Core/services/auth.service';

@Injectable({
  providedIn: 'root',
})

export class NoAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) { // Permitir acceso si NO está autenticado
      return true;
    } else {
      this.router.navigate(['/dashboard']); // Redirige si está autenticado, tengo que ver a donde mandarlo bien dps
      return false;
    }
  }
}
