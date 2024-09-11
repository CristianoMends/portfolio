import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [NgIf],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {
  constructor(private sanitizer: DomSanitizer) {} 

  @Input() link!:string;
  getLink():SafeResourceUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }
}
