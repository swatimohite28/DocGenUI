import { Component, Input, OnInit } from '@angular/core';
import { Section } from 'src/app/model/section';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Input() sectionItem:Section;
@Input() sectionArr:Section[];

  constructor() { }

  ngOnInit(): void {
  }

}
