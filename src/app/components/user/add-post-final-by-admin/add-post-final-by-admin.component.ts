import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostService } from '../../../core/services/post.service';
import { PostFinal } from '../../../shared/models/postfinal.model';
import { Post } from '../../../shared/models/post';
import { BrokerService } from '../../../core/services/broker.service';
import { Broker } from '../../../shared/models/broker';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-add-post-final-by-admin',
  templateUrl: './add-post-final-by-admin.component.html',
  styleUrls: ['./add-post-final-by-admin.component.css']
})
export class AddPostFinalByAdminComponent implements OnInit {
  private listPostFinals: Post[];
  private listBrokers: Broker[];
  isLoginFailed = true;
  mess: string;

  constructor(private http: HttpClient, private postService: PostService, private brokerService: BrokerService) { }

  ngOnInit() {
  	this.getAllFinalProductByAdmin();
  	this.getAllBrokersNotPaging();
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

  // addPostByAdmin(idCard: string,
  //                nameCustomer: string,
  //                phoneNumber: string,
  //                dayOfBirth: string,
  //                description: string, 
  //                idProduct: string, 
  //                brokerId: string) {

  //           const postFinal: PostFinal = new PostFinal();
  //           postFinal.idCard = idCard;
  //           postFinal.nameCustomer = nameCustomer;
  //           postFinal.phoneNumber = phoneNumber;
  //           postFinal.dayOfBirth = dayOfBirth;
  //           postFinal.description = description;
  //           postFinal.idProduct = Number(idProduct);
  //           postFinal.brokerId = Number(brokerId);
  //           console.log(postFinal);
  // }
  addPostByAdmin1(idCard: string, nameCustomer: string, phoneNumber: string, dayOfBirth: string, description: string, idProduct: string, brokerId: string) {

            const postFinal: PostFinal = new PostFinal();
            postFinal.idCard = idCard;
            postFinal.nameCustomer = nameCustomer;
            postFinal.phoneNumber = phoneNumber;
            postFinal.dayOfBirth = dayOfBirth;
            postFinal.description = description;
            postFinal.idProduct = Number(idProduct);
            postFinal.brokerId = Number(brokerId);
            console.log(postFinal);
            this.http.post('https://tiger010203.herokuapp.com/a/admin/addPostByAdminNewCustomer', postFinal, { responseType: 'text' })
    .subscribe(


        data => {

         this.isLoginFailed = false;
        // //alert("Ok, da dang ki thanh cong!!!");
         this.mess = data;
        
      });
  }

}
