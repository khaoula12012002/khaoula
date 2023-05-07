import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PRADIOComponent } from './pradio/pradio.component';
import { PTVComponent } from './ptv/ptv.component';
import { PubComponent } from './pub/pub.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { TextsListComponent } from './ContenuText/texts-list/texts-list.component';
import { TextDetailsComponent } from './ContenuText/text-details/text-details.component';
import { AddTextsComponent } from './ContenuText/add-texts/add-texts.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ClientPageComponent } from './ClientPage/client-page/client-page.component';
import { LayoutComponent } from './layout/layout.component';


//import { GuardadminGuard } from './views/guards/guardadmin.guard';


const routes: Routes = [
  {
    path: '',component: LayoutComponent ,children: [

      { path :'',redirectTo:'/home',pathMatch:'full'},
      { path:'home',component:HomepageComponent},
      { path:'clients',component:ClientsComponent},
      {path:'about',component:AboutComponent},
      {path:'services',component:ServicesComponent},
      {path:'contact',component:ContactComponent},
      
      {path :'pub',component:PubComponent},
      {path : 'ptv', component:PTVComponent},
      {path : 'pradio',component:PRADIOComponent},
      
      {path :'login', component:LoginComponent},
       {path :'signup',component:SignupComponent},
    ]
  },
  
  

  { path: 'profile', component: ProfileComponent },

  {path:'contenutextuel',component:TextsListComponent},
  {path:'contenutextuel/:id', component:TextDetailsComponent},
  {path:'ajoutTexts',component:AddTextsComponent},

  {path:'dash',component:DashboardComponent},
  {path:'clientPage',component:ClientPageComponent},
  
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
