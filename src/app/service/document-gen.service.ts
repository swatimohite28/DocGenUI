import { Injectable } from '@angular/core';
import globalStyles from "../../assets/styles/globalStyles.css";
import listCss from "../document-preview-manager/section/list/list.component.css"
import titleCss from "../document-preview-manager/section/title/title.component.css"
import subTitleCss from "../document-preview-manager/section/sub-title/sub-title.component.css"
import tableCss from "../document-preview-manager/section/table/table.component.css"
import paragraphCss from "../document-preview-manager/section/paragraph/paragraph.component.css"
import tableHeadingCss from "../document-preview-manager/section/table-heading/table-heading.component.css";

@Injectable({
  providedIn: 'root'
})
export class DocumentGenService {

    //created css to add into document
    css: any= (    
      '<style>' +
      globalStyles + listCss + titleCss + subTitleCss + tableCss + paragraphCss+ tableHeadingCss+
      '</style>'
    );
  
  constructor() { }

 createWordDocument(htmlContent: string, globalDocumentName: string)
 {
  var htmlText= '<!DOCTYPE html>  <html>'+this.css +'<body>'+  htmlContent +'</body> </html>' //create html

  const blob = new Blob(['\ufeff', htmlText], { type: 'application/msword' });
  var url = URL.createObjectURL(blob);
  var link = document.createElement('A');
  link.setAttribute("href", url);
  // Set default file name. 
  // Word will append file extension - do not add an extension here.
  link.setAttribute("download", globalDocumentName);  
  document.body.appendChild(link); 

  var docName = globalDocumentName+'.doc';
  console.log("doc name --- ",docName);
  
  if (navigator.msSaveOrOpenBlob ) navigator.msSaveOrOpenBlob( blob, docName); // IE10-11
      else link.click();  // other browsers
  document.body.removeChild(link);

 }

 createHtmlDocument(htmlContent: string, globalDocumentName: string)
 {
  var htmlText= '<!DOCTYPE html>  <html>'+this.css +'<body>'+  htmlContent +'</body> </html>' //create html

  const blob = new Blob([htmlText], { type: "text/html" });
  var url = URL.createObjectURL(blob);
  var link = document.createElement('A');
  link.setAttribute("href", url);

  var random = Math.random().toString();
  // Set default file name. 
  // Word will append file extension - do not add an extension here.
  link.setAttribute("download", "doc_"+random.substr(2,random.length));  
  document.body.appendChild(link); 

  var docName = globalDocumentName+'_'+Math.random().toString()+'.html';
  console.log("doc name --- ",docName);
  
  if (navigator.msSaveOrOpenBlob ) navigator.msSaveOrOpenBlob( blob, docName); // IE10-11
      else link.click();  // other browsers
  document.body.removeChild(link);


 }
}
