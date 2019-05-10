import { Component, OnInit } from '@angular/core';
import { BrokerPost } from '../../../shared/models/brokerpost';
import { PostbrokerService } from '../../../core/services/postbroker.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-listpostsbroker',
  templateUrl: './listpostsbroker.component.html',
  styleUrls: ['./listpostsbroker.component.scss']
})
export class ListpostsbrokerComponent implements OnInit {
  private postsApproved: BrokerPost[];
  private postsPending: BrokerPost[];
  private postsMoney: BrokerPost[];
  constructor(
    private postbrokerService: PostbrokerService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getPostsFromServicePending();
    this.getPostsFromServiceApproved();
    this.getAllPostCheckoutMoney();
  }
  getPostsFromServiceApproved(): void {
    this.postbrokerService.getPostsApproved().subscribe(
      (listPosts) => {
        this.postsApproved = listPosts;
        console.log(`this.postsApproved = ${JSON.stringify(this.postsApproved)}`);
      }
    );
  }
  getPostsFromServicePending(): void {
    this.postbrokerService.getPostsPending().subscribe(
      (listPosts1) => {
        this.postsPending = listPosts1;
        console.log(`this.postsPending = ${JSON.stringify(this.postsPending)}`);
      }
    );
  }

  getAllPostCheckoutMoney(): void {
    this.postbrokerService.getAllPostCheckoutMoney().subscribe(
      (listPosts1) => {
        this.postsMoney = listPosts1;
        console.log(`this.postsPending = ${JSON.stringify(this.postsPending)}`);
      }
    );
  }
  
}
