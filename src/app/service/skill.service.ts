import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Skill from '../interface/skill';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.API_URL + '/skill', {})
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error('Erro ao carregar os dados. Tente novamente mais tarde.'));
  }
}
