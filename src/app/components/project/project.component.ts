import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { PreviewComponent } from '../preview/preview.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
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
    this.scrollPosition = window.scrollY;
    const elementHeight = this.element.nativeElement.offsetHeight;
    const rect = this.element.nativeElement.getBoundingClientRect();
    this.sectionTop = (rect.top + window.scrollY) - elementHeight;
    this.sectionBottom = (this.sectionTop) + elementHeight;
  }

  isShowing(): boolean {
    return this.scrollPosition >= this.sectionTop - 100 && this.scrollPosition <= this.sectionBottom + 100;
  }

  getSafeVideoUrl(): SafeResourceUrl {
    const regex = /[?&]v=([a-zA-Z0-9_-]+)/;
    const match = this.urlVideo.match(regex);
    const videoId = match ? match[1] : null;
    const urlVideo = `https://www.youtube.com/embed/${videoId}?si=Ji8T1VeYcE09jx6d&amp&autoplay=1;controls=0`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlVideo);
  }

}
