import { Component, Input, OnInit } from '@angular/core';
import { Section } from 'src/app/model/section';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
@Input() sectionItem:Section;
@Input() sectionArr:Section[];

  constructor() { }

  ngOnInit(): void {
  }

}
