import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Certificate from '../interface/certificate';
import { Observable } from 'rxjs';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

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
  getCertificates(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(this.API_URL + '/certification',{ headers: this.getHeaders(this.TOKEN) });
  }
}
