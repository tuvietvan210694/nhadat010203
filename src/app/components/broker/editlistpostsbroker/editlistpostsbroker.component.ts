import { Component, OnInit, Input } from '@angular/core';
import { PostbrokerService } from '../../../core/services/postbroker.service';
import { ActivatedRoute } from '@angular/router';
import { BrokerPost } from '../../../shared/models/brokerpost';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
  selector: 'app-editlistpostsbroker',
  templateUrl: './editlistpostsbroker.component.html',
  styleUrls: ['./editlistpostsbroker.component.scss']
})
export class EditlistpostsbrokerComponent implements OnInit {
  @Input() brokerPost: BrokerPost;
  selectedFile: File = null;
  isLoginFailed = true;
  mess: string;
  errorMessage = '';
  constructor(private postbrokerService: PostbrokerService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
  	this.getPostFromRoute1();
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile);
    alert(this.selectedFile.name)
  }
  editPostBrokerWithImage(): void {
    //alert("Sửa hình ảnh!!!");
    const uploadData: FormData = new FormData();
    console.log("in ra broker post");
    console.log(JSON.stringify(this.brokerPost));
    console.log(this.brokerPost.id)
    uploadData.append('postObject', JSON.stringify(this.brokerPost));
    console.log("test file");
    console.log(this.selectedFile);
    uploadData.append('file', this.selectedFile);
    this.http.put('https://tiger010203.herokuapp.com/a/broker/editPostBrokerWithImage', uploadData, { responseType: 'text' })
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
        console.log(error.error.message);
         this.errorMessage = error.error.message;
        // this.errorMessage = this.mess;
        // console.log("error roi");
        // console.log(this.errorMessage);
       }
      );

  }

  getPostFromRoute1(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // dấu + convert string to number
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    // call service to "get broker from id"?
    this.postbrokerService.getPostFromId1(id).subscribe(brokerPost => this.brokerPost = brokerPost);
  }
}
