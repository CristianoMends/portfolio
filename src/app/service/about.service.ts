import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import About from '../interface/about';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error('Erro ao carregar os dados. Tente novamente mais tarde.'));
  }

  getAbout(): Observable<About[]> {
    return this.http
      .get<About[]>(this.API_URL + '/about', { })
      .pipe(
        catchError(this.handleError)
      );
  }
}
