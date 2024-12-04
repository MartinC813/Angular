import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

//viene inicializada, es la config de la app. Los providers son parecidos a los context de react, esto engloba todo. 

/*
  La funcion provideRouter(routes) se encarga de proporcionar el enrutador y las rutas definidas en el archivo app.routes.ts. 
  Angular lo reconoce automáticamente cuando se usa ApplicationConfig y no es necesario importarlo en el componente.

  ApplicationConfig es la nueva configuración para aplicaciones Angular que usan componentes standalone. 
  Al usarla, defines los proveedores (como provideRouter) y Angular gestiona automáticamente las dependencias de enrutamiento.

*/

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
};
