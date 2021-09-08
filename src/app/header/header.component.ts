import { Component, OnInit,Input } from '@angular/core';
import { Section } from "../model/section";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() headerSection : Section; 

  constructor() { }
  ngOnInit(): void {
    
  //   console.log("headerSection from header", this.headerSection.sectionContent);
  //   var ele = document.getElementsByTagName('img')
  //  console.log("image src",ele[0].src);
  }

}
