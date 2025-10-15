import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Rive } from '@rive-app/canvas';

export interface Tile {
  cols: number;
  rows: number;
  color?: string; 
  riveArtboard: string;
  riveSrc: string;
  riveStateMachines: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements AfterViewInit {
  @ViewChildren('riveCanvas')
  canvasRefs!: QueryList<ElementRef<HTMLCanvasElement>>;

  tiles: Tile[] = [
    { 
      cols: 5, rows: 4, 
      riveSrc: 'assets/rive/portfolio.riv',
      riveStateMachines: "State Machine 1",
      riveArtboard: 'Education F1' 
    },
    { 
      cols: 4, rows: 2, 
      riveSrc: 'assets/rive/portfolio.riv',
      riveStateMachines: "State Machine 1",
      riveArtboard: 'Education F2' 
    },
    { 
      cols: 2, rows: 2, 
      riveSrc: 'assets/rive/portfolio.riv',
      riveStateMachines: "State Machine 1",
      riveArtboard: 'Education F3' 
    },
    { 
      cols: 2, rows: 2, 
      riveSrc: 'assets/rive/portfolio.riv',
      riveStateMachines: "State Machine 1",
      riveArtboard: 'Education F4' 
    },
  ];

  ngAfterViewInit(): void {
    this.canvasRefs.forEach((canvasRef, index) => {
      const config = this.tiles[index]; 

      if (config) {
        new Rive({
          src: config.riveSrc,
          canvas: canvasRef.nativeElement,
          autoplay: true,
          stateMachines: config.riveStateMachines,
          artboard: config.riveArtboard,
        });
      }
    });
  }
}