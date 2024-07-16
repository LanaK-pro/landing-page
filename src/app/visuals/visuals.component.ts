import { Component } from '@angular/core';

@Component({
  selector: 'app-visuals',
  standalone: true,
  imports: [],
  templateUrl: './visuals.component.html',
  styleUrl: './visuals.component.css',
})
export class VisualsComponent {
  left = 'https://www.svgrepo.com/show/522573/left-2.svg';
  right = 'https://www.svgrepo.com/show/522644/right-2.svg';
  images = [
    'https://nintendoeverything.com/wp-content/uploads/sites/1/nggallery/animal-crossing-new-horizons-art/200_200131_NSW_Animal-Crossing-New-Horizons_Characters-13.jpg',
    'https://nintendoeverything.com/wp-content/uploads/sites/1/nggallery/animal-crossing-new-horizons-art/89_200131_NSW_Animal-Crossing-New-Horizons_Characters-194.jpg',
    'https://nintendoeverything.com/wp-content/uploads/sites/1/nggallery/animal-crossing-new-horizons-art/184_200131_NSW_Animal-Crossing-New-Horizons_Characters-289.jpg',
    'https://nintendoeverything.com/wp-content/uploads/sites/1/nggallery/animal-crossing-new-horizons-art/37_200131_NSW_Animal-Crossing-New-Horizons_Characters-142.jpg',
  ];
}
