import { Component } from '@angular/core';
import { AuthenticationService } from "./service/authentication.service";
import { Router, ActivatedRoute } from '@angular/router';
import { User } from "./model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotation-app-master';
  currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
   // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   //redirect login page when application load
   //this.router.navigate(['/login']);
}

logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
