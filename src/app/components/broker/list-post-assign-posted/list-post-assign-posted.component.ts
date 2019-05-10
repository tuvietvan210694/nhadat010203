import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../../core/services/broker.service';
import { BrokerAssign } from '../../../shared/models/brokerassign.model';

@Component({
  selector: 'app-list-post-assign-posted',
  templateUrl: './list-post-assign-posted.component.html',
  styleUrls: ['./list-post-assign-posted.component.css']
})
export class ListPostAssignPostedComponent implements OnInit {

 private brokerAssigns: BrokerAssign[];
  constructor(private brokerService: BrokerService) { }

  ngOnInit() {
  	this.getListPostAssignPostedComponent();
  }

  getListPostAssignPostedComponent(): void {
    this.brokerService.getlistOwnerPosted().subscribe(
       data => {
         this.brokerAssigns = data
       }
    	);

  }

}
