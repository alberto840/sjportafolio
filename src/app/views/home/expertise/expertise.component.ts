import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Rive, Layout } from '@rive-app/canvas';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.css'
})
export class ExpertiseComponent implements AfterViewInit {
  @ViewChild('riveCanvas', { static: false })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    new Rive({
      src: 'assets/rive/portfolio.riv',
      canvas: this.canvasRef.nativeElement,
      autoplay: true,
      stateMachines: "State Machine 1",
      artboard: 'Education F1',
    });
  }
}