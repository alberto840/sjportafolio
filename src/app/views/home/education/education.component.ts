import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  tiles: Tile[] = [
    { text: 'Uno', cols: 2, rows: 4, color: 'gray' },
    { text: 'Dos', cols: 2, rows: 2, color: 'gray' },
    { text: 'Tres', cols: 1, rows: 2, color: 'gray' },
    { text: 'Cuatro', cols: 1, rows: 2, color: 'gray' },
  ];
}