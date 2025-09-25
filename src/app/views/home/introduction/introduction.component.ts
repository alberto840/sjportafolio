import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Rive } from '@rive-app/canvas';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent implements AfterViewInit {
  @ViewChild('riveCanvas', { static: false })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    new Rive({
      src: 'assets/rive/portfolio.riv',
      canvas: this.canvasRef.nativeElement,
      autoplay: true,
      stateMachines: "State Machine 1",
      artboard: 'Card 1st Frame',
    });
  }
}
