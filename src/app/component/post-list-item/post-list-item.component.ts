import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../model/interface/post'

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input()
  post!: Post;

  constructor() { }

  ngOnInit(): void {
  }

  loveIt(): void {
    this.post.loveIts += 1;
  }

  hateIt(): void {
    this.post.loveIts -= 1;
  }

  color(): string {
    if (this.post.loveIts < 0) return 'red'
    else if (this.post.loveIts > 0) return 'green'
    return 'grey'
  }

}
