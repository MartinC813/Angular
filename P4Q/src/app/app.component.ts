import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Features/auth/login/login.component';
import { CommonModule } from '@angular/common';


//Este componente envuelve a todos. @Component. Especificas como va a ser el componente. 
//selector: app-root quiero decir que este componente se va a llamar asi, como se ve en index.html.
//standalone: quiere decir que se queres utilizar cualquier componente, algun modulo se pone en los imports, aclaras todos los modulos, todo!. Es un booleano. 
//templateURL: seria una referencia a lo que renderiza el componente, se puede tener un html externo o no.
//el srtyleUrl es el css.


@Component({
  selector: 'app-root',
  imports: [ RouterOutlet,  ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'P4Q';
}
