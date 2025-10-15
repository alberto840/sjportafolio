import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Rive, Layout } from '@rive-app/canvas';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.css'
})
export class ExpertiseComponent implements AfterViewInit {
  // 1. Cambiamos a ViewChildren para obtener una lista de todos los canvas
  @ViewChildren('riveCanvas') 
  canvasRefs!: QueryList<ElementRef<HTMLCanvasElement>>;

  // 2. Creamos un array con la configuración para cada animación
  //    El orden aquí debe coincidir con el orden de los canvas en el HTML
  private riveAnimationsConfig = [
    {
      src: 'assets/rive/portfolio.riv',
      stateMachines: "Vinoculares 1",
      artboard: 'Animation Frame  3',
    },
    {
      src: 'assets/rive/portfolio.riv',
      stateMachines: "Poke",
      artboard: 'Animation Frame  2',
    },
    {
      src: 'assets/rive/portfolio.riv',
      stateMachines: "Vinoculares 1",
      artboard: 'Animation Frame ',
    }
    // Puedes añadir más objetos de configuración aquí
  ];

  ngAfterViewInit(): void {
    // 3. Iteramos sobre la lista de elementos canvas
    this.canvasRefs.forEach((canvasRef, index) => {
      const config = this.riveAnimationsConfig[index]; // Obtenemos la configuración correspondiente

      // Verificamos que exista una configuración para este canvas
      if (config) {
        new Rive({
          src: config.src,
          canvas: canvasRef.nativeElement,
          autoplay: true,
          stateMachines: config.stateMachines,
          artboard: config.artboard,
        });
      }
    });
  }
}