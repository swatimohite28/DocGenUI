import { Component, Input, OnInit } from '@angular/core';
import { Section } from "../model/section";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() footerSection : Section;

  constructor() { }

  ngOnInit(): void {
  }

}