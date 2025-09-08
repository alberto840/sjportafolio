import { Component, HostListener } from '@angular/core';
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
  // Los datos de los mosaicos se mantienen igual
  tiles: Tile[] = [
    { text: 'Uno', cols: 4, rows: 3, color: 'gray' },
    { text: 'Dos', cols: 3, rows: 2, color: 'gray' },
    { text: 'Tres', cols: 1, rows: 1, color: 'gray' },
    { text: 'Cuatro', cols: 1, rows: 2, color: 'gray' },
    { text: 'Cinco', cols: 3, rows: 1, color: 'gray' },
  ];

  // Propiedad para almacenar el número de columnas de la grilla
  cols = 4;

  constructor() {
    this.updateGridCols();
  }

  /**
   * Escucha el evento de cambio de tamaño de la ventana (resize)
   * y llama al método para actualizar el número de columnas.
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateGridCols();
  }

  /**
   * Actualiza el número de columnas del mat-grid-list
   * según el ancho actual de la ventana.
   */
  updateGridCols() {
    if (window.innerWidth < 640) {
      this.cols = 1; // 1 columna para pantallas pequeñas (< 640px)
    } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
      this.cols = 2; // 2 columnas para pantallas medianas (640px - 1023px)
    } else {
      this.cols = 4; // 4 columnas para pantallas grandes (>= 1024px)
    }
  }
}