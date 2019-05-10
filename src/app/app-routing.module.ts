import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListbrokerComponent } from './components/user/listbroker/listbroker.component';
import { AddlistbrokerComponent } from './components/user/addlistbroker/addlistbroker.component';
import { DetaillistbrokerComponent } from './components/user/detaillistbroker/detaillistbroker.component';
import { EditlistbrokerComponent } from './components/user/editlistbroker/editlistbroker.component';
import { ChangepassuserComponent } from './components/user/changepassuser/changepassuser.component';
import { ListcustomerComponent } from './components/user/listcustomer/listcustomer.component';
import { AddlistcustomerComponent } from './components/user/addlistcustomer/addlistcustomer.component';
import { EditlistcustomerComponent } from './components/user/editlistcustomer/editlistcustomer.component';
import { DetaillistcustomerComponent } from './components/user/detaillistcustomer/detaillistcustomer.component';
import { ListpostsComponent } from './components/user/listposts/listposts.component';
import { DetaillistpostsComponent } from './components/user/detaillistposts/detaillistposts.component';

import { DetailpersonalComponent } from './components/broker/detailpersonal/detailpersonal.component';
import { ChangepasspersonalComponent } from './components/broker/changepasspersonal/changepasspersonal.component';
import { EditpersonalComponent } from './components/broker/editpersonal/editpersonal.component';
import { ListpostsbrokerComponent } from './components/broker/listpostsbroker/listpostsbroker.component';
import { DetaillistpostsbrokerComponent } from './components/broker/detaillistpostsbroker/detaillistpostsbroker.component';
import { AddlistpostsbrokerComponent } from './components/broker/addlistpostsbroker/addlistpostsbroker.component';
import { EditlistpostsbrokerComponent }from './components/broker/editlistpostsbroker/editlistpostsbroker.component';
import { ListcustomerbrokerComponent } from './components/broker/listcustomerbroker/listcustomerbroker.component';
import { ListsearchcustomerbrokerComponent } from './components/broker/listsearchcustomerbroker/listsearchcustomerbroker.component';
import { PublicComponent } from './components/public/public.component';
import { PublicDetailComponent } from './components/public-detail/public-detail.component';

import { IndexadminComponent } from './components/indexadmin/indexadmin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutuserComponent } from './components/user/layoutuser/layoutuser.component';
import { LayoutbrokerComponent } from './components/broker/layoutbroker/layoutbroker.component';
import { LeftbaruserComponent } from './components/user/leftbaruser/leftbaruser.component';
import { LeftbarbrokerComponent } from './components/broker/leftbarbroker/leftbarbroker.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutPublicSearchComponent } from './components/layout-public-search/layout-public-search.component';
import { PublicSearchComponent } from './components/public-search/public-search.component';
import { SearchlistbrokerComponent } from './components/user/searchlistbroker/searchlistbroker.component';
import { AssignPostComponent } from './components/user/assign-post/assign-post.component';
import { ListPostAssignNotPostComponent } from './components/broker/list-post-assign-not-post/list-post-assign-not-post.component';
import { ListPostAssignPostedComponent } from './components/broker/list-post-assign-posted/list-post-assign-posted.component';
import { HandlePostToApprovedComponent } from './components/user/handle-post-to-approved/handle-post-to-approved.component';
import { AddPostFinalByAdminComponent } from './components/user/add-post-final-by-admin/add-post-final-by-admin.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  SearchlistcustomerComponent } from './components/user/searchlistcustomer/searchlistcustomer.component';
import { AddPostFinalByAdminOldCustomerComponent } from './components/user/add-post-final-by-admin-old-customer/add-post-final-by-admin-old-customer.component';
import { DetailListCustomerSearchComponent } from './components/user/detail-list-customer-search/detail-list-customer-search.component';
import { ListOwnerComponent } from './components/user/list-owner/list-owner.component';
import { SearchlistownerComponent } from './components/user/searchlistowner/searchlistowner.component';
import { AssignOwnerWithBrokerComponent } from './components/user/assign-owner-with-broker/assign-owner-with-broker.component';
import { ListOwnerBrokerComponent } from './components/broker/list-owner-broker/list-owner-broker.component';
import { DetailListOwnerComponent } from './components/broker/detail-list-owner/detail-list-owner.component';

import { Broker } from '././shared/models/broker';
//@angular/material/tabs
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetaillistcustomerbrokerComponent } from './components/broker/detaillistcustomerbroker/detaillistcustomerbroker.component';
const routes: Routes = [





  //{ path: '', redirectTo: '/indexadmin', pathMatch: 'full' },

  //{ path: '**', component: NotfounduserComponent },
  {
    path: 'broker',
    component: LayoutbrokerComponent,
    children: [
      { path: 'detailpersonal', component: DetailpersonalComponent },
      { path: 'changepasspersonal', component: ChangepasspersonalComponent },
      { path: 'editpersonal', component: EditpersonalComponent },
      { path: 'listpostsbroker', component: ListpostsbrokerComponent },
      { path: 'detaillistpostsbroker/:id', component: DetaillistpostsbrokerComponent },
      { path: 'addlistpostsbroker', component: AddlistpostsbrokerComponent },
      { path: 'editlistpostsbroker/:id', component: EditlistpostsbrokerComponent },
      { path: 'listcustomerbroker', component: ListcustomerbrokerComponent },
      { path: 'listsearchcustomerbroker', component: ListsearchcustomerbrokerComponent },
      { path: 'indexbroker', component: IndexadminComponent },
      { path: '', redirectTo: 'indexbroker', pathMatch: 'full' },
      { path: 'listpostsassignnotpost', component: ListPostAssignNotPostComponent },
      { path: 'listpostsassignposted', component: ListPostAssignPostedComponent },
      { path: 'listownersbroker', component: ListOwnerBrokerComponent },
      { path: 'detaillistowner/:id', component: DetailListOwnerComponent },
      { path: 'detaillistcustomersbroker/:id', component: DetaillistcustomerbrokerComponent}
    ]
  },

  {
    path: 'publicSearch',
    component: LayoutPublicSearchComponent,
    children: [
      
      { path: 'publicSearchComponent', component: PublicSearchComponent },
      { path: '', redirectTo: 'publicSearch', pathMatch: 'full' },
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'public', component: PublicComponent },
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: 'detailProduct/:id', component: PublicDetailComponent},

  {
    path: 'admin',
    component: LayoutuserComponent,
    children: [
      { path: 'listbroker', component: ListbrokerComponent },
      { path: 'addlistbroker', component: AddlistbrokerComponent },
      { path: 'detaillistbroker/:id', component: DetaillistbrokerComponent },
      { path: 'changepassuser', component: ChangepassuserComponent },
      { path: 'editlistbroker/:id', component: EditlistbrokerComponent },
      { path: 'listcustomer', component: ListcustomerComponent },
      { path: 'addlistcustomer', component: AddlistcustomerComponent },
      { path: 'editlistcustomer/:id', component: EditlistcustomerComponent },
      { path: 'detaillistcustomer/:id', component: DetaillistcustomerComponent },
      { path: 'listposts', component: ListpostsComponent },
      { path: 'detaillistposts/:id', component: DetaillistpostsComponent },
      { path: 'handlePostToApproved/:id', component: HandlePostToApprovedComponent },
      { path: 'indexadmin', component: IndexadminComponent },
      { path: '', redirectTo: 'indexadmin', pathMatch: 'full' },
      { path: 'assignpost', component: AssignPostComponent },
      { path: 'addpostfinalbyadmin', component: AddPostFinalByAdminComponent },
      { path: 'addpostfinalbyadminoldcustomer/:id', component: AddPostFinalByAdminOldCustomerComponent },
      { path: 'detaillistcustomersearch/:id', component: DetailListCustomerSearchComponent },
      { path: 'listOwners', component: ListOwnerComponent },
      { path: 'assignOwnerWithBroker/:id', component: AssignOwnerWithBrokerComponent }
    ]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    CommonModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],

  declarations: [
    ListbrokerComponent,
    AddlistbrokerComponent,
    DetaillistbrokerComponent,
    EditlistbrokerComponent,
    ChangepassuserComponent,
    ListcustomerComponent,
    AddlistcustomerComponent,
    EditlistcustomerComponent,
    DetaillistcustomerComponent,
    ListpostsComponent,
    DetaillistpostsComponent,
    DetailpersonalComponent,
    ChangepasspersonalComponent,
    EditpersonalComponent,
    ListpostsbrokerComponent,
    DetaillistpostsbrokerComponent,
    AddlistpostsbrokerComponent,
    EditlistpostsbrokerComponent,
    ListcustomerbrokerComponent,
    ListsearchcustomerbrokerComponent,
    IndexadminComponent,
    HeaderComponent,
    FooterComponent,
    LayoutuserComponent,
    LayoutbrokerComponent,
    LeftbaruserComponent,
    LeftbarbrokerComponent,
    LoginComponent,
    RegisterComponent,
    LayoutPublicSearchComponent,
    PublicSearchComponent,
    SearchlistbrokerComponent,
    AssignPostComponent,
    ListPostAssignNotPostComponent,
    ListPostAssignPostedComponent,
    HandlePostToApprovedComponent,
    AddPostFinalByAdminComponent,
    ForgetPasswordComponent,
    SearchlistcustomerComponent,
    AddPostFinalByAdminOldCustomerComponent,
    DetailListCustomerSearchComponent,
    ListOwnerComponent,
    SearchlistownerComponent,
    AssignOwnerWithBrokerComponent,
    ListOwnerBrokerComponent,
    DetailListOwnerComponent,
    DetaillistcustomerbrokerComponent


  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
