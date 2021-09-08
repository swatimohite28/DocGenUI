import { Component, Input, OnInit } from '@angular/core';
import { Section } from 'src/app/model/section';

@Component({
  selector: 'app-table-heading',
  templateUrl: './table-heading.component.html',
  styleUrls: ['./table-heading.component.css']
})
export class TableHeadingComponent implements OnInit {
  @Input() sectionArr:Section[];

  constructor() { }

  ngOnInit(): void {
  }

}
