import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../../core/services/broker.service';
import { BrokerAssign } from '../../../shared/models/brokerassign.model';

@Component({
  selector: 'app-list-post-assign-not-post',
  templateUrl: './list-post-assign-not-post.component.html',
  styleUrls: ['./list-post-assign-not-post.component.css']
})
export class ListPostAssignNotPostComponent implements OnInit {
  private brokerAssigns: BrokerAssign[];
  constructor(private brokerService: BrokerService) { }

  ngOnInit() {
  	this.getListPostAssignNotPostComponent();
  } 

  getListPostAssignNotPostComponent(): void {
    this.brokerService.getListOwnerNotPost().subscribe(
       data => {
         this.brokerAssigns = data
       }
    	);

}
}
