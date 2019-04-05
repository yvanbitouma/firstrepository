import { Component, OnInit } from '@angular/core';
import {Posts} from '../Posts';
import {POSTS} from '../mock-post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = POSTS;
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    console.log('Love It');
  }

}
