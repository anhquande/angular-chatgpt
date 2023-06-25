import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
import { ChatState } from './state/chat/chat.state';
import { AppComponent } from './app.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { NgxsActionsExecutingModule } from '@ngxs-labs/actions-executing';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { HumanizeTimestampPipe } from './pipes/humanize-timestamp/humanize-timestamp.pipe';
import { CHAT_SERVICE_TOKEN } from './services/chat.service.token';
import { OpenaiService } from './services/openai.service';
import { MockChatService } from './services/mock-chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    ChatInputComponent,
    ChatMessageComponent,
    HumanizeTimestampPipe,
  ],
  imports: [
    NgxsModule.forRoot([ChatState]),
    NgxsActionsExecutingModule.forRoot(),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
  ],
  providers: [
    { provide: CHAT_SERVICE_TOKEN, useClass: MockChatService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
