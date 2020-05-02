import { Directive, AfterViewInit, Renderer, ElementRef } from "@angular/core";

@Directive({
  selector: "[ad-focus]",
})
export class AttributeDirective implements AfterViewInit {
  constructor(private elr: ElementRef, private renderer: Renderer) {}

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.elr.nativeElement, "focus");

    // with this Rederer, I can change color (and many other things), for example
    // this.renderer.setElementStyle(this.elr.nativeElement, "color", "pink");
  }
}
