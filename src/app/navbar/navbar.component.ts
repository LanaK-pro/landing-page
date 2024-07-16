import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  logos = [
    'https://www.svgrepo.com/show/521654/facebook.svg',
    'https://www.svgrepo.com/show/521900/twitter.svg',
    'https://www.svgrepo.com/show/521711/instagram.svg',
    'https://www.svgrepo.com/show/502648/email.svg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Animal_Crossing_Leaf.svg',
  ];
}
