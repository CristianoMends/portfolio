import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  private getReferrer(): string {
    return document.referrer.toString();
  }
  saveAccess(): Observable<any> {
    const origin = this.getReferrer();
    return this.http.post<any>(this.API_URL + '/analytics', { origin }, {})
      .pipe(
        catchError(this.handleError)
      );
  }
  getCountAccess(): Observable<number> {
    return this.http.get<number>(this.API_URL + '/analytics/count', {})
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error('Erro ao carregar os dados. Tente novamente mais tarde.'));
  }
}
