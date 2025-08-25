import { Component } from '@angular/core';
import { FooterComponent } from "../../dashboard/footer/footer.component";
import { educationData, EducationInterfaceData } from '../../../data/educationData';
import { experienceData, ExperienceInterfaceData } from '../../../data/experienceData';
import { workedWithData, WorkedWithInterfaceData } from '../../../data/workedWithData';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {  
  educationDataSource: EducationInterfaceData[];
  experienceDataSource: ExperienceInterfaceData[];
  workedWithDataSource: WorkedWithInterfaceData[];

  constructor() {
    this.educationDataSource = educationData;
    this.experienceDataSource = experienceData;
    this.workedWithDataSource = workedWithData;
  }
}
