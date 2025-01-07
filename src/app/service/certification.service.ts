import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Certificate from '../interface/certificate';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCertificates(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(this.API_URL + '/certification', {})
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error('Erro ao carregar os dados. Tente novamente mais tarde.'));
  }
}
