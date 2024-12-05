import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-navbar.component.html',
  styleUrls: ['./left-navbar.component.css']
})
export class LeftNavbarComponent {
  searchText: string = '';

  constructor(private router: Router) {}

  onSearch() {
    console.log('Searching for:', this.searchText);
  }

  onLogout() {
    console.log('Logging out');
    this.router.navigate(['/login']); 
  }
}