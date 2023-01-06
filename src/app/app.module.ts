import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { TitleTextsComponent } from './components/title-texts/title-texts.component';
import { PostInfoComponent } from './components/post-info/post-info.component';
import { DynamicPostComponent } from './components/dynamic-post/dynamic-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    TitleTextsComponent,
    PostInfoComponent,
    DynamicPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
