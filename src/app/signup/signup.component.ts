import { Component , OnInit} from '@angular/core';
import { AuthService } from '../servicesTs/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignupInfo } from '../signup-info';
import { first } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
    form: any = {};
    
    signupInfo!: SignupInfo;
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
  
    
    constructor(private authService: AuthService , private router: Router) { }
  
    ngOnInit(): void {
    }
  
    onSubmit(): void {
      //const { username, email, password ,role} = this.form;
     // this.signupInfo= new SignupInfo(this.form.username, this.form.email , this.form.password , this.form.role);
     this.signupInfo= new SignupInfo(this.form.username, this.form.email , this.form.password);
     this.authService.register(this.signupInfo).pipe(first()).subscribe(
         data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['login']);
        },
        error => {
          this.errorMessage = error.error.message;
          
          this.isSignUpFailed = true;
        }
      )
    }
  }
  

