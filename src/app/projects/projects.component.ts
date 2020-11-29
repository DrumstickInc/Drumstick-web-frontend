import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

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
