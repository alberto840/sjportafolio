import { Component, HostListener, signal } from '@angular/core';
import { IntroductionComponent } from "../introduction/introduction.component";
import { ExpertiseComponent } from "../expertise/expertise.component";
import { FeaturedComponent } from "../featured/featured.component";
import { EducationComponent } from "../education/education.component";
import { FooterComponent } from "../../dashboard/footer/footer.component";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [IntroductionComponent, ExpertiseComponent, FeaturedComponent, EducationComponent, FooterComponent, MatIcon],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  showScrollButton = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollButton.set(window.scrollY > 200);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
