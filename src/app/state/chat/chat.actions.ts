import { Message } from './chat.model';

export class GetReply {
  static readonly type = '[Chat] Get Reply';
  constructor(public payload: string) {}
}

export class GetReplySuccess {
  static readonly type = '[Chat] Get Reply Success';
  constructor(public payload: any) {}
}

export class GetReplyError {
  static readonly type = '[Chat] Get Reply Error';
  constructor(public payload: any) {}
}

export class AddMessage {
  static readonly type = '[Chat] Add Message';
  constructor(public payload: Message) {}
}
