import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Broker } from '../../../shared/models/broker';
import { BrokerService } from '../../../core/services/broker.service';
@Component({
  selector: 'app-searchlistbroker',
  templateUrl: './searchlistbroker.component.html',
  styleUrls: ['./searchlistbroker.component.scss']
})
export class SearchlistbrokerComponent implements OnInit {
  brokers$: Observable<Broker[]>;
  private searchedSubject = new Subject<string>();

  constructor(private brokerService: BrokerService) { }
  search(searchedString:string): void {
    console.log(`searchedString= ${searchedString}`);
    this.searchedSubject.next(searchedString);
  }
  ngOnInit() {
    this.brokers$ = this.searchedSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchedString:string)=>this.brokerService.searchBrokers(searchedString))
    );
  }

}
