import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../shared/models/post';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../../../core/services/post.service';
@Component({
  selector: 'app-detaillistposts',
  templateUrl: './detaillistposts.component.html',
  styleUrls: ['./detaillistposts.component.scss']
})
export class DetaillistpostsComponent implements OnInit {
  @Input() post: Post;
  posts: Post[];
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPostFromRoute();
  }
  getPostFromRoute():void {
    const id = +this.route.snapshot.paramMap.get('id'); 
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.postService.getPostFromId(id).subscribe(post => this.post = post);
  }
}
