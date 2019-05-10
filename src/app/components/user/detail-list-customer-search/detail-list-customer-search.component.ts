import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../../shared/models/customer';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CustomerService } from '../../../core/services/customer.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostService } from '../../../core/services/post.service';
import { PostFinal } from '../../../shared/models/postfinal.model';
import { Post } from '../../../shared/models/post';
import { BrokerService } from '../../../core/services/broker.service';
import { Broker } from '../../../shared/models/broker';
import { ObjectProduct } from '../../../shared/models/objectProduct.model';

@Component({
  selector: 'app-detail-list-customer-search',
  templateUrl: './detail-list-customer-search.component.html',
  styleUrls: ['./detail-list-customer-search.component.css']
})
export class DetailListCustomerSearchComponent implements OnInit {
@Input() customer: Customer;
private listPostFinals: Post[];
  private listBrokers: Broker[];
  isLoginFailed = true;
  mess: string;
  //customers: Customer[];
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location,
    private http: HttpClient,
    private postService: PostService, 
    private brokerService: BrokerService
  ) { }

  ngOnInit() {
    this.getCustomerFromRoute();
    this.getAllFinalProductByAdmin();
    this.getAllBrokersNotPaging();
  }
  getCustomerFromRoute():void {
    const id = +this.route.snapshot.paramMap.get('id'); 
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.customerService.getCustomerFromId(id).subscribe(customer => this.customer = customer);
  }
  delete(customerId:number):void {
    this.customerService.deleteCustomer(customerId).subscribe(()=>this.goBack());
  }

  getAllFinalProductByAdmin(): void {
    this.postService.getAllFinalProductByAdmin().subscribe(
        data => {
          this.listPostFinals = data;
        }
      );
  }

  getAllBrokersNotPaging(): void {
    this.brokerService.getAllBrokersNotPaging().subscribe(
        data => {
          this.listBrokers = data;
        }
      );
  }

  addPostByAdminFinal(
             id: string, 
             idProduct:string, 
             brokerId:string) {
     alert("fhfhfh");
     const postFinal: PostFinal = new PostFinal();
            postFinal.customerId = Number(id);
            //postFinal.nameCustomer = nameCustomer;
            //postFinal.phoneNumber = phoneNumber;
            //postFinal.dayOfBirth = dayOfBirth;
            //postFinal.description = description;
            postFinal.idProduct = Number(idProduct);
            postFinal.brokerId = Number(brokerId);
            console.log(postFinal);

            this.http.post('https://tiger010203.herokuapp.com/a/admin/addPostByAdminOldCustomer', postFinal, { responseType: 'text' })
    .subscribe(


        data => {

         this.isLoginFailed = false;
        // //alert("Ok, da dang ki thanh cong!!!");
         this.mess = data;       
      });
  }
  // addPost1(id: number) {
  //   alert("ghghghghghghghghhgh");
  // }


  goBack(): void {
    this.location.back();
  }
}


