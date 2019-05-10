import { Component, OnInit } from '@angular/core';
import { ForgetPassword } from '../../shared/models/forgetpassword.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  isLoginFailed = true;
  mess: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  forgetPassword(email: string) {
  	const forgetPassword: ForgetPassword = new ForgetPassword();
  	forgetPassword.email = email;
  	console.log(forgetPassword);

  	this.http.post('https://tiger010203.herokuapp.com/forget-password1', forgetPassword, { responseType: 'text' })
    .subscribe(
       data => {
         this.isLoginFailed = false;
        //alert("Ok, da dang ki thanh cong!!!");
        this.mess = data;
        

  }
  );

}
}
