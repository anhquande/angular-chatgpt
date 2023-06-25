import { Injectable } from '@angular/core';
import { Observable, from, map, tap } from 'rxjs';
import { environment } from '../environment/environment';
import { GetReplyResponse } from './chat.service.model';
import { Configuration, CreateCompletionRequest, OpenAIApi } from 'openai';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService implements ChatService {
  private openai: OpenAIApi;

  constructor() {
    this.openai = new OpenAIApi(
      new Configuration({
        apiKey: environment.openaiApiKey,
        organization: environment.openaiOrganizationId,
      }),
    );
  }

  public getReply$(prompt: string): Observable<GetReplyResponse> {
    const request: CreateCompletionRequest = {
      model: 'text-davinci-003',
      prompt: prompt,
    };

    const promise = this.openai.createCompletion(request);

    return from(promise).pipe(
      map((response) => response.data.choices),
      tap((choices) => {
        console.log('choices: ', choices);
      }),
      map((choices) =>
        choices.map((c) => ({
          text: c?.text + '',
        })),
      ),
      map((choices) => ({
        choices,
      })),
    );
  }
}
