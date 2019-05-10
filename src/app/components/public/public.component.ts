import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../../auth/token-storage.service';
import { City } from '../../shared/models/city.model';

// import { District } from '../../shared/models/district.model';
import { Ward } from '../../shared/models/ward.model';
import { User } from '../../shared/models/user.model';
import { Catalog } from '../../shared/models/catalog.model';
import { CatalogDetail } from '../../shared/models/catalog_detail.model';
import { ListPostApproved } from '../../shared/models/listpostapproved.model';
import { PublicService } from '../../core/services/public.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

private page: number = 1;
 private pages: Array<number>;

 setPage(i, event:any) {
    event.preventDefault();
    this.page=i;
    this.getProductPublic();
  }



private userUrl = 'https://tiger010203.herokuapp.com/position/city/name1';
  private cityUrl = 'https://tiger010203.herokuapp.com/position/listCity';
  private wardUrl = 'https://tiger010203.herokuapp.com/position/city/district/name1';
  private userUrlFix = 'https://tiger010203.herokuapp.com/position/city/name1';
  private wardUrlFix = 'https://tiger010203.herokuapp.com/position/city/district/name1';

  private catalogUrl = 'https://tiger010203.herokuapp.com/listCatalog';
  private catalogdetailUrl = 'https://tiger010203.herokuapp.com/catalog';
  private catalogdetailUrlFix = 'https://tiger010203.herokuapp.com/catalog';
  // private publicAllPostUrl = 'https://tiger010203.herokuapp.com/listAllPostPublic';
  private publicAllPostUrl = 'https://tiger010203.herokuapp.com/listPostPublic';
  info: any;

  constructor(private token: TokenStorageService, private http: HttpClient, private publicService: PublicService) { }
  
  // ngOnInit() {
  //   this.info = {
  //     token: this.token.getToken(),
  //     username: this.token.getUsername(),
  //     authorities: this.token.getAuthorities()
  //   };
    
  // }

  logout() {
    this.token.signOut();
    window.location.reload();
  }

  users1: User[];
   citys: City[];
    options: City[];
    wards1: Ward[];
    catalogs: Catalog[];
    catalogdetails: CatalogDetail[];
    listPostPublic: ListPostApproved[];
  //array of months.
   months = ["January", "Feburary", "March", "April",
            "May", "June", "July", "August", "September",
            "October", "November", "December"];
            months1 = ["January", "Feburary", "March", "April",
            "May", "June", "July", "August", "September",
            "October", "November", "December"];
            months2 = ["January", "Feburary", "March", "April",
            "May", "June", "July", "August", "September",
            "October", "November", "December"];
   isavailable = true;
   myClickFunction(event) { 
      //just added console.log which will display the event details in browser on click of the button.
      alert("Button is clicked");
      console.log(event);
   }
   changemonths(event) {

     //alert("changed");
      console.log("Changed month from the Dropdown");
      console.log(event);
   }

   selectedOption: string;
   selected1Option: string;
   selected2Option: User[];
   selectedOptionCatalog: string;
   selectedOptionCatalogDetail: string;
  printedOption: string;
  var1: string;
  a: string;
  chuoi: string;
  chuoi1: string;
  address: string;
  cityName: string;
  value1: string;
  id1: string;
  zipcode: string;
  products: ListPostApproved[];

  
  // options = [
  //   { name: "option1", value: 1 },
  //   { name: "option2", value: 2 }
  // ]

  ngOnInit() {
   this.getCitys()
     .subscribe( data => {
       this.citys = data;
     });
     this.getCatalogs().subscribe(catalogs => this.catalogs = catalogs);

     this.options = this.citys;

     //this.getPostPublic();
     //this.getPostPublic(this.id1, this.zipcode);
     //this.getPostPublic(this.id1, this.zipcode);
     this.getProductPublic();

 } 

 getProductPublic(): void {

   this.getAllPostPublics(this.page).subscribe(
       (updateBrokers) => {
        this.products = updateBrokers;
        //this.pages =new Array(2);
        this.pages = new Array(3);
        console.log(`this.brokers = ${JSON.stringify(this.products)}`);
      }
    );

 }   

  print() {
    this.printedOption = this.selectedOption;
  }
  
  changeOption(event1) {
   
   // this.cityName = event1.target.options[event1.target.selectedIndex].text; 
   //this.cityName = event1.target.options[event1.target.selectedIndex].text; 
   // for(var i = 0; i < document.getElementById("stateSelect").l){
            //if(document.getElementById("stateSelect").options[i].value == c ){
               // document.getElementsByClassName("stateSelect").
        //     }
        // }

    this.chuoi = this.selectedOption;
    this.userUrl = this.userUrl +'?ma=' + this.chuoi;
    console.log(this.userUrl);
    this.getUsers()
     .subscribe( data => {
       this.users1 = data;
     });
     
     this.userUrl = this.userUrlFix;
      //this.selected2Option = this.users1;
      //console.log(this.selected2Option);
     
      //console.log("Changed month from the Dropdown");
     // console.log(event);
   }
   changeOptionCatalog(event1) {
     this.chuoi = this.selectedOptionCatalog;
     //alert(this.chuoi);
     this.catalogdetailUrl = this.catalogdetailUrl + '/' + this.chuoi;
     //alert(this.catalogdetailUrl);
     this.getCatalogDetail()
     .subscribe( data => {
       this. catalogdetails = data;
     });
     this.catalogdetailUrl = this.catalogdetailUrlFix;

   }

   changeOptionWard(event1) {
    this.chuoi1 = this.selected1Option;
    this.wardUrl = this.wardUrl +'?ma=' + this.chuoi1;
    console.log(this.wardUrl);
    this.getWards()
     .subscribe( data => {
       this.wards1 = data;
     });
     
     this.wardUrl = this.wardUrlFix;
      //this.selected2Option = this.users1;
      //console.log(this.selected2Option);
     
      console.log("Changed month from the Dropdown");
      console.log(event);
   }
   printAddress() {
    this.address = this.selectedOption + this.selected1Option + this.selected2Option;
  }

public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }
  public getCitys() {
    return this.http.get<City[]>(this.cityUrl);
  }
  public getWards() {
    return this.http.get<Ward[]>(this.wardUrl);
  }

  public getCatalogs() {
    return this.http.get<Catalog[]>(this.catalogUrl);
  }
  public getCatalogDetail() {
    return this.http.get<CatalogDetail[]>(this.catalogdetailUrl);
  }
  getPostPublic(id: string, zipcode: string): void {
    console.log(id + "      , " + zipcode);
    this.publicService.getProductsSearch(id, zipcode).subscribe(data => this.listPostPublic = data);

  }
  public getAllPostPublics(page: number): Observable<ListPostApproved[]> {
    return this.http.get<ListPostApproved[]>(this.publicAllPostUrl + "/" + page);
  }

}
