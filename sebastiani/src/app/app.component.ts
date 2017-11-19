import { Component } from '@angular/core';
import { ContentService } from './services/content.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public contentService: ContentService;
  public title = 'app';

  constructor(contentService: ContentService) {
    this.contentService = contentService;
    this.contentService.data.subscribe(d => this.title = d);
  }

}
