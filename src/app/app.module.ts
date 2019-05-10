import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrokerService } from './core/services/broker.service'
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { from } from 'rxjs';


import { HttpClientModule } from '@angular/common/http';
import { PublicComponent } from './components/public/public.component';
// import { PublicSearchComponent } from './components/public-search/public-search.component';
import { PublicDetailComponent } from './components/public-detail/public-detail.component';
import { ListPostAssignPostedComponent } from './components/broker/list-post-assign-posted/list-post-assign-posted.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { SearchlistcustomerComponent } from './components/user/searchlistcustomer/searchlistcustomer.component';
import { AddPostFinalByAdminOldCustomerComponent } from './components/user/add-post-final-by-admin-old-customer/add-post-final-by-admin-old-customer.component';
import { DetailListCustomerSearchComponent } from './components/user/detail-list-customer-search/detail-list-customer-search.component';
import { ListOwnerComponent } from './components/user/list-owner/list-owner.component';
import { SearchlistownerComponent } from './components/user/searchlistowner/searchlistowner.component';
import { AssignOwnerWithBrokerComponent } from './components/user/assign-owner-with-broker/assign-owner-with-broker.component';
import { ListOwnerBrokerComponent } from './components/broker/list-owner-broker/list-owner-broker.component';
import { DetailListOwnerComponent } from './components/broker/detail-list-owner/detail-list-owner.component';
import { DetaillistcustomerbrokerComponent } from './components/broker/detaillistcustomerbroker/detaillistcustomerbroker.component';



// import { LayoutPublicSearchComponent } from './components/layout-public-search/layout-public-search.component';


@NgModule({
  declarations: [
    AppComponent,
     PublicComponent,
    // PublicSearchComponent,
    PublicDetailComponent
    //DetaillistcustomerbrokerComponent
    //DetailListOwnerComponent
    //ListOwnerBrokerComponent
   // ListOwnerComponent
    //AssignOwnerWithBrokerComponent
   // SearchlistownerComponent
    //ListOwnerComponent
    //DetailListCustomerSearchComponent
    // LayoutPublicSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
