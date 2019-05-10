import { Component, OnInit } from '@angular/core';
import { Owner } from '../../../shared/models/owner.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-list-owner-broker',
  templateUrl: './list-owner-broker.component.html',
  styleUrls: ['./list-owner-broker.component.css']
})
export class ListOwnerBrokerComponent implements OnInit {
  private ownerURL = 'https://tiger010203.herokuapp.com/a/broker/listOwnersWithBroker';
  private owners: Owner[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.getListOwners().subscribe(owners => this.owners = owners);
  }
  public getListOwners() {
    return this.http.get<Owner[]>(this.ownerURL);
  }

}


