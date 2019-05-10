import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Customer } from '../../../shared/models/customer';
import { CustomerService } from '../../../core/services/customer.service';
@Component({
  selector: 'app-searchlistcustomer',
  templateUrl: './searchlistcustomer.component.html',
  styleUrls: ['./searchlistcustomer.component.css']
})
export class SearchlistcustomerComponent implements OnInit {
  customers$: Observable<Customer[]>;
  private searchedSubject = new Subject<string>();

  constructor(private customerService: CustomerService) { }
  search(searchedString:string): void {
    console.log(`searchedString= ${searchedString}`);
    this.searchedSubject.next(searchedString);
  }

  ngOnInit() {
    this.customers$ = this.searchedSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchedString:string)=>this.customerService.searchCustomers(searchedString))
    );
  }

}

