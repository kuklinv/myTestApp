import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDelay]'
})


export class DelayDirective implements OnInit {

  @Input() appDelay: number;
  constructor(private tamplate: TemplateRef<any>, private view: ViewContainerRef) {

  }

  ngOnInit(): void {
    setTimeout(()=> {
      this.view.createEmbeddedView(this.tamplate);
    }, this.appDelay);
  }
}
