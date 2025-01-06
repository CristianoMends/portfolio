import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Project from '../interface/project';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

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

  getProjects(): Observable<Project[]> {

    return this.http.get<Project[]>(this.API_URL + '/project', { headers: this.getHeaders(this.TOKEN) });
  }
}
