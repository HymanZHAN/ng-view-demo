import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-element-ref',
  template: `
    <h3 #el>Turn this line red.</h3>
    <button mat-raised-button color="primary" (click)="patinRed()">
      Turn Red
    </button>
  `,
  styles: [
    `
      .red {
        color: red;
      }
    `,
  ],
})
export default class ElementRefComponent {
  @ViewChild('el') element: ElementRef | undefined;

  patinRed(): void {
    (this.element?.nativeElement as HTMLParagraphElement).innerText =
      'This is red now!';
    (this.element?.nativeElement as HTMLParagraphElement).className = 'red';
  }
}
