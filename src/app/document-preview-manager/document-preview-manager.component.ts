import { Component, Input, OnInit } from '@angular/core';
import { Section } from "../model/section";
import { SectionTable } from '../model/sectionTable';

@Component({
  selector: 'app-document-preview-manager',
  templateUrl: './document-preview-manager.component.html',
  styleUrls: ['./document-preview-manager.component.css']
})
export class DocumentPreviewManagerComponent implements OnInit {

  @Input() sectionArr: Section[];
  @Input() tableArr: Section[];
  @Input() tableData : SectionTable;
  @Input() headerSection : Section;
  @Input() footerSection : Section;

  constructor() { }

  ngOnInit(): void {
    console.log("section array",this.sectionArr);
  }

}

   