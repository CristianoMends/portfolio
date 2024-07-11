import { Component, Input, NgModule } from '@angular/core';
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

}
