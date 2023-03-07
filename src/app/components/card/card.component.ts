import { NgClass, NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [NgIf, NgClass],
  template: `
    <div
      class="card w-full shadow-xl m-4 cursor-pointer"
      [ngClass]="{ 'border-2 border-primary': selected }"
    >
      <section class="card-body">
        <h2 class="card-title">
          <ng-content select="[title]"></ng-content>
          <ng-container *ngIf="index > 0"> - {{ index }} </ng-container>
        </h2>
        <span>
          <ng-content select="[body]"></ng-content>
        </span>
      </section>
    </div>
  `,
  styles: [
    `
      :host {
        @apply w-1/2 align-bottom;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() index = 0;
  @Input() selected = false;
}
