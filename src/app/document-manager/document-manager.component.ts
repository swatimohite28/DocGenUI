import { Component, OnInit } from '@angular/core';
import { GlobalDocumentService } from "../service/global-document.service";
import { GlobalDocument } from "../model/globalDocument";
import { Section } from "../model/section";
import { DocumentGenService } from "../service/document-gen.service";
import { SectionTable } from '../model/sectionTable';

@Component({
  selector: 'app-document-manager',
  templateUrl: './document-manager.component.html',
  styleUrls: ['./document-manager.component.css']
})
export class DocumentManagerComponent implements OnInit {

  sectionArr: Section[];
  globalDoc: GlobalDocument;
  globalDocumentName: string="";
  tableArr: Section;
  tableData : SectionTable; 
  headerSection: Section;
  footerSection: Section;



  constructor(private globalDocumentService: GlobalDocumentService, private documentGenService: DocumentGenService ) { }

  ngOnInit(): void {
    this.getDecumentSection();
    //console.log(globalStyles);
  }


  //get document secions from json
  getDecumentSection()  {

     this.globalDocumentService.getJSON().subscribe(data => {
          if(data != null)
          {
            console.log("global doc", data);
            this.globalDoc = data;
            this.globalDocumentName = this.globalDoc.globalDocumentName;
            this.tableArr = this.globalDoc.templates[0].sections.filter(i => i.sectionType == 'table')[0];
            this.headerSection = this.globalDoc.templates[0].sections.filter(i => i.sectionType == 'Header')[0];
            this.footerSection = this.globalDoc.templates[0].sections.filter(i => i.sectionType == 'Footer')[0];
            if(this.tableArr != null)
            {
              this.tableData = this.tableArr.tableInfo;
            }
            console.log("table", this.tableArr);
            this.sectionArr = this.globalDoc.templates[0].sections;
            console.log("headerSection from Doc manager", this.headerSection);
          }
     })
  }

  // export html to word
  exportWord()
 {
  const app = document.getElementById("divExport"); // get priview div
  //call service to generate word file
  this.documentGenService.createWordDocument(app?.innerHTML? app?.innerHTML : "", this.globalDoc.globalDocumentName);  
 }  

 saveAsHtml()
 {
  const app = document.getElementById("divExport"); // get priview div
  //call service to generate word file
  this.documentGenService.createHtmlDocument(app?.innerHTML? app?.innerHTML : "", this.globalDoc.globalDocumentName);  
 }
}