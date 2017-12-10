import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

import { Page } from '../model/model';
import { ResponseType } from '@angular/http/src/enums';



@Injectable()
export class ContentService implements OnInit {

  private http: HttpClient;
  public page: Observable<any>;
  public content: string;

  constructor(http: HttpClient) {
    this.http = http;

    var mockdata = new Page();
    mockdata.title = 'Blödsinn';
    this.page = new BehaviorSubject(mockdata);
    this.content = 'init';

    this.page = this.http.get("assets/content/loc.json");
    this.page.subscribe((p: Page) => {
      const requestOptions = Object.assign(
        {}, 
        { responseType: 'text' }, 
      );
      this.http.get(p.contentUrl, {responseType: 'text'}).subscribe(response => {
        this.content = response;
      });
    });
  }

  ngOnInit(): void {
  }

}
