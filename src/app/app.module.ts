import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ClientsComponent } from './clients/clients.component';
import { PubComponent } from './pub/pub.component';
import { PTVComponent } from './ptv/ptv.component';
import { PRADIOComponent } from './pradio/pradio.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AddTextsComponent } from './ContenuText/add-texts/add-texts.component';
import { TextDetailsComponent } from './ContenuText/text-details/text-details.component';
import { TextsListComponent } from './ContenuText/texts-list/texts-list.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ClientPageComponent } from './ClientPage/client-page/client-page.component';
import { LayoutComponent } from './layout/layout.component';




@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    SignupComponent,

   
    HomepageComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ClientsComponent,
    PubComponent,
    PTVComponent,
    PRADIOComponent,

    AddTextsComponent,
    TextDetailsComponent,
    TextsListComponent,

    ProfileComponent,
     DashboardComponent,
     ClientPageComponent,
     LayoutComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    HttpClientModule,
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
