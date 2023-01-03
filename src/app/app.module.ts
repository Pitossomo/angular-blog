import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { TitleTextsComponent } from './components/title-texts/title-texts.component';
import { HighlightedPostComponent } from './components/highlighted-post/highlighted-post.component';
import { SmallPostComponent } from './components/small-post/small-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    TitleTextsComponent,
    HighlightedPostComponent,
    SmallPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
