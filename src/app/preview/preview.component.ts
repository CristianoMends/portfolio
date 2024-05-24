import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {
  constructor(private sanitizer: DomSanitizer) { }

  private static visible: boolean = false;
  private static url: string = 'https://www.youtube.com/embed/nN-u9vPlpdg?si=Ji8T1VeYcE09jx6d&amp&autoplay=1;controls=0';

  toggleVisibility(url:string) {
    this.setVideoUrl(url);
    PreviewComponent.visible = !PreviewComponent.visible
  }
  isVisible() {
    return PreviewComponent.visible;
  }
  setVideoUrl(url: string) {
    PreviewComponent.url = url;
  }

  getVideoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(PreviewComponent.url);
  }
}
