import { Component, OnInit, Input } from '@angular/core';
import { CustomerbrokerService } from '../../../core/services/customerbroker.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../../shared/models/customer';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detaillistcustomerbroker',
  templateUrl: './detaillistcustomerbroker.component.html',
  styleUrls: ['./detaillistcustomerbroker.component.css']
})
export class DetaillistcustomerbrokerComponent implements OnInit {
  @Input() customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private customerBrokerService: CustomerbrokerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCustomerFromRoute();
  }
  getCustomerFromRoute():void {
    const id = +this.route.snapshot.paramMap.get('id'); 
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.customerBrokerService.getCustomerFromId(id).subscribe(customer => this.customer = customer);
  }
}
