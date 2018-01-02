import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Page } from '../model/model';
import { ResponseType } from '@angular/http/src/enums';



@Injectable()
export class ContentService implements OnInit {

  public currentPage: Page;

  private http: HttpClient;
  private page: Observable<any>;


  constructor(http: HttpClient, router: Router) {
    this.http = http;
    console.log("Constructor of ContentService");
    this.page = this.http.get("assets/content/loc.json");
    this.page.subscribe((p: Page) => {
      this.currentPage = p;
      this.currentPage.imageUrl = "assets/images/" + p.imageUrl;
      console.log("image url: " + this.currentPage.imageUrl);
      const requestOptions = Object.assign(
        {},
        { responseType: 'text' },
      );
      this.http.get("assets/content/" + p.contentUrl, { responseType: 'text' }).subscribe(response => {
        this.currentPage.content = response;
      });
    });
  }

  ngOnInit(): void {

  }

}
