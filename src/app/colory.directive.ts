import {Directive, HostBinding, HostListener} from '@angular/core';


@Directive({
  selector: '[appColory]',
  exportAs: 'setcolory'
})
export class ColoryDirective {
  setColor() {
    this.myColor = '#' + Math.floor(Math.random() * 16777456).toString(16);
  }

  @HostBinding('style.color') myColor: string;

  @HostListener('click', ['$event']) changeColor(event) {
    this.setColor();
  }

  constructor() {
    this.myColor = 'red';
    setTimeout(() => {
      this.myColor = 'green';
    }, 2000);
  }
}
