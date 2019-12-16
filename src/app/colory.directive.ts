import {Directive, HostBinding, HostListener} from '@angular/core';


@Directive({
  selector: '[appColory]'
})
export class ColoryDirective {
  @HostBinding('style.color') myColor: string;

  @HostListener('click', ['$event']) changeColor(event) {
  this.myColor = '#' + Math.floor(Math.random() * 16777456).toString(16);
  };

  constructor() {
    this.myColor = 'red';
    setTimeout(() => {
      this.myColor = 'green';
    }, 2000);
  }
}
