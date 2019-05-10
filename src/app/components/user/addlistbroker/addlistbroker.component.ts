import { Component, OnInit } from '@angular/core';
import { Broker } from '../../../shared/models/broker';
import { BrokerService } from '../../../core/services/broker.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addlistbroker',
  templateUrl: './addlistbroker.component.html',
  styleUrls: ['./addlistbroker.component.scss']
})
export class AddlistbrokerComponent implements OnInit {
  //url = "http://localhost:4200/listbroker"
  brokers: Broker[];
  constructor(
    private route: ActivatedRoute,
    private brokerService: BrokerService,
    private location: Location,
    private router: Router

  ) { }

  ngOnInit() {
  }
  add(email: string, nameBroker: string, active: boolean, nonDel: boolean, gender: boolean, phoneNumber: string, address: string, dateOfBirth: string, password: string, nonBlock: boolean) {
    const newBroker: Broker = new Broker();
    newBroker.email = email;
    newBroker.nameBroker = nameBroker;
    newBroker.active = active;
    newBroker.nonDel = nonDel;
    newBroker.gender = gender ;
    newBroker.phoneNumber = phoneNumber;
    newBroker.address = address;
    newBroker.dateOfBirth = dateOfBirth;
    newBroker.password = password;
    newBroker.nonBlock = nonBlock;
    // const newBroker: Broker = new Broker();
    // newBroker.email = "duonghongha3123123@gmail.com";
    // newBroker.nameBroker = "van";
    // newBroker.active = true;
    // newBroker.nonDel = true;
    // newBroker.gender = false;
    // newBroker.phoneNumber = "0986867564";
    // newBroker.address = "Hoa Vang";
    // newBroker.dateOfBirth = "1997-09-08 00:00:00";
    // newBroker.password = "abc123@H";
    // newBroker.nonBlock = true
    this.brokerService.addBroker(newBroker)
      .subscribe(() => this.goBack());
  }
  // add(name: string) {
  //   const newBroker: Broker = new Broker();
  //   newBroker.name = name;
  //   this.brokerService.addBroker(newBroker)
  //     .subscribe(insertBroker => {
  //       this.brokers.push(insertBroker );
  //     });

  //     //this.brokerService.updateBroker(this.broker).subscribe(() => this.goBack());
  // }
  // add(name: string) {
  //   const newBroker: Broker = new Broker();
  //   newBroker.name = name;
  //   this.brokerService.addBroker(newBroker)
  //     .subscribe(() => this.goBack());
  // }
  goBack(): void {
    this.location.back();
  }
}
