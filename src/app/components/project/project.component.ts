import { Component, ElementRef, HostListener, Input, NgModule, ViewChild } from '@angular/core';
import { PreviewComponent } from '../preview/preview.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [PreviewComponent, NgFor, NgIf],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() technologies: string[] = [];
  @Input() pcImagePath: string = '';
  @Input() mobileImagePath: string = '';
  @Input() urlRepository: string = '';
  @Input() urlProduction: string = '';
  @Input() urlVideo: string = '';
  

  constructor( private preview: PreviewComponent
  ){

  }

  goLink(url: string) {
    window.open(url, '_blank');
  }
  showPreview(url: string) {
    this.preview.toggleVisibility(url);
  }

  
  @ViewChild('project') element!: ElementRef;
  private scrollPosition: number = 0;
  private elementHeight: number = 0;
  private pageHeight: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY;
    this.elementHeight = this.element.nativeElement.offsetHeight;
    const rect = this.element.nativeElement.getBoundingClientRect();
    this.pageHeight = (rect.top + window.scrollY) - this.elementHeight;

    if (this.isShowing()) {
      this.addAnim();
    } else {
      this.remAnim();
    }
  }

  private isShowing(): boolean {
    return this.scrollPosition >= this.pageHeight;
  }
  private addAnim() {
    this.element.nativeElement.style.opacity = 1;
    this.element.nativeElement.style.transform = 'scale(1)';
  }
  private remAnim() {
    this.element.nativeElement.style.transform = 'scale(0)';
    this.element.nativeElement.style.opacity = 0;
  }

}
