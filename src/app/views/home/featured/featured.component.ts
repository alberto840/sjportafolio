import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent {
  tiles: Tile[] = [
    { text: 'Uno', cols: 4, rows: 3, color: 'gray' },
    { text: 'Dos', cols: 3, rows: 2, color: 'gray' },
    { text: 'Tres', cols: 1, rows: 1, color: 'gray' },
    { text: 'Cuatro', cols: 1, rows: 2, color: 'gray' },
    { text: 'Cinco', cols: 3, rows: 1, color: 'gray' },
  ];
}
