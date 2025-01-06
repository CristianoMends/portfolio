import { Component, Input } from '@angular/core';
import Repository from '../../interface/repo';

@Component({
  selector: 'app-repository-card',
  standalone: true,
  imports: [],
  templateUrl: './repository-card.component.html',
  styleUrl: './repository-card.component.css'
})
export class RepositoryCardComponent {
  @Input() repo!: Repository;

  calculateDays(dateString: string): string {
    const init = new Date(dateString);
    const now = new Date();

    if (isNaN(init.getTime())) {
      throw new Error('Data inválida. Certifique-se de usar o formato ISO.');
    }

    const dif = now.getTime() - init.getTime();

    const difInDays = Math.floor(dif / (1000 * 60 * 60 * 24));
    const difInMonths = Math.floor(difInDays / 30);
    const difInYears = Math.floor(difInDays / 365);

    if (difInYears >= 1) {
      return `em ${init.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}`;
    }

    // Se a diferença for maior que 1 mês, mostra o mês e ano
    if (difInMonths >= 1) {
      return `em ${init.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}`;
    }

    // Exibe a diferença de dias, se for menor que 1 mês
    if (difInDays > 0) {
      return `há ${difInDays} ${difInDays === 1 ? "dia" : "dias"}`;
    } else if (difInDays === 0) {
      return "Hoje";
    }
    return '';
  }

  goLink(url: string) {
    window.open(url, '_blank');
  }
}
