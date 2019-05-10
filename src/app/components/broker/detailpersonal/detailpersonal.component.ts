import { Component, OnInit } from '@angular/core';
import { Broker } from '../../../shared/models/broker';
import { BrokerService } from '../../../core/services/broker.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-detailpersonal',
  templateUrl: './detailpersonal.component.html',
  styleUrls: ['./detailpersonal.component.scss']
})
export class DetailpersonalComponent implements OnInit {
  private broker: Broker;
  constructor(private brokerService: BrokerService) { }

  ngOnInit() {
  	this.getDetailBrokers();
  }

  getDetailBrokers(): void {
  	this.brokerService.getDetailBroker().subscribe(
       broker => this.broker = broker
       
  		);
  }

}
