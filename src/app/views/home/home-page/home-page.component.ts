import { Component } from '@angular/core';
import { IntroductionComponent } from "../introduction/introduction.component";
import { ExpertiseComponent } from "../expertise/expertise.component";
import { FeaturedComponent } from "../featured/featured.component";
import { EducationComponent } from "../education/education.component";
import { FooterComponent } from "../../dashboard/footer/footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [IntroductionComponent, ExpertiseComponent, FeaturedComponent, EducationComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
