import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1, "autoplay":true, "autoplaySpeed":5550}; 

  ngOnInit(){
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
