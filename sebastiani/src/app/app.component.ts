import { Component } from '@angular/core';
import { ContentService } from './services/content.service';
import { Observable } from 'rxjs/Observable';
import { Page } from './model/model';

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

  constructor(contentService: ContentService) {
    this.contentService = contentService;
    contentService.page.subscribe(p => {
      this.title = p.title;
      this.content = p.content;
    });
  }

}
