import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from '../project/project.component';
import { ProjectService } from '../../service/project.service';
import Project from '../../interface/project';
import { PreviewComponent } from "../preview/preview.component";
import { SafeResourceUrl } from '@angular/platform-browser';
import { HttpHeaders } from '@angular/common/http';
import { LoadingComponent } from "../loading/loading.component";
import { LoadingService } from '../../service/loading.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [ProjectService],
  imports: [CommonModule, ProjectComponent, PreviewComponent, LoadingComponent]
})
export class ProjectsComponent implements OnInit {

  constructor(
    private projectService: ProjectService, public loadingService: LoadingService
  ) { }

  projects: Project[] = [];
  isComponentePreviewVisible = false;
  url: SafeResourceUrl | string = '';
  
  ngOnInit(): void {
    this.loadingService.show();
    this.projectService.getProjects().subscribe({
      next: (p) => {
        this.projects = p;
        this.loadingService.hide();
      }, error: () => {
        this.loadingService.hide();
      }
    })
  }
  goLink(url: string) {
    window.open(url, '_blank');
  }
  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getHeaders() {
    const token = this.getAuthToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  }
  showPreview(url: SafeResourceUrl) {
    this.isComponentePreviewVisible = true;
    this.url = url;
  }


}
