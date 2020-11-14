import { HostListener, Directive } from '@angular/core';

@Directive({
  selector: '[appSubmit]'
})
export class SubmitDirective {

  constructor() { }
  
  //Dragover listener
  /*@HostListener('dragover', ['$event']) .onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
  
    console.log('Drag over');
  }*/

}
