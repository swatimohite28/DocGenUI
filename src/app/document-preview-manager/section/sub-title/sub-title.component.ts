import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/model/section';

@Component({
  selector: 'app-sub-title',
  templateUrl: './sub-title.component.html',
  styleUrls: ['./sub-title.component.css']
})
export class SubTitleComponent implements OnInit {
  @Input() sectionItem: Section;
  @Input() sectionArr:Section[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
