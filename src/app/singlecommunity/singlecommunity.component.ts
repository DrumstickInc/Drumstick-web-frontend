import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singlecommunity',
  templateUrl: './singlecommunity.component.html',
  styleUrls: ['./singlecommunity.component.scss']
})
export class SinglecommunityComponent implements OnInit {

  openNav() {
    document.getElementById("mySidepanel").style.width = "200px";
  }

  closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
