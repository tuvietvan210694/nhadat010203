import { Injectable } from '@angular/core';
// import { Broker } from '../../models/broker/broker.model';
import { ListPostApproved } from '../../shared/models/listpostapproved.model';
//Get data asynchronously with Observable
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  constructor(private http: HttpClient) { }
  
  //private brokerURL = 'https://tiger010203.herokuapp.com/rest/users';
  //private brokerURL = 'https://tiger010203.herokuapp.com/a/admin/listBroker';
  //private brokerURLdetail = 'https://tiger010203.herokuapp.com/a/admin/broker';
  //private brokerURLedit = 'https://tiger010203.herokuapp.com/a/admin/editBroker';
  //private brokerURLadd = 'https://tiger010203.herokuapp.com/a/admin/addBroker';
  //private brokerURLdelete = 'https://tiger010203.herokuapp.com/a/admin/deleteBroker';
  
  private brokerURL = 'https://tiger010203.herokuapp.com/a/admin/listBroker';
 //private brokerURL = 'https://tiger010203.herokuapp.com/a/admin/listBroker/3';
  private brokerURLdetail = 'https://tiger010203.herokuapp.com/a/admin/broker';
  private brokerURLedit = 'https://tiger010203.herokuapp.com/a/admin/editBroker1';
  private brokerURLadd = 'https://tiger010203.herokuapp.com/a/admin/addBroker';
  private brokerURLdelete = 'https://tiger010203.herokuapp.com/a/admin/broker';
  private postApprovedURL = 'https://tiger010203.herokuapp.com/a/broker/listPostApproved';
  private searchPublicURL = 'https://tiger010203.herokuapp.com/searchPublic';
  private detailPublicUrl = 'https://tiger010203.herokuapp.com/detailProductPublic';

  //  getBrokers(): Observable<Broker[]> {
  //    //return of(fakeBrokers);
  //    return this.http.get<Broker[]>(this.brokerURL).pipe(
  //      tap(receivedBrokers => console.log(`receivedBrokers = ${JSON.stringify(receivedBrokers)}`)),
  //      catchError(error => of([]))
  //    );
  //  }

  //  getBrokers(page:number): Observable<Broker[]> {
    
  //   return this.http.get<Broker[]>(this.brokerURL+'/'+page).pipe(
  //     tap(receivedBrokers => console.log(`receivedBrokers = ${JSON.stringify(receivedBrokers)}`)),
  //     catchError(error => of([]))
  //   );
  // }





  // getBrokerFromId(id: number): Observable<Broker> {
  //   // return of(fakeBrokers.find(broker => broker.id === id));
  //   const url = `${this.brokerURLdetail}/${id}`;
  //   return this.http.get<Broker>(url).pipe(
  //     tap(receivedBroker => console.log(`selected broker = ${JSON.stringify(receivedBroker)}`)),
  //     catchError(error => of(new Broker()))
  //   );
  // }

  getDetailProductPublicWithId(id: number): Observable<ListPostApproved> {
    const url = `${this.detailPublicUrl}/${id}`;
    return this.http.get<ListPostApproved>(url).pipe(
      tap(receivedPublicProduct => console.log(`selected broker = ${JSON.stringify(receivedPublicProduct)}`)),
      catchError(error => of(new ListPostApproved()))
    );
  }

  //  updateBroker(broker: Broker): Observable<any> {
  //    return this.http.put(`${this.brokerURLedit}/${broker.id}`, broker, httpOptions).pipe(
  //     tap(updateBroker => console.log(`update broker = ${JSON.stringify(updateBroker)}`)),
  //     catchError(error => of(new Broker()))
  //   );
  // }

  // addBroker(newBroker: Broker): Observable<Broker> {
  //   return this.http.post<Broker>(this.brokerURLadd, newBroker, httpOptions).pipe(
  //     tap((broker: Broker) => console.log(`add broker = ${JSON.stringify(broker)}`)),
  //     catchError(error => of(new Broker()))
  //   );
  // }

  // deleteBroker(brokerId:number): Observable<Broker> {
  //   const url = `${this.brokerURLdelete}/${brokerId}`;
  //   return this.http.delete<Broker>(url, httpOptions).pipe(
  //     tap(_ => console.log(`Delete broker = ${JSON.stringify(brokerId)}`)),
  //     catchError(error => of(null))
  //   );
  // }

  getProducts(): Observable<ListPostApproved[]> {
    
    return this.http.get<ListPostApproved[]>(this.postApprovedURL).pipe(
      tap(receivedBrokers => console.log(`receivedBrokers = ${JSON.stringify(receivedBrokers)}`)),
      catchError(error => of([]))
    );
  }


  getProductsSearch(id: String, zipcode: string): Observable<ListPostApproved[]> {
    //return this.http.get<ListPostApproved[]>(this.searchPublicURL).pipe(
     return this.http.get<ListPostApproved[]>(`${this.searchPublicURL}/${id}?zipcode=${zipcode}`).pipe(
      tap(receivedBrokers => console.log(`receivedBrokers = ${JSON.stringify(receivedBrokers)}`)),
      catchError(error => of([]))
    );
  }

  /*searchBrokers(typedString:string): Observable<Broker[]> {
    // xâu rỗng 
    if(!typedString.trim()){
      return of([]);
    }
    return this.http.get<Broker[]>(`${this.brokerURL}?name_like=${typedString}`).pipe(
      tap( foundedBrokers => console.log(`found broker = ${JSON.stringify(foundedBrokers)}`)),
      catchError(error => of(null))
    );
  } */

}
