import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from "./pages/main/main.component";
import { AnalyticsService } from './service/analytics.service';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AnalyticsService],
  imports: [HttpClientModule, FormsModule, MainComponent]
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private analyticsService: AnalyticsService) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.analyticsService.saveAccess().subscribe({
        next: () => {
        }
      })
    }
  }
}
