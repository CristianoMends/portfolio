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

  ngAfterViewInit(): void {
    this.typeWriterEffect();    
  }

  typeWriterEffect() {
    const element = this.typingText.nativeElement;
    const text = element.textContent;
    element.textContent = '';

    for(let i = 0;i<text.length;i++){
      
      setTimeout(() => {
        element.textContent += text.charAt(i);
        if(element.textContent == text){
          this.subText.nativeElement.className = 'show';    
          this.arrow.nativeElement.className = 'scroll-down';    
        }
      }, i * 100);
    }
  }
}
