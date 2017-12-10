import { Component, Inject } from '@angular/core';
import { ContentService } from './services/content.service';
import { Observable } from 'rxjs/Observable';
import { Page } from './model/model';
import { DOCUMENT } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public contentService: ContentService;
  public page: Observable<Page>;
  public title: string;
  public content: string;

  constructor(contentService: ContentService, @Inject(DOCUMENT) private document) {
    this.contentService = contentService;
    contentService.page.subscribe(p => {
      this.title = p.title;
      this.content = p.content;
    });

    let bases = this.document.getElementsByTagName('base');
    if (bases.length > 0) {
      bases[0].setAttribute('href', environment.baseHref);
    }
  }
}
