import { Component, OnInit } from '@angular/core';
import { ChangePassword } from '../../../shared/models/changepassword.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-changepasspersonal',
  templateUrl: './changepasspersonal.component.html',
  styleUrls: ['./changepasspersonal.component.scss']
})
export class ChangepasspersonalComponent implements OnInit {
   
   errorMessage = '';
   isLoginFailed = false;
   mess: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  changePassword(passwordCurrent: string, newPassword: string, newMatchingPassword: string) {

  	const changePassword: ChangePassword = new ChangePassword();
    changePassword.passwordCurrent = passwordCurrent;
    changePassword.newPassword = newPassword;
    changePassword.newMatchingPassword = newMatchingPassword;
    //alert(newMatchingPassword);
    
    // this.http.post('https://tiger010203.herokuapp.com/signup', signUp)
    this.http.post('https://tiger010203.herokuapp.com/a/broker/change-password-profile', changePassword, { responseType: 'text' })
    .subscribe(

       data => {

         this.isLoginFailed = false;
        //alert("Ok, da dang ki thanh cong!!!");
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
