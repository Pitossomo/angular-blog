import { Component } from '@angular/core';
import { bigPost, smallPosts } from 'src/data/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bigPost = bigPost
  smallPosts = smallPosts
}
