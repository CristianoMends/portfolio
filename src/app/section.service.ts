import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveSectionService {
  private activeSection: string = '';

  setActiveSection(sectionId: string): void {
    this.activeSection = sectionId;
  }

  getActiveSection(): string {
    return this.activeSection;
  }
}
