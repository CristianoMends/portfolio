import { Component } from '@angular/core';
import { ActiveSectionService } from '../section.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  constructor(private activeSectionService: ActiveSectionService) {}

  isCurrentActiveSection(): boolean {
    return this.activeSectionService.getActiveSection() === 'skills';
  }
}
