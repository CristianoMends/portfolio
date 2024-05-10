import { Component } from '@angular/core';
import { ActiveSectionService } from '../section.service';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  constructor(private activeSectionService: ActiveSectionService) {}

  isCurrentActiveSection(): boolean {
    return this.activeSectionService.getActiveSection() === 'contacts';
  }
}
