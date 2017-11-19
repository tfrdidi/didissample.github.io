import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { ContentService } from './services/content.service';

import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';


const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'test', component: ContentComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [ ContentService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
