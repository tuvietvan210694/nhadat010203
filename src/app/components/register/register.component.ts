import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUp } from '../../shared/models/signup.model';
@Component({

  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   errorMessage = '';
   isLoginFailed = false;
   mess: string;
   constructor( private http: HttpClient){}

  ngOnInit() {
  }
  signup1(a: string) {
    alert(a);

  }

  signup(
    email: string,
    name: string,
    address: string,
    date: string,
    phonenumber: string,
    sex: string,
    password: string,
    confirmpassword: string
  	) {
    const signUp: SignUp = new SignUp();
    signUp.email = email;
    signUp.name = name;
    signUp.address = address;
    signUp.dateOfBirth = date;
    signUp.phoneNumber = phonenumber;
    signUp.gender = JSON.parse(sex);

    
    signUp.password = password;
    //alert(password);
    signUp.passwordConfirm = confirmpassword;
   
    console.log(signUp);
    // this.http.post('https://tiger010203.herokuapp.com/signup', signUp)
    this.http.post('https://tiger010203.herokuapp.com/signup', signUp, { responseType: 'text' })
    .subscribe(

       data => {

         this.isLoginFailed = true;
        //alert("Ok, da dang ki thanh cong!!!");
        this.mess = data;
        
      } 
      // ,
      // error => {
      //   this.isLoginFailed = true;
      //   // this.mess = error;
      //   // console.log(this.mess);
      //    this.errorMessage = error.error.message;
      //   // this.errorMessage = this.mess;
      //   // console.log("error roi");
      //   // console.log(this.errorMessage);
        
      // }
    );

    //alert("Ban da signup thanh cong" );
    //this.location.back();
    
  }

}
