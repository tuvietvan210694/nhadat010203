import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Owner } from '../../../shared/models/owner.model';
import { CustomerService } from '../../../core/services/customer.service';

@Component({
  selector: 'app-searchlistowner',
  templateUrl: './searchlistowner.component.html',
  styleUrls: ['./searchlistowner.component.css']
})
export class SearchlistownerComponent implements OnInit {
  owners$: Observable<Owner[]>;
  private searchedSubject = new Subject<string>();

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  	this.owners$ = this.searchedSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchedString:string)=>this.customerService.searchOwners(searchedString))
    );
  }

  search(searchedString:string): void {
    console.log(`searchedString= ${searchedString}`);
    this.searchedSubject.next(searchedString);
  }

}

