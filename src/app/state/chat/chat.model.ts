export class Message {
  constructor(
    public sender: string,
    public content: string,
    public timestamp: Date,
  ) {}
}

export class ChatStateModel {
  public messages!: Message[];
}

export function initializeChatState(): ChatStateModel {
  return {
    messages: [],
  };
}
