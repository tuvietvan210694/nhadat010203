import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../shared/models/customer';
import { CustomerService } from '../../../core/services/customer.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.scss']
})
export class ListcustomerComponent implements OnInit {
  private customers: Customer[];
  number: string;
  a: string;
  b: number;
  private page: number = 1;
  private pages: Array<number>;
  //private pages: number;
  constructor(
    private customerService: CustomerService,
    private location: Location
  ) { }
  setPage(i, event: any) {
    event.preventDefault();
    this.page = i;
    this.getCustomersFromService();
  }
  ngOnInit() {
    this.getCustomersFromService();
    this.getNumber();
  }
  getNumberSo(): number {
    
    this.a = document.getElementById("so").innerHTML;
    
    this.b = Number(this.a);
    if(this.b % 5 === 0) {
        return this.b / 5;
    }
    return (this.b / 5) + 1;    
  }
  getCustomersFromService(): void {
    this.customerService.getCustomers(this.page).subscribe(
      (listCustomers) => {
        this.customers = listCustomers;
        this.pages = new Array(Math.round((this.getNumberSo())));
        console.log(`this.customers = ${JSON.stringify(this.customers)}`);
      }
    );
  }

  getNumber(): void {
    this.customerService.getNumber().subscribe(
      data => {
        this.number = data;
      });
  }
  
  delete(customerId: number): void {
    this.customerService.deleteCustomer(customerId).subscribe(_ => {
      this.customers = this.customers.filter(eachBroker => eachBroker.id !== customerId);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
