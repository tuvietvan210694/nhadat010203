import { Injectable } from '@angular/core';
import { Customer } from '../../shared/models/customer';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerbrokerService {

  constructor(private http: HttpClient) { }

  private listCustomerInBroker = 'https://tiger010203.herokuapp.com/a/broker/listCustomers';
  private detailCustomerInBroker = 'https://tiger010203.herokuapp.com/a/broker/customers';

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.listCustomerInBroker).pipe(
      tap(receivedCustomers => console.log(`receivedCustomers = ${JSON.stringify(receivedCustomers)}`)),
      catchError(error => of([]))
    );
  }

  getCustomerFromId(id: number): Observable<Customer> {
    const url = `${this.detailCustomerInBroker}/${id}`;
    return this.http.get<Customer>(url).pipe(
      tap(receivedCustomer => console.log(`selected customer = ${JSON.stringify(receivedCustomer)}`)),
      catchError(error => of(new Customer()))
    );
  }

}
