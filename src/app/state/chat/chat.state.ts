import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { ChatStateModel, initializeChatState } from './chat.model';
import {
  AddMessage,
  GetReply,
  GetReplyError,
  GetReplySuccess,
} from './chat.actions';
import { produce } from 'immer';
import { Injectable } from '@angular/core';

@Injectable()
@State<ChatStateModel>({
  name: 'chat',
  defaults: initializeChatState(),
})
export class ChatState {
  constructor(private chatService: ChatService) {}

  @Action(GetReply)
  public getReply(ctx: StateContext<ChatStateModel>, action: GetReply) {
    return this.chatService.getReply$(action.payload).pipe(
      tap((response) => {
        ctx.dispatch(
          new AddMessage({
            sender: 'Chatbot',
            content: response.choices[0].text,
            timestamp: new Date(),
          }),
        );
      }),
      catchError((error) => {
        ctx.dispatch(
          new AddMessage({
            sender: 'Chatbot',
            timestamp: new Date(),
            content:
              "Sorry, I couldn't process your message." + JSON.stringify(error),
          }),
        );
        return throwError(() => new Error(error));
      }),
    );
  }

  @Action(AddMessage)
  public addMessage(ctx: StateContext<ChatStateModel>, action: AddMessage) {
    const newState = produce(ctx.getState(), (draft) => {
      draft.messages = [...draft.messages, action.payload];
    });
    ctx.patchState(newState);
  }
}
