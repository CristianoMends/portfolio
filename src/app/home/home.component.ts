import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActiveSectionService } from '../section.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(private activeSectionService: ActiveSectionService) { }

  isCurrentActiveSection(): boolean {
    return this.activeSectionService.getActiveSection() === 'home';
  }
  @ViewChild('typingText') typingText!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('subText') subText!: ElementRef;
  @ViewChild('arrow') arrow!: ElementRef;
  @ViewChild('video') video!: ElementRef;
  @ViewChild('cv') cv!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  ngAfterViewInit(): void {
    const elements: ElementRef[] = [this.typingText, this.name, this.subText];
    this.typeWriterEffect(elements);
  }

  async typeWriterEffect(textElements: ElementRef[]) {
    for (let i = 0; i < textElements.length; i++) {
      const element = textElements[i].nativeElement;
      const text = element.textContent;
      element.textContent = '';
      element.className = 'typing-text visible'

      for (let char in text) {

        element.textContent += text.charAt(char);
        if (element.textContent == text) {
          element.className = '';

          if(i == textElements.length - 1){
            element.className = 'typing-text visible'
            this.arrow.nativeElement.className = 'scroll-down';
            this.video.nativeElement.className = 'video-container';
            this.cv.nativeElement.className = 'cv visible';
            this.contact.nativeElement.className = 'contact visible'
          }              
        }

        await this.sleep(50);
      }
    }
  }
  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
