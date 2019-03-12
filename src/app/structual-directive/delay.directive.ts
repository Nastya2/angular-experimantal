import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective implements OnInit {

  @Input('delay') delay: number;
  @Input('delayTime') time: number;

  constructor(private templateRef: TemplateRef<HTMLElement>,
              private view: ViewContainerRef) {}

  ngOnInit() {
    console.log(this.delay,this.time);
    this.view.createEmbeddedView(this.templateRef);
  }

}
