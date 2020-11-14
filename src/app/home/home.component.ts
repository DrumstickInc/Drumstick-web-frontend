import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Post } from '../post';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts:Post[] = [
    { id:1, user_id: 1, community_id: 1, tag_id:1, live_link:'https://www.google.co.ke', repo_link:'https://www.github.com',post_heading:'Stack Overflow',description:'Made a web application to help developers share their blockers, and fellow developers are able to assist with the blocker in real time.', deadline:'25/September/2020', creation: '23/Sept/2020', is_open_source:true ,is_paid:true, needs_contrib: true }
  ]

  
  expandpost(complete:boolean) {
      var big = document.getElementById("fullpost");
      var small = document.getElementById("shortpost");
      if (big.style.display === "none") {
          big.style.display = "block";           
          small.style.display = "none";           
      } else {
          big.style.display = "none";           
      }
  }
  minimisepost(complete:boolean) {
    var big = document.getElementById("fullpost");
    var small = document.getElementById("shortpost");
    if (big.style.display === "block") {
        big.style.display = "none";           
        small.style.display = "block";           
    } else {
        big.style.display = "block";           
    }
  }
  
  openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  constructor() { }
  
  slide1Config = {"slidesToShow": 7, "slidesToScroll": 1, "autoplay":true, "autoplaySpeed":5550}; 
  slide2Config = {"slidesToShow": 6, "slidesToScroll": 1, "autoplay":true, "autoplaySpeed":5030}; 

  ngOnInit() {           
    $(document).ready(function(){
      $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    });
  }

}
