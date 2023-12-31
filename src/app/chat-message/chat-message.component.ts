import { Component, Input } from '@angular/core';
import { Message } from '../state/chat/chat.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css'],
})
export class ChatMessageComponent {
  @Input() message!: Message;
}
