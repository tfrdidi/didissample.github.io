import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Router, ActivationEnd } from '@angular/router';

import { Page } from '../model/model';
import { ResponseType } from '@angular/http/src/enums';



@Injectable()
export class ContentService {

  public currentPage: Page;
  public completePage: Page;


  constructor(private http: HttpClient, private router: Router) {
    this.http = http;
    console.log("Constructor of ContentService");
    this.loadInitPage();
  }

  private loadInitPage() {
    this.http.get("assets/content/loc.json").subscribe((p: Page) => {
      this.completePage = p;

      this.completePage.imageUrl = "assets/images/" + p.imageUrl;
      this.completePage.contentUrl = "assets/content/" + p.contentUrl;
      this.completePage.subpages.forEach(s => {
        s.imageUrl = "assets/images/" + s.imageUrl;
        s.contentUrl = "assets/content/" + s.contentUrl;
      });

      this.http.get(p.contentUrl, { responseType: 'text' }).subscribe(response => {
        this.completePage.content = response;
        this.updateCurrentPage();
      });
      this.router.events.subscribe(a => {
        if (a instanceof ActivationEnd) {
          this.updateCurrentPage();
        }
      });
    });
  }

  private updateCurrentPage() {
    var newUrl = this.router.url;
    console.log("updateCurrentPage: " + newUrl);
    if (this.completePage.url === newUrl) {
      this.currentPage = this.completePage;
    }
    else {
      var newPage = this.completePage.subpages.find(s => s.url === newUrl);
      if (newPage != undefined) {
        this.currentPage = newPage;
        if (newPage.content == undefined || newPage.content.length < 1) {
          this.http.get(newPage.contentUrl, { responseType: 'text' }).subscribe(response => {
            newPage.content = response;
          });
        }
      }
      else {
        this.currentPage = new Page();
        this.currentPage.title = "Gibt's nicht";
      }
    }
  }

}
