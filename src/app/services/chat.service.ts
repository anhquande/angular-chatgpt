import { Observable } from 'rxjs';
import { GetReplyResponse } from './chat.service.model';

export interface ChatService {
  getReply$(prompt: string): Observable<GetReplyResponse>;
}
