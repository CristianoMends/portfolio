import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActiveSectionService } from '../section.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(private activeSectionService: ActiveSectionService) {}
 
  isCurrentActiveSection(): boolean {
    return this.activeSectionService.getActiveSection() === 'home';
  }
  @ViewChild('typingText') typingText!: ElementRef;

  ngAfterViewInit(): void {
    this.typeWriterEffect();    
  }

  typeWriterEffect() {
    const element = this.typingText.nativeElement;
    const text = element.textContent;
    element.textContent = '';
    let index = 0;

    const type = () => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    };

    type();
  }
}
