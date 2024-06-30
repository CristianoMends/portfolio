import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('hello') hello!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('video') video!: ElementRef;
  @ViewChild('cv') cv!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  async ngAfterViewInit() {
    await this.sleep(500);
    const elements: ElementRef[] = [this.hello, this.name];
    this.typeWriterEffect(elements);
  }

  async typeWriterEffect(textElements: ElementRef[]) {
    for (let i = 0; i < textElements.length; i++) {
      const element = textElements[i].nativeElement;
      const text = element.textContent;
      element.textContent = '';
      element.className = 'typing-text'

      for (let char in text) {

        element.textContent += text.charAt(char);
        if (element.textContent == text) {
          element.className = '';

          if (i == textElements.length - 1) {
            element.className = 'typing-text visible'
            this.video.nativeElement.className = 'video-container visible';
            this.cv.nativeElement.className = 'cv';
            this.contact.nativeElement.className = 'cv-container visible'
          }
        }

        await this.sleep(50);
      }
      await this.sleep(100);

    }
  }
  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  downloadCv() {
    const url = 'https://drive.google.com/file/d/1DNEmHdN9UTWtPgZl308eU8GI7_DBMzUF/view?usp=drive_link';
    window.open(url, '_blank');
  }
}
