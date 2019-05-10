import { Component, OnInit, Input } from '@angular/core';
import { Broker } from '../../../shared/models/broker';
import { BrokerService } from '../../../core/services/broker.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-editpersonal',
  templateUrl: './editpersonal.component.html',
  styleUrls: ['./editpersonal.component.scss']
})
export class EditpersonalComponent implements OnInit {
  @Input() broker: Broker;
  selectedFile: File = null;
  isLoginFailed = true;
  mess: string;
  errorMessage = '';

  constructor(private http: HttpClient, private brokerService: BrokerService) { }

  ngOnInit() {
  	this.getDetailBroker();
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile);
    alert(this.selectedFile.name)
  }

  getDetailBroker(): void {
  	this.brokerService.getDetailBroker().subscribe(broker => this.broker = broker);
  }
  uploadProfilePersonal(): void {
    const uploadData: FormData = new FormData();
    console.log(JSON.stringify(this.broker));
    uploadData.append('brokerObject', JSON.stringify(this.broker));
    console.log("test file");
    console.log(this.selectedFile);
    uploadData.append('file', this.selectedFile);
    this.http.put('https://tiger010203.herokuapp.com/a/broker/editProfileBroker', uploadData, { responseType: 'text' })
    .subscribe(

        data => {
         this.isLoginFailed = false;
        // //alert("Ok, da dang ki thanh cong!!!");
         this.mess = data;
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
  }

}
