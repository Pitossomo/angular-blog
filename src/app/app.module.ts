import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { TitleTextsComponent } from './components/title-texts/title-texts.component';
import { BigPostComponent } from './components/big-post/big-post.component';
import { SmallPostComponent } from './components/small-post/small-post.component';
import { PostInfoComponent } from './shared/post-info/post-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    TitleTextsComponent,
    BigPostComponent,
    SmallPostComponent,
    PostInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
