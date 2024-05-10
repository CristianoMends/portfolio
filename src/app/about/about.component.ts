import { Component } from '@angular/core';
import { ActiveSectionService } from '../section.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private activeSectionService: ActiveSectionService) {}

  isCurrentActiveSection(): boolean {
    return this.activeSectionService.getActiveSection() === 'about';
  }
}
