import { Component, ElementRef, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID, ViewChild } from '@angular/core';
import { PreviewComponent } from '../preview/preview.component';
import { isPlatformBrowser, NgClass, NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  standalone: true,
  providers: [PreviewComponent],
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() technologies: string[] = [];
  @Input() image: string = '';
  @Input() urlRepository: string = '';
  @Input() urlProduction: string = '';
  @Input() urlVideo: string = '';
  @ViewChild('rigthContainer') element!: ElementRef;
  @Output() url = new EventEmitter<SafeResourceUrl>();

  private scrollPosition: number = 0;
  private sectionTop: number = 0;
  private sectionBottom: number = 0;

  constructor(
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object

  ) {

  }
  goLink(url: string) {
    window.open(url, '_blank');
  }
  sendUrl() {
    this.url.emit(this.getSafeVideoUrl());
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.scrollPosition = window.scrollY;
    const rect = this.element.nativeElement.getBoundingClientRect();

    this.sectionTop = rect.top + window.scrollY;
    this.sectionBottom = this.sectionTop + rect.height;
  }

  isShowing(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return true;
    }
    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.innerHeight;

    return (
      this.sectionBottom >= viewportTop &&
      this.sectionTop <= viewportBottom
    );
  }

  getSafeVideoUrl(): SafeResourceUrl {
    const regex = /[?&]v=([a-zA-Z0-9_-]+)/;
    const match = this.urlVideo.match(regex);
    const videoId = match ? match[1] : null;
    const urlVideo = `https://www.youtube.com/embed/${videoId}?si=Ji8T1VeYcE09jx6d&amp&autoplay=1;controls=0`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlVideo);
  }

}
