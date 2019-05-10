import { Component, OnInit, Input } from '@angular/core';
import { Broker } from '../../../shared/models/broker';
// thêm
import { ActivatedRoute } from '@angular/router';
// go back
import { Location } from '@angular/common';
import { BrokerService } from '../../../core/services/broker.service';

@Component({
  selector: 'app-editlistbroker',
  templateUrl: './editlistbroker.component.html',
  styleUrls: ['./editlistbroker.component.scss']
})
export class EditlistbrokerComponent implements OnInit {

  @Input() broker: Broker;

  constructor(
    private route: ActivatedRoute,
    private brokerService: BrokerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBrokerFromRoute();
  }

  getBrokerFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // dấu + convert string to number
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    // call service to "get broker from id"?
    this.brokerService.getBrokerFromId(id).subscribe(broker => this.broker = broker);
  }

  save(): void {
    this.brokerService.updateBroker(this.broker).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
