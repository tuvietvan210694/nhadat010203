import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../shared/models/customer';
import { CustomerService } from '../../../core/services/customer.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addlistcustomer',
  templateUrl: './addlistcustomer.component.html',
  styleUrls: ['./addlistcustomer.component.scss']
})
export class AddlistcustomerComponent implements OnInit {

  customers: Customer[];
  

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }
  add(idCard: string, nameCustomer: string, phoneNumber: string,dayOfBirth: string, description: string) {
    const newCustomer: Customer = new Customer();
    newCustomer.idCard = idCard;
    newCustomer.nameCustomer = nameCustomer;
    newCustomer.phoneNumber = phoneNumber;
    newCustomer.dayOfBirth = dayOfBirth;
    newCustomer.description = description ;
    this.customerService.addCustomer(newCustomer)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

}
