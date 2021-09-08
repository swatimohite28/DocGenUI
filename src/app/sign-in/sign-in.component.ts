import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../service/authentication.service";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
userName: string;
password: string;
//loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

constructor(
  //private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private authenticationService: AuthenticationService,
) {
  // redirect to home if already logged in
  //if (this.authenticationService.currentUserValue) 
  this.router.navigate(['/login']);
    //  this.router.navigate(['/']);
  
}

ngOnInit() {
  // this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required]
  // });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}
  
  onSubmit()
  {
    if (this.authenticationService.login(this.userName, this.password))
    {
      this.router.navigate([this.returnUrl]);
    }
    else{
      console.log("login failed", this.userName, this.password)
    }  
}

    // convenience getter for easy access to form fields
   // get f() { return this.loginForm.controls; }


}
