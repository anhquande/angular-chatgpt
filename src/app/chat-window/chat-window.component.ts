import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, takeUntil } from 'rxjs';
import { Message } from '../state/chat/chat.model';
import { AppStateModel } from '../state/app.model';
import { AddMessage } from '../state/chat/chat.actions';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
})
export class ChatWindowComponent implements OnInit, AfterViewInit {
  @ViewChild('messageList', { static: false, read: ElementRef })
  messageListRef!: ElementRef<HTMLElement>;

  @Select((state: AppStateModel) => state.chat.messages) messages$!: Observable<
    Message[]
  >;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.messages$.pipe(untilDestroyed(this)).subscribe(() => {
      this.scrollToBottom();
    });
  }
  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    setTimeout(() => {
      const messageList = this.messageListRef.nativeElement.firstElementChild;
      console.log('*** messageList ', messageList);

      if (messageList) {
        const lastItem = messageList.lastElementChild;
        if (lastItem) {
          lastItem.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      }
    }, 100);
  }
}
