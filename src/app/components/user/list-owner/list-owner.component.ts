import { Component, OnInit } from '@angular/core';
import { Owner } from '../../../shared/models/owner.model';
import { BrokerService } from '../../../core/services/broker.service';


@Component({
  selector: 'app-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.css']
})
export class ListOwnerComponent implements OnInit {
  private owners: Owner[];
  constructor(private brokerService: BrokerService) { }

  ngOnInit() {
  	this.getAllOwners();
  }

  getAllOwners(): void {
    this.brokerService.getAllOwners().subscribe(
      data => {
        this.owners = data;
      }
      );
  }

}
