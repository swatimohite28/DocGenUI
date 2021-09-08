import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../service/authentication.service";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMsg: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
    // redirect to login page   
   // this.router.navigate(['/login']);

    // //// redirect to home if already logged in   
    // this.router.navigate(['/home']); 
  }

  ngOnInit() {
    //get page when loggedin
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngDoCheck() {
    //set error massage empty when username or password is null
    if (this.userName == "" || this.password == "")
    this.errorMsg = "";
  }

  //submit redirect to document manager page if username == password
  onSubmit() {
    if (this.authenticationService.login(this.userName, this.password)) {
      this.errorMsg = "";
      this.router.navigate([this.returnUrl]);
    }
    else {
      this.errorMsg = "Invalid UserName or Password";
      console.log("login failed", this.userName, this.password)
    }
  }

  //remove error massage on textbox keypress event
  removeError() {
    this.errorMsg = "";
  }

}
