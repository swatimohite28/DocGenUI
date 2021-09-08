import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {  DocumentManagerComponent } from './document-manager/document-manager.component';
import {  DocumentPreviewManagerComponent } from './document-preview-manager/document-preview-manager.component';
import { DocumentEditorComponent } from './document-editor/document-editor.component';
import { TitleComponent } from "./document-preview-manager/section/title/title.component";
import { SubTitleComponent } from "./document-preview-manager/section/sub-title/sub-title.component";
import { ParagraphComponent } from "./document-preview-manager/section/paragraph/paragraph.component";
import { ListComponent } from "./document-preview-manager/section/list/list.component";
import { ImageComponent } from "./document-preview-manager/section/image/image.component";
import { TableComponent } from "./document-preview-manager/section/table/table.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./authentication/login/login.component";
import { TableHeadingComponent } from './document-preview-manager/section/table-heading/table-heading.component';


@NgModule({
  declarations: [
    AppComponent,  
    SignInComponent,
    HeaderComponent,
    DocumentManagerComponent,
    DocumentPreviewManagerComponent,
    DocumentEditorComponent,
    TitleComponent,
    LoginComponent,
    SubTitleComponent,
    ParagraphComponent,
    ListComponent,
    ImageComponent,
    TableComponent,
    FooterComponent,
    TableHeadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   
   FormsModule,
   NgbModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
