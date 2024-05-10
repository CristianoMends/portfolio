import { Component } from '@angular/core';
import { ActiveSectionService } from '../section.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(private activeSectionService: ActiveSectionService) {}

  isCurrentActiveSection(): boolean {
    return this.activeSectionService.getActiveSection() === 'projects';
  }

}
