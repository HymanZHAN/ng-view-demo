import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HighlightDirective } from "./highlight.directive";

@Component({
  selector: "app-element-ref",
  standalone: true,
  template: `
    <h3 class="text-lg font-medium" #el>{{ text }}</h3>
    <div class="divider">AND</div>
    <h3 class="text-lg font-medium" appHighlight>{{ text }}</h3>
    <div class="divider"></div>
    <section class="space-x-4">
      <button class="btn text-sm" (click)="highlightDirectly()">Direct DOM Manipulation</button>
      <button class="btn text-sm" (click)="highlightWithRenderer()">Renderer</button>
      <button class="btn text-sm" (click)="reset()">Reset</button>
    </section>
  `,
  imports: [HighlightDirective],
})
export default class ElementRefComponent {
  @ViewChild("el") el: ElementRef | undefined;

  text = "Highlight this line";
  highlightClass = "bg-error";
  highlightDirective = "appHighlight";

  constructor(private renderer: Renderer2) {}

  highlightDirectly(): void {
    if (this.el?.nativeElement) {
      (this.el.nativeElement as HTMLHeadingElement).innerText =
        "This is now highlighted via direct DOM manipulation!";
      (this.el.nativeElement as HTMLHeadingElement).classList.add(this.highlightClass);
    }
  }

  highlightWithRenderer() {
    if (this.el?.nativeElement) {
      this.renderer.setProperty(
        this.el.nativeElement,
        "innerText",
        "This is now highlighted via Renderer2!"
      );
      this.renderer.addClass(this.el?.nativeElement, this.highlightClass);
    }
  }

  reset() {
    if (this.el?.nativeElement) {
      (this.el.nativeElement as HTMLHeadingElement).innerHTML = this.text;
      (this.el.nativeElement as HTMLHeadingElement).classList.remove(this.highlightClass);
    }
  }
}
