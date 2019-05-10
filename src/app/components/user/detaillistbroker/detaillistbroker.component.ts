import { Component, OnInit, Input } from '@angular/core';
import { Broker } from '../../../shared/models/broker';
// thêm
import { ActivatedRoute } from '@angular/router'; 
// go back
import { Location } from '@angular/common';
import { BrokerService } from '../../../core/services/broker.service';

@Component({
  selector: 'app-detaillistbroker',
  templateUrl: './detaillistbroker.component.html',
  styleUrls: ['./detaillistbroker.component.scss']
})
export class DetaillistbrokerComponent implements OnInit {

  @Input() broker:Broker;

  brokers: Broker[];

  constructor(
    private route: ActivatedRoute,
    private brokerService: BrokerService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getBrokerFromRoute();
  }

  getBrokerFromRoute():void {
    const id = +this.route.snapshot.paramMap.get('id'); // dấu + convert string to number
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    // call service to "get broker from id"?
    this.brokerService.getBrokerFromId(id).subscribe(broker => this.broker = broker);
  }

  delete(brokerId:number):void {
    this.brokerService.deleteBroker(brokerId).subscribe(()=>this.goBack());
    //.subscribe(_ => {
    //  this.brokers = this.brokers.filter(eachBroker => eachBroker.id !== brokerId);
    //})
  }


  goBack(): void {
    this.location.back();
  }

}
