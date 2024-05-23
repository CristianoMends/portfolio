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
  constructor(private activeSectionService: ActiveSectionService) {}
 
  isCurrentActiveSection(): boolean {
    return this.activeSectionService.getActiveSection() === 'home';
  }
  @ViewChild('typingText') typingText!: ElementRef;
  @ViewChild('subText') subText!: ElementRef;
  @ViewChild('arrow') arrow!: ElementRef;
  @ViewChild('video') video!: ElementRef;

  ngAfterViewInit(): void {
    this.typeWriterEffect();    
  }

  async typeWriterEffect() {
    const element = this.typingText.nativeElement;
    const text = element.textContent;
    element.textContent = '';

    for(let char in text){
      
        element.textContent += text.charAt(char);
        if(element.textContent == text){
          this.subText.nativeElement.className = 'show';    
          this.arrow.nativeElement.className = 'scroll-down';
          this.video.nativeElement.className = 'video-container';
        }

      await this.sleep(100);
    }
  }
  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
