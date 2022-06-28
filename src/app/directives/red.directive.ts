import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]' /* Pode mudar o nome da diretiva appRed para outro nome */
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b'
   }

}
