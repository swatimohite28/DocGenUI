import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./helper/authGuard";
import { LoginComponent } from './authentication/login/login.component';
import { DocumentManagerComponent } from './document-manager/document-manager.component';


const routes: Routes = [
  { path: '', component: DocumentManagerComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  
 }
