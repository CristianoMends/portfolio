import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { GithubService } from '../../service/github.service';
import Repository from '../../interface/repo';
import { RepositoryCardComponent } from "../repository-card/repository-card.component";
import { LoadingService } from '../../service/loading.service';
import { LoadingComponent } from "../loading/loading.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [RepositoryCardComponent, LoadingComponent, CommonModule],
  providers: [GithubService],
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.css'
})
export class RepositoriesComponent implements AfterViewInit {

  repos: Repository[] = [];
  sortBy: string = 'created';
  direction: string = 'desc';
  limit: number = 12;
  type: string = 'all';
  page: number = 1;
  perPage: number = 3;

  @ViewChild('repositoryContainer') element!: ElementRef;

  private scrollPosition: number = 0;
  private sectionTop: number = 0;
  private sectionBottom: number = 0;

  pages: number[] = Array.from({ length: Math.ceil(this.limit / this.perPage) }, (_, index) => index + 1);


  constructor(private githubService: GithubService, public loadingService: LoadingService,) { }

  setFilter(sortBy: string, direction: string): void {
    this.sortBy = sortBy;
    this.direction = direction;
    this.getRepositories();
  }
  nextPage() {
    this.page++;
    this.getRepositories();
  }
  previousPage() {
    this.page--;
    this.getRepositories();
  }

  selectPage(index: number) {
    this.page = index;
    this.getRepositories();
  }

  getRepositories(): void {
    this.loadingService.show();
    this.githubService.getRepositories(this.sortBy, this.direction, this.limit, this.type, this.page, this.perPage).subscribe({
      next: (repositories: Repository[]) => {
        this.repos = repositories;
        this.loadingService.hide();
      },
      error: () => {
        this.loadingService.hide();
      }
    })
  }
  ngAfterViewInit(): void {
    this.getRepositories();
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
    return this.scrollPosition >= this.sectionTop - 150 && this.scrollPosition <= this.sectionBottom + 100;
  }
}
