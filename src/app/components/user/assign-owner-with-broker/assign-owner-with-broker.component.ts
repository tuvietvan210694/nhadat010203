import { Component, OnInit } from '@angular/core';
import { Broker } from '../../../shared/models/broker';
// thêm
import { ActivatedRoute } from '@angular/router'; 
// go back
import { Location } from '@angular/common';
import { BrokerService } from '../../../core/services/broker.service';
import { Owner } from '../../../shared/models/owner.model';
import { AssignBroker } from '../../../shared/models/assignbroker.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'; 
import { AssignBrokerWithOwner } from '../../../shared/models/assignbrokerwitholdowner.model';

@Component({
  selector: 'app-assign-owner-with-broker',
  templateUrl: './assign-owner-with-broker.component.html',
  styleUrls: ['./assign-owner-with-broker.component.css']
})
export class AssignOwnerWithBrokerComponent implements OnInit {
  isLoginFailed = true;
  mess: string;
  private brokers: Broker[];
  private owners: Owner[];
  private owner:Owner;

  //brokers: Broker[];

  constructor(
    private route: ActivatedRoute,
    private brokerService: BrokerService,
    private location: Location,
    private http: HttpClient
    ) { }

  ngOnInit() {
    //this.getBrokerFromRoute();
    this.getOwnerFromRoute();
    this.getAllBrokers();
    this.getAllOwners();
  }

  getOwnerFromRoute():void {
    const id = +this.route.snapshot.paramMap.get('id'); // dấu + convert string to number
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    // call service to "get broker from id"?
    this.brokerService.getOwnerFromId(id).subscribe(owner => this.owner = owner);
  }

  // delete(brokerId:number):void {
  //   this.brokerService.deleteBroker(brokerId).subscribe(()=>this.goBack());
    //.subscribe(_ => {
    //  this.brokers = this.brokers.filter(eachBroker => eachBroker.id !== brokerId);
    //})
  //}

  goBack(): void {
    this.location.back();
  }
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

//   assignBroker(
//     ownerName: string,
//     idCard: string,
//     brokerId: string
//     ) {
//     const assignbroker: AssignBroker = new AssignBroker();
//     assignbroker.ownerName = ownerName;
//     assignbroker.idCard = idCard;
//     assignbroker.brokerId = Number(brokerId);
//     console.log(assignbroker);
//     this.http.post('https://tiger010203.herokuapp.com/a/admin/assignBrokerWithOwner', assignbroker, { responseType: 'text' })
//     .subscribe(

//        data => {

//          this.isLoginFailed = false;
//         //alert("Ok, da dang ki thanh cong!!!");
//         this.mess = data;
        
//       }
//       ); 

// }
    assignBrokerWithOwner(
           brokerId: string, 
           ownerId: string
           ) {
      alert("xin cchao!!!");
      const assignBrokerWithOwner: AssignBrokerWithOwner = new AssignBrokerWithOwner();
      assignBrokerWithOwner.brokerId = Number(brokerId);
      assignBrokerWithOwner.ownerId = Number(ownerId);
      console.log(assignBrokerWithOwner);
      this.http.post('https://tiger010203.herokuapp.com/a/admin/assignBrokerWithOldOwner', assignBrokerWithOwner, { responseType: 'text'})
      .subscribe(
         data => {
           this.isLoginFailed = false;
           this.mess = data;
         }
        );
    }

}



