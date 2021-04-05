import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';


export abstract class CustomService {
  abstract provideData(): Observable<string | null>;
  abstract setData(data: string): void;
}



@Injectable()
export class CustomComponentServiceService implements CustomService {

  private data$: ReplaySubject<string>;

  constructor() {
    this.data$ = new ReplaySubject<string>();
  }

  provideData(): Observable<string | null> {
    return this.data$.asObservable();
  }

  setData(data: string): void {
    this.data$.next(data);
  }
}
