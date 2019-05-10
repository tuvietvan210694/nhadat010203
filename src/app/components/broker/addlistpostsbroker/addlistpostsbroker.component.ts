import { Component, OnInit } from '@angular/core';
import { NewPostDTOBroker } from '../../../shared/models/newpostdtobroker.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BrokerService } from '../../../core/services/broker.service';
import { Currency } from '../../../shared/models/currency.model';
import { PublicService } from '../../../core/services/public.service';
import { Catalog } from '../../../shared/models/catalog.model';
import { CatalogDetail } from '../../../shared/models/catalog_detail.model';
import { Owner } from '../../../shared/models/owner.model';
import { City } from '../../../shared/models/city.model';
// import { District } from '../../shared/models/district.model';
import { Ward } from '../../../shared/models/ward.model';
import { User } from '../../../shared/models/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-addlistpostsbroker',
  templateUrl: './addlistpostsbroker.component.html',
  styleUrls: ['./addlistpostsbroker.component.scss']
})
export class AddlistpostsbrokerComponent implements OnInit {
  title = 'uploadImage'

  private userUrl = 'https://tiger010203.herokuapp.com/position/city/name1';
  private cityUrl = 'https://tiger010203.herokuapp.com/position/listCity';
  private wardUrl = 'https://tiger010203.herokuapp.com/position/city/district/name1';
  private userUrlFix = 'https://tiger010203.herokuapp.com/position/city/name1';
  private wardUrlFix = 'https://tiger010203.herokuapp.com/position/city/district/name1';
  private catalogUrl = 'https://tiger010203.herokuapp.com/a/broker/listCatalog';
  private catalogdetailUrl = 'https://tiger010203.herokuapp.com/a/broker/catalog';
  private catalogdetailUrlFix = 'https://tiger010203.herokuapp.com/a/broker/catalog';
  private ownerURL = 'https://tiger010203.herokuapp.com/a/broker/listOwnersWithBrokerAndTrangThai';
  info: any;
  catalogs: Catalog[];
  catalogdetails: CatalogDetail[];
  selectedOptionCatalog: string;
  selectedOptionCatalogDetail: string;
  chuoi: string;

  constructor(private http: HttpClient, private brokerService: BrokerService, private publicService: PublicService) { }
  
  selectedFile: File;
  isLoginFailed = true;
  mess: string;
  errorMessage = '';
  private currencys: Currency[];
  private owners: Owner[];
  users1: User[];
  citys: City[];
  options: City[];
  wards1: Ward[];
  selectedOption: string;
  selected1Option: string;
  selected2Option: User[];
  chuoi1: string;

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile);
    alert(this.selectedFile.name)
  }

  ngOnInit() {
    this.getListCurrencys();
    this.getCatalogs().subscribe(catalogs => this.catalogs = catalogs);
    this.getListOwners().subscribe(owners => this.owners = owners);
    this.getCitys()
     .subscribe( data => {
       this.citys = data;
     });

  }

  getListCurrencys(): void {
     this.brokerService.getListCurrencys().subscribe(
        data => {
          this.currencys = data;
        }
       );
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

   public getCatalogs() {
    return this.http.get<Catalog[]>(this.catalogUrl);
  }

   public getCatalogDetail() {
    return this.http.get<CatalogDetail[]>(this.catalogdetailUrl);
  }
  public getListOwners() {
    return this.http.get<Owner[]>(this.ownerURL);
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


  addPostBroker(productAcreage: string,
  	            productCost: string,
  	            productDescription:string,
  	            productLocation:string,
  	            productName:string,
  	            zipCode:string,
  	            currencyId:string,
  	            ownerId:string,
  	            catalogDetailId: string) {

  	// const signUp: SignUp = new SignUp();
   //  signUp.email = email;
   //  signUp.name = name;
   //  signUp.address = address;
   //  signUp.dateOfBirth = date;
   //  signUp.phoneNumber = phonenumber;
   //  signUp.gender = JSON.parse(sex);

    //alert("a");
   //  signUp.password = password;
   //  //alert(password);
   //  signUp.passwordConfirm = confirmpassword;
   const newPostDTOBroker: NewPostDTOBroker = new NewPostDTOBroker();
   newPostDTOBroker.productAcreage = Number(productAcreage);
   newPostDTOBroker.productCost = Number(productCost);
   newPostDTOBroker.productDescription = productDescription;
   newPostDTOBroker.productLocation = productLocation;
   newPostDTOBroker.productName = productName;
   newPostDTOBroker.zipCode = zipCode; 
   newPostDTOBroker.currencyId = Number(currencyId);
   newPostDTOBroker.ownerId = Number(ownerId);
   newPostDTOBroker.catalogDetailId = Number(catalogDetailId);
   alert(productAcreage);
   console.log("Doi tuong o duoi!!!");
   console.log(newPostDTOBroker);
   console.log("Kiem tra file co rong hay khong!!!");
   console.log(this.selectedFile);
   const uploadData: FormData = new FormData();
   uploadData.append('file', this.selectedFile);
   uploadData.append('newPost', JSON.stringify(newPostDTOBroker));
   console.log("kkkkkkkkkkkkk");
  console.log(JSON.stringify(newPostDTOBroker));
  console.log(uploadData);
   this.http.post('https://tiger010203.herokuapp.com/a/broker/addNewPostAndUploadFile', uploadData, { responseType: 'text' })
    .subscribe(


        data => {

         this.isLoginFailed = false;
        // //alert("Ok, da dang ki thanh cong!!!");
         this.mess = data;
        alert("Ban da dang bai thanh cong!!!");
        
      },
      error => {
        this.isLoginFailed = true;
        // this.mess = error;
        // console.log(this.mess);
         this.errorMessage = error.error.message;
        // this.errorMessage = this.mess;
        // console.log("error roi");
        // console.log(this.errorMessage);
        
       }
      );

   // this.http.post('https://tiger010203.herokuapp.com/a/broker/addNewPostAndUploadFile', uploadData)
   //  .subscribe();
   //  alert("Ban da upload thanh cong" + this.selectedFile.name);
  }
}

