import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private API_URL = environment.apiUrl;
  private TOKEN = environment.token;

  constructor(private http: HttpClient) { }

  private getReferrer(): string {
    return document.referrer.toString();
  }
  getHeaders(token: string) {

    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  }
  saveAccess(): Observable<any> {
    const origin = this.getReferrer();
    return this.http.post<any>(this.API_URL + '/analytics', { origin }, { headers: this.getHeaders(this.TOKEN) });
  }
  getCountAccess(): Observable<number> {
    return this.http.get<number>(this.API_URL + '/analytics/count', { headers: this.getHeaders(this.TOKEN) });
  }
}
