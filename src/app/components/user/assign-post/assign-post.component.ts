import { Component, OnInit } from '@angular/core';
import { AssignBroker } from '../../../shared/models/assignbroker.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BrokerService } from '../../../core/services/broker.service';
import { Broker } from '../../../shared/models/broker';
import { Owner } from '../../../shared/models/owner.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-assign-post',
  templateUrl: './assign-post.component.html',
  styleUrls: ['./assign-post.component.css']
})
export class AssignPostComponent implements OnInit {
  isLoginFailed = true;
  mess: string;
  private brokers: Broker[];
  private owners: Owner[];
  constructor(private http: HttpClient, private brokerService: BrokerService) { }
  //private brokerURL = 'https://tiger010203.herokuapp.com/a/admin/listBroker';

  ngOnInit() {
  	this.getAllBrokers();
    this.getAllOwners();
  }

  // getBrokers(): Observable<AssignBroker[]> {

  //   return this.http.get<AssignBroker[]>(this.brokerURL).pipe(
  //     tap(receivedBrokers => console.log(`receivedBrokers = ${JSON.stringify(receivedBrokers)}`)),
  //     catchError(error => of([]))
  //   );
  // }
  getAllBrokers(): void {
  	this.brokerService.getAllBrokers().subscribe(
      data => {
      	this.brokers = data;
      }
  		);
  }
  getAllOwners(): void {
    this.brokerService.getAllOwners().subscribe(
      data => {
        this.owners = data;
      }
      );
  }

  assignBroker(
    ownerName: string,
    idCard: string,
    phoneNumber: string,
    address: string,
    brokerId: string
  	) {
    const assignbroker: AssignBroker = new AssignBroker();
    assignbroker.ownerName = ownerName;
    assignbroker.idCard = idCard;
    assignbroker.phoneNumber = phoneNumber;
    assignbroker.address = address;
    assignbroker.brokerId = Number(brokerId);
    console.log(assignbroker);
    this.http.post('https://tiger010203.herokuapp.com/a/admin/assignBrokerWithOwner', assignbroker, { responseType: 'text' })
    .subscribe(

       data => {

         this.isLoginFailed = false;
        //alert("Ok, da dang ki thanh cong!!!");
        this.mess = data;
        
      }
      ); 

}

}

