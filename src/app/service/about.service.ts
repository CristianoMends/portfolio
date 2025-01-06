import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import About from '../interface/about';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

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
  getAbout(): Observable<About[]> {
    return this.http.get<About[]>(this.API_URL + '/about',{ headers: this.getHeaders(this.TOKEN) });
  }
}
