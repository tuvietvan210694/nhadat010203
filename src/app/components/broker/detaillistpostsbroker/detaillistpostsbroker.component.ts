import { Component, OnInit, Input } from '@angular/core';
import { PostbrokerService } from '../../../core/services/postbroker.service';
import { ActivatedRoute } from '@angular/router';
import { BrokerPost } from '../../../shared/models/brokerpost';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detaillistpostsbroker',
  templateUrl: './detaillistpostsbroker.component.html',
  styleUrls: ['./detaillistpostsbroker.component.scss']
})
export class DetaillistpostsbrokerComponent implements OnInit {
  private brokerPost: BrokerPost;
  private listBrokerPostPending: BrokerPost[];
  
  constructor(private postbrokerService: PostbrokerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this.getPostFromRoute();
    this.getPostsFromServicePending();
  }

  getPostFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // dấu + convert string to number
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    // call service to "get broker from id"?
    this.postbrokerService.getPostFromId(id).subscribe(brokerPost => this.brokerPost = brokerPost);
  }
  deletePostByBroker(): void {
    alert("Bạn có muốn xóa không???");

  }
  getPostsFromServicePending(): void {
    this.postbrokerService.getPostsPending().subscribe(
      (listPosts1) => {
        this.listBrokerPostPending = listPosts1;
        console.log(`this.postsPending = ${JSON.stringify(this.listBrokerPostPending)}`);
      }
    );
  }

  // deletePostBroker(): void {
  //   this.postbrokerService.getPostsPending().subscribe(data => this.listBrokerPostPending = data);
  // }

  deletePostBroker(brokerId: number): void {
    var flag = confirm("Bạn có muốn xoá không???");
    if(flag === true) {
      console.log("kkkkk");
    this.postbrokerService.deleteBrokerPost(brokerId).subscribe(_ => {
      this.listBrokerPostPending = this.listBrokerPostPending.filter(eachBroker => eachBroker.id !== brokerId);
      this.router.navigateByUrl('/broker/listpostsbroker');
    });
  }
  }
}

