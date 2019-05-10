import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../../shared/models/customer';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CustomerService } from '../../../core/services/customer.service';
@Component({
  selector: 'app-detaillistcustomer',
  templateUrl: './detaillistcustomer.component.html',
  styleUrls: ['./detaillistcustomer.component.scss']
})
export class DetaillistcustomerComponent implements OnInit {
  @Input() customer: Customer;
  //customers: Customer[];
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
  delete(customerId:number):void {
    this.customerService.deleteCustomer(customerId).subscribe(()=>this.goBack());
  }


  goBack(): void {
    this.location.back();
  }
}
