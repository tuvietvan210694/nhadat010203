import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../../shared/models/customer';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CustomerService } from '../../../core/services/customer.service';

@Component({
  selector: 'app-editlistcustomer',
  templateUrl: './editlistcustomer.component.html',
  styleUrls: ['./editlistcustomer.component.scss']
})
export class EditlistcustomerComponent implements OnInit {
  @Input() customer: Customer;
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCustomerFromRoute();
  }
  getCustomerFromRoute():void {
    const id = +this.route.snapshot.paramMap.get('id'); 
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.customerService.getCustomerFromId(id).subscribe(customer => this.customer = customer);
  }
  save(): void {
    this.customerService.updateCustomer(this.customer).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
