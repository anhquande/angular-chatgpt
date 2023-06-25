import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../environment/environment';
import { GetReplyResponse } from './chat.service.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = environment.openaiApiUrl;
  private apiKey = environment.openaiApiKey;

  constructor(private http: HttpClient) {}

  getReply$(prompt: string): Observable<GetReplyResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      }),
    };

    const body = {
      prompt: prompt,
      max_tokens: 100,
    };

    return this.http.post<any>(this.apiUrl, body, httpOptions).pipe(
      catchError((error) => {
        console.error('Error occurred in ChatService: ', error);
        return throwError(() => new Error(error));
      }),
    );
  }
}
