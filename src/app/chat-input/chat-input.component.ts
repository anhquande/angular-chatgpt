import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { NgForm } from '@angular/forms';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs';
import {
  actionsExecuting,
  ActionsExecuting,
} from '@ngxs-labs/actions-executing';
import { AddMessage, GetReply } from '../state/chat/chat.actions';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css'],
})
export class ChatInputComponent {
  @Select(actionsExecuting([GetReply]))
  getReplyExecuting$!: Observable<ActionsExecuting>;

  constructor(private store: Store) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const message = form.value.message;
      this.store.dispatch(
        new AddMessage({
          sender: 'user',
          timestamp: new Date(),
          content: message,
        }),
      );
      form.reset();

      this.store.dispatch(new GetReply(message));
    }
  }
}
