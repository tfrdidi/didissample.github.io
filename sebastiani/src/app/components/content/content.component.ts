import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContentService } from '../../services/content.service';
import { Page } from '../../model/model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  public contentService: ContentService;
  public page: Observable<Page>;
  public title: string;
  public content: string;
  public imageUrl: string;

  constructor(contentService: ContentService) {

    this.contentService = contentService;
    
    contentService.page.subscribe(p => {
      this.title = p.title;
      this.imageUrl = p.imageUrl;
    });
    this.content = contentService.content;
  }

}
