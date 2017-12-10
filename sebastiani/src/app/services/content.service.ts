import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

import { Page } from '../model/model';



@Injectable()
export class ContentService implements OnInit {

  private http: HttpClient;
  public page: Observable<any>; 

  constructor(http: HttpClient) {
    this.http = http;

    var mockdata = new Page();
    mockdata.title = 'Blödsinn';
    mockdata.content = '# bla blub';
    this.page = new BehaviorSubject(mockdata);

    this.page = this.http.get("assets/content/loc.json");
  }

  ngOnInit(): void {
  }

}
