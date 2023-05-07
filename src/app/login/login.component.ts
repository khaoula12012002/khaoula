import { Component , OnInit} from '@angular/core';
import { AuthService } from '../servicesTs/auth.service';
import { User } from '../user';
import { StorageService } from '../servicesTs/storage.service';
import { TokenStorageService } from '../servicesTs/token-storage.service';
import { Router } from '@angular/router';
import { AuthLoginInfo } from '../login-info';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';


  constructor(private authservice: AuthService ,
     private tokenstorage: TokenStorageService,
     private router: Router){}
  ngOnInit(): void {
   
  
  }
  onSubmit(): void {

    this.authservice.login(new AuthLoginInfo(this.form.username, this.form.password))
    .subscribe(
      data => {
        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        
        this.router.navigateByUrl('/dash')
        
      },
      error=> {
        this.errorMessage = error.error.message;
        this.isLoginFailed = true; 
      }
    )
  }

  reloadPage(): void {
    window.location.reload();
  }
  /*userlogin(){
    const { username, password } = this.form;
    console.log(this.user);
    this.authservice.login(this.form).subscribe(
      data=>{
      alert("BIENVENU")
    }),console.error("désolé user id ou password incorrecte");
  }*/
}
