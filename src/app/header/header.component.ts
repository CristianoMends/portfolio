import { Component, HostListener } from '@angular/core';
import { ActiveSectionService } from '../section.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private activeSectionService: ActiveSectionService){}
  activeSection: string = '';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    const currentScrollPosition = this.getCurrentScrollPosition();
    const currentSection = this.getActiveSection(sections, currentScrollPosition);
    this.updateActiveSection(currentSection);
    this.activeSectionService.setActiveSection(currentSection);
  }

  getCurrentScrollPosition(): number {
    return window.scrollY;
  }
  getActiveSection(sections: NodeListOf<Element>, scrollPosition: number): string {
    let activeSectionId = '';
    sections.forEach(section => {
      const sectionT = section.getBoundingClientRect().top + window.scrollY;
      const sectionTop = (sectionT) - (sectionT * 0.05);
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeSectionId = section.id;
      }
    });
    return activeSectionId;
  }
  updateActiveSection(sectionId: string): void {
    this.activeSection = sectionId;
  }
  ngOnInit(): void {
   this.updateActiveSection('home');    
  }

}
