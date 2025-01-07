import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import Project from '../interface/project';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.API_URL + '/project', {})
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error('Erro ao carregar os dados. Tente novamente mais tarde.'));
  }
}
