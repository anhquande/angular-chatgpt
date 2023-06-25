import { InjectionToken } from '@angular/core';
import { ChatService } from './chat.service';

export const CHAT_SERVICE_TOKEN = new InjectionToken<ChatService>(
  'ChatServiceToken',
);
