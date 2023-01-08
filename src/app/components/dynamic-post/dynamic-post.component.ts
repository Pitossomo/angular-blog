import { Component, Input } from '@angular/core';

export interface IPost {
  id: string,
  title: string,
  imgAlt: string,
  category: string,
  durationInMinutes: number,
  author: {
    name: string,
    id: string
  },
  date: string
}

@Component({
  selector: 'app-dynamic-post',
  templateUrl: './dynamic-post.component.html',
  styleUrls: ['./dynamic-post.component.css']
})

export class DynamicPostComponent {
  @Input() size: string = 'small'
  @Input() post: IPost = {
    id: '1',
    title: 'The 3 Best Practices in Sales Prospecting',
    imgAlt: 'placeholder',
    category: 'Sales Ops',
    durationInMinutes: 8,
    author: {
      name: 'Pitossomo',
      id: '1'
    },
    date: '07 jan 2023'
  }
}
