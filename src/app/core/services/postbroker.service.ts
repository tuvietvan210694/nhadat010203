import { Injectable } from '@angular/core';
import { BrokerPost } from '../../shared/models/brokerpost';
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
export class PostbrokerService {

  constructor(private http: HttpClient) { }
  private postURLApproved = 'https://tiger010203.herokuapp.com/a/broker/listPostApproved/1';
  private postURLPending = 'https://tiger010203.herokuapp.com/a/broker/listPostPending/1';
  private detailPostURL = "https://tiger010203.herokuapp.com/a/broker/post";
  private getAllPostWithBrokerURL = "https://tiger010203.herokuapp.com/a/broker/getAllPostWithBroker";
  private getDetailOwnerURL = 'https://tiger010203.herokuapp.com/a/broker/detailOwner';
  getPostsApproved(): Observable<BrokerPost[]> {
    return this.http.get<BrokerPost[]>(this.postURLApproved).pipe(
      tap(receivedPosts => console.log(`receivedPosts = ${JSON.stringify(receivedPosts)}`)),
      catchError(error => of([]))
    );
  }
  getPostsPending(): Observable<BrokerPost[]> {
    return this.http.get<BrokerPost[]>(this.postURLPending).pipe(
      tap(receivedPosts => console.log(`receivedPosts = ${JSON.stringify(receivedPosts)}`)),
      catchError(error => of([]))
    );
  }

  getAllPostCheckoutMoney(): Observable<BrokerPost[]> {
    return this.http.get<BrokerPost[]>(this.getAllPostWithBrokerURL).pipe(
      tap(receivedPosts => console.log(`receivedPosts = ${JSON.stringify(receivedPosts)}`)),
      catchError(error => of([]))
    );
  }

  getPostFromId(id: number): Observable<BrokerPost> {
    // return of(fakeBrokers.find(broker => broker.id === id));
    const url = `${this.detailPostURL}/${id}`;
    return this.http.get<BrokerPost>(url).pipe(
      tap(receivedBroker => console.log(`selected broker = ${JSON.stringify(receivedBroker)}`)),
      catchError(error => of(new BrokerPost()))
    );
  }

  getOwnerFromId(id: number): Observable<Owner> {

    const url = `${this.getDetailOwnerURL}/${id}`;
    return this.http.get<Owner>(url).pipe(
      tap(receivedBroker => console.log(`selected broker = ${JSON.stringify(receivedBroker)}`)),
      catchError(error => of(new Owner()))
    );
  }

  getPostFromId1(id: number): Observable<BrokerPost> {
    // return of(fakeBrokers.find(broker => broker.id === id));
    const url = `${this.detailPostURL}/${id}`;
    return this.http.get<BrokerPost>(url).pipe(
      tap(receivedBroker => console.log(`selected broker = ${JSON.stringify(receivedBroker)}`)),
      catchError(error => of(new BrokerPost()))
    );
  }
  deleteBrokerPost(brokerId: number): Observable<BrokerPost> {
    const url = `${this.detailPostURL}/${brokerId}`;
    return this.http.delete<BrokerPost>(url, httpOptions).pipe(
      tap(_ => console.log(`Delete broker = ${JSON.stringify(brokerId)}`)),
      catchError(error => of(null))
    );
  }

}
