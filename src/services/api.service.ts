import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ExternalCall } from 'src/models/external-call';

@Injectable()
export class ApiService {

  ngOnInit(): void {
  }

  subject = new Subject<ExternalCall>();
  secondLongCall$ = this.subject.asObservable();
  
  getLongCall(): Observable<ExternalCall>{
    setInterval(() => {
      let randomString = (Math.random() + 1).toString(36).substring(7);
      this.subject.next({ randomValue: randomString })
    }, 1000);
    return this.secondLongCall$;
  }
}
