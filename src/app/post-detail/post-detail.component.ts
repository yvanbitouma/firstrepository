import { Component, OnInit, Input } from '@angular/core';
import {Posts} from '../Posts';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() post: Posts;
  constructor() { }

  ngOnInit() {
  }

}
