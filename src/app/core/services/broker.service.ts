import { Injectable } from '@angular/core';
import { Broker } from '../../shared/models/broker';
import { AssignBroker } from '../../shared/models/assignbroker.model';
import { BrokerAssign } from '../../shared/models/brokerassign.model';
import { Currency } from '../../shared/models/currency.model';
import { Owner } from '../../shared/models/owner.model';

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
export class BrokerService {
  constructor(private http: HttpClient) { }

  private brokerURL = 'https://tiger010203.herokuapp.com/a/admin/listBroker';
  private SumPagebrokerURL = 'https://tiger010203.herokuapp.com/a/admin/getNumberOfBrokers';
  private brokerURLdetail = 'https://tiger010203.herokuapp.com/a/admin/broker';
  private brokerURLedit = 'https://tiger010203.herokuapp.com/a/admin/editBroker1';
  private brokerURLadd = 'https://tiger010203.herokuapp.com/a/admin/addBroker';
  private brokerURLdelete = 'https://tiger010203.herokuapp.com/a/admin/broker';
  private brokerURLsearch = 'https://tiger010203.herokuapp.com/a/admin/filterBroker';
  private detailBroker = 'https://tiger010203.herokuapp.com/a/broker/detail';
  private listOwnerPostedURL = 'https://tiger010203.herokuapp.com/a/broker/listOwnerPosted';
  private listOwnerNotPostURL = 'https://tiger010203.herokuapp.com/a/broker/listOwnerNotPost';
  private listCurrencysURL = 'https://tiger010203.herokuapp.com/a/broker/listCurrencys';
  private listBrokerNotPaging = 'https://tiger010203.herokuapp.com/a/admin/listBroker';
  private listOwnerURL = "https://tiger010203.herokuapp.com/a/admin/listOwners";
  private ownerURLdetail = 'https://tiger010203.herokuapp.com/a/admin/detailOwner';
    

  //  getBrokers(): Observable<Broker[]> {
  //    return this.http.get<Broker[]>(this.brokerURL).pipe(
  //      tap(receivedBrokers => console.log(`receivedBrokers = ${JSON.stringify(receivedBrokers)}`)),
  //      catchError(error => of([]))
  //    );
  //  }

  getBrokers(page: number): Observable<Broker[]> {

    return this.http.get<Broker[]>(this.brokerURL + '/' + page).pipe(
      tap(receivedBrokers => console.log(`receivedBrokers = ${JSON.stringify(receivedBrokers)}`)),
      catchError(error => of([]))
    );
  }

  getAllBrokersNotPaging(): Observable<Broker[]> {

    return this.http.get<Broker[]>(this.listBrokerNotPaging).pipe(
      tap(receivedBrokers => console.log(`receivedBrokers = ${JSON.stringify(receivedBrokers)}`)),
      catchError(error => of([]))
    );
  }

  getListOwnerNotPost(): Observable<BrokerAssign[]> {

    return this.http.get<BrokerAssign[]>(this.listOwnerNotPostURL).pipe(
      tap(receivedBrokers => console.log(`receivedBrokers = ${JSON.stringify(receivedBrokers)}`)),
      catchError(error => of([]))
    );
  }

  getListCurrencys(): Observable<Currency[]> {

    return this.http.get<Currency[]>(this.listCurrencysURL).pipe(
      tap(receivedBrokers => console.log(`receivedBrokers = ${JSON.stringify(receivedBrokers)}`)),
      catchError(error => of([]))
    );
  }

  getlistOwnerPosted(): Observable<BrokerAssign[]> {

    return this.http.get<BrokerAssign[]>(this.listOwnerPostedURL).pipe(
      tap(receivedBrokers => console.log(`receivedBrokers = ${JSON.stringify(receivedBrokers)}`)),
      catchError(error => of([]))
    );
  }

  getDetailBroker(): Observable<Broker> {
    return this.http.get<Broker>(this.detailBroker).pipe(
      tap(receivedBrokers => console.log(`receivedBrokers = ${JSON.stringify(receivedBrokers)}`)));
  }
  //////
  getAllOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.listOwnerURL).pipe(
      tap(receivedBrokers => console.log(`receivedBrokers = ${JSON.stringify(receivedBrokers)}`)));
  }

  getNumber(): Observable<string> {
    return this.http.get(this.SumPagebrokerURL, { responseType: 'text' });
  }

  getBrokerFromId(id: number): Observable<Broker> {
    // return of(fakeBrokers.find(broker => broker.id === id));
    const url = `${this.brokerURLdetail}/${id}`;
    return this.http.get<Broker>(url).pipe(
      tap(receivedBroker => console.log(`selected broker = ${JSON.stringify(receivedBroker)}`)),
      catchError(error => of(new Broker()))
    );
  }

  getOwnerFromId(id: number): Observable<Owner> {
    // return of(fakeBrokers.find(broker => broker.id === id));
    const url = `${this.ownerURLdetail}/${id}`;
    return this.http.get<Owner>(url).pipe(
      tap(receivedBroker => console.log(`selected broker = ${JSON.stringify(receivedBroker)}`)),
      catchError(error => of(new Owner()))
    );
  }

  updateBroker(broker: Broker): Observable<any> {
    return this.http.put(`${this.brokerURLedit}/${broker.id}`, broker, httpOptions).pipe(
      tap(updateBroker => console.log(`update broker = ${JSON.stringify(updateBroker)}`)),
      catchError(error => of(new Broker()))
    );
  }

  addBroker(newBroker: Broker): Observable<Broker> {
    return this.http.post<Broker>(this.brokerURLadd, newBroker, httpOptions).pipe(
      tap((broker: Broker) => console.log(`add broker = ${JSON.stringify(broker)}`)),
      catchError(error => of(new Broker()))
    );
  }

  deleteBroker(brokerId: number): Observable<Broker> {
    const url = `${this.brokerURLdelete}/${brokerId}`;
    return this.http.delete<Broker>(url, httpOptions).pipe(
      tap(_ => console.log(`Delete broker = ${JSON.stringify(brokerId)}`)),
      catchError(error => of(null))
    );
  }

  searchBrokers(typedString:string): Observable<Broker[]> {
    // xâu rỗng 
    if(!typedString.trim()){
      return of([]);
    }
    return this.http.get<Broker[]>(`${this.brokerURLsearch}?search=${typedString}`).pipe(
      tap( foundedBrokers => console.log(`found broker = ${JSON.stringify(foundedBrokers)}`)),
      catchError(error => of(null))
    );
  } 

  getAllBrokers(): Observable<Broker[]> {

    return this.http.get<Broker[]>(this.brokerURL).pipe(
      tap(receivedBrokers => console.log(`receivedBrokers = ${JSON.stringify(receivedBrokers)}`)),
      catchError(error => of([]))
    );
  }


}
