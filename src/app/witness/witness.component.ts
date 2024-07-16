import { Component } from '@angular/core';

@Component({
  selector: 'app-witness',
  standalone: true,
  imports: [],
  templateUrl: './witness.component.html',
  styleUrl: './witness.component.css',
})
export class WitnessComponent {
  witness = [
    {
      portrait:
        'https://vignette.wikia.nocookie.net/nintendo/images/b/bf/FemaleVillager.png/revision/latest?cb=20150729192332&path-prefix=en',
      testimony:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Lana',
    },
    {
      portrait:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/57c7ed67-f9d0-47a8-82dc-7506d8128ea8/depj6am-e7c23dab-a595-49c1-a6ce-3b743ab16335.png/v1/fill/w_1024,h_1024,strp/animal_crossing_villager_boy_render_by_supermariocarlos_depj6am-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzU3YzdlZDY3LWY5ZDAtNDdhOC04MmRjLTc1MDZkODEyOGVhOFwvZGVwajZhbS1lN2MyM2RhYi1hNTk1LTQ5YzEtYTZjZS0zYjc0M2FiMTYzMzUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ._Xz11aoVvqUo9YDzcsPvYrmwWe_ZX3IchS_1098KoC4',
      testimony:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Autre',
    },
  ];
}
