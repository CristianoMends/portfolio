import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Skill from '../interface/skill';
import { Observable } from 'rxjs';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

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
  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.API_URL + '/skill', { headers: this.getHeaders(this.TOKEN) });
  }
}
