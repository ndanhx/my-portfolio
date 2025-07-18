import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  envoyerEmail(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-email`, formData, {
      responseType: 'text',
    });
  }
}
