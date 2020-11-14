import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  openNav() {
    document.getElementById("mySidepanel").style.width = "200px";
  }

  closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "autoplay":true, "autoplaySpeed":5550}; 

  ngOnInit(){
    $(document).ready(function(){
      $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    });

    $(document).ready(function(){
      $(".mowiki-icon").click(function(){
        $(".mowiki-menu").animate({
            width:"toggle"
        });
      });
    });

    $(document).ready(function(){
      $(".fa-times").click(function(){
        $(".mowiki-menu").animate({
            width:"toggle"
        });
      });
    });
  }

}
