import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  title = 'Titre de ma page en h1';
  description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  actionButton = "bouton d'action";
  video: SafeResourceUrl = null!;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const videoUrl = 'https://www.youtube.com/embed/9eZspWQAqyk';
    this.video = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
}
