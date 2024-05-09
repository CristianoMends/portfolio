import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() message:string = '';

  sendEmail(message: string): void {
    const subject = encodeURIComponent('Interesse no Portfólio');
    const emailBody = encodeURIComponent(message)
    window.open(`mailto:mendescristiano012@gmail.com?subject=${subject}&body=${emailBody}`, '_blank')
  }
}
