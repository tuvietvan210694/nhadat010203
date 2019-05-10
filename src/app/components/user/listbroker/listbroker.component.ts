import { Component, OnInit } from '@angular/core';
import { Broker } from '../../../shared/models/broker';
import { BrokerService } from '../../../core/services/broker.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-listbroker',
  templateUrl: './listbroker.component.html',
  styleUrls: ['./listbroker.component.scss']
})
export class ListbrokerComponent implements OnInit {

  //brokers = fakeBrokers;
  // bỏ đi
  private brokers: Broker[];
  number: string;
  a: string;
  b: number;
  // thêm
  private page: number = 1;
  //private brokers: Array<any>;
  private pages: Array<number>;

  constructor(
    private brokerService: BrokerService,
    private location: Location,
  ) { }

  // getBrokersFromService(): void {
  //   //this.brokers = this.brokerService.getBrokers();
  //   this.brokerService.getBrokers().subscribe(
  //     (updateBrokers) => {
  //       this.brokers = updateBrokers;
  //       console.log(`this.brokers = ${JSON.stringify(this.brokers)}`);
  //     }
  //   );
  // }
  setPage(i, event:any){
    event.preventDefault();
    this.page=i;
    this.getBrokersFromService();
  }


  ngOnInit() {
    this.getBrokersFromService();
    this.getNumber();
  }
  getNumberSo(): number {
    
    this.a = document.getElementById("sum").innerHTML;
    
    this.b = Number(this.a);
    if(this.b % 5 === 0) {
        return this.b / 5;
    }
    return (this.b / 5) + 1;    
  }
  getBrokersFromService(): void {
    //this.brokers = this.brokerService.getBrokers();
    this.brokerService.getBrokers(this.page).subscribe(
      // (data) => {
      //   this.brokers = data;
      //   this.pages = new Array(this.brokers.length);
      //   console.log(`this.brokers = ${JSON.stringify(this.brokers)}`);
      // }
      (updateBrokers) => {
        this.brokers = updateBrokers;
        //this.pages =new Array(2);
        //this.pages = new Array(this.brokers.length - 1);
        this.pages = new Array(Math.round((this.getNumberSo())));
        console.log(`this.brokers = ${JSON.stringify(this.brokers)}`);
      }
    );
  }
  getNumber(): void {
    this.brokerService.getNumber().subscribe(
      data => {
        this.number = data;
      });
  }
  delete(brokerId: number): void {
    this.brokerService.deleteBroker(brokerId).subscribe(_ => {
      this.brokers = this.brokers.filter(eachBroker => eachBroker.id !== brokerId);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
