import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/models/post';
import { PostService } from '../../../core/services/post.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls: ['./listposts.component.scss']
})
export class ListpostsComponent implements OnInit {
  private postsAll: Post[];
  private postsApproved: Post[];
  private postsPending: Post[];
  private postsMoney: Post[];
  constructor(
    private postService: PostService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getPostsFromServicePending();
    this.getPostsFromServiceAll();
    this.getPostsFromServiceApproved();
    this.getPostsMoney();
  }
  getPostsFromServiceAll(): void {
    this.postService.getPostsAll().subscribe(
      (listPosts) => {
        this.postsAll = listPosts;
        console.log(`this.postsAll = ${JSON.stringify(this.postsAll)}`);
      }
    );
  }
  getPostsFromServiceApproved(): void {
    this.postService.getPostsApproved().subscribe(
      (listPosts) => {
        this.postsApproved = listPosts;
        console.log(`this.postsApproved = ${JSON.stringify(this.postsApproved)}`);
      }
    );
  }
  getPostsFromServicePending(): void {
    this.postService.getPostsPending().subscribe(
      (listPosts1) => {
        this.postsPending = listPosts1;
        console.log(`this.postsPending = ${JSON.stringify(this.postsPending)}`);
      }
    );
  }

  getPostsMoney(): void {
    this.postService.getPostsMoney().subscribe(
      (listPosts1) => {
        this.postsMoney = listPosts1;
        console.log(`this.postsPending = ${JSON.stringify(this.postsMoney)}`);
      }
    );
  }
}
