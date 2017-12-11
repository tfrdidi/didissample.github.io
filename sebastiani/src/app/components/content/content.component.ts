import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { ContentService } from '../../services/content.service';
import { Page } from '../../model/model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public contentService: ContentService;
  public page: Observable<Page>;
  public title: string;
  public content: string;
  public imageUrl: string;
  public subpages: Array<Page>;
  public route: string;
  public url: string;
  private router: Router;

  constructor(contentService: ContentService, router: Router) {
    console.log('ContentComponent Constructor');
    this.router = router;
    this.contentService = contentService;
    
    contentService.page.subscribe(p => {
      this.title = p.title;
      this.imageUrl = "assets/images/" + p.imageUrl;
      this.subpages = p.subpages;
      this.url = p.url;
    });
    this.content = contentService.content;
  }

  public ngOnInit() {
    console.log("on init");
    this.route = this.router.url;
  }
}
