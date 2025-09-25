import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  // Signal para controlar el estado del menú (abierto/cerrado)
  isOpen = signal(false);

  // Método para alternar el estado del menú
  toggleMenu(event: MouseEvent) {
    this.isOpen.update(value => !value);
    event.stopPropagation();
  }

  // Listener del documento para cerrar el menú cuando se hace clic fuera
  @HostListener('document:click', ['$event'])
  closeMenu() {
    this.isOpen.set(false);
  }

  selectedLanguage: string = 'en';

  switchLanguage(lang: string) {
    this.selectedLanguage = lang;
  }

}
