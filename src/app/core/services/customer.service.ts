import { Injectable } from '@angular/core';
import { Customer } from '../../shared/models/customer';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Owner } from '../../shared/models/owner.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private customerURL = 'https://tiger010203.herokuapp.com/a/admin/listCustomers';
  private SumPagecustomerURL = 'https://tiger010203.herokuapp.com/a/admin/getNumberOfCustomers';
  private customerURLdetail = 'https://tiger010203.herokuapp.com/a/admin/customers';
  private customerURLadd = 'https://tiger010203.herokuapp.com/a/admin/addCustomers';
  private customerURLdelete = 'https://tiger010203.herokuapp.com/a/admin/customers';
  private customerURLedit = 'https://tiger010203.herokuapp.com/a/admin/editCustomers';
  private customerURLsearch = 'https://tiger010203.herokuapp.com/a/admin/filterCustomerNotAuthority';
  private ownerURLsearch = 'https://tiger010203.herokuapp.com/a/admin/filterOwner';

  getCustomers(page: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerURL + '/' + page).pipe(
      tap(receivedCustomers => console.log(`receivedCustomers = ${JSON.stringify(receivedCustomers)}`)),
      catchError(error => of([]))
    );
  }
  
  getNumber(): Observable<string> {
    return this.http.get(this.SumPagecustomerURL, { responseType: 'text' });
  }



  getCustomerFromId(id: number): Observable<Customer> {
    const url = `${this.customerURLdetail}/${id}`;
    return this.http.get<Customer>(url).pipe(
      tap(receivedCustomer => console.log(`selected customer = ${JSON.stringify(receivedCustomer)}`)),
      catchError(error => of(new Customer()))
    );
  }
  addCustomer(newCustomer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customerURLadd, newCustomer, httpOptions).pipe(
      tap((customer: Customer) => console.log(`add customer = ${JSON.stringify(customer)}`)),
      catchError(error => of(new Customer()))
    );
  }
  deleteCustomer(customerId: number): Observable<Customer> {
    const url = `${this.customerURLdelete}/${customerId}`;
    return this.http.delete<Customer>(url, httpOptions).pipe(
      tap(_ => console.log(`Delete customer = ${JSON.stringify(customerId)}`)),
      catchError(error => of(null))
    );
  }
  updateCustomer(customer: Customer): Observable<any> {
    return this.http.put(`${this.customerURLedit}/${customer.id}`, customer, httpOptions).pipe(
      tap(updateCustomer => console.log(`update customer = ${JSON.stringify(updateCustomer)}`)),
      catchError(error => of(new Customer()))
    );
  }
  searchCustomers(typedString:string): Observable<Customer[]> {
    // xÃ¢u rá»—ng 
    if(!typedString.trim()){
      return of([]);
    }
    return this.http.get<Customer[]>(`${this.customerURLsearch}?search=${typedString}`).pipe(
      tap( foundedCustomers => console.log(`found customer = ${JSON.stringify(foundedCustomers)}`)),
      catchError(error => of(null))
    );
  } 

searchOwners(typedString:string): Observable<Owner[]> {
    // xÃ¢u rá»—ng 
    if(!typedString.trim()){
      return of([]);
    }
    return this.http.get<Owner[]>(`${this.ownerURLsearch}?search=${typedString}`).pipe(
      tap( foundedCustomers => console.log(`found owner = ${JSON.stringify(foundedCustomers)}`)),
      catchError(error => of(null))
    );
  } 


}
