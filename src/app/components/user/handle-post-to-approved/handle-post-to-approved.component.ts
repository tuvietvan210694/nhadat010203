import { Component, OnInit, Input  } from '@angular/core';
import { Post } from '../../../shared/models/post';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-handle-post-to-approved',
  templateUrl: './handle-post-to-approved.component.html',
  styleUrls: ['./handle-post-to-approved.component.css']
})
export class HandlePostToApprovedComponent implements OnInit {
  @Input() post: Post;
  mess = '';
  constructor( private route: ActivatedRoute,
               private postService: PostService,
               private location: Location) { }

  ngOnInit() {
  	this.getPostFromRoute();
  }

  getPostFromRoute():void {
    const id = +this.route.snapshot.paramMap.get('id'); 
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.postService.getPostFromIdApproved(id).subscribe(
        data => {
        	this.post = data;

        }
    	);
  }

}
