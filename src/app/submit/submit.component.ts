import { HostListener, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  
  
  showpost(){    
    document.getElementById("post-field").style.display = "block";    
    document.getElementById("project-field").style.display = "none";
    document.getElementById("media-field").style.display = "none";  
  }

  showproject(){
    document.getElementById("project-field").style.display = "block";
    document.getElementById("post-field").style.display = "none";
    document.getElementById("media-field").style.display = "none";
  }

  showmedia(){
    document.getElementById("media-field").style.display = "block";
    document.getElementById("post-field").style.display = "none";
    document.getElementById("project-field").style.display = "none";  
  }

  addlink(){
    document.getElementById("additional").style.display ="block";
    document.getElementById("addition").style.display ="none";
  }
  constructor() { }

  ngOnInit(): void {

    $('#the-title').keyup(function (){
      var characterCount =
    $(this).val().length,
      current = $('#current'),
      maximum = $('#maximum'),
      theCount = $('#the-count');

    current.text(characterCount);

    });

        
  }

  

}
