import { Component } from '@angular/core';
import { ActiveSectionService } from '../section.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  constructor(private activeSectionService: ActiveSectionService) {}
 
  isCurrentActiveSection(): boolean {
    return this.activeSectionService.getActiveSection() === 'home';
  }
}
