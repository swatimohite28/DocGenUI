import { Component, Input, OnInit } from '@angular/core';
import { Section } from 'src/app/model/section';
import { SectionTable } from 'src/app/model/sectionTable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input() sectionArr:Section[];
@Input() tableData: SectionTable;
@Input() tableHeader: SectionTable;
  constructor() { }

  ngOnInit(): void {
  }

}
