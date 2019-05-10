import { Component, OnInit } from '@angular/core';
import { Admin } from '../../../shared/models/admin.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-leftbaruser',
  templateUrl: './leftbaruser.component.html',
  styleUrls: ['./leftbaruser.component.scss']
})
export class LeftbaruserComponent implements OnInit {
  private adminProfileUrl = 'https://tiger010203.herokuapp.com/a/admin/detail';
  private admin: Admin;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.getProfileAdminRest();
  }
  getProfileAdminRest(): void {
  	this.getProfileAdmin().subscribe(
       data => {
       	this.admin = data;
       }
  		)
  }


  getProfileAdmin(): Observable<Admin> {
    return this.http.get<Admin>(this.adminProfileUrl).pipe(
      tap(receivedBrokers => console.log(`receivedBrokers = ${JSON.stringify(receivedBrokers)}`))
    );
  }

}
