import { Routes } from '@angular/router';
import { LoginComponent } from './Features/auth/login/login.component';
//import { AuthGuard } from './Core/guards/auth.guard';
//import { NoAuthGuard } from './Core/guards/no-auth.guard';

export const routes: Routes = [
     {
    path: 'login',
    component: LoginComponent,
    //canActivate: [NoAuthGuard], // Si está logueado, redirige al dashboard
  },
  /*{
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard], 
  },*/
  {
    path: '**',
    redirectTo: '/login', // Ruta comodín redirige al login si no esta logged :D
    //canActivate: [NoAuthGuard],
  },

];

//Eventualmente descomentare las cosas una vez el login funcione
