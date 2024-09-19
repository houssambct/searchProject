import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "https://api.beta.all.site/api/v1/search/search";
  private authUrl = "https://api.beta.all.site/api/v1/user/guest/login";
  private token: string = "";

  constructor(private http: HttpClient) {}

  authenticate(): Observable<any> {
    const body = {
      username: "candidate@adelean.com",
      password: "candidateforadelean",
    };

    return this.http.post<any>(this.authUrl, body).pipe(
      map((response) => {
        if (response.accessToken) {
          this.token = response.accessToken;
        }
      })
    );
  }

  search(query: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    const body = {
      text: query,
      searchEngineId: "5fd744113dd37c717e16356a",
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
