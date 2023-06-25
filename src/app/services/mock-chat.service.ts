import { Observable, from, map, tap } from 'rxjs';
import { ChatService } from './chat.service';
import { GetReplyResponse } from './chat.service.model';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class MockChatService implements ChatService {
  public constructor() {}

  public getReply$(prompt: string): Observable<GetReplyResponse> {
    const promise = axios.post(environment.mockOpenaiUrl + '/v1/completions');

    return from(promise).pipe(
      map((response) => response.data.choices),
      tap((choices) => {
        console.log('choices: ', choices);
      }),
      map((choices) => ({
        choices,
      })),
    );
  }
}
