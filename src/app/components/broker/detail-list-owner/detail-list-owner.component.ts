import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PostbrokerService } from '../../../core/services/postbroker.service';
import { Owner } from '../../../shared/models/owner.model';

@Component({
  selector: 'app-detail-list-owner',
  templateUrl: './detail-list-owner.component.html',
  styleUrls: ['./detail-list-owner.component.css']
})
export class DetailListOwnerComponent implements OnInit {
  private owner: Owner;
  constructor(private postbrokerService: PostbrokerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this.getOwnerFromRoute();
  }

  getOwnerFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // dấu + convert string to number
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    // call service to "get broker from id"?
    this.postbrokerService.getOwnerFromId(id).subscribe(owner => this.owner = owner);
  }
}

