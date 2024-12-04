import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Core/services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,                             // Define el componente como standalone
  imports: [ReactiveFormsModule, CommonModule], // Importa los módulos que necesita. Como es standalone puede importarlos asi, si fuera module ahi cambia la cosa.
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService, //Constructor tipico
    private router: Router
  ) {}

  ngOnInit(): void { //Validas el formulario
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void { //Valida el form y lo pasa por el AuthService 
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: () => this.router.navigate(['/dashboard']), // Redirigir después del login
        error: () => console.error('Error en el login'),
      });
    }
  }
}
