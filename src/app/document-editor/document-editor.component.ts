import { Component, Input, OnInit } from '@angular/core';
import { Section } from "../model/section";
import { GlobalDocument } from "../model/globalDocument";
import { SectionTable } from '../model/sectionTable';


@Component({
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.css']
})
export class DocumentEditorComponent implements OnInit {

  @Input() sectionArr:Section[] ;
  @Input()  globalDocumentName: string; 
  @Input() globalDoc: GlobalDocument;
  @Input() tableData : SectionTable;
  @Input() headerSection : Section;
  @Input() tableArr : Section;

  constructor() { }

  ngOnInit(): void {
  }
}
