import { Component } from '@angular/core';
import { ActiveSectionService } from '../section.service';
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
    private activeSectionService: ActiveSectionService,
    private preview: PreviewComponent
  ) { }


  projects = [
    {
      imgUrl: 'https://raw.githubusercontent.com/CristianoMends/product-catalog-app/main/docs/previewproduct.png',
      title: 'Catalogo de produtos',
      description: `
    Uma aplicação web fullstack desenvolvida com Frameworks NestJs e
    Angular com integração com Banco de dados PostgreSQL e uploads em
    Versel Blob
    `,
      videoUrl: 'https://www.youtube.com/embed/nN-u9vPlpdg?si=Ji8T1VeYcE09jx6d&amp&autoplay=1;controls=0',
      deployUrl: 'https://thecatalog.vercel.app'
    }
  ]


  isCurrentActiveSection(): boolean {
    return this.activeSectionService.getActiveSection() === 'projects';
  }
  goLink(url: string) {
    window.open(url, '_blank');
  }
  showPreview(url: string) {
    this.preview.toggleVisibility(url);
  }

}
