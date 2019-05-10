import { Component, OnInit } from '@angular/core';
import { ListPostApproved } from '../../shared/models/listpostapproved.model';
import { PublicService } from '../../core/services/public.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-public-detail',
  templateUrl: './public-detail.component.html',
  styleUrls: ['./public-detail.component.css']
})
export class PublicDetailComponent implements OnInit {
  postApproved: ListPostApproved;
  constructor(private publicService: PublicService,
  	          private route: ActivatedRoute,
  	          private location: Location

  	) { }
  ngOnInit() {
  	this.getDetailProductPublic();
  }
  submitted = false;

  onSubmit1() { 
    this.submitted = true; 
    alert("ban da submit thanh cong...");
    location.reload();
  }

  getDetailProductPublic(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.publicService.getDetailProductPublicWithId(id)
      .subscribe(hero => this.postApproved = hero);

  }
  goBack(): void {
    this.location.back();
  }
}
