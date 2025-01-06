import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import Repository from '../interface/repo';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private API_URL = environment.apiUrl;
  private TOKEN = environment.token;

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
      headers: this.getHeaders(this.TOKEN),
      params: params
    });
  }
}
