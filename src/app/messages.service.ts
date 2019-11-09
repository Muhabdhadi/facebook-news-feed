import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private subject = new Subject<any[]>();

  constructor() {}

  sendMessage(data: any[]) {
    this.subject.next(data);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
