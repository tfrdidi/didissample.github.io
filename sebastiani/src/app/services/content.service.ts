import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ContentService {

  private test : string;
  
  public data: Observable<string>; 

  constructor() {
    var tmp = new BehaviorSubject('test');
    tmp.next('blödsinn');
    this.data = tmp;
   }
 

}
