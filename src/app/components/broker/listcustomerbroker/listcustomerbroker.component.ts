import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../shared/models/customer';
import { CustomerbrokerService } from '../../../core/services/customerbroker.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listcustomerbroker',
  templateUrl: './listcustomerbroker.component.html',
  styleUrls: ['./listcustomerbroker.component.scss']
})
export class ListcustomerbrokerComponent implements OnInit {
  private customers: Customer[];
  constructor(
    private customerBrokerService: CustomerbrokerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCustomersFromService();
  }
  getCustomersFromService(): void {
    this.customerBrokerService.getCustomers().subscribe(
      (listCustomers) => {
        this.customers = listCustomers;
        console.log(`this.customers = ${JSON.stringify(this.customers)}`);
      }
    );
  }
}
