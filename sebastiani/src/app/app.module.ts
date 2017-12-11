import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentService } from './services/content.service';
import { ContentComponent } from './components/content/content.component';


const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: '**', component: ContentComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ 
    ContentService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
