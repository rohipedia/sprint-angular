import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './sprint/header/header.component';
import { ScrumsComponent } from './sprint/scrums/scrums.component';
import { StoriesStatusComponent } from './sprint/stories-status/stories-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScrumsComponent,
    StoriesStatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
