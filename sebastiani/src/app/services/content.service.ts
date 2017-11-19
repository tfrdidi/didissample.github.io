import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Page } from '../model/model';

@Injectable()
export class ContentService implements OnInit {

  public page: Observable<Page>; 

  constructor() {
    var mockdata = new Page();
    mockdata.title = 'Blödsinn';
    mockdata.content = '# bla blub';
    this.page = new BehaviorSubject(mockdata);
  }

  ngOnInit(): void {
  }

}
