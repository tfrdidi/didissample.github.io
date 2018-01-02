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

  constructor( @Inject(DOCUMENT) private document) {
    let bases = this.document.getElementsByTagName('base');
    if (bases.length > 0) {
      bases[0].setAttribute('href', environment.baseHref);
    }
  }
}
