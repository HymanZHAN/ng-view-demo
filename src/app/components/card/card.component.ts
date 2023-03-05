import { NgIf } from "@angular/common";
import { Component, ContentChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [NgIf],
  template: `
    <section class="card-body">
      <h2 class="card-title">
        <ng-content select="[title]"></ng-content>
      </h2>
      <span>
        <ng-content select="[body]"></ng-content>
      </span>
    </section>
  `,
  styles: [
    `
      :host {
        @apply card  w-1/2 shadow m-4 align-bottom;
      }
    `,
  ],
})
export class CardComponent {}
