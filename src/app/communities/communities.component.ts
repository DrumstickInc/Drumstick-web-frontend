import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss']
})
export class CommunitiesComponent implements OnInit {

  openNav() {
    document.getElementById("mySidepanel").style.width = "200px";
  }

  closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  
  constructor() { }

  slide1Config = {"slidesToShow": 7, "slidesToScroll": 1, "autoplay":true, "autoplaySpeed":5550}; 
  ngOnInit(): void {
  }

}
