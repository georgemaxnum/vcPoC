import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { OrgInfoComponent } from './org-info/org-info.component';
import { ConnInvitationComponent } from './conn-invitation/conn-invitation.component';
import { ConnClientComponent } from './conn-client/conn-client.component';
import { ConnSearchComponent } from './conn-search/conn-search.component';
import { CredIssanceComponent } from './cred-issance/cred-issance.component';
import { CredTemplateComponent } from './cred-template/cred-template.component';
import { CredSearchComponent } from './cred-search/cred-search.component';
import { VeriVerifyComponent } from './veri-verify/veri-verify.component';
import { VeriTemplateComponent } from './veri-template/veri-template.component';
import { VeriRecordComponent } from './veri-record/veri-record.component';
import { VeriSearchComponent } from './veri-search/veri-search.component';
import { AccSettingComponent } from './acc-setting/acc-setting.component';

const appRoutes: Routes = [
  {
    path: 'dashboard', component: HeaderComponent, 
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'acc-setting', component: AccSettingComponent },
      { path: 'org-info', component: OrgInfoComponent },
      { path: 'conn-client', component: ConnClientComponent },
      { path: 'conn-invitation', component: ConnInvitationComponent },
      { path: 'conn-search', component: ConnSearchComponent },
      { path: 'cred-issance', component: CredIssanceComponent },
      { path: 'cred-template', component: CredTemplateComponent },
      { path: 'cred-search', component: CredSearchComponent },
      { path: 'veri-record', component: VeriRecordComponent },
      { path: 'veri-template', component: VeriTemplateComponent },
      { path: 'veri-verify', component: VeriVerifyComponent },
      { path: 'veri-search', component: VeriSearchComponent }
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    OrgInfoComponent,
    ConnInvitationComponent,
    ConnClientComponent,
    ConnSearchComponent,
    CredIssanceComponent,
    CredTemplateComponent,
    CredSearchComponent,
    VeriVerifyComponent,
    VeriTemplateComponent,
    VeriRecordComponent,
    VeriSearchComponent,
    AccSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
