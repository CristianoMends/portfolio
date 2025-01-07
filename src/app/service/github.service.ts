import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import Repository from '../interface/repo';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getHeaders(token: string) {

    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  }
  getRepositories(
    sortBy: string = 'created',
    direction: string = 'desc',
    limit: number = 10,
    type: string = 'all',
    page: number = 1,
    perPage: number = 30
  ): Observable<Repository[]> {

    const params = new HttpParams()
      .set('sortBy', sortBy)
      .set('direction', direction)
      .set('limit', limit.toString())
      .set('type', type)
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    return this.http.get<Repository[]>(this.API_URL + '/github/repos', {
      params: params
    })
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error('Erro ao carregar os dados. Tente novamente mais tarde.'));
  }
}
