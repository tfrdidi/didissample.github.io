import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivationEnd } from '@angular/router';

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
  public route: string;
  private router: Router;

  constructor(contentService: ContentService, router: Router) {
    this.router = router;
    this.contentService = contentService;

    this.router.events.subscribe(a => {
      if (a instanceof ActivationEnd) {
        this.updateRoute();
      }
    });
  }

  public ngOnInit() {
    this.updateRoute();
  }

  private updateRoute() {
    this.route = this.router.url;
  }
}
