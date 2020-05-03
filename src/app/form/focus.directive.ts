import { Directive, AfterViewInit, Renderer, ElementRef } from "@angular/core";

// That is an attribute directive for putting focus in an
// HTML element.
@Directive({
  selector: "[cdFocus]",
})
export class FocusDirective implements AfterViewInit {
  constructor(private elr: ElementRef, private renderer: Renderer) {}

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.elr.nativeElement, "focus");

    // with this Rederer, I can change color (and many other things), for example
    // this.renderer.setElementStyle(this.elr.nativeElement, "color", "pink");
  }
}
