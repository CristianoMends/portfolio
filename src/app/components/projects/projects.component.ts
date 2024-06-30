import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from "../preview/preview.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [CommonModule, PreviewComponent]
})
export class ProjectsComponent {
  constructor(
    private preview: PreviewComponent,
  ) { }

  @Input() project!:Object;

  goLink(url: string) {
    window.open(url, '_blank');
  }
  showPreview(url: string) {
    this.preview.toggleVisibility(url);
  }


}
