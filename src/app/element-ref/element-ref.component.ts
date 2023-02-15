import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-element-ref",
  template: `
    <h3 #el>{{ text }}</h3>

    <mat-divider></mat-divider>

    <h3 appHighlight>{{ text }}</h3>

    <mat-divider></mat-divider>

    <section>
      <div class="example-button-row">
        <button mat-raised-button color="basic" (click)="highlightDirectly()">
          Direct DOM Manipulation
        </button>
        <button mat-raised-button color="basic" (click)="highlightWithRenderer()">Renderer</button>
        <button mat-raised-button color="warn" (click)="reset()">Reset</button>
      </div>
    </section>
  `,
  styles: [
    `
      .example-button-row {
        display: table-cell;
        max-width: 600px;
      }
      .example-button-row .mat-mdc-button-base {
        margin: 8px 8px 8px 0;
      }

      .highlighted {
        background-color: yellow;
      }
    `,
  ],
})
export default class ElementRefComponent {
  @ViewChild("el") el: ElementRef | undefined;

  text = "Highlight this line";
  highlightClass = "highlighted";
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
