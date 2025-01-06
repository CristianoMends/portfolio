import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnalyticsService } from '../../service/analytics.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  providers: [AnalyticsService],
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  qtd: number = 0;
  year = new Date().getFullYear();

  constructor(private service: AnalyticsService) {
    service.getCountAccess().subscribe({
      next: (value) => {
        this.qtd = value;
      }
    });
  }

}
