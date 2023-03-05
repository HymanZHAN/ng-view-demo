import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
  standalone: true,
})
export class HighlightDirective implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.renderer.setProperty(
      this.el?.nativeElement,
      "innerText",
      "This is highlighted by a directive!"
    );
    this.renderer.addClass(this.el?.nativeElement, "bg-yellow-200");
  }
}
