import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-post',
  templateUrl: './dynamic-post.component.html',
  styleUrls: ['./dynamic-post.component.css']
})
export class DynamicPostComponent {
  @Input() size = 'small'
}
